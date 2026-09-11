<?php
    $pageTitle = 'Política de privacidad | EurodroneX';
    $pageDescription = 'Política de privacidad de EurodroneX. Datos del titular Dronspain Solutions S.L. y condiciones de uso de este sitio web.';
    $pageKeywords = 'política de privacidad, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/politica-de-privacidad';
    $pageRobots = 'index, follow';
    $pageType = 'Legal';
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
			<?php include_once 'components/politica-de-privacidad-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
