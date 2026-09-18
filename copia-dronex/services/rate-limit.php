<?php
function rate_allowed(string $bucket, int $limit, int $seconds): bool
{
	global $config;
	$dir = $config['storage_path'];
	if (!is_dir($dir) && !mkdir($dir, 0700, true)) {
		return false;
	}
	$db = new PDO('sqlite:' . $dir . '/limits.sqlite', null, null, [
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	]);
	$db->exec('PRAGMA busy_timeout=3000');
	$db->exec(
		'CREATE TABLE IF NOT EXISTS limits (key TEXT PRIMARY KEY, started INTEGER NOT NULL, hits INTEGER NOT NULL)',
	);
	$key = hash('sha256', $bucket . '|' . ($_SERVER['REMOTE_ADDR'] ?? 'cli'));
	$db->exec('BEGIN IMMEDIATE');
	try {
		$db->prepare('DELETE FROM limits WHERE started < ?')->execute([time() - 86400]);
		$q = $db->prepare('SELECT started,hits FROM limits WHERE key=?');
		$q->execute([$key]);
		$r = $q->fetch(PDO::FETCH_ASSOC);
		if (!$r || time() - (int) $r['started'] >= $seconds) {
			$db->prepare('INSERT OR REPLACE INTO limits VALUES (?,?,1)')->execute([$key, time()]);
			$ok = true;
		} else {
			$ok = (int) $r['hits'] < $limit;
			$db->prepare('UPDATE limits SET hits=hits+1 WHERE key=?')->execute([$key]);
		}
		$db->exec('COMMIT');
		return $ok;
	} catch (Throwable $e) {
		$db->exec('ROLLBACK');
		throw $e;
	}
}
