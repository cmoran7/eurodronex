# Contacto: PHPMailer SMTP y reCAPTCHA v3

## Estado

Integración preparada y verificada localmente sin enviar mensajes reales. Destino: eurodronex@gmail.com. Faltan credenciales SMTP, claves de reCAPTCHA y prueba real de recepción. Por defecto el transporte está desactivado y reCAPTCHA rechaza envíos sin configurar.

## Configuración privada del hosting

Crear services/config.local.php a partir de services/config.example.php, o añadir las opciones al archivo privado existente sin sobrescribir su configuración. No subir claves a Git ni compartir contraseñas por chat. El ejemplo no contiene secretos y no se utiliza automáticamente.

- mail_transport: smtp.
- mail_to: eurodronex@gmail.com.
- mail_from: dirección remitente autorizada por el proveedor SMTP; normalmente la del usuario SMTP.
- smtp_host, smtp_username y smtp_password: datos de la cuenta elegida.
- smtp_port y smtp_encryption: 587/tls (STARTTLS) o 465/ssl según proveedor.
- mail_from_name: Eurodrónex — Solicitudes web.
- recaptcha_enabled: true.
- recaptcha_site_key y recaptcha_secret_key: claves de reCAPTCHA v3, no v2 ni Enterprise.
- recaptcha_hostnames: dominios permitidos explícitamente. Ya incluye eurodronex.devnavigate.com, eurodronex.com y www.eurodronex.com.
- recaptcha_min_score: 0.5 inicialmente; revisar los resultados reales antes de ajustarlo.

El destinatario Gmail no obliga a enviar usando Gmail: se puede usar SMTP de BanaHosting con remitente autorizado. Si se elige Gmail, configurar su autenticación compatible con SMTP (por ejemplo contraseña de aplicación cuando la cuenta lo permita), no la contraseña normal del acceso web.

Registrar reCAPTCHA v3 en https://www.google.com/recaptcha/admin/create para los dominios propios. La clave pública llega al navegador; la secreta solo se utiliza en el servidor. PHP necesita cURL, OpenSSL, mbstring, fileinfo y PDO SQLite (limitador de solicitudes). No desactivar la validación TLS.

## Funcionamiento

- Google reCAPTCHA se carga al intentar enviar, genera un token nuevo y se valida en servidor: éxito, acción contact, dominio permitido, puntuación y antigüedad.
- No hay casilla «No soy un robot». No se oculta la insignia de Google.
- El formulario informa del uso de reCAPTCHA y enlaza privacidad y condiciones de Google. Revisar también la información de privacidad del sitio antes del lanzamiento definitivo.
- PHPMailer 7.1.1, obtenido del repositorio oficial, envía por SMTP con TLS. Conserva los tres adjuntos permitidos y establece Reply-To con el visitante.
- CSRF, honeypot y límite de solicitudes siguen activos.
- Sin SMTP o reCAPTCHA válidos no se muestra éxito. No se guardan solicitudes en CRM ni base de datos.

## Validación antes de considerarlo operativo

1. Subir el paquete y completar config.local.php en el hosting.
2. Enviar una solicitud de prueba autorizada desde el subdominio.
3. Comprobar recepción en eurodronex@gmail.com (también spam), caracteres españoles, campos y un adjunto.
4. Pulsar Responder: debe apuntar al visitante.
5. Comprobar un envío sin token: debe rechazarse.

El éxito SMTP significa que el servidor aceptó el mensaje; la recepción en el buzón debe comprobarse por separado.

## Comprobaciones ya realizadas

- Sintaxis PHP y JavaScript.
- Rechazo de respuestas reCAPTCHA con dominio/acción incorrectos, puntuación baja y token caducado.
- Construcción MIME con destinatario Gmail, Reply-To y adjunto, sin conexión SMTP.
- Navegador con Google y endpoint simulados: token incluido, acción contact, campos conservados ante error y botón rehabilitado.

## Textos pendientes

La comparación con los archivos de dronix muestra que aún no se han trasladado completos los bloques «Qué es y para qué sirve» de inspección técnica, termografía, fotogrametría, diagnóstico de fachadas, seguimiento de obra y streaming. Esto no significa que toda esa información falte: parte ya está en otros bloques. Seguimiento conserva la adaptación previamente aprobada. No se han cambiado textos comerciales en esta tarea.

## Archivos incluidos en el ZIP

- `assets/css/site.css`
- `assets/js/site.js`
- `components/como-inspeccionar-un-edificio-sin-andamios-en-2026-02-deja-una-respuesta-cancelar-la-respuesta.php`
- `components/contact-privacy-notice.php`
- `components/contacto-02-contenido.php`
- `components/diagnostico-fachadas-08-solicitar-presupuesto.php`
- `components/fotogrametria-3d-edificios-01-fotogrametria-3d-para-edificios-y-estructuras.php`
- `components/index-11-solicite-informacion.php`
- `components/inspeccion-tecnica-con-drones-09-solicitar-presupuesto.php`
- `components/seguimiento-de-obra-08-solicitar-presupuesto.php`
- `components/streaming-08-solicitar-presupuesto.php`
- `components/termografia-con-dron-09-solicitar-presupuesto.php`
- `services/PHPMailer/Exception.php`
- `services/PHPMailer/LICENSE`
- `services/PHPMailer/PHPMailer.php`
- `services/PHPMailer/SMTP.php`
- `services/bootstrap.php`
- `services/common-scripts.php`
- `services/config.example.php`
- `services/contact-email.php`
- `services/contact-handler.php`
- `services/recaptcha.php`
