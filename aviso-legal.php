<?php
	$pageTitle = 'Aviso legal y condiciones de uso | EurodroneX';
	$pageDescription = 'Consulte los datos del titular de EurodroneX, las condiciones de uso de esta web y la información legal sobre sus contenidos y servicios de inspección.';
	$pageCanonical = '/aviso-legal/';
	$pageKey = 'aviso-legal';
	include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="wp-singular page-template-default page page-id-2219 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-kit-6 elementor-page elementor-page-2219    e--ua-blink e--ua-edge e--ua-webkit">
		<?php include_once 'components/header.php'; ?>
		<main id="contenido" class="site-main post-2219 page type-page status-publish hentry" data-elementor-id="">
			<?php include 'components/aviso-legal-01-aviso-legal.php'; ?>
			<?php include 'components/aviso-legal-02-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
