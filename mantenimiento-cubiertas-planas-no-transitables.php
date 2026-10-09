<?php
	$pageTitle = 'Mantenimiento de cubiertas planas no transitables | EuroDroneX';
	$pageDescription = 'Roturas en láminas asfálticas y deterioro de remates en cubiertas planas no transitables: valoración constructiva, inspección y reparación recomendada.';
	$pageCanonical = '/mantenimiento-cubiertas-planas-no-transitables/';
	$pageKey = 'mantenimiento-cubiertas-planas-no-transitables';
	$pageStyleKey = 'como-inspeccionar-cubiertas-sin-riesgo-ni-andamios';
	$pageArticle = [
		'headline' => 'Mantenimiento de cubiertas planas no transitables',
		'images' => ['/assets/img/rotura-lamina-asfaltica-encuentro-vertical.jpg', '/assets/img/desgarro-impermeabilizacion-cubierta-plana.jpg', '/assets/img/remate-perimetral-cubierta-plana.jpg'],
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
			<?php include 'components/mantenimiento-cubiertas-planas-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
