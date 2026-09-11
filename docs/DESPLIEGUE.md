# Despliegue pendiente de elección de alojamiento

No se ha modificado el dominio, el WordPress en producción ni su servidor.

## Requisitos

- PHP 8.2 o superior con `mbstring`, `fileinfo`, `PDO_SQLite`, sesiones, DOM y JSON.
- Apache 2.4 con `mod_rewrite`, `.htaccess` habilitado y HTTPS. `mod_headers` permite las cabeceras de caché de recursos.
- Directorio privado escribible para sesiones, limitadores, artículos y copias. Preferible fuera de la raíz pública.
- El archivo `sitemap.xml` y su directorio deben permitir la actualización atómica desde PHP si se utiliza el editor de artículos.
- Directorio `assets/img` escribible por PHP si se usa la subida de portadas desde el administrador.
- Para los adjuntos: `upload_max_filesize` de al menos 3M y `post_max_size` de al menos 8M.

## Archivos a subir

Todos los archivos PHP de la raíz excepto `router.php`, `.htaccess`, `robots.txt`, `sitemap.xml`, y las carpetas `assets`, `components`, `services`. El router es solo para la vista previa local.

No subir `react`, `node_modules`, `tools`, `docs`, archivos de prueba ni sesiones locales. Aunque `.htaccess` bloquea sus rutas, no se necesitan en producción. Las fuentes utilizadas están en WOFF2; los TTF de la primera importación no se necesitan.

## Configuración

Copiar `services/config.example.php` a `services/config.local.php` en el alojamiento y configurar:

1. `base_url`: `https://eurodronex.com`.
2. `storage_path`: ruta privada con permisos del proceso PHP.
3. `admin_email`: cuenta del responsable editorial.
4. `admin_password_hash`: hash generado con `php tools/password-hash.php`. No guardar una contraseña en texto plano. No hay cuenta predeterminada.
5. `mail_to` y `mail_from`: buzones del dominio. Configurar el transporte de correo del alojamiento y su autenticación SPF/DKIM/DMARC con el proveedor. Activar `mail_transport = mail` solo después de configurarlo. Si el proveedor únicamente ofrece SMTP remoto, hay que incorporar el adaptador SMTP con sus parámetros antes de activar el envío.
6. `environment = production`: habilita la indexación pública en las cabeceras y metadatos. Mantener `development` en previews o staging.

La web redirige HTTP y `www` al dominio canónico cuando recibe peticiones del dominio final. Si el alojamiento termina TLS en un proxy, el proveedor debe configurar correctamente `HTTPS` en PHP para evitar bucles. No se confía automáticamente en cabeceras de proxy aportadas por cualquier cliente.

No cachear HTML que contenga sesiones/CSRF. Se puede cachear CSS, JavaScript, fuentes e imágenes; las cabeceras de PHP protegen los formularios y el editor.

## Verificación del cambio de servidor

- Respaldar WordPress y la base de datos antes del cambio.
- Comprobar TLS, rutas limpias y denegación de acceso a `services/config.local.php`, `services/data/blog.json` y almacenamiento privado desde Internet.
- Probar con autorización una solicitud real, recepción en el buzón, respuesta, adjuntos y carpeta de spam. `mail()` confirma la aceptación por el transporte, no garantiza la entrega al destinatario.
- Comprobar que `/robots.txt` permite rastrear y `/sitemap.xml` contiene URLs HTTPS del dominio final. Se sirve el archivo XML estático; el editor modifica sus entradas de artículos al guardar.
- Revisar las redirecciones del inventario de WordPress y no eliminar `services/redirects.php`.
- Verificar el dominio en Search Console y enviar el sitemap. Revisar cobertura, canonical elegida y errores 404 después de la sustitución.
- Revisar comercialmente las afirmaciones heredadas sobre ahorro, experiencia, plazos, alcance y cualificaciones antes de publicar. No se ha verificado documentación que las respalde durante esta migración.
- Sustituir/revisar el contenido marcado como demostración antes de permitir su indexación. No cambiar masivamente `noindex` a todas las rutas.

El cambio de PHP por sí mismo no garantiza posiciones ni plazos. La entrega cubre la base técnica; la medición de tráfico y conversiones, Search Console, campañas y datos de negocio requieren los accesos correspondientes.
