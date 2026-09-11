<?php
session_open();
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
require __DIR__ . '/rate-limit.php';
$message = '';
$configured = $config['admin_email'] !== '' && $config['admin_password_hash'] !== '';
if (!empty($_SESSION['admin']) && time() - ($_SESSION['admin_last'] ?? 0) > 1800) {
	unset($_SESSION['admin']);
}
if (!empty($_SESSION['admin'])) {
	$_SESSION['admin_last'] = time();
}
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
	if (!csrf_valid()) {
		http_response_code(403);
		$message = 'La sesión ha caducado. Recargue la página.';
	} elseif (($_POST['action'] ?? '') === 'logout') {
		$_SESSION = [];
		session_regenerate_id(true);
		redirect_to('/acceso');
	} elseif (($_POST['action'] ?? '') === 'login') {
		if (!$configured) {
			http_response_code(503);
			$message = 'El acceso de administración está pendiente de configuración.';
		} elseif (!rate_allowed('login', 5, 900)) {
			http_response_code(429);
			$message = 'Demasiados intentos. Espere 15 minutos.';
		} elseif (
			is_string($_POST['email'] ?? null) &&
			is_string($_POST['password'] ?? null) &&
			hash_equals(mb_strtolower($config['admin_email']), mb_strtolower(trim($_POST['email']))) &&
			password_verify($_POST['password'], $config['admin_password_hash'])
		) {
			session_regenerate_id(true);
			$_SESSION['admin'] = true;
			$_SESSION['admin_last'] = time();
			$_SESSION['csrf'] = bin2hex(random_bytes(32));
			redirect_to('/admin-blog');
		} else {
			http_response_code(401);
			$message = 'Email o contraseña incorrectos.';
		}
	} elseif (!empty($_SESSION['admin']) && ($_POST['action'] ?? '') === 'save') {
		try {
			$new = [];
			foreach (['slug', 'title', 'category', 'date', 'readTime', 'excerpt', 'image'] as $key) {
				if (!is_string($_POST[$key] ?? '')) {
					throw new RuntimeException('Datos de formulario no válidos.');
				}
				$new[$key] = trim($_POST[$key] ?? '');
			}
			if (!preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $new['slug']) || strlen($new['slug']) > 150) {
				throw new RuntimeException('Use una URL con letras minúsculas, números y guiones.');
			}
			if (($_POST['original'] ?? '') === '' && is_file(ROOT . '/' . $new['slug'] . '.php')) {
				throw new RuntimeException('Esa URL ya pertenece a una página de la web.');
			}
			if (
				$new['title'] === '' ||
				$new['excerpt'] === '' ||
				mb_strlen($new['title']) > 200 ||
				mb_strlen($new['excerpt']) > 1000
			) {
				throw new RuntimeException('Indique un título y un resumen válidos.');
			}
			if (isset($_FILES['cover']) && $_FILES['cover']['error'] !== UPLOAD_ERR_NO_FILE) {
				$upload = $_FILES['cover'];
				if (
					$upload['error'] !== UPLOAD_ERR_OK ||
					$upload['size'] > 3 * 1024 * 1024 ||
					!is_uploaded_file($upload['tmp_name'])
				) {
					throw new RuntimeException('La imagen debe pesar como máximo 3 MB.');
				}
				$mime = (new finfo(FILEINFO_MIME_TYPE))->file($upload['tmp_name']);
				$ext = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'][$mime] ?? null;
				if (!$ext || !getimagesize($upload['tmp_name'])) {
					throw new RuntimeException('La imagen debe ser un JPG, PNG o WebP válido.');
				}
				$new['image'] = '/assets/img/blog-' . hash_file('sha256', $upload['tmp_name']) . '.' . $ext;
				if (
					!is_file(ROOT . $new['image']) &&
					!move_uploaded_file($upload['tmp_name'], ROOT . $new['image'])
				) {
					throw new RuntimeException(
						'No se pudo guardar la imagen. Revise los permisos del alojamiento.',
					);
				}
			}
			if (
				!preg_match('#^/assets/img/[a-zA-Z0-9._-]+\.(?:jpg|jpeg|png|webp)$#', $new['image']) ||
				!is_file(ROOT . $new['image'])
			) {
				throw new RuntimeException('Seleccione una imagen local válida.');
			}
			$new['published'] = isset($_POST['published']);
			$new['featured'] = isset($_POST['featured']);
			$new['sections'] = [];
			$heads = $_POST['section_h'] ?? [];
			$paragraphs = $_POST['section_p'] ?? [];
			if (!is_array($heads) || !is_array($paragraphs) || count($heads) > 100) {
				throw new RuntimeException('Secciones no válidas.');
			}
			foreach ($heads as $i => $h) {
				if (!is_string($h) || !is_string($paragraphs[$i] ?? '')) {
					throw new RuntimeException('Sección no válida.');
				}
				$p = trim($paragraphs[$i] ?? '');
				if (trim($h) !== '' || $p !== '') {
					$new['sections'][] = ['h' => trim($h), 'p' => $p];
				}
			}
			if (!$new['sections']) {
				throw new RuntimeException('Añada al menos una sección al artículo.');
			}
			$dir = $config['storage_path'];
			if (!is_dir($dir)) {
				mkdir($dir, 0700, true);
			}
			$lock = fopen($dir . '/posts.lock', 'c');
			flock($lock, LOCK_EX);
			try {
				$all = posts(true);
				$version = hash('sha256', json_encode($all));
				if (!is_string($_POST['version'] ?? null) || !hash_equals($version, $_POST['version'])) {
					throw new RuntimeException(
						'El contenido cambió desde que abrió el editor. Recargue antes de guardar para evitar sobrescribir cambios.',
					);
				}
				$original = is_string($_POST['original'] ?? null) ? $_POST['original'] : '';
				$new['modified'] = date('c');
				$found = false;
				foreach ($all as &$old) {
					if ($old['slug'] === $new['slug'] && $old['slug'] !== $original) {
						throw new RuntimeException('Ya existe un artículo con esa URL.');
					}
					if ($old['slug'] === $original) {
						if ($new['slug'] !== $original) {
							throw new RuntimeException(
								'La URL de un artículo existente se conserva para evitar enlaces rotos.',
							);
						}
						$old = $new;
						$found = true;
					}
				}
				unset($old);
				if (!$found) {
					$all[] = $new;
				}
				$file = $dir . '/posts.json';
				if (is_file($file)) {
					copy(
						$file,
						$dir . '/posts-backup-' . date('Ymd-His') . '-' . bin2hex(random_bytes(3)) . '.json',
					);
				}
				$tmp = $dir . '/posts-' . bin2hex(random_bytes(8)) . '.tmp';
				file_put_contents(
					$tmp,
					json_encode(
						$all,
						JSON_PRETTY_PRINT |
							JSON_UNESCAPED_UNICODE |
							JSON_UNESCAPED_SLASHES |
							JSON_THROW_ON_ERROR,
					),
				);
				chmod($tmp, 0600);
				if (!rename($tmp, $file)) {
					throw new RuntimeException('No se pudo guardar el contenido.');
				}
			} finally {
				flock($lock, LOCK_UN);
				fclose($lock);
			}
			require_once __DIR__ . '/update-sitemap.php';
			update_blog_sitemap();
			redirect_to('/admin-blog?guardado=1');
		} catch (Throwable $error) {
			http_response_code(422);
			$message =
				$error instanceof RuntimeException
					? $error->getMessage()
					: 'No se pudo guardar. Revise los datos y los permisos del almacenamiento.';
		}
	}
}
if ($path === '/admin-blog' && empty($_SESSION['admin'])) {
	redirect_to('/acceso');
}
if ($path === '/acceso' && !empty($_SESSION['admin'])) {
	redirect_to('/admin-blog');
}
$token = csrf_token();
