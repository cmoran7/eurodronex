<?php
    $pageTitle = 'ITE e IEE en Madrid | Inspección de edificios | EuroDroneX';
    $pageDescription = 'ITE e IEE en Madrid para comunidades y administradores de fincas. Inspección técnica con apoyo de drones cuando sea viable. Solicite información y presupuesto.';
    $pageCanonical = '/ite-iee/';
    $pageKey = 'ite-iee';
    $pageStyleKey = 'para-quien';
    $pageOgImage = '/assets/img/fachada-balcones-paneles-colores-800.webp';
    include_once 'services/bootstrap.php';
?>
<!doctype html>
<html lang="es">
    <head>
        <?php include_once 'services/common-head.php'; ?>
    </head>
    <body class="elementor-kit-6">
        <?php include_once 'components/header.php'; ?>
        <main id="contenido" class="audiences-page">
            <?php include 'components/ite-iee-contenido.php'; ?>
        </main>
        <?php include_once 'components/footer.php'; ?>
        <?php include_once 'services/common-scripts.php'; ?>
    </body>
</html>
