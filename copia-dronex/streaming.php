<?php
	$pageTitle = 'Peritaje en streaming con drones | EurodroneX';
	$pageDescription = 'Peritaje con drones en tiempo real para examinar daños a distancia. Inspección aérea de edificios por streaming para peritos y compañías aseguradoras.';
	$pageCanonical = '/streaming/';
	$pageKey = 'streaming';
	include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="wp-singular page-template page-template-elementor_header_footer page page-id-538 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-538    e--ua-blink e--ua-edge e--ua-webkit">
		<?php include_once 'components/header.php'; ?>
		<main id="contenido" class="elementor elementor-538" data-elementor-id="538">
			<?php include 'components/streaming-01-peritaje-en-streaming.php'; ?>
			<?php include 'components/streaming-02-desplazamientos-tiempo-perdido-riesgos-o-puntos-de-muy-.php'; ?>
			<?php include 'components/streaming-03-beneficios.php'; ?>
			<?php include 'components/streaming-04-proceso.php'; ?>
			<?php include 'components/streaming-05-otros-servicios-relacionados.php'; ?>
			<?php include 'components/streaming-06-contenido.php'; ?>
			<?php include 'components/streaming-07-preguntas-frecuentes.php'; ?>
			<?php include 'components/streaming-08-solicitar-presupuesto.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
