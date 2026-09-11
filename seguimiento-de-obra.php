<?php
    $pageTitle = 'Seguimiento de obra con drones en Madrid | EurodroneX';
    $pageDescription = 'Documentación aérea periódica del avance de obra. Imágenes y registros para el control técnico, la trazabilidad y la coordinación del proyecto.';
    $pageKeywords = 'seguimiento de obra con drones en madrid, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/seguimiento-de-obra';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/d33674146f494ad3.webp';
    $pageType = 'ServiceDetail';
    $pageSlug = 'seguimiento-de-obra';
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
				$props = ['slug' => 'seguimiento-de-obra'];
				include_once 'components/service-detail.php';
			?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
