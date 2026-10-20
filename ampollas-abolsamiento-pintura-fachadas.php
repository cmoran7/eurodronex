<?php
	$pageTitle = 'Ampollas en pintura de fachadas: diagnóstico | Eurodrónex';
	$pageDescription = 'Ampollas y abolsamiento de pintura en fachadas: causas, humedad y diagnóstico con drones. Inspección técnica en Marbella, Málaga y la Costa del Sol.';
	$pageCanonical = '/ampollas-abolsamiento-pintura-fachadas/';
	$pageKey = 'ampollas-abolsamiento-pintura-fachadas';
	$pageStyleKey = 'como-inspeccionar-cubiertas-sin-riesgo-ni-andamios';
	$pageArticle = [
		'headline' => 'Ampollas y abolsamiento de pintura en fachadas: diagnóstico con drones',
		'images' => ['/assets/img/patologia-ampollamiento-pintura-fachada-marbella.webp'],
	];
	$pageOgImage = $pageArticle['images'][0];
	include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="elementor-kit-6">
		<?php include_once 'components/header.php'; ?>
		<main id="contenido" class="elementor elementor-2428">
			<?php include 'components/ampollas-abolsamiento-pintura-fachadas-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
