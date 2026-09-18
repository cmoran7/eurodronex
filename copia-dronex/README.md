# EurodroneX — copia independiente del diseño oficial

Referencia: https://eurodronex.com/ (con e), capturada el 18 de septiembre de 2026. Esta carpeta reproduce el contenido y diseño públicos de WordPress. No incorpora el contenido ampliado de la versión Base44/dronix.

## Abrir localmente

Desde esta carpeta:

```powershell
& C:\xampp\php\php.exe -S 127.0.0.1:8096 router.php
```

Abrir http://127.0.0.1:8096/. El proyecto anterior permanece fuera de esta carpeta y no se ha sustituido.

## Estructura

- Páginas PHP en la raíz, con título, descripción y canonical al principio y HTML con includes directos.
- `components/`: cabecera, pie, cookies, WhatsApp y secciones de cada página, identificadas por su nombre y orden.
- `services/common-head.php` y `common-scripts.php`: recursos comunes.
- `assets/css/`: estilos locales originales formateados y ajustes nativos en `site.css`. Se conservan clases e identificadores visuales del HTML publicado para mantener la apariencia. No se ejecuta WordPress ni Elementor.
- `assets/img/` y `assets/fonts/`: imágenes y fuentes locales.
- `assets/js/site.js`: menús, acordeones, formulario y consentimiento, sin React, jQuery ni plugins WordPress.
- `services/data/`: listas de hojas de estilo por página y datos estructurados del sitio original; no es un sistema de rutas ni una base de datos.
- `sitemap.xml`: XML estático con las 19 páginas originales.

Las fotos conservan el filtro original de saturación 0 y pasan a saturación 200% al hacer hover donde lo hace el sitio original. Los fondos con ampliación conservan también ese efecto. Se mantiene el movimiento reducido del navegador.

## Formulario y datos

El formulario conserva los campos y aspecto de la web original. Tiene validación PHP, CSRF, limitación de frecuencia y adjuntos JPG/PNG/WebP (hasta tres, de 2 MB). El transporte de correo está desactivado. No informa de éxito si no se ha enviado. No se han enviado mensajes de prueba.

No hay conexión con la base de datos de WordPress, usuarios ni administrador de blog en esta copia. Los tres artículos públicos se encuentran en sus páginas PHP. Los cambios editoriales se harán en componentes; un panel editorial puede incorporarse posteriormente si se solicita.

La sesión y el limitador técnico utilizan `var/` (SQLite solo para limitar solicitudes). No son una base de datos del contenido.

## Publicación posterior

PHP 8.2 con mbstring, fileinfo, PDO_SQLite y sesiones. Apache con mod_rewrite y AllowOverride habilitado. El contenido de esta carpeta debe ser la raíz de un dominio independiente; no está preparado para instalarse como subdirectorio URL de dronix.

Subir los PHP de raíz salvo `router.php`, `.htaccess`, `sitemap.xml`, `robots.txt`, `assets/`, `components/` y `services/`. No subir `tools/`, `docs/`, `var/` local ni las referencias descargadas. Crear almacenamiento privado escribible y configurar `services/config.local.php` a partir del ejemplo.

La copia queda en noindex y robots bloqueado mientras sea una muestra. No cambiar a producción ni habilitar correo hasta configurar y probar el alojamiento. Los textos legales son los del original, sin reescritura; antes de publicar definitivamente deben contrastarse con las integraciones que finalmente se mantengan. No se han instalado analítica, publicidad ni reCAPTCHA; el panel de consentimiento guarda la preferencia localmente.

Se conservaron las URLs originales (incluyendo la barra final). Cinco enlaces rotos existentes en artículos oficiales se redirigen a servicios equivalentes en `.htaccess` y `services/redirects.php`.

## Verificación

- 19 páginas y recursos comprobados en Edge a 1440 y 390 px.
- Filtro blanco y negro → color medido en el navegador y capturado antes/después.
- Menús de escritorio/móvil, acordeón animado y formulario con transporte desactivado.
- 19 rutas comprobadas en Apache real y protección de archivos internos.
- Informes y capturas locales en `docs/`.

Los scripts de `tools/` son herramientas de captura y verificación de esta migración. `build.cjs` regenera los archivos y no debe ejecutarse sobre ediciones posteriores. Para mantener la web, editar los PHP/CSS/JS directamente.
