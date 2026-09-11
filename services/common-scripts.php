<?php include_once __DIR__ . '/../components/cookie-preferences.php'; ?> <?php if (!empty($pageFaqs)): ?>
<script type="application/ld+json">
	<?= json_encode( [ '@context' => 'https://schema.org', '@type' => 'FAQPage', 'mainEntity' => array_map( fn($q) => [ '@type' => 'Question', 'name' => $q['q'], 'acceptedAnswer' => ['@type' => 'Answer', 'text' => $q['a']], ], $pageFaqs, ), ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP, ) ?>
</script>
<?php endif; ?>
<script src="/assets/js/site.js?v=<?= filemtime(ROOT . '/assets/js/site.js') ?>" defer></script>
