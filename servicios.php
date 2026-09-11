<?php
    $pageTitle = 'Servicios de inspección de edificios con drones en Madrid | EurodroneX';
    $pageDescription = 'Inspección técnica de edificios, termografía, fotogrametría, diagnóstico de fachadas y seguimiento de obra en Madrid. Solicite una evaluación.';
    $pageKeywords = 'servicios de inspección de edificios con drones en madrid, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/servicios';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/464bbf7f1798693b.webp';
    $pageType = 'Services';
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
			<?php include_once 'components/servicios-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
