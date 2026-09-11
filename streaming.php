<?php
    $pageTitle = 'Peritaje e inspección de edificios en streaming | EurodroneX';
    $pageDescription = 'Inspección aérea en directo para evaluación remota de edificios y siniestros. Visualización, indicaciones y documentación sin desplazamientos.';
    $pageKeywords = 'peritaje e inspección de edificios en streaming, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/streaming';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/0cccb397b8888421.webp';
    $pageType = 'ServiceDetail';
    $pageSlug = 'streaming';
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
				$props = ['slug' => 'streaming'];
				include_once 'components/service-detail.php';
			?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
