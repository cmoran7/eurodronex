# Juntas de dilatación: contenido y despliegue

## Dónde se ha integrado
- Inicio: contexto de arquitectos e ingenieros, Madrid y drones como herramienta. Se han sustituido las afirmaciones incondicionales sobre ausencia de medios auxiliares por la condición indicada por Carlos.
- Inicio, sección 80%: los dos párrafos nuevos completos. Se mantiene el ejemplo concreto del ahorro, sin generalizarlo a todas las inspecciones.
- Inspección técnica: contexto de medios auxiliares y captura aérea, con Madrid en título y H1.
- Fachadas: título local, referencia a patologías, breve extracto del texto social y enlace al artículo.
- Blog: nueva tarjeta. Artículo de cubiertas: enlace desde la referencia a juntas deterioradas.
- Nueva URL: /juntas-de-dilatacion-fachadas-cubiertas/.

## Artículo
Texto técnico completo facilitado por Carlos, conservando sus párrafos. Se corrige el encabezado de delatación a dilatación y se añaden encabezados, enlaces, pies descriptivos y llamada a contacto. El texto social aporta el extracto, sin duplicar todos sus párrafos ni publicar hashtags. La explicación del vídeo se conserva en un desplegable junto al reproductor; se omiten los marcadores de citas sin fuente y la nota bibliográfica final no verificable.

## Imágenes y vídeo
- Corregido junta-de-dilatacioon-vertical.jpg a junta-de-dilatacion-vertical.jpg.
- Fotografías originales con alt descriptivo, dimensiones y carga diferida. Blanco y negro por defecto y color con hover o foco de teclado.
- MOV original conservado en assets/videos/junta-dilatacion.mov, excluido del ZIP de despliegue.
- MP4 H.264 de 1280x720 y 41,73 segundos: 5,7 MB frente a 35,6 MB del original. No tiene audio. Sin reproducción automática y preload=none, con portada extraída del propio vídeo.

## SEO
Canonical propio, title, description, Open Graph de artículo, BlogPosting y BreadcrumbList coherentes con el contenido visible. No se inventan fechas de publicación, fuentes o autores personales. El vídeo es un apoyo del artículo, no una promesa de resultado enriquecido de vídeo.
Se mantienen dos sitemaps: páginas (21 URL) e imágenes (57 referencias, incluidas las dos fotos y la portada del vídeo). Palabras clave distribuidas por intención: inspección de edificios en Madrid en el servicio general, inspección de fachadas en Madrid y patologías en Fachadas, inspección de cubiertas en el artículo relacionado.

## Comprobaciones
21 páginas responden 200, con un H1, canonical correcto y alt presente. Sin enlaces internos rotos ni errores JavaScript. Comprobado a 390 y 1440 píxeles en Inicio, Blog, artículo, Inspección y Fachadas. Reproducción real del MP4 validada en Edge; carga inicial del vídeo desactivada. Efecto de gris a color verificado. Archivos del sitemap de imágenes presentes. PHP lint y git diff --check correctos. No desplegado ni probado en el hosting.

## Subida y revisión
1. Subir el contenido del ZIP a la raíz manteniendo carpetas, sin borrar el sitio. No se incluye configuración privada, herramientas temporales ni el MOV original.
2. Revisar Inicio, Inspección técnica, Fachadas, Blog y el nuevo artículo, incluyendo reproducción del vídeo en teléfono.
3. En Search Console, inspeccionar la nueva URL tras publicarla, probar la URL publicada y solicitar indexación. Los dos sitemaps conservan sus direcciones habituales.
4. Medir impresiones, consultas y contactos después de la publicación. No se garantiza una posición ni un plazo de indexación.

## Archivos del ZIP
- assets/css/site.css
- assets/img/inspeccion-junta-dilatacion-fachada-video.jpg
- assets/img/junta-de-dilatacion-en-cubierta-transitable.jpg
- assets/img/junta-de-dilatacion-vertical.jpg
- assets/videos/inspeccion-junta-dilatacion-fachada.mp4
- components/blog-01-nuestro-blog.php
- components/como-inspeccionar-cubiertas-sin-riesgo-ni-andamios-01-como-inspeccionar-cubiertas-sin-riesgo-ni-andamios.php
- components/diagnostico-fachadas-01-inspeccion-pre-compra.php
- components/diagnostico-fachadas-02-patologia-o-lesiones-de-dificil-identificacion-desde-el.php
- components/index-01-ingenieria-tecnica.php
- components/index-02-80.php
- components/inspeccion-tecnica-con-drones-01-inspeccion-tecnica-de-edificios-con-drones.php
- components/inspeccion-tecnica-con-drones-02-andamios-costosos-plazos-eternos-riesgos-laborales-y-te.php
- components/juntas-de-dilatacion-contenido.php
- diagnostico-fachadas.php
- inspeccion-tecnica-con-drones.php
- juntas-de-dilatacion-fachadas-cubiertas.php
- router.php
- services/common-head.php
- services/structured-data.php
- sitemap-images.xml
- sitemap.xml
