<?php
    $pageTitle = 'Inspección de edificios para administradores de fincas | EurodroneX';
    $pageDescription = 'Inspección de fachadas y cubiertas para comunidades y administradores de fincas. Documentación de patologías para planificar el mantenimiento.';
    $pageKeywords = 'inspección de edificios para administradores de fincas, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/administracion-de-fincas';
    $pageRobots = 'index, follow';
    $pageType = 'SectorDetail';
    $pageSlug = 'administracion-de-fincas';
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
			<?php include_once 'components/sectores-administracion-de-fincas-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
