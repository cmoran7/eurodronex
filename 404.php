<?php
    $pageTitle = 'Página no encontrada | EurodroneX';
    $pageDescription = 'La página solicitada no está disponible. Consulte nuestros servicios de inspección técnica de edificios.';
    $pageKeywords = 'página no encontrada, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/404';
    $pageRobots = 'noindex, follow';
    $pageType = 'WebPage';

    http_response_code(404);
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
			<?php include_once 'components/404-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
