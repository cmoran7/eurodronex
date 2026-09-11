<?php
    $pageTitle = 'Inspección técnica de edificios con drones en Madrid | EurodroneX';
    $pageDescription = 'Ingeniería técnica para inspeccionar fachadas y cubiertas con drones en Madrid. Termografía, fotogrametría e informes. Solicite una evaluación de su edificio.';
    $pageKeywords = 'inspección técnica de edificios con drones en madrid, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/';
    $pageRobots = 'index, follow';
    $pageOgImage = '/assets/img/464bbf7f1798693b.webp';
    $pageType = 'Home';
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
			<?php include_once 'components/home-hero.php'; ?>
			<?php include_once 'components/home-problem-solution.php'; ?>
			<?php include_once 'components/home-manifesto.php'; ?>
			<?php include_once 'components/home-pathologies.php'; ?>
			<?php include_once 'components/home-services-preview.php'; ?>
			<?php include_once 'components/home-methodology.php'; ?>
			<?php include_once 'components/home-audiences.php'; ?>
			<?php include_once 'components/home-credentials.php'; ?>
			<?php include_once 'components/home-faq.php'; ?>
			<?php include_once 'components/home-contact.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
