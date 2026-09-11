<?php
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/';
if (str_starts_with($path, '//') || preg_match('/[\x00-\x20\\\\]/', $path)) {
    http_response_code(400);
    return true;
}

$redirects = require __DIR__ . '/services/redirects.php';
if (isset($redirects[$path])) {
    header('Location: ' . $redirects[$path], true, 301);
    return true;
}

if ($path === '/services/contact_process.php') {
    include __DIR__ . '/services/contact_process.php';
    return true;
}

if ($path !== '/' && str_ends_with($path, '/')) {
    header('Location: ' . rtrim($path, '/'), true, 301);
    return true;
}

if (preg_match('#^/([a-z0-9-]+)\.php$#', $path, $match) && $match[1] !== 'router') {
    header('Location: /' . $match[1], true, 301);
    return true;
}

if (in_array($path, ['/sitemap.xml', '/robots.txt'], true)) return false;
if (preg_match('#^/assets/(css|js|img|fonts)/[a-zA-Z0-9._/-]+$#', $path) && !str_contains($path, '..')) {
    if (is_file(__DIR__ . $path)) return false;
}

if ($path === '/') {
    include __DIR__ . '/index.php';
    return true;
}

if (preg_match('#^/[a-z0-9-]+$#', $path) && $path !== '/router') {
    if (is_file(__DIR__ . $path . '.php')) {
        include __DIR__ . $path . '.php';
        return true;
    }
    require_once __DIR__ . '/services/site.php';
    if (find_post(ltrim($path, '/'))) {
        include __DIR__ . '/articulo.php';
        return true;
    }
}

include __DIR__ . '/404.php';
return true;
