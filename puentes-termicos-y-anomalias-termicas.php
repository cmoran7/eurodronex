<?php
    $pageTitle = 'Puentes térmicos y anomalías térmicas | EurodroneX';
    $pageDescription = 'Discontinuidades en el aislamiento de la envolvente que generan pérdidas de energía y riesgo de condensaciones. La termografía las hace visibles como contras';
    $pageKeywords = 'puentes térmicos y anomalías térmicas, EurodroneX, inspección de edificios, Madrid';
    $pageCanonical = '/puentes-termicos-y-anomalias-termicas';
    $pageRobots = 'noindex, follow';
    $pageOgImage = '/assets/img/5f1698c7fbd0ae26.webp';
    $pageType = 'PathologyDetail';
    $pageSlug = 'puentes-termicos-y-anomalias-termicas';
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
			<?php include_once 'components/patologias-puentes-termicos-y-anomalias-termicas-content.php'; ?>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
