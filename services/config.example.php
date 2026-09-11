<?php
// Copy to config.local.php on the chosen hosting. Never commit credentials.
return [
    'environment' => 'development', // Set production only on the final public domain.
    'base_url' => 'https://eurodronex.com',
    'mail_transport' => 'disabled', // Set mail after configuring and testing the host's MTA.
    'mail_to' => 'contacto@eurodronex.com',
    'mail_from' => 'web@eurodronex.com',
    'admin_email' => '',
    'admin_password_hash' => '', // Generate with tools/password-hash.php.
    // Prefer an absolute directory outside the public document root.
    'storage_path' => dirname(__DIR__) . '/var',
];
