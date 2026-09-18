<?php
declare(strict_types=1);

const ROOT = __DIR__ . '/..';
$config = [
    'base_url' => 'https://eurodronex.com',
    'environment' => 'development',
    'storage_path' => ROOT . '/var',
    'mail_transport' => 'disabled',
    'mail_to' => 'contacto@eurodronex.com',
    'mail_from' => 'web@eurodronex.com',
];
if (is_file(__DIR__ . '/config.local.php')) {
    $config = array_replace($config, require __DIR__ . '/config.local.php');
}
date_default_timezone_set('Europe/Madrid');
function e(mixed $value): string {
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
function session_open(): void {
    if (session_status() === PHP_SESSION_ACTIVE) return;
    $dir = $GLOBALS['config']['storage_path'] . '/sessions';
    if (!is_dir($dir)) mkdir($dir, 0700, true);
    session_save_path($dir);
    session_name('edx_original');
    session_start(['use_strict_mode' => 1, 'cookie_httponly' => 1, 'cookie_samesite' => 'Lax', 'cookie_secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off']);
}
function csrf_token(): string {
    session_open();
    return $_SESSION['csrf'] ??= bin2hex(random_bytes(32));
}
function csrf_valid(): bool {
    return is_string($_POST['csrf'] ?? null) && hash_equals(csrf_token(), $_POST['csrf']);
}
function redirect_to(string $path, int $status = 303): never {
    header('Location: ' . $path, true, $status);
    exit;
}
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Cache-Control: no-store');
if ($config['environment'] !== 'production') header('X-Robots-Tag: noindex, nofollow');
session_open();
