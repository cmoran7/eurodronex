<?php
    $pageTitle = 'Inspección con drones para constructoras y promotoras | EurodroneX';
    $pageDescription = 'Seguimiento de obra, captura aérea y documentación técnica para constructoras y promotoras. Información para controlar el avance del proyecto.';
    $pageKeywords = 'inspección con drones para constructoras y promotoras, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/constructoras-y-promotoras';
    $pageRobots = 'index, follow';
    $pageType = 'SectorDetail';
    $pageSlug = 'constructoras-y-promotoras';
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
			<?php include_once 'components/sectores-constructoras-y-promotoras-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
