<?php
	$pageTitle = 'Solicita tu Inspección con Drones | EurodroneX';
	$pageDescription = 'Contacta con EuroDronex para solicitar una inspección técnica de tu edificio con drones. Te respondemos en menos de 24 horas. Madrid y ámbito nacional.';
	$pageCanonical = '/contacto/';
	$pageKey = 'contacto';
	include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="wp-singular page-template page-template-elementor_header_footer page page-id-121 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-121    e--ua-blink e--ua-edge e--ua-webkit">
		<?php include_once 'components/header.php'; ?>
		<main id="contenido" class="elementor elementor-121" data-elementor-id="121">
			<?php include 'components/contacto-01-solicite-informacion-tecnica.php'; ?>
			<?php include 'components/contacto-02-contenido.php'; ?>
			<?php include 'components/contacto-03-nacional.php'; ?>
			<?php include 'components/contacto-04-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
