<?php
    $pageTitle = 'Inspección con drones para aseguradoras y peritos | EurodroneX';
    $pageDescription = 'Documentación aérea de siniestros y edificios para aseguradoras y peritos. Captura visual, inspección remota y apoyo a la evaluación técnica.';
    $pageKeywords = 'inspección con drones para aseguradoras y peritos, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/aseguradoras-y-peritos';
    $pageRobots = 'index, follow';
    $pageType = 'SectorDetail';
    $pageSlug = 'aseguradoras-y-peritos';
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
			<?php include_once 'components/sectores-aseguradoras-y-peritos-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
