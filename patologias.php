<?php
    $pageTitle = 'Biblioteca de patologías de edificios | EurodroneX';
    $pageDescription = 'Fichas técnicas sobre fisuras, humedades, filtraciones y anomalías térmicas en edificios. Biblioteca de demostración para revisión profesional.';
    $pageKeywords = 'biblioteca de patologías de edificios, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/patologias';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/e6aa8e3ee8204615.webp';
    $pageType = 'Pathologies';
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
			<?php include_once 'components/patologias-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
