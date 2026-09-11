<?php
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
	http_response_code(405);
	header('Allow: POST');
	exit();
}
header('Cache-Control: no-store');
function contact_response(int $status, string $message): never
{
	http_response_code($status);
	if (str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json')) {
		header('Content-Type: application/json; charset=utf-8');
		echo json_encode(['ok' => $status === 200, 'message' => $message], JSON_UNESCAPED_UNICODE);
		exit();
	}
	session_open();
	$_SESSION['contact_flash'] = ['message' => $message];
	$return = is_string($_POST['return_to'] ?? null) ? $_POST['return_to'] : '/contacto';
	if (!preg_match('#^/[a-z0-9-]*$#', $return) || ($return !== '/' && !is_file(ROOT . $return . '.php'))) {
		$return = '/contacto';
	}
	redirect_to($return . '#solicitud-nombre');
}
if (!csrf_valid()) {
	contact_response(403, 'La sesión del formulario ha caducado. Recargue la página y vuelva a intentarlo.');
}
if (!empty($_POST['website'])) {
	contact_response(422, 'No se ha podido validar la solicitud.');
}
$data = [];
foreach (
	[
		'nombre',
		'empresa',
		'telefono',
		'email',
		'tipoCliente',
		'tipoServicio',
		'tipoEdificio',
		'ubicacion',
		'urgencia',
		'mensaje',
	]
	as $key
) {
	if (!is_string($_POST[$key] ?? '')) {
		contact_response(422, 'Revise los campos del formulario.');
	}
	$data[$key] = trim($_POST[$key] ?? '');
	if (mb_strlen($data[$key]) > ($key === 'mensaje' ? 10000 : 200)) {
		contact_response(422, 'Uno de los campos supera la longitud permitida.');
	}
}
if (
	$data['nombre'] === '' ||
	!filter_var($data['email'], FILTER_VALIDATE_EMAIL) ||
	preg_match('/[\r\n]/', $data['email']) ||
	($_POST['privacidad'] ?? '') !== '1'
) {
	contact_response(422, 'Indique su nombre, un email válido y acepte la política de privacidad.');
}
if (time() - ($_SESSION['last_contact'] ?? 0) < 60) {
	contact_response(429, 'Espere un minuto antes de enviar otra solicitud.');
}
require __DIR__ . '/rate-limit.php';
if (!rate_allowed('contact', 5, 900)) {
	contact_response(
		429,
		'Se ha alcanzado el límite de solicitudes. Espere unos minutos o contacte por teléfono.',
	);
}
$attachments = [];
$upload = $_FILES['imagenes'] ?? null;
if ($upload && is_array($upload['error'])) {
	if (count($upload['error']) > 3) {
		contact_response(422, 'Puede adjuntar un máximo de 3 imágenes.');
	}
	foreach ($upload['error'] as $i => $error) {
		if ($error === UPLOAD_ERR_NO_FILE) {
			continue;
		}
		if ($error !== UPLOAD_ERR_OK || $upload['size'][$i] > 2 * 1024 * 1024) {
			contact_response(422, 'Cada imagen debe pesar como máximo 2 MB.');
		}
		$tmp = $upload['tmp_name'][$i];
		if (!is_uploaded_file($tmp)) {
			contact_response(422, 'Adjunto no válido.');
		}
		$mime = (new finfo(FILEINFO_MIME_TYPE))->file($tmp);
		$ext = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'][$mime] ?? null;
		if (!$ext || !getimagesize($tmp)) {
			contact_response(422, 'Solo se admiten imágenes JPG, PNG o WebP válidas.');
		}
		$attachments[] = [
			'mime' => $mime,
			'name' => 'imagen-' . ($i + 1) . '.' . $ext,
			'content' => file_get_contents($tmp),
		];
	}
}
if ($config['mail_transport'] !== 'mail') {
	contact_response(
		503,
		'El envío web no está disponible en este momento. Escríbanos a contacto@eurodronex.com o llame al 611 623 480.',
	);
}
$body = "Nueva solicitud de evaluación técnica\n\n";
foreach ($data as $key => $value) {
	$body .= $key . ': ' . $value . "\n";
}
$boundary = 'edx_' . bin2hex(random_bytes(16));
$headers = [
	'From: ' . $config['mail_from'],
	'Reply-To: ' . $data['email'],
	'MIME-Version: 1.0',
	'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];
$message =
	"--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n" .
	chunk_split(base64_encode($body));
foreach ($attachments as $a) {
	$message .=
		"--$boundary\r\nContent-Type: {$a['mime']}\r\nContent-Disposition: attachment; filename=\"{$a['name']}\"\r\nContent-Transfer-Encoding: base64\r\n\r\n" .
		chunk_split(base64_encode($a['content']));
}
$message .= "--$boundary--\r\n";
$sent = @mail(
	$config['mail_to'],
	'=?UTF-8?B?' . base64_encode('Nueva solicitud técnica — EurodroneX') . '?=',
	$message,
	implode("\r\n", $headers),
);
if (!$sent) {
	contact_response(
		503,
		'No se ha podido enviar la solicitud. Escríbanos a contacto@eurodronex.com o llame al 611 623 480.',
	);
}
$_SESSION['last_contact'] = time();
contact_response(200, 'Su solicitud se ha enviado. Gracias por contactar con EurodroneX.');
