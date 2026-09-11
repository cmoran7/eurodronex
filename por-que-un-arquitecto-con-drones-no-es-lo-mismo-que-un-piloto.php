<?php
    $pageTitle = 'Por qué un arquitecto con drones no es lo mismo que un piloto | EurodroneX';
    $pageDescription = 'Hay una diferencia de fondo —no de marketing— entre contratar a alguien que sabe pilotar un dron y contratar a un arquitecto o ingeniero que utiliza el dron como herramienta de trabajo. La primera opción entrega imágenes; la segunda entrega un diagnóstico técnico.';
    $pageKeywords = 'por qué un arquitecto con drones no es lo mismo que un piloto, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-piloto';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/e2bba130a78fb381.webp';
    $pageType = 'BlogPost';
    $pageSlug = 'arquitecto-drones-vs-piloto';

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
