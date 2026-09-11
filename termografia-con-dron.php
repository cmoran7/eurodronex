<?php
    $pageTitle = 'Termografía con drones en edificios de Madrid | EurodroneX';
    $pageDescription = 'Inspección termográfica de fachadas y cubiertas para documentar anomalías térmicas, puentes térmicos y posibles humedades con criterio técnico.';
    $pageKeywords = 'termografía con drones en edificios de madrid, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/termografia-con-dron';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/093fc2b998634e44.webp';
    $pageType = 'ServiceDetail';
    $pageSlug = 'termografia-con-dron';
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
				$props = ['slug' => 'termografia-con-dron'];
				include_once 'components/service-detail.php';
			?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
