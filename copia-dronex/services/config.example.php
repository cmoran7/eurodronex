<?php
// Copiar a config.local.php únicamente en el servidor elegido.
return [
    'environment' => 'development',
    'base_url' => 'https://eurodronex.com',
    'mail_transport' => 'disabled',
    'mail_to' => 'contacto@eurodronex.com',
    'mail_from' => 'web@eurodronex.com',
    'storage_path' => dirname(__DIR__) . '/var',
];
