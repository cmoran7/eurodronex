<?php
    $pageTitle = 'Inspección para comunidades de propietarios | EuroDroneX';
    $pageDescription = 'Inspección de fachadas y cubiertas para comunidades de propietarios en Madrid. Documentación técnica con drones para valorar lesiones y planificar actuaciones.';
    $pageCanonical = '/inspeccion-comunidades-propietarios/';
    $pageKey = 'inspeccion-comunidades-propietarios';
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
            <?php include 'components/inspeccion-comunidades-propietarios-contenido.php'; ?>
        </main>
        <?php include_once 'components/footer.php'; ?>
        <?php include_once 'services/common-scripts.php'; ?>
    </body>
</html>
