# EurodroneX — web PHP

Migración local del proyecto entregado en `react/`. El sitio funciona con PHP, HTML renderizado en el servidor, CSS compilado y JavaScript nativo. No carga React, Vite, el SDK de Base44 ni servicios de Base44 en producción. La carpeta `react/` se conserva como referencia original.

## Arranque local

Desde esta carpeta, en PowerShell:

```powershell
& C:\xampp\php\php.exe -S 127.0.0.1:8093 router.php
```

Abrir http://127.0.0.1:8093. La vista local tiene `noindex` en metadatos y cabeceras por defecto; `robots.txt` es el archivo estático de producción. El dominio canónico configurado es https://eurodronex.com.

## Arquitectura editable

La estructura sigue Transportes Cooper:

- Las páginas PHP están en la raíz: `index.php`, `contacto.php`, `servicios.php` y las demás páginas con nombres descriptivos.
- Cada página declara sus variables SEO al inicio y contiene su HTML con includes directos de cabecera, contenido, pie y scripts.
- `components/`: una única carpeta de componentes reutilizables y bloques de contenido. Las secciones de portada son `home-*.php`.
- `services/common-head.php`: metadatos, canonical, Open Graph y recursos compartidos.
- `services/structured-data-json-ld.php`: datos estructurados. `common-scripts.php` añade los scripts y las preguntas frecuentes de la página.
- `services/page-init.php`: configuración y cabeceras antes de emitir HTML. No decide qué página servir.
- `services/data/`: datos de servicios, artículos y catálogos compartidos. El SEO de cada página se edita en su archivo PHP de la raíz.
- `sitemap.xml` y `robots.txt`: archivos estáticos reales. El editor actualiza las entradas de artículos en el XML al guardar; las demás entradas se mantienen editables.
- `.htaccess`: URLs limpias, redirecciones anteriores y protección de carpetas internas. `router.php` reproduce las rutas únicamente para el servidor local de PHP.
- `assets/`: imágenes, fuentes, CSS compilado y JavaScript nativo.

Para añadir una página, copiar una página PHP de la raíz, definir sus variables SEO e includes y añadir su URL a `sitemap.xml` si es indexable. `docs/routes.json` es el inventario de comprobaciones, no controla la web.

## Blog y administración

Se importaron los tres artículos presentes en `react/src/data/blog.js`. El usuario confirmó que no existen otros registros que importar.

El blog público se encuentra en `/blog`; el acceso en `/acceso` y el editor en `/admin-blog`. El acceso real queda deshabilitado hasta configurar email y hash de contraseña en el alojamiento. No se incluye una contraseña por defecto.

El administrador permite crear y editar artículos, elegir o subir imagen, gestionar secciones, destacar, publicar y retirar a borrador. Las URL de artículos existentes se conservan. Los borradores devuelven 404 públicamente y no aparecen en el sitemap.

El contenido inicial está en `services/data/blog.json`. Tras el primer guardado, la fuente activa es `posts.json` dentro del directorio privado de almacenamiento. Se mantienen copias de respaldo al guardar y un control de versión evita sobrescribir una edición concurrente.

Las pantallas de registro público, OAuth de Base44 y recuperación de contraseña de su plataforma no forman parte de esta web comercial independiente. El acceso editorial se sustituye por un administrador local configurado por el propietario; su contraseña se cambia en la configuración del servidor, generando un nuevo hash. No se conservaron llamadas a autenticación de Base44.

## Correo, privacidad y contenido externo

El formulario tiene validación en el servidor, protección CSRF, honeypot, límite de frecuencia y hasta tres imágenes JPG/PNG/WebP de 2 MB. El transporte está deshabilitado hasta elegir y configurar el alojamiento. No se han enviado correos de prueba a personas. Si no está disponible, el formulario muestra el email y teléfono de contacto; nunca informa de un éxito simulado.

Los textos legales originales se conservaron en `docs/sources/`. Se usaron los datos publicados de Dronspain Solutions S.L., NIF B-26912485 y Calle Atenas 1, bajo a, Torrejón de Ardoz, 28850. La privacidad incorpora explícitamente el email publicado para ejercer derechos. La política de cookies se adaptó al funcionamiento de esta versión: sesión técnica, preferencia local durante seis meses y autorización previa para cargar vídeos de YouTube. No hay analítica ni publicidad instaladas.

Los casos, vídeos y fichas de patologías están identificados como demostración en el original. Se conservaron sus avisos y se marcaron `noindex`, fuera del sitemap. El catálogo técnico y el resto de páginas públicas son indexables en modo producción. El servicio de inspección precompra, presente en WordPress pero ausente como ficha propia en Base44, se recuperó en `/inspeccion-precompra`.

## Compilación y pruebas

Solo hace falta Node para modificar/compilar Tailwind o ejecutar los verificadores de desarrollo. El alojamiento no necesita Node ni `node_modules`.

```powershell
pnpm install --ignore-scripts
pnpm run css
node tools/check-site.mjs
node tools/check-flows.mjs
```

`check-site.mjs` requiere el servidor local en 8093. `check-flows.mjs` inicia un servidor temporal en 8094, usa un administrador de prueba y almacenamiento aislado y lo limpia al terminar. No activa correo. Los informes se guardan en `docs/qa/`.

Los scripts archivados en `docs/migration-history/` documentan la conversión inicial y la reorganización. No deben ejecutarse sobre ediciones posteriores: regeneran contenido. Para mantener la web, editar directamente PHP, JSON, CSS y JS.

Véase `docs/DESPLIEGUE.md` para la configuración del servidor y `docs/VERIFICACION.md` para las comprobaciones y límites de esta entrega.
