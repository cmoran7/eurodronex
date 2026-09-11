<?php
    $pageTitle = 'Contacto y evaluación técnica de edificios | EurodroneX';
    $pageDescription = 'Solicite una evaluación técnica de su edificio. Llame al 611 623 480 o escriba a contacto@eurodronex.com. Madrid y provincias limítrofes.';
    $pageKeywords = 'contacto y evaluación técnica de edificios, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/contacto';
    $pageRobots = 'index, follow';
    $pageType = 'Contact';
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
			<?php include_once 'components/contacto-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
