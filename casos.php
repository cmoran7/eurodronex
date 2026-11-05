<?php
    $pageTitle = 'Casos de patologías en fachadas y cubiertas | Eurodrónex';
    $pageDescription = 'Casos de humedades, eflorescencias, juntas y deterioros en fachadas y cubiertas. Conoce qué aporta la inspección técnica con drones antes de intervenir.';
    $pageCanonical = '/casos/';
    $pageKey = 'casos';
    $pageStyleKey = 'para-quien';
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
            <?php include 'components/casos-contenido.php'; ?>
        </main>
        <?php include_once 'components/footer.php'; ?>
        <?php include_once 'services/common-scripts.php'; ?>
    </body>
</html>
