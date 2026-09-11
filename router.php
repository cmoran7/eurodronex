<?php
// Development server: never expose source, configuration, dependencies or storage.
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
if (preg_match('#^/assets/(css|js|img|fonts)/[a-zA-Z0-9._/-]+$#', $path) && !str_contains($path,'..')) {
    $asset = realpath(__DIR__.$path);
    if ($asset && str_starts_with($asset, realpath(__DIR__.'/assets').DIRECTORY_SEPARATOR) && is_file($asset)) return false;
}
require __DIR__.'/index.php';
