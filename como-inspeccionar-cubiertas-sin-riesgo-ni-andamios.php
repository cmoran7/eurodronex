<?php
    $pageTitle = 'Cómo inspeccionar cubiertas sin riesgo ni andamios | EurodroneX';
    $pageDescription = 'Las cubiertas están sometidas a exposición constante a la intemperie. Con el tiempo, cualquier edificio puede desarrollar patologías que, si no se detectan a tiempo, derivan en daños estructurales graves y costosas reparaciones.';
    $pageKeywords = 'cómo inspeccionar cubiertas sin riesgo ni andamios, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/como-inspeccionar-cubiertas-sin-riesgo-ni-andamios';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/3be72dd4b84abb9c.webp';
    $pageType = 'BlogPost';
    $pageSlug = 'inspeccionar-cubiertas-sin-riesgo';

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
