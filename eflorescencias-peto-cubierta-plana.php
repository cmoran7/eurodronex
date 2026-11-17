<?php
	$pageTitle = 'Manchas blancas en el peto: eflorescencias | Eurodrónex';
	$pageDescription = 'Qué indican las eflorescencias en el peto de una cubierta plana y qué revisar antes de pintar. Solicita una inspección de humedades y deterioros.';
	$pageCanonical = '/eflorescencias-peto-cubierta-plana/';
	$pageKey = 'eflorescencias-peto-cubierta-plana';
	$pageStyleKey = 'como-inspeccionar-cubiertas-sin-riesgo-ni-andamios';
	$pageArticle = [
		'headline' => 'Eflorescencias en el peto de una cubierta plana: qué son esas manchas blancas',
		'images' => ['/assets/img/eurodronex-eflorescencias-peto-cubierta-plana-exterior.webp', '/assets/img/eurodronex-eflorescencias-peto-cubierta-plana-detalle.webp'],
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
			<?php include 'components/eflorescencias-peto-cubierta-plana-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
