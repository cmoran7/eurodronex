<?php
	$pageTitle = 'Seguimiento de Obra con Drones | EurodroneX';
	$pageDescription = 'Seguimiento de obra con drones para documentar el avance de los trabajos. Capturas aéreas periódicas y registro visual para el control de la construcción.';
	$pageCanonical = '/seguimiento-de-obra/';
	$pageKey = 'seguimiento-de-obra';
	include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="wp-singular page-template page-template-elementor_header_footer page page-id-560 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-560    e--ua-blink e--ua-edge e--ua-webkit">
		<?php include_once 'components/header.php'; ?>
		<main id="contenido" class="elementor elementor-560" data-elementor-id="560">
			<?php include 'components/seguimiento-de-obra-01-seguimiento-o-visita-de-obra.php'; ?>
			<?php include 'components/seguimiento-de-obra-02-control-fragmentado-y-vision-parcial-del-avance.php'; ?>
			<?php include 'components/seguimiento-de-obra-03-beneficios.php'; ?>
			<?php include 'components/seguimiento-de-obra-04-proceso.php'; ?>
			<?php include 'components/seguimiento-de-obra-05-otros-servicios-relacionados.php'; ?>
			<?php include 'components/seguimiento-de-obra-06-contenido.php'; ?>
			<?php include 'components/seguimiento-de-obra-07-preguntas-frecuentes.php'; ?>
			<?php include 'components/seguimiento-de-obra-08-solicitar-presupuesto.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
