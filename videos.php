<?php
    $pageTitle = 'Vídeos de inspección técnica de edificios | EurodroneX';
    $pageDescription = 'Galería de vídeos de referencia sobre inspección de fachadas, cubiertas, termografía y fotogrametría. Material de demostración identificado.';
    $pageKeywords = 'vídeos de inspección técnica de edificios, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/videos';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/5264b06c92734ade.webp';
    $pageType = 'Videos';
    include_once 'services/page-init.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="min-h-screen flex flex-col bg-background text-foreground antialiased">
		<a class="skip-link" href="#contenido">Saltar al contenido</a>
		<?php include_once 'components/header.php'; ?>

		<main id="contenido" class="flex-1 pt-20" tabindex="-1">
			<?php include_once 'components/videos-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
