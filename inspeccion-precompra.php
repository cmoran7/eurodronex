<?php
    $pageTitle = 'Inspección precompra de edificios e inmuebles | EurodroneX';
    $pageDescription = 'Evaluación técnica antes de comprar o vender un inmueble. Inspección y documentación del edificio para inmobiliarias, promotoras y compradores.';
    $pageKeywords = 'inspección precompra de edificios e inmuebles, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/inspeccion-precompra';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/a3479b44645a6690.webp';
    $pageType = 'ServiceDetail';
    $pageSlug = 'inspeccion-precompra';
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
			<?php include_once 'components/servicios-inspeccion-precompra-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
