<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($pageTitle) ?></title>
<meta name="description" content="<?= e($pageDescription) ?>">
<meta name="robots" content="<?= $config['environment'] === 'production' && $pageKey !== '404' ? 'index, follow, max-image-preview:large' : 'noindex, nofollow' ?>">
<link rel="canonical" href="<?= e($config['base_url'] . $pageCanonical) ?>">
<meta property="og:title" content="<?= e($pageTitle) ?>">
<meta property="og:description" content="<?= e($pageDescription) ?>">
<meta property="og:url" content="<?= e($config['base_url'] . $pageCanonical) ?>">
<meta property="og:site_name" content="EurodroneX">
<meta property="og:locale" content="es_ES">
<meta property="og:type" content="website">
<meta property="og:image" content="<?= e($config['base_url']) ?>/assets/img/logo-eurodronex-fondo-oscuro.webp">
<?php if ($pageKey === 'index'): ?>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/890de452eac5.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/e3237528af75.woff2" crossorigin>
<script>if ('IntersectionObserver' in window) document.documentElement.classList.add('edx-lazy-backgrounds');</script>
<style>
.edx-lazy-backgrounds #contenido > .e-parent:not(:first-child):not(.edx-section-ready),
.edx-lazy-backgrounds #contenido > .e-parent:not(:first-child):not(.edx-section-ready)::before,
.edx-lazy-backgrounds #contenido > .e-parent:not(:first-child):not(.edx-section-ready) *,
.edx-lazy-backgrounds #contenido > .e-parent:not(:first-child):not(.edx-section-ready) *::before {
    background-image: none !important;
}
.edx-lazy-backgrounds #contenido > .e-parent:not(.edx-section-ready) .bg-grow-effect {
    background-color: #333;
}
</style>
<link rel="preload" as="image" href="/assets/img/fachada-paneles-blanco-negro-640.webp" media="(max-width: 767px)" fetchpriority="high">
<link rel="preload" as="image" href="/assets/img/fachada-paneles-blanco-negro-1600.webp" media="(min-width: 768px)" fetchpriority="high">
<?php endif; ?>
<link rel="icon" href="/assets/img/favicon.png" type="image/png">
<?php $pageCss = '/assets/css/pages/' . $pageKey . '.css'; ?>
<?php if (is_file(ROOT . $pageCss)): ?>
<?php if ($pageKey === 'index'): ?>
<style><?= file_get_contents(ROOT . $pageCss) ?></style>
<?php else: ?>
<link rel="stylesheet" href="<?= e($pageCss) ?>?v=<?= filemtime(ROOT . $pageCss) ?>">
<?php endif; ?>
<?php else: ?>
<?php foreach (json_decode(file_get_contents(__DIR__ . '/data/' . $pageKey . '-styles.json'), true) as $css): ?>
<link rel="stylesheet" href="<?= e($css) ?>?v=<?= filemtime(ROOT . $css) ?>">
<?php endforeach; ?>
<?php endif; ?>
<?php if ($pageKey === 'index'): ?>
<style><?= file_get_contents(ROOT . '/assets/css/site.css') ?></style>
<style><?= file_get_contents(ROOT . '/assets/css/cookie-banner.css') ?></style>
<?php else: ?>
<link rel="stylesheet" href="/assets/css/site.css?v=<?= filemtime(ROOT . '/assets/css/site.css') ?>">
<link rel="stylesheet" href="/assets/css/cookie-banner.css?v=<?= filemtime(ROOT . '/assets/css/cookie-banner.css') ?>">
<?php endif; ?>
<?php include __DIR__ . '/structured-data.php'; ?>
