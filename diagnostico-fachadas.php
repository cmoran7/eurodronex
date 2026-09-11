<?php
    $pageTitle = 'Diagnóstico de fachadas con drones en Madrid | EurodroneX';
    $pageDescription = 'Documentación y evaluación técnica de fisuras, desprendimientos y lesiones en fachadas. Inspección aérea para orientar el diagnóstico del edificio.';
    $pageKeywords = 'diagnóstico de fachadas con drones en madrid, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/diagnostico-fachadas';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/a3479b44645a6690.webp';
    $pageType = 'ServiceDetail';
    $pageSlug = 'diagnostico-fachadas';
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
			<?php
				$props = ['slug' => 'diagnostico-fachadas'];
				include_once 'components/service-detail.php';
			?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
