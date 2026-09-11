<?php
    $pageTitle = 'Levantamiento fotogramétrico de edificio patrimonial | EurodroneX';
    $pageDescription = 'Expediente de demostración: modelo 3D métrico de un edificio singular mediante fotogrametría aérea, como base de documentación previa a proyecto de restaurac';
    $pageKeywords = 'levantamiento fotogramétrico de edificio patrimonial, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/fotogrametria-de-edificio-patrimonial';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/37c5aa641e57bba2.webp';
    $pageType = 'CaseDetail';
    $pageSlug = 'fotogrametria-de-edificio-patrimonial';
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
			<?php include_once 'components/casos-de-estudio-fotogrametria-de-edificio-patrimonial-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
