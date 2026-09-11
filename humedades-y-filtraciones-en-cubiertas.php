<?php
    $pageTitle = 'Humedades y filtraciones en cubiertas | EurodroneX';
    $pageDescription = 'Pérdidas de estanqueidad que se manifiestan lejos de su origen. La combinación de imagen RGB y termografía permite delimitar acumulaciones y anomalías no vis';
    $pageKeywords = 'humedades y filtraciones en cubiertas, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/humedades-y-filtraciones-en-cubiertas';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/611010467f34e5ae.webp';
    $pageType = 'PathologyDetail';
    $pageSlug = 'humedades-y-filtraciones-en-cubiertas';
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
			<?php include_once 'components/patologias-humedades-y-filtraciones-en-cubiertas-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
