<?php
header('Content-Type: application/xml; charset=UTF-8');
echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach (public_routes() as $route => $entry) {
    if ($entry['noindex'] ?? false) continue;
    echo '  <url><loc>'.e(url($route)).'</loc></url>' . "\n";
}
echo '</urlset>';
