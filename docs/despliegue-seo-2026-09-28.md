# Despliegue SEO — 28 de septiembre de 2026

Subir el contenido del ZIP a la raíz del dominio conservando las carpetas. No borrar el sitio ni sustituir services/config.local.php. Antes de sobrescribir .htaccess conservar cualquier bloque PHP añadido por cPanel en producción.

## Cambios
- Metadatos más específicos en ocho páginas (Ingeniería, seis servicios y Contacto). Termografía y el resto conservan sus metadatos revisados.
- Cuatro frases literales del archivo aprobado services/data/services.json dentro de archive: condiciones del análisis térmico, usos de modelos 3D, contenido del informe de fachadas y utilidad del registro cronológico de obra.
- Nueve enlaces contextuales sin reescribir los párrafos aprobados.
- Enlaces de artículos apuntan directamente a destinos actuales.
- Precompra en el menú lleva a Precompra, no a Fachadas; el footer diferencia ambos servicios.
- Presupuesto de Fachadas lleva a Contacto; seis tarjetas del menú tienen enlaces HTML rastreables.
- 404 con noindex, sin canonical ni datos estructurados de página válida.
- Datos estructurados de servicios conectados con WebPage, catálogo de servicios y perfil oficial de Instagram.
- Incluye la redirección pendiente de /fotogrametria/ y /fotogrametria a /fotogrametria-3d-edificios/.

## Verificación local
20 páginas con HTTP 200, un H1, canonical correcto y alt presente en todas las imágenes. Enlaces internos y archivos de imagen comprobados sin errores HTTP. JSON-LD parseable. Sin errores JavaScript. Sin desbordamiento horizontal en cinco páginas a 390 y 1440 px. 54 imágenes de sitemap presentes. PHP lint y git diff --check correctos.
Redirección comprobada con el router PHP local (301); Apache/cPanel y producción requieren comprobación tras subir. No se han enviado formularios ni alterado credenciales. No se ha ejecutado Lighthouse ni se afirma una puntuación nueva.

## Después de subir
1. Vaciar caché del hosting si se usa. Revisar menú, enlaces de footer y botón de presupuesto.
2. Comprobar /fotogrametria/ redirige a /fotogrametria-3d-edificios/.
3. Inspeccionar las siete URL de servicios e Ingeniería en Search Console: Probar URL publicada, verificar indexación permitida y canonical, solicitar indexación cuando corresponda.
4. Mantener ambos sitemaps actuales, sin reenviarlos por estos cambios: no hay URLs nuevas.
5. Comparar los siguientes 28 días completos con los 28 anteriores por página y consulta, filtrando España. Registrar también solicitudes reales; las posiciones no prueban ventas.

## Archivos incluidos
- .htaccess
- 404.php
- assets/css/site.css
- components/como-inspeccionar-cubiertas-sin-riesgo-ni-andamios-01-como-inspeccionar-cubiertas-sin-riesgo-ni-andamios.php
- components/como-inspeccionar-un-edificio-sin-andamios-en-2026-01-como-inspeccionar-un-edificio-sin-andamios-en-2026.php
- components/diagnostico-fachadas-01-inspeccion-pre-compra.php
- components/diagnostico-fachadas-02-patologia-o-lesiones-de-dificil-identificacion-desde-el.php
- components/footer.php
- components/fotogrametria-3d-edificios-01-fotogrametria-3d-para-edificios-y-estructuras.php
- components/header.php
- components/ingenieria-01-ingenieros-y-arquitectos-no-solo-operadores.php
- components/inspeccion-precompra-01-inspeccion-tecnica-para-inmobiliarias.php
- components/inspeccion-tecnica-con-drones-02-andamios-costosos-plazos-eternos-riesgos-laborales-y-te.php
- components/inspeccion-tecnica-con-drones-03-beneficios.php
- components/por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-piloto-01-por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-.php
- components/seguimiento-de-obra-01-seguimiento-o-visita-de-obra.php
- components/seguimiento-de-obra-07-preguntas-frecuentes.php
- components/streaming-07-preguntas-frecuentes.php
- components/termografia-con-dron-01-termografia-de-edificios-con-dron.php
- components/termografia-con-dron-08-lecturas-recomendadas-sobre-inspeccion-de-edificios.php
- contacto.php
- diagnostico-fachadas.php
- fotogrametria-3d-edificios.php
- ingenieria.php
- inspeccion-precompra.php
- inspeccion-tecnica-con-drones.php
- seguimiento-de-obra.php
- services/common-head.php
- services/redirects.php
- services/structured-data.php
- streaming.php
