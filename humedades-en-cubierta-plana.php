<?php
    $pageTitle = 'Localización de humedades en cubierta plana mediante termografía | EurodroneX';
    $pageDescription = 'Expediente de demostración: campaña de termografía aérea sobre cubierta plana para localizar acumulaciones de agua y anomalías de impermeabilización no visib';
    $pageKeywords = 'localización de humedades en cubierta plana mediante termografía, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/humedades-en-cubierta-plana';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/14ad65845c7c8a08.webp';
    $pageType = 'CaseDetail';
    $pageSlug = 'humedades-en-cubierta-plana';
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
			<?php include_once 'components/casos-de-estudio-humedades-en-cubierta-plana-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
