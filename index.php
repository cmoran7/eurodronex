<?php
require __DIR__ . '/services/site.php';
security_headers();
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
if (preg_match('/[\x00-\x20\\\\]/', $path) || str_starts_with($path,'//')) { http_response_code(400); exit('Solicitud no válida.'); }
if($config['environment']==='production' && in_array($_SERVER['HTTP_HOST']??'', ['eurodronex.com','www.eurodronex.com'],true) && (($_SERVER['HTTP_HOST']??'')!=='eurodronex.com' || empty($_SERVER['HTTPS']) || $_SERVER['HTTPS']==='off')) {
    header('Location: '.url($path),true,301);exit;
}
$redirects = require __DIR__ . '/services/redirects.php';
if (isset($redirects[$path])) redirect_to($redirects[$path],301);
if ($path !== '/' && str_ends_with($path,'/')) redirect_to(rtrim($path,'/'),301);
if ($path === '/sitemap.xml') { require __DIR__.'/services/sitemap.php'; exit; }
if ($path === '/robots.txt') {
    header('Content-Type: text/plain; charset=utf-8');
    echo $config['environment'] === 'production' ? "User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /acceso\nDisallow: /api/\nDisallow: /react/\nSitemap: ".url('/sitemap.xml')."\n" : "User-agent: *\nDisallow: /\n";
    exit;
}
if ($path === '/api/contacto') { require __DIR__.'/services/contact-handler.php'; exit; }
if ($path === '/acceso' || $path === '/admin/blog') { require __DIR__.'/services/admin.php'; exit; }
$routes = public_routes();
$page = $routes[$path] ?? ['file'=>'404','title'=>'Página no encontrada | EurodroneX','description'=>'La página solicitada no está disponible. Consulte nuestros servicios de inspección técnica de edificios.','noindex'=>true];
if (!isset($routes[$path])) http_response_code(404);
if (!in_array($_SERVER['REQUEST_METHOD'] ?? 'GET',['GET','HEAD'],true)) { http_response_code(405); header('Allow: GET, HEAD'); exit; }
$noindex = $config['environment'] !== 'production' || ($page['noindex'] ?? false) || isset($_GET['tipo']) || isset($_GET['tema']);
if ($noindex) header('X-Robots-Tag: noindex, follow');
ob_start(); // Components may initialise the form session before any output is sent.
require __DIR__.'/pages/'.$page['file'].'.php';
$body = ob_get_clean();
?><!doctype html>
<html lang="es">
<head><?php require __DIR__.'/services/common-head.php'; ?></head>
<body class="min-h-screen flex flex-col bg-background text-foreground">
<a class="skip-link" href="#contenido">Saltar al contenido</a>
<?php require __DIR__.'/components/header.php'; ?>
<main id="contenido" class="flex-1 pt-20" tabindex="-1"><?= $body ?></main>
<?php require __DIR__.'/components/footer.php'; ?>
<?php require __DIR__.'/components/cookie-preferences.php'; ?>
<script src="/assets/js/site.js" defer></script>
</body></html>
