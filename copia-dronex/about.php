<?php
	$pageTitle = 'Arquitectos e Ingenieros Pilotos de Drones | EurodroneX';
	$pageDescription = 'EuroDronex es una empresa de inspección técnica de edificios con drones, formada por arquitectos e ingenieros. Conoce nuestro equipo y metodología de trabajo.';
	$pageCanonical = '/about/';
	$pageKey = 'about';
	include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="wp-singular page-template page-template-elementor_header_footer page page-id-120 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-120    e--ua-blink e--ua-edge e--ua-webkit">
		<?php include_once 'components/header.php'; ?>
		<main id="contenido" class="elementor elementor-120" data-elementor-id="120">
			<?php include 'components/about-01-sobre-eurodronex.php'; ?>
			<?php include 'components/about-02-no-capturamos-imagenes-interpretamos-edificios.php'; ?>
			<?php include 'components/about-03-no-soy-solo-somos-pilotos-de-drones.php'; ?>
			<?php include 'components/about-04-asi-trabajamos.php'; ?>
			<?php include 'components/about-05-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
