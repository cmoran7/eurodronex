<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($pageTitle) ?></title>
<meta name="description" content="<?= e($pageDescription) ?>">
<meta name="robots" content="<?= $config['environment'] === 'production' ? 'index, follow' : 'noindex, nofollow' ?>">
<link rel="canonical" href="<?= e($config['base_url'] . $pageCanonical) ?>">
<meta property="og:title" content="<?= e($pageTitle) ?>">
<meta property="og:description" content="<?= e($pageDescription) ?>">
<meta property="og:url" content="<?= e($config['base_url'] . $pageCanonical) ?>">
<meta property="og:site_name" content="EurodroneX">
<meta property="og:locale" content="es_ES">
<link rel="icon" href="/assets/img/favicon.png" type="image/png">
<?php foreach (json_decode(file_get_contents(__DIR__ . '/data/' . $pageKey . '-styles.json'), true) as $css): ?>
<link rel="stylesheet" href="<?= e($css) ?>?v=<?= filemtime(ROOT . $css) ?>">
<?php endforeach; ?>
<link rel="stylesheet" href="/assets/css/site.css?v=<?= filemtime(ROOT . '/assets/css/site.css') ?>">
<link rel="stylesheet" href="/assets/css/cookie-banner.css">
<?php if (is_file(__DIR__ . '/data/' . $pageKey . '-schema.json')): ?>
<script type="application/ld+json"><?= file_get_contents(__DIR__ . '/data/' . $pageKey . '-schema.json') ?></script>
<?php endif; ?>
