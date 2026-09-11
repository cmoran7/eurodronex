<?php
declare(strict_types=1);

const ROOT = __DIR__ . '/..';
$config = [
	'base_url' => 'https://eurodronex.com',
	'environment' => getenv('EDX_ENV') ?: 'development',
	'mail_transport' => getenv('EDX_MAIL_TRANSPORT') ?: 'disabled',
	'mail_to' => 'contacto@eurodronex.com',
	'mail_from' => 'web@eurodronex.com',
	'admin_email' => getenv('EDX_ADMIN_EMAIL') ?: '',
	'admin_password_hash' => getenv('EDX_ADMIN_PASSWORD_HASH') ?: '',
	'storage_path' => getenv('EDX_STORAGE_PATH') ?: ROOT . '/var',
];
if (is_file(__DIR__ . '/config.local.php')) {
	$config = array_replace($config, require __DIR__ . '/config.local.php');
}
date_default_timezone_set('Europe/Madrid');
function e(mixed $v): string
{
	return htmlspecialchars((string) $v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
function content(string $name): array
{
	static $cache = [];
	return $cache[$name] ??= json_decode(
		file_get_contents(ROOT . '/services/data/' . $name . '.json'),
		true,
		512,
		JSON_THROW_ON_ERROR,
	);
}
function session_open(): void
{
	if (session_status() === PHP_SESSION_ACTIVE) {
		return;
	}
	global $config;
	$sessions = $config['storage_path'] . '/sessions';
	if (!is_dir($sessions)) {
		mkdir($sessions, 0700, true);
	}
	session_save_path($sessions);
	session_name('edx_session');
	session_start([
		'use_strict_mode' => 1,
		'cookie_httponly' => 1,
		'cookie_samesite' => 'Lax',
		'cookie_secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
	]);
}
function csrf_token(): string
{
	session_open();
	return $_SESSION['csrf'] ??= bin2hex(random_bytes(32));
}
function csrf_valid(): bool
{
	session_open();
	return isset($_SESSION['csrf']) &&
		is_string($_POST['csrf'] ?? null) &&
		hash_equals($_SESSION['csrf'], $_POST['csrf']);
}
function url(string $path = '/'): string
{
	global $config;
	return rtrim($config['base_url'], '/') . $path;
}
function image_attrs(string $src): string
{
	$dim = content('image-dimensions')[$src] ?? null;
	if (!$dim) {
		return '';
	}
	[$w, $h] = $dim;
	$set = [];
	foreach ([480, 960] as $size) {
		if ($w > $size) {
			$set[] = str_replace('.webp', '-' . $size . '.webp', $src) . ' ' . $size . 'w';
		}
	}
	$set[] = $src . ' ' . $w . 'w';
	return 'width="' .
		$w .
		'" height="' .
		$h .
		'" srcset="' .
		e(implode(', ', $set)) .
		'" sizes="(min-width: 1024px) 50vw, 100vw"';
}
function redirect_to(string $path, int $status = 303): never
{
	header('Location: ' . $path, true, $status);
	exit();
}
function posts(bool $all = false): array
{
	global $config;
	$file = $config['storage_path'] . '/posts.json';
	$list = is_file($file)
		? json_decode(file_get_contents($file), true, 512, JSON_THROW_ON_ERROR)
		: content('blog')['posts'];
	return array_values(array_filter($list, fn($p) => $all || ($p['published'] ?? true)));
}
function security_headers(): void
{
	header('X-Content-Type-Options: nosniff');
	header('Referrer-Policy: strict-origin-when-cross-origin');
	header('X-Frame-Options: SAMEORIGIN');
	header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
	header(
		"Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src https://www.youtube-nocookie.com; form-action 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'",
	);
}

function post_path(string $slug): string
{
	$original = [
		'inspeccionar-edificio-sin-andamios-2026' => 'como-inspeccionar-un-edificio-sin-andamios-en-2026',
		'arquitecto-drones-vs-piloto' => 'por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-piloto',
		'inspeccionar-cubiertas-sin-riesgo' => 'como-inspeccionar-cubiertas-sin-riesgo-ni-andamios',
	];
	return '/' . ($original[$slug] ?? $slug);
}

function find_post(string $slug): ?array
{
	foreach (posts() as $entry) {
		if ($entry['slug'] === $slug || post_path($entry['slug']) === '/' . $slug) {
			return $entry;
		}
	}
	return null;
}
