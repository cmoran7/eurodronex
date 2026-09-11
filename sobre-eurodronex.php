<?php
    $pageTitle = 'Sobre EurodroneX: ingeniería técnica e inspección aérea | EurodroneX';
    $pageDescription = 'Conozca el enfoque de EurodroneX: ingeniería especializada en inspección, diagnóstico y documentación de edificios mediante tecnología aérea.';
    $pageKeywords = 'sobre eurodronex: ingeniería técnica e inspección aérea, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/sobre-eurodronex';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/e2bba130a78fb381.webp';
    $pageType = 'About';
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
			<?php include_once 'components/sobre-eurodronex-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
