<?php
// Updates blog entries in the real sitemap.xml; preserves all other entries.
function update_blog_sitemap(): void
{
	$file = getenv('EDX_SITEMAP_PATH') ?: ROOT . '/sitemap.xml';
	$lock = fopen($file . '.lock', 'c');
	if (!$lock || !flock($lock, LOCK_EX)) {
		throw new RuntimeException('No se pudo bloquear el sitemap.');
	}
	try {
		$xml = new DOMDocument('1.0', 'UTF-8');
		$xml->preserveWhiteSpace = false;
		$xml->formatOutput = true;
		if (!$xml->load($file, LIBXML_NONET)) {
			throw new RuntimeException('El sitemap no es un XML válido.');
		}
		$ns = 'http://www.sitemaps.org/schemas/sitemap/0.9';
		$postUrls = array_map(fn($post) => url(post_path($post['slug'])), posts(true));
		foreach (iterator_to_array($xml->getElementsByTagName('url')) as $entry) {
			$loc = $entry->getElementsByTagName('loc')->item(0)?->textContent;
			if (in_array($loc, $postUrls, true)) {
				$entry->parentNode->removeChild($entry);
			}
		}
		foreach (posts() as $post) {
			$entry = $xml->createElementNS($ns, 'url');
			foreach (
				[
					'loc' => url(post_path($post['slug'])),
					'lastmod' => substr($post['modified'] ?? '2026-09-11', 0, 10),
					'changefreq' => 'monthly',
					'priority' => '0.8',
				]
				as $name => $value
			) {
				$element = $xml->createElementNS($ns, $name);
				$element->appendChild($xml->createTextNode($value));
				$entry->appendChild($element);
			}
			$xml->documentElement->appendChild($entry);
		}
		$tmp = $file . '.' . bin2hex(random_bytes(6)) . '.tmp';
		if ($xml->save($tmp) === false || !rename($tmp, $file)) {
			throw new RuntimeException('No se pudo actualizar sitemap.xml. Revise sus permisos.');
		}
	} finally {
		flock($lock, LOCK_UN);
		fclose($lock);
	}
}
