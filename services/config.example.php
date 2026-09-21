<?php
// Copiar a config.local.php únicamente en el servidor elegido.
return [
    'environment' => 'development',
    'base_url' => 'https://eurodronex.com',
    // Activar solo después de completar SMTP y reCAPTCHA.
    'mail_transport' => 'smtp',
    'mail_to' => 'eurodronex@gmail.com',
    'mail_from' => 'web@eurodronex.com',
    'mail_from_name' => 'Eurodrónex — Solicitudes web',
    'smtp_host' => '',
    'smtp_port' => 587,
    'smtp_encryption' => 'tls', // STARTTLS 587; usar ssl para TLS implícito 465.
    'smtp_username' => '',
    'smtp_password' => '', // Configurar directamente en el servidor, no en Git.
    'recaptcha_enabled' => true,
    'recaptcha_site_key' => '',
    'recaptcha_secret_key' => '', // Clave secreta privada, nunca se envía al navegador.
    'recaptcha_min_score' => 0.5,
    'recaptcha_hostnames' => ['eurodronex.devnavigate.com', 'eurodronex.com', 'www.eurodronex.com'],
    'storage_path' => dirname(__DIR__) . '/var',
];
