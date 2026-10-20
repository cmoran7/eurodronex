<?php
// Build metadata from the current PHP page instead of the former WordPress URLs.
$siteUrl = rtrim($config['base_url'], '/');
$currentUrl = $siteUrl . $pageCanonical;
$graph = [
    [
        '@type' => 'Organization', '@id' => $siteUrl . '/#organization',
        'name' => 'EurodroneX', 'url' => $siteUrl . '/',
        'logo' => $siteUrl . '/assets/img/logo-eurodronex-fondo-oscuro.webp',
        'sameAs' => ['https://www.instagram.com/eurodronex/', 'https://www.youtube.com/@eurodronex'],
    ],
    [
        '@type' => 'WebSite', '@id' => $siteUrl . '/#website',
        'name' => 'EurodroneX', 'url' => $siteUrl . '/', 'inLanguage' => 'es',
        'publisher' => ['@id' => $siteUrl . '/#organization'],
    ],
    [
        '@type' => 'WebPage', '@id' => $currentUrl . '#webpage',
        'url' => $currentUrl, 'name' => $pageTitle,
        'description' => $pageDescription, 'inLanguage' => 'es',
        'isPartOf' => ['@id' => $siteUrl . '/#website'],
    ],
];
$servicePages = [
    'inspeccion-tecnica-con-drones', 'termografia-con-dron',
    'fotogrametria-3d-edificios', 'diagnostico-fachadas',
    'seguimiento-de-obra', 'streaming', 'inspeccion-precompra',
];
if (in_array($pageKey, array_merge($servicePages, ['inspeccion-comunidades-propietarios', 'inspeccion-cubiertas-filtraciones']), true)) {
    $graph[2]['mainEntity'] = ['@id' => $currentUrl . '#service'];
    $graph[] = [
        '@type' => 'Service', '@id' => $currentUrl . '#service',
        'name' => explode(' | ', $pageTitle)[0], 'url' => $currentUrl,
        'description' => $pageDescription,
        'provider' => ['@id' => $siteUrl . '/#organization'],
        'mainEntityOfPage' => ['@id' => $currentUrl . '#webpage'],
    ];
}
// The services index already shows these offers to visitors.
if ($pageKey === 'servicios') {
    $serviceNames = [
        'Inspección técnica de edificios con drones', 'Termografía de edificios con dron',
        'Fotogrametría 3D de edificios', 'Diagnóstico de fachadas',
        'Seguimiento de obra con drones', 'Peritaje en streaming', 'Inspección precompra',
    ];
    $items = [];
    foreach ($servicePages as $i => $slug) {
        $items[] = [
            '@type' => 'ListItem', 'position' => $i + 1,
            'name' => $serviceNames[$i], 'url' => $siteUrl . '/' . $slug . '/',
        ];
    }
    $graph[2]['mainEntity'] = ['@type' => 'ItemList', 'itemListElement' => $items];
}
if (isset($pageArticle)) {
    $graph[2]['mainEntity'] = ['@id' => $currentUrl . '#article'];
    $graph[2]['breadcrumb'] = ['@id' => $currentUrl . '#breadcrumb'];
    $graph[] = [
        '@type' => 'BreadcrumbList', '@id' => $currentUrl . '#breadcrumb',
        'itemListElement' => [
            ['@type' => 'ListItem', 'position' => 1, 'name' => 'Inicio', 'item' => $siteUrl . '/'],
            ['@type' => 'ListItem', 'position' => 2, 'name' => 'Blog', 'item' => $siteUrl . '/blog/'],
            ['@type' => 'ListItem', 'position' => 3, 'name' => $pageArticle['headline'], 'item' => $currentUrl],
        ],
    ];
    $graph[] = [
        '@type' => 'BlogPosting', '@id' => $currentUrl . '#article',
        'headline' => $pageArticle['headline'], 'description' => $pageDescription,
        'image' => array_map(fn($image) => $siteUrl . $image, $pageArticle['images']),
        'author' => ['@type' => 'Organization', 'name' => 'EuroDroneX', 'url' => $siteUrl . '/about/'],
        'publisher' => ['@id' => $siteUrl . '/#organization'],
        'mainEntityOfPage' => ['@id' => $currentUrl . '#webpage'],
        'inLanguage' => 'es',
    ];
}
?>
<script type="application/ld+json"><?= json_encode(['@context' => 'https://schema.org', '@graph' => $graph], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP) ?></script>
