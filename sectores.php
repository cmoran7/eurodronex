<?php
    $pageTitle = 'Inspección con drones para profesionales de la construcción | EurodroneX';
    $pageDescription = 'Servicios técnicos para arquitectura, ingeniería, administración de fincas, constructoras y aseguradoras. Inspección y diagnóstico de edificios.';
    $pageKeywords = 'inspección con drones para profesionales de la construcción, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/sectores';
    $pageRobots = 'index, follow';
    $pageType = 'Sectors';
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
			<?php include_once 'components/sectores-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
