<?php
    require_once 'services/site.php';
    $pageSlug = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '', '/');
    $post = find_post($pageSlug);
    if (!$post) {
        include '404.php';
        return;
    }
    $pageSlug = $post['slug'];
    $pageTitle = $post['title'] . ' | EurodroneX';
    $pageDescription = $post['excerpt'];
    $pageKeywords = $post['category'] . ', EurodroneX, inspección de edificios';
    $pageCanonical = post_path($post['slug']);
    $pageRobots = 'index, follow';
    $pageOgImage = $post['image'];
    $pageType = 'BlogPost';
    include_once 'services/page-init.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="min-h-screen flex flex-col bg-background text-foreground antialiased">
		<a class="skip-link" href="#contenido">Saltar al contenido</a>
		<?php include_once 'components/header.php'; ?>

		<main id="contenido" class="flex-1 pt-20" tabindex="-1">
			<?php include_once 'components/articulo-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
