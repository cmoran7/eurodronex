<?php
require __DIR__ . '/../services/bootstrap.php';
require __DIR__ . '/../services/recaptcha.php';
require __DIR__ . '/../services/contact-email.php';
function check(bool $ok, string $name): void {
    if (!$ok) throw new RuntimeException($name);
    echo "OK: $name\n";
}
$now = time();
$valid = ['success' => true, 'action' => 'contact', 'hostname' => 'eurodronex.com', 'score' => 0.9, 'challenge_ts' => gmdate('c', $now)];
check(recaptcha_response_valid($valid, $config, $now), 'Valid captcha response');
foreach ([['success' => false], ['action' => 'login'], ['hostname' => 'other.example'], ['score' => 0.1], ['score' => 2], ['challenge_ts' => gmdate('c', $now - 121)], ['challenge_ts' => 'invalid']] as $bad) {
    check(!recaptcha_response_valid(array_replace($valid, $bad), $config, $now), 'Reject ' . array_key_first($bad));
}
check(!verify_contact_recaptcha($config, ['invalid']), 'Reject malformed token without network');
$testConfig = array_replace($config, ['mail_transport' => 'smtp', 'smtp_host' => 'smtp.example.test', 'smtp_username' => 'sender@example.test', 'smtp_password' => 'test-only', 'mail_from' => 'sender@example.test']);
$data = ['nombre' => 'Prueba sin envío', 'email' => 'visitor@example.test', 'mensaje' => 'Mensaje técnico con acentos'];
$mail = contact_mailer($testConfig, $data, [['content' => 'test attachment', 'name' => 'imagen-1.jpg', 'mime' => 'image/jpeg']]);
check($mail->getToAddresses()[0][0] === 'eurodronex@gmail.com', 'Correct recipient');
check(in_array('visitor@example.test', array_column($mail->getReplyToAddresses(), 0), true), 'Reply to visitor');
check($mail->SMTPDebug === 0 && $mail->SMTPSecure === 'tls', 'TLS and no debug');
check($mail->preSend(), 'Build MIME without connecting to SMTP');
check(str_contains($mail->getSentMIMEMessage(), 'imagen-1.jpg'), 'Attachment included');
try {
    contact_mailer($config, $data, []);
    throw new RuntimeException('Incomplete configuration was accepted');
} catch (RuntimeException $error) {
    check($error->getMessage() === 'SMTP configuration incomplete', 'Fail closed without SMTP settings');
}
