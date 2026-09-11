<?php
    $pageTitle = 'Administración del blog | EurodroneX';
    $pageDescription = 'Acceso privado a la administración editorial de EurodroneX.';
    $pageKeywords = 'EurodroneX';
    $pageCanonical = '/admin-blog';
    $pageRobots = 'noindex, nofollow';
    $pageType = 'WebPage';

    require_once 'services/site.php';
    $path = $pageCanonical;
    include_once 'services/admin.php';
    include_once 'services/page-init.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="min-h-screen flex flex-col bg-background text-foreground antialiased">
		<?php include_once 'components/header.php'; ?>

		<main class="pt-20 flex-1">
			<div class="admin-wrap">
				<?php include_once 'components/admin-panel.php'; ?>
			</div>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
		<script src="/assets/js/admin.js" defer></script>
	</body>
</html>
