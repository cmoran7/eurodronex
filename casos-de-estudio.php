<?php
    $pageTitle = 'Casos de estudio de inspección de edificios | EurodroneX';
    $pageDescription = 'Expedientes de demostración sobre inspección técnica: problemática, metodología, captura aérea, análisis y documentación del edificio.';
    $pageKeywords = 'casos de estudio de inspección de edificios, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/casos-de-estudio';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/8ecc14753dc6a438.webp';
    $pageType = 'Cases';
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
			<?php include_once 'components/casos-de-estudio-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
