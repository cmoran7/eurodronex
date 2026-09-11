<?php
$org = [
	'@type' => 'Organization',
	'@id' => url('/#organizacion'),
	'name' => 'EurodroneX',
	'logo' => url('/assets/img/logo-eurodronex-oficial.png'),
	'legalName' => 'Dronspain Solutions S.L.',
	'taxID' => 'B-26912485',
	'url' => url('/'),
	'email' => 'contacto@eurodronex.com',
	'telephone' => '+34611623480',
	'address' => [
		'@type' => 'PostalAddress',
		'streetAddress' => 'Calle Atenas 1, bajo a',
		'addressLocality' => 'Torrejón de Ardoz',
		'postalCode' => '28850',
		'addressRegion' => 'Madrid',
		'addressCountry' => 'ES',
	],
];
$graph = [
	$org,
	[
		'@type' => 'WebSite',
		'@id' => url('/#web'),
		'url' => url('/'),
		'name' => 'EurodroneX',
		'inLanguage' => 'es-ES',
		'publisher' => ['@id' => url('/#organizacion')],
	],
	[
		'@type' => 'WebPage',
		'@id' => $canonical . '#pagina',
		'url' => $canonical,
		'name' => $pageTitle,
		'description' => $pageDescription,
		'inLanguage' => 'es-ES',
		'isPartOf' => ['@id' => url('/#web')],
	],
];
if ($path !== '/' && $path !== '/404') {
	$crumbs = [['@type' => 'ListItem', 'position' => 1, 'name' => 'Inicio', 'item' => url('/')]];
	$crumbs[] = [
		'@type' => 'ListItem',
		'position' => 2,
		'name' => explode(' | ', $pageTitle)[0],
		'item' => $canonical,
	];
	$graph[] = ['@type' => 'BreadcrumbList', 'itemListElement' => $crumbs];
}
if (($pageType ?? '') === 'ServiceDetail') {
	$graph[] = [
		'@type' => 'Service',
		'name' => explode(' | ', $pageTitle)[0],
		'description' => $pageDescription,
		'url' => $canonical,
		'provider' => ['@id' => url('/#organizacion')],
		'areaServed' => ['Madrid', 'Toledo', 'Guadalajara', 'Segovia', 'Ávila'],
	];
}
if (($pageType ?? '') === 'BlogPost') {
	$graph[] = [
		'@type' => 'Article',
		'headline' => explode(' | ', $pageTitle)[0],
		'description' => $pageDescription,
		'mainEntityOfPage' => $canonical,
		'author' => ['@id' => url('/#organizacion')],
		'publisher' => ['@id' => url('/#organizacion')],
		'image' => url($ogImage),
	];
}
if (!empty($GLOBALS['pageFaqs'])) {
	$graph[] = [
		'@type' => 'FAQPage',
		'@id' => $canonical . '#preguntas-frecuentes',
		'mainEntity' => array_map(
			fn($q) => [
				'@type' => 'Question',
				'name' => $q['q'],
				'acceptedAnswer' => ['@type' => 'Answer', 'text' => $q['a']],
			],
			$GLOBALS['pageFaqs'],
		),
	];
}
?><script type="application/ld+json"><?= json_encode(
	['@context' => 'https://schema.org', '@graph' => $graph],
	JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP,
) ?></script>
