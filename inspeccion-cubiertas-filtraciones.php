<?php
    $pageTitle = 'Inspección de cubiertas y filtraciones en Madrid | Eurodrónex';
    $pageDescription = '¿Humedades o deterioros en la cubierta? Revisamos impermeabilización, juntas y remates con criterio técnico en Madrid. Solicita una inspección.';
    $pageCanonical = '/inspeccion-cubiertas-filtraciones/';
    $pageKey = 'inspeccion-cubiertas-filtraciones';
    $pageStyleKey = 'para-quien';
    $pageOgImage = '/assets/img/vista-aerea-cubiertas-edificio.webp';
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
            <?php include 'components/inspeccion-cubiertas-filtraciones-contenido.php'; ?>
        </main>
        <?php include_once 'components/footer.php'; ?>
        <?php include_once 'services/common-scripts.php'; ?>
    </body>
</html>
