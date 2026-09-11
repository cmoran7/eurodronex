<?php
    $pageTitle = 'Inspección con drones para arquitectura e ingeniería | EurodroneX';
    $pageDescription = 'Captura aérea y documentación técnica para estudios de arquitectura e ingeniería. Apoyo en diagnóstico, rehabilitación y evaluación de edificios.';
    $pageKeywords = 'inspección con drones para arquitectura e ingeniería, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/arquitectura-e-ingenieria';
    $pageRobots = 'index, follow';
    $pageType = 'SectorDetail';
    $pageSlug = 'arquitectura-e-ingenieria';
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
			<?php include_once 'components/sectores-arquitectura-e-ingenieria-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
