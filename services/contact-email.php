<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

function contact_mailer(array $config, array $data, array $attachments): PHPMailer
{
    if (($config['mail_transport'] ?? '') !== 'smtp'
        || empty($config['smtp_host']) || empty($config['smtp_username']) || empty($config['smtp_password'])
        || !in_array($config['smtp_encryption'] ?? '', ['tls', 'ssl'], true)) {
        throw new RuntimeException('SMTP configuration incomplete');
    }
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = $config['smtp_host'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_encryption'];
    $mail->Timeout = 15;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['mail_from'], $config['mail_from_name']);
    $mail->addAddress($config['mail_to']);
    $mail->addReplyTo($data['email'], $data['nombre']);
    $mail->Subject = 'Nueva solicitud técnica — Eurodrónex';
    $labels = [
        'nombre' => 'Nombre', 'empresa' => 'Empresa', 'telefono' => 'Teléfono',
        'email' => 'Email', 'tipoCliente' => 'Tipo de cliente', 'tipoServicio' => 'Servicio',
        'tipoEdificio' => 'Tipo de edificio', 'ubicacion' => 'Ubicación',
        'urgencia' => 'Urgencia', 'mensaje' => 'Mensaje',
    ];
    $body = "Nueva solicitud recibida desde la web de Eurodrónex\n\n";
    foreach ($labels as $key => $label) {
        $body .= $label . ': ' . ($data[$key] ?? '') . "\n";
    }
    $mail->isHTML(false);
    $mail->Body = $body;
    foreach ($attachments as $attachment) {
        $mail->addStringAttachment($attachment['content'], $attachment['name'], 'base64', $attachment['mime']);
    }
    return $mail;
}

function send_contact_email(array $config, array $data, array $attachments): bool
{
    try {
        return contact_mailer($config, $data, $attachments)->send();
    } catch (Throwable $error) {
        error_log('Eurodronex: SMTP contact delivery failed. Check private mail configuration and provider logs.');
        return false;
    }
}
