# Despliegue acumulado: textos e imágenes

Este ZIP sustituye al paquete de la tanda 02. Incluye sus textos y todas las correcciones posteriores; sirve tanto si ya subiste el anterior como si no.

Extraer despliegue-textos-imagenes-completo.zip y subir su contenido a la raíz del subdominio, manteniendo carpetas. Subir assets primero, después components y services, y finalmente los XML, robots.txt y .htaccess (archivo oculto). No subir docs ni tools.

## Resultado

- sitemap.xml: 20 páginas, sin etiquetas de imágenes.
- sitemap-images.xml: 54 referencias repartidas por página, 32 imágenes únicas.
- 25 recursos adicionales renombrados en esta revisión (23 imágenes y 2 iconos), además de las 12 imágenes de la tanda 02. Sin nombres automáticos en las referencias servidas.
- Alt descriptivos en fotografías e ilustraciones; iconos decorativos con alt vacío; mapas con descripción. Los fondos CSS no admiten alt.
- Redirecciones 301 de nombres antiguos y versionado de CSS conservados.
- No se han reescrito los textos aprobados ni cambiado el diseño.

## Comprobaciones en el hosting

- Abrir inicio, servicios, sobre nosotros, ingeniería y las seis páginas de servicios actualizadas.
- Revisar imágenes, blanco y negro/hover, menú y móvil.
- /assets/img/6bef06707f0a.jpg debe redirigir a /assets/img/fachada-paneles-ventanas-detalle.jpg.
- Revisar ambos sitemaps: deben contener URLs del dominio definitivo eurodronex.com, no del subdominio de prueba.
- Vaciar caché del hosting si corresponde; recargar el navegador.

## Indexación

robots.txt mantiene Disallow: / para el sitio de prueba. Incluye las dos declaraciones Sitemap del dominio definitivo. No desplegar este robots.txt bloqueado en el dominio definitivo al lanzar la web. En el lanzamiento: permitir rastreo, activar environment=production en configuración local, revisar canonical y registrar ambos sitemaps en Search Console. No se modifica configuración privada ni correo en este paquete.

El sitemap ayuda al descubrimiento; nombres y alt son señales descriptivas, no garantías de indexación. Los fondos decorativos CSS conservan su diseño y no tienen un atributo alt aplicable.

## Archivos para subir

- `.htaccess`
- `assets/css/elementor-post-118-css-1c071e81421a.css`
- `assets/css/elementor-post-120-css-a9270ee9fbc9.css`
- `assets/css/elementor-post-121-css-9dfad2ec15da.css`
- `assets/css/elementor-post-2231-css-7fdee8ce6001.css`
- `assets/css/elementor-post-535-css-d899e9d74ab5.css`
- `assets/css/elementor-post-536-css-dd532705b4a9.css`
- `assets/css/elementor-post-537-css-2552c1b7a521.css`
- `assets/css/elementor-post-559-css-4ea9df57f0fd.css`
- `assets/css/elementor-post-560-css-9258779c076a.css`
- `assets/css/elementor-post-8-css-fd96153a6f4c.css`
- `assets/img/corrosion-junta-panel-metalico.webp`
- `assets/img/cubierta-plana-edificio.webp`
- `assets/img/desprendimiento-revestimiento-fachada.webp`
- `assets/img/detalle-desprendimiento-revestimiento.webp`
- `assets/img/dron-en-vuelo-sobre-bosque.jpg`
- `assets/img/dron-inspeccion-edificio-construccion.avif`
- `assets/img/dron-planos-ingenieria.avif`
- `assets/img/edificio-residencial-blanco-negro.jpg`
- `assets/img/edificio-residencial-inspeccion-precompra.jpg`
- `assets/img/encuentro-chimenea-cubierta-tejas.webp`
- `assets/img/estructura-edificio-red-proteccion.webp`
- `assets/img/fachada-balcones-blanco-negro.webp`
- `assets/img/fachada-balcones-paneles-colores.webp`
- `assets/img/fachada-edificio-hormigon.jpg`
- `assets/img/fachada-edificio-paneles-ventanas.jpg`
- `assets/img/fachada-hormigon-cielo.jpg`
- `assets/img/fachada-paneles-blanco-negro.jpg`
- `assets/img/fachada-paneles-ventanas-detalle.jpg`
- `assets/img/fisuras-pavimento-cubierta.webp`
- `assets/img/humedades-revestimiento-fachada.png`
- `assets/img/icono-camara-streaming.svg`
- `assets/img/icono-evolucion-obra.svg`
- `assets/img/inspeccion-cubierta-tejas.webp`
- `assets/img/logo-eurodronex-fondo-oscuro.png`
- `assets/img/modelo-3d-vivienda-detalle.jpg`
- `assets/img/modelo-3d-vivienda-perspectiva.jpg`
- `assets/img/modelo-topografico-terreno.webp`
- `assets/img/modelo-tridimensional-vivienda-miniatura.jpg`
- `assets/img/modelo-tridimensional-vivienda.jpg`
- `assets/img/tecnico-dron-obra.avif`
- `assets/img/termografia-aerea-edificios.webp`
- `assets/img/termografia-fachadas-edificio.jpeg`
- `assets/img/visita-equipo-tecnico-obra.jpg`
- `assets/img/visita-tecnica-obra-construccion.jpg`
- `assets/img/vista-aerea-cubiertas-edificio-detalle.webp`
- `assets/img/vista-aerea-cubiertas-edificio.webp`
- `assets/img/vivienda-cartel-venta.webp`
- `components/about-01-sobre-eurodronex.php`
- `components/contacto-03-nacional.php`
- `components/diagnostico-fachadas-01-inspeccion-pre-compra.php`
- `components/diagnostico-fachadas-02-patologia-o-lesiones-de-dificil-identificacion-desde-el.php`
- `components/diagnostico-fachadas-05-otros-servicios-relacionados.php`
- `components/footer.php`
- `components/fotogrametria-3d-edificios-01-fotogrametria-3d-para-edificios-y-estructuras.php`
- `components/header.php`
- `components/index-03-servicios.php`
- `components/index-08-pilotos-ingenieros-no-solo-operadores.php`
- `components/index-10-nacional.php`
- `components/index-12-servicio-tecnico-pre-compra.php`
- `components/ingenieria-02-ingenieria-especializada-en-edificacion.php`
- `components/inspeccion-precompra-01-inspeccion-tecnica-para-inmobiliarias.php`
- `components/inspeccion-tecnica-con-drones-01-inspeccion-tecnica-de-edificios-con-drones.php`
- `components/inspeccion-tecnica-con-drones-02-andamios-costosos-plazos-eternos-riesgos-laborales-y-te.php`
- `components/inspeccion-tecnica-con-drones-05-otros-servicios-relacionados.php`
- `components/para-quien-introduccion.php`
- `components/seguimiento-de-obra-05-otros-servicios-relacionados.php`
- `components/seguimiento-de-obra-06-contenido.php`
- `components/servicios-03-informes-de-patologias-de-fachadas-cubiertas-y-obras-en.php`
- `components/streaming-01-peritaje-en-streaming.php`
- `components/streaming-02-desplazamientos-tiempo-perdido-riesgos-o-puntos-de-muy-.php`
- `components/streaming-05-otros-servicios-relacionados.php`
- `components/streaming-06-contenido.php`
- `components/termografia-con-dron-01-termografia-de-edificios-con-dron.php`
- `components/termografia-con-dron-02-perdida-economica-y-falta-de-confort.php`
- `components/termografia-con-dron-05-otros-servicios-relacionados.php`
- `robots.txt`
- `services/common-head.php`
- `sitemap-images.xml`
- `sitemap.xml`
