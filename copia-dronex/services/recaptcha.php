<?php
function recaptcha_response_valid(array $result, array $config, ?int $now = null): bool
{
    $now ??= time();
    $timestamp = is_string($result['challenge_ts'] ?? null) ? strtotime($result['challenge_ts']) : false;
    return ($result['success'] ?? false) === true
        && ($result['action'] ?? '') === 'contact'
        && is_numeric($result['score'] ?? null)
        && (float) $result['score'] >= (float) $config['recaptcha_min_score']
        && (float) $result['score'] <= 1
        && in_array($result['hostname'] ?? '', $config['recaptcha_hostnames'], true)
        && $timestamp !== false && $now - $timestamp <= 120 && $timestamp <= $now + 10;
}

function verify_contact_recaptcha(array $config, mixed $token): bool
{
    if (!is_string($token) || $token === '' || strlen($token) > 8192
        || empty($config['recaptcha_secret_key']) || !function_exists('curl_init')) {
        return false;
    }
    $curl = curl_init('https://www.google.com/recaptcha/api/siteverify');
    curl_setopt_array($curl, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query(['secret' => $config['recaptcha_secret_key'], 'response' => $token]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
    ]);
    $raw = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    if (!is_string($raw) || $status !== 200) {
        return false;
    }
    $result = json_decode($raw, true);
    return is_array($result) && recaptcha_response_valid($result, $config);
}
