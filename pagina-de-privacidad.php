<?php
	$pageTitle = 'Política de privacidad y datos personales | EurodroneX';
	$pageDescription = 'Conozca cómo EurodroneX trata los datos personales enviados a través de esta web, con qué finalidad se utilizan y cómo ejercer sus derechos de privacidad.';
	$pageCanonical = '/pagina-de-privacidad/';
	$pageKey = 'pagina-de-privacidad';
	include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="privacy-policy wp-singular page-template-default page page-id-3 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor hello-elementor-default elementor-default elementor-kit-6 elementor-page elementor-page-3    e--ua-blink e--ua-edge e--ua-webkit">
		<?php include_once 'components/header.php'; ?>
		<main id="contenido" class="site-main post-3 page type-page status-publish hentry" data-elementor-id="">
			<?php include 'components/pagina-de-privacidad-01-pagina-de-privacidad.php'; ?>
			<?php include 'components/pagina-de-privacidad-02-contenido.php'; ?>
		</main>
		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
