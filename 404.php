<?php
    http_response_code(404);
    $pageTitle = 'Página no encontrada | EurodroneX';
    $pageDescription = 'La página solicitada no existe.';
    $pageCanonical = '/404/';
    $pageKey = 'index';
    include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
    <head><?php include_once 'services/common-head.php'; ?></head>
    <body class="elementor-kit-6">
        <?php include_once 'components/header.php'; ?>
        <main style="padding:120px 24px;min-height:50vh">
            <h1>Página no encontrada</h1>
            <p><a href="/">Volver al inicio</a></p>
        </main>
        <?php include_once 'components/footer.php'; ?>
        <?php include_once 'services/common-scripts.php'; ?>
    </body>
</html>
