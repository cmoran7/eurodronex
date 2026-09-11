<?php
$canonical = url($path);
$ogImage = ($page['image'] ?? '') ?: content('routes')['/']['image'];
if (!str_starts_with($ogImage,'/assets/')) $ogImage = '/assets/img/social.svg';
$socialImage = preg_replace('/\.webp$/','.jpg',$ogImage);
if(!is_file(ROOT.$socialImage))$socialImage=$ogImage;
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= e($page['title']) ?></title>
<meta name="description" content="<?= e($page['description']) ?>">
<meta name="robots" content="<?= $noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' ?>">
<link rel="canonical" href="<?= e($canonical) ?>">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="EurodroneX">
<meta property="og:type" content="<?= ($page['type'] ?? '') === 'BlogPost' ? 'article' : 'website' ?>">
<meta property="og:title" content="<?= e($page['title']) ?>">
<meta property="og:description" content="<?= e($page['description']) ?>">
<meta property="og:url" content="<?= e($canonical) ?>">
<meta property="og:image" content="<?= e(url($socialImage)) ?>">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?= e($page['title']) ?>">
<meta name="twitter:description" content="<?= e($page['description']) ?>">
<meta name="twitter:image" content="<?= e(url($socialImage)) ?>">
<meta name="theme-color" content="#1e293b">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/css/site.css?v=<?= filemtime(ROOT.'/assets/css/site.css') ?>">
<link rel="stylesheet" href="/assets/css/custom.css?v=<?= filemtime(ROOT.'/assets/css/custom.css') ?>">
<?php if ($path === '/'): ?><link rel="preload" as="image" href="<?= e($ogImage) ?>" fetchpriority="high"><?php endif; ?>
<?php require __DIR__.'/structured-data.php'; ?>
