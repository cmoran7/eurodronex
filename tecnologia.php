<?php
    $pageTitle = 'Tecnología y metodología de inspección con drones | EurodroneX';
    $pageDescription = 'Del vuelo al informe: planificación, captura aérea, termografía, fotogrametría e interpretación técnica de los datos de su edificio.';
    $pageKeywords = 'tecnología y metodología de inspección con drones, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/tecnologia';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/5f1698c7fbd0ae26.webp';
    $pageType = 'Technology';
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
			<?php include_once 'components/tecnologia-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
