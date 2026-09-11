<?php
require_once __DIR__ . '/site.php';
$path = $pageCanonical ?? '/';
$noindex =
	$config['environment'] !== 'production' ||
	str_contains($pageRobots ?? '', 'noindex') ||
	isset($_GET['tipo']) ||
	isset($_GET['tema']);
security_headers();
if ($noindex) header('X-Robots-Tag: ' . (str_contains($pageRobots ?? '', 'nofollow') ? 'noindex, nofollow' : 'noindex, follow'));
// The technical session must start before any HTML is sent.
session_open();
