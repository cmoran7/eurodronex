# Despliegue: tanda 02, textos literales e imágenes

## Qué cambia

- 11 textos completos copiados literalmente de la versión pública de dronix: 6 presentaciones y 5 párrafos de casos de uso.
- Servicios: streaming, termografía, fotogrametría, diagnóstico de fachadas, inspección técnica con drones e inspección precompra.
- Diagnóstico de fachadas: título corregido con el H1 literal de dronix.
- Seguimiento de obra conserva los textos aprobados y publicados previamente.
- 12 imágenes con nombres descriptivos, referencias actualizadas y redirecciones 301 desde los nombres antiguos.
- sitemap.xml conserva sus 20 páginas e incorpora 51 referencias de imágenes (una imagen puede aparecer en varias páginas).
- Versionado de hojas CSS para que el navegador solicite las referencias actualizadas.
- Sin cambios de diseño, efectos, colores, menús ni configuración de correo.

## Cómo subir

Extraer `despliegue-tanda-02.zip` y subir SU CONTENIDO a la raíz del subdominio, conservando las carpetas. Contiene únicamente los archivos de esta tanda, sin credenciales ni configuración local. No subir la carpeta docs ni tools.

Subir primero assets, después components/services y finalmente sitemap.xml y .htaccess. Mostrar archivos ocultos en FileZilla para incluir .htaccess. Si existe caché del hosting, vaciarla después. No es necesario borrar las imágenes antiguas del servidor: sus URLs se redirigen.

## Qué revisar

1. Las seis páginas indicadas: párrafo de cabecera, casos de uso bajo El problema y título de diagnóstico de fachadas.
2. Inicio, Servicios y Para quién: imágenes compartidas y efecto blanco y negro al pasar el ratón.
3. Escritorio y teléfono: títulos, textos, botones, menú y que las imágenes carguen.
4. `/assets/img/202ff2d9f1c3.webp` debe redirigir a `/assets/img/corrosion-junta-panel-metalico.webp` en el hosting Apache/LiteSpeed.
5. `/sitemap.xml` debe mostrar las etiquetas image:image y image:loc.

## Indexación

El sitemap mantiene el dominio definitivo https://eurodronex.com. El entorno de prueba mantiene robots.txt bloqueado y noindex según su configuración: subir este paquete no activa la indexación. Cuando se publique en el dominio definitivo, habrá que habilitar el rastreo y revisar canonical, robots y Search Console. El sitemap facilita el descubrimiento; no garantiza indexación.

## Comprobaciones locales

- PHP lint de todos los componentes y common-head.php correcto.
- 20 páginas en 1440 y 390 px, sin recursos HTTP fallidos, imágenes rotas ni desbordamiento horizontal.
- 11 textos comprobados literalmente contra el HTML servido localmente y el texto publicado de dronix.
- XML generado con imágenes locales existentes; sin referencias antiguas en código servido.
- Redirecciones incluidas en .htaccess; comprobar el 301 en el hosting (el servidor PHP local no ejecuta .htaccess).

## Archivos incluidos

- `.htaccess`
- `assets/css/elementor-post-535-css-d899e9d74ab5.css`
- `assets/css/elementor-post-536-css-dd532705b4a9.css`
- `assets/css/elementor-post-537-css-2552c1b7a521.css`
- `assets/css/elementor-post-559-css-4ea9df57f0fd.css`
- `assets/img/corrosion-junta-panel-metalico.webp`
- `assets/img/desprendimiento-revestimiento-fachada.webp`
- `assets/img/edificio-residencial-inspeccion-precompra.jpg`
- `assets/img/fachada-edificio-hormigon.jpg`
- `assets/img/fachada-edificio-paneles-ventanas.jpg`
- `assets/img/modelo-tridimensional-vivienda-miniatura.jpg`
- `assets/img/modelo-tridimensional-vivienda.jpg`
- `assets/img/termografia-aerea-edificios.webp`
- `assets/img/termografia-fachadas-edificio.jpeg`
- `assets/img/visita-tecnica-obra-construccion.jpg`
- `assets/img/vista-aerea-cubiertas-edificio-detalle.webp`
- `assets/img/vista-aerea-cubiertas-edificio.webp`
- `components/diagnostico-fachadas-01-inspeccion-pre-compra.php`
- `components/diagnostico-fachadas-02-patologia-o-lesiones-de-dificil-identificacion-desde-el.php`
- `components/diagnostico-fachadas-05-otros-servicios-relacionados.php`
- `components/fotogrametria-3d-edificios-01-fotogrametria-3d-para-edificios-y-estructuras.php`
- `components/header.php`
- `components/index-03-servicios.php`
- `components/inspeccion-precompra-01-inspeccion-tecnica-para-inmobiliarias.php`
- `components/inspeccion-tecnica-con-drones-01-inspeccion-tecnica-de-edificios-con-drones.php`
- `components/inspeccion-tecnica-con-drones-02-andamios-costosos-plazos-eternos-riesgos-laborales-y-te.php`
- `components/inspeccion-tecnica-con-drones-05-otros-servicios-relacionados.php`
- `components/seguimiento-de-obra-05-otros-servicios-relacionados.php`
- `components/servicios-03-informes-de-patologias-de-fachadas-cubiertas-y-obras-en.php`
- `components/streaming-01-peritaje-en-streaming.php`
- `components/streaming-02-desplazamientos-tiempo-perdido-riesgos-o-puntos-de-muy-.php`
- `components/streaming-05-otros-servicios-relacionados.php`
- `components/termografia-con-dron-01-termografia-de-edificios-con-dron.php`
- `components/termografia-con-dron-02-perdida-economica-y-falta-de-confort.php`
- `components/termografia-con-dron-05-otros-servicios-relacionados.php`
- `services/common-head.php`
- `sitemap.xml`
