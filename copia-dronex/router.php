<?php
$path = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/');
$aliases = require __DIR__ . '/services/redirects.php';
if (isset($aliases[$path])) { header('Location: ' . $aliases[$path], true, 301); return; }
if (preg_match('#^/assets/[a-zA-Z0-9/_-]+\.(?:css|js|png|jpg|jpeg|gif|webp|avif|svg|woff2?|ttf|otf)$#', $path) && is_file(__DIR__ . $path)) return false;
if (in_array($path, ['/robots.txt', '/sitemap.xml'], true)) return false;
if ($path === '/services/contact_process.php') { require __DIR__ . $path; return; }
if ($path === '/') { require __DIR__ . '/index.php'; return; }
if (preg_match('#^/([a-z0-9-]+)(?:/|\.php)?$#', $path, $match) && !in_array($match[1], ['router', '404'], true) && is_file(__DIR__ . '/' . $match[1] . '.php')) {
    $canonical = $match[1] === 'index' ? '/' : '/' . $match[1] . '/';
    if ($path !== $canonical) { header('Location: ' . $canonical, true, 301); return; }
    require __DIR__ . '/' . $match[1] . '.php'; return;
}
http_response_code(404);
require __DIR__ . '/404.php';
