# EurodroneX — sitio oficial PHP

La raíz de `eurodronex-web` es el único proyecto activo desde el 21 de septiembre de 2026. Dominio canónico: https://eurodronex.com/.

## Estructura y contenido

- Las páginas PHP están en la raíz; los componentes reutilizables, en `components/`.
- `assets/` contiene CSS, JavaScript, imágenes y fuentes locales. El diseño conserva el aspecto original de Carlos y las fotografías en blanco y negro con color al pasar el cursor.
- `services/common-head.php` centraliza los metadatos y recursos. `services/structured-data.php` genera datos estructurados de las páginas actuales.
- `sitemap.xml` contiene 20 páginas y `sitemap-images.xml` las fotografías principales. Regenerar ambos con `python tools/update-image-sitemap.py` después de cambiar imágenes o páginas.
- `archive/` es una referencia histórica: contiene el diseño anterior denominado dronix y los archivos de Base44/React. No forma parte del sitio publicado. Para añadir contenido, copiar literalmente los textos aprobados de esa referencia; no reescribirlos ni alterar el diseño.
- `copia-dronex/` ya no es el directorio de trabajo.
- `.audit-work/` y `archive/.audit-work/` contienen pruebas y capturas temporales y están excluidos de Git.

## Desarrollo local

Desde la raíz:

```powershell
& C:\xampp\php\php.exe -S 127.0.0.1:8096 router.php
```

Abrir http://127.0.0.1:8096/. El servidor PHP integrado no aplica compresión ni reglas Apache; para medir rendimiento y redirecciones debe usarse Apache con `.htaccess`.

Editar los ajustes comunes en `assets/css/site.css`. Si se cambia una hoja original de los manifiestos `services/data/*-styles.json`, regenerar `assets/css/pages/`:

```sh
npm install
npm run build:css
```

Node solo se usa para regenerar estilos; el alojamiento ejecuta PHP y recibe los CSS ya generados. No ejecutar `tools/build.cjs`: es el importador histórico de WordPress y sobrescribe contenido.

## Formulario

El formulario usa PHPMailer y SMTP; el destinatario configurado es eurodronex@gmail.com. El usuario confirmó su funcionamiento en producción. reCAPTCHA se valida en el servidor. Los secretos permanecen en `services/config.local.php`, excluido de Git: no publicarlo ni incluirlo en paquetes de actualización.

El formulario conserva CSRF, limitación de frecuencia y hasta tres imágenes JPG/PNG/WebP de 2 MB cada una. `var/` contiene sesiones y almacenamiento técnico. El blog se mantiene en páginas PHP y componentes; no hay panel editorial ni base de datos de contenidos en esta versión.

## Despliegue

Subir las páginas PHP, `assets/`, `components/`, `services/`, `.htaccess`, `robots.txt` y los dos sitemaps. Conservar la configuración privada que ya funciona en el servidor y el bloque de selección de PHP añadido por cPanel al `.htaccess`.

No subir `archive/`, `copia-dronex/`, `.audit-work/`, `.git/`, `node_modules/`, `tools/`, `docs/`, archivos de error ni sesiones locales de `var/`. No borrar la web para aplicar una actualización: sobrescribir únicamente los archivos del paquete indicado.

Los informes Lighthouse de desarrollo no equivalen a una medición del servidor de producción. Tras desplegar, exportar los nuevos informes de móvil y escritorio como JSON para comprobar el resultado real.
