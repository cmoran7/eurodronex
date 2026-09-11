<?php
    $pageTitle = 'Cómo inspeccionar un edificio sin andamios en 2026 | EurodroneX';
    $pageDescription = 'La combinación de drones de alta resolución, cámaras termográficas, fotogrametría y el criterio técnico de ingenieros y arquitectos permite inspeccionar un edificio de forma completa, precisa y segura sin necesidad de instalar un solo andamio.';
    $pageKeywords = 'cómo inspeccionar un edificio sin andamios en 2026, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/como-inspeccionar-un-edificio-sin-andamios-en-2026';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/464bbf7f1798693b.webp';
    $pageType = 'BlogPost';
    $pageSlug = 'inspeccionar-edificio-sin-andamios-2026';

    require_once 'services/site.php';
    $post = find_post($pageSlug);
    if (!$post) {
        include '404.php';
        return;
    }
    $pageTitle = $post['title'] . ' | EurodroneX';
    $pageDescription = $post['excerpt'];
    $pageOgImage = $post['image'];
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
