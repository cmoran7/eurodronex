# Verificación local — 11 de septiembre de 2026

## Estructura

Páginas PHP en la raíz, variables SEO al inicio, HTML e includes directos. Componentes en una única carpeta plana. Se retiraron `pages/`, el controlador central y el registro de rutas del funcionamiento de la web. `sitemap.xml` es un archivo estático, con el formato de Transportes Cooper. Se preservaron las redirecciones de WordPress y se añadieron las de las rutas anidadas de la primera migración.

## Comprobaciones

- Sintaxis de 103 archivos PHP: sin errores.
- CSS Tailwind compilado.
- Rastreo local: 36 páginas, 59 recursos, 36 destinos internos y 27 entradas de sitemap, sin errores. Incluye título, descripción, H1, canonical, JSON-LD, imágenes y protección de rutas internas.
- El contenido HTTP del sitemap coincide con el archivo XML del disco.
- 22 pruebas de formulario y administración: acceso, CSRF, rotación de sesión, borradores, publicación, retirada, edición concurrente y actualización del XML. Correo deshabilitado y almacenamiento temporal aislado; no se enviaron mensajes.
- `git diff --check`: sin errores de espacios.
- Portada abierta en el navegador local y navegación/contenido inspeccionados. Esto no sustituye una aprobación visual exhaustiva de todos los tamaños de pantalla.

Informes detallados: `docs/qa/http-checks.json` y `docs/qa/flows.json`.

## Pendiente del alojamiento

No se ha desplegado ni modificado WordPress. Falta elegir alojamiento, configurar correo y credenciales editoriales, y comprobar en ese servidor Apache/.htaccess, HTTPS y entrega real de adjuntos. El servidor local utiliza `router.php`; estas pruebas no certifican la configuración de Apache del futuro proveedor.

Los datos legales están incorporados; no se han añadido analítica ni publicidad. Las páginas de demostración siguen excluidas del sitemap. El modo local conserva noindex; antes de publicar se debe configurar el modo producción y seguir `DESPLIEGUE.md`.
