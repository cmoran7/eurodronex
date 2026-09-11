<?php
    $pageTitle = 'Fisuras y grietas en fachadas | EurodroneX';
    $pageDescription = 'Lesiones en forma de abertura lineal en el paramento. Su documentación rigurosa — trazado, extensión y evolución — es la base para su posterior interpretació';
    $pageKeywords = 'fisuras y grietas en fachadas, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/fisuras-y-grietas-en-fachadas';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/e6aa8e3ee8204615.webp';
    $pageType = 'PathologyDetail';
    $pageSlug = 'fisuras-y-grietas-en-fachadas';
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
			<?php include_once 'components/patologias-fisuras-y-grietas-en-fachadas-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
