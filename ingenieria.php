<?php
    $pageTitle = 'Ingeniería aplicada a la inspección de edificios | EurodroneX';
    $pageDescription = 'Ingeniería y arquitectura para interpretar la información capturada con drones. Diagnóstico, documentación e informes técnicos en Madrid.';
    $pageKeywords = 'ingeniería aplicada a la inspección de edificios, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/ingenieria';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/e2bba130a78fb381.webp';
    $pageType = 'Engineering';
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
			<?php include_once 'components/ingenieria-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
