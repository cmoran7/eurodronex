<?php
// Build metadata from the current PHP page instead of the former WordPress URLs.
$siteUrl = rtrim($config['base_url'], '/');
$currentUrl = $siteUrl . $pageCanonical;
$graph = [
    [
        '@type' => 'Organization', '@id' => $siteUrl . '/#organization',
        'name' => 'EurodroneX', 'url' => $siteUrl . '/',
        'logo' => $siteUrl . '/assets/img/logo-eurodronex-fondo-oscuro.webp',
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
if (in_array($pageKey, $servicePages, true)) {
    $graph[] = [
        '@type' => 'Service', '@id' => $currentUrl . '#service',
        'name' => explode(' | ', $pageTitle)[0], 'url' => $currentUrl,
        'description' => $pageDescription,
        'provider' => ['@id' => $siteUrl . '/#organization'],
        'mainEntityOfPage' => ['@id' => $currentUrl . '#webpage'],
    ];
}
?>
<script type="application/ld+json"><?= json_encode(['@context' => 'https://schema.org', '@graph' => $graph], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP) ?></script>
