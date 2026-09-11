<?php
    $pageTitle = 'Inspección técnica de edificios con drones en Madrid | EurodroneX';
    $pageDescription = 'Inspección de fachadas, cubiertas y estructuras con drones. Documentación de patologías e informes técnicos para evaluar el estado del edificio.';
    $pageKeywords = 'inspección técnica de edificios con drones en madrid, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/inspeccion-tecnica-con-drones';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/464bbf7f1798693b.webp';
    $pageType = 'ServiceDetail';
    $pageSlug = 'inspeccion-tecnica-con-drones';
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
				$props = ['slug' => 'inspeccion-tecnica-con-drones'];
				include_once 'components/service-detail.php';
			?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
