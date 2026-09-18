<?php
    $pageTitle = 'Para quién: inspección de edificios con drones | EurodroneX';
    $pageDescription = 'Inspección técnica con drones para estudios de arquitectura, ingenierías, administradores de fincas, aseguradoras, promotoras e inmobiliarias.';
    $pageCanonical = '/para-quien/';
    $pageKey = 'para-quien';
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
            <?php include 'components/para-quien-introduccion.php'; ?>
            <?php include 'components/para-quien-clientes.php'; ?>
            <?php include 'components/para-quien-contacto.php'; ?>
        </main>
        <?php include_once 'components/footer.php'; ?>
        <?php include_once 'services/common-scripts.php'; ?>
    </body>
</html>
