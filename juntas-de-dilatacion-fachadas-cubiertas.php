<?php
	$pageTitle = 'Juntas de dilatación en fachadas y cubiertas | EuroDroneX';
	$pageDescription = 'Juntas de dilatación en fachadas y cubiertas: deterioro del sellado, filtraciones y fisuras. Qué revisar en una inspección técnica y cómo prevenir daños.';
	$pageCanonical = '/juntas-de-dilatacion-fachadas-cubiertas/';
	$pageKey = 'juntas-de-dilatacion-fachadas-cubiertas';
	$pageStyleKey = 'como-inspeccionar-cubiertas-sin-riesgo-ni-andamios';
	$pageArticle = [
		'headline' => 'Juntas de dilatación: inspección y mantenimiento en fachadas y cubiertas',
		'images' => ['/assets/img/junta-de-dilatacion-vertical.jpg', '/assets/img/junta-de-dilatacion-en-cubierta-transitable.jpg'],
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
			<?php include 'components/juntas-de-dilatacion-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
