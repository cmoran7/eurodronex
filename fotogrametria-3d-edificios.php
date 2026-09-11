<?php
    $pageTitle = 'Fotogrametría y modelos 3D de edificios con drones | EurodroneX';
    $pageDescription = 'Documentación tridimensional de edificios mediante fotogrametría aérea. Modelos 3D, ortofotos y datos para proyectos técnicos y rehabilitación.';
    $pageKeywords = 'fotogrametría y modelos 3d de edificios con drones, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/fotogrametria-3d-edificios';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/4ae3ec6c15d81219.webp';
    $pageType = 'ServiceDetail';
    $pageSlug = 'fotogrametria-3d-edificios';
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
				$props = ['slug' => 'fotogrametria-3d-edificios'];
				include_once 'components/service-detail.php';
			?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
