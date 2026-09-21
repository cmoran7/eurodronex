# Despliegue del 21 de septiembre de 2026

El proyecto oficial está en la raíz de eurodronex-web. Este paquete reúne los cambios de SEO/rendimiento en curso y los nuevos enlaces y textos de contacto. Las rutas del ZIP parten directamente de la raíz del dominio.

## Cambios de contacto

- Instagram y Google Maps en la columna Contacto del footer compartido.
- Párrafo introductorio completo, ayuda del mensaje, límites de imágenes y ámbito geográfico copiados literalmente de archive/components/contacto-content.php y archive/components/contact-form.php.
- Mismo diseño, formulario e integración de correo. No se ha enviado un mensaje real durante estas pruebas.

## SEO y rendimiento

- Metadatos corregidos; datos estructurados actuales sin URLs antiguas de WordPress.
- Fotografías optimizadas, variantes adaptables, fondos inferiores diferidos y prioridad de portada/fuentes.
- CSS agrupado; compresión y caché en Apache; correcciones de contraste y cierre de menú móvil.
- Sitemap de 20 páginas y sitemap de imágenes con 54 referencias a imágenes principales.
- Objetivo Lighthouse 100 en rendimiento todavía NO alcanzado. La última medición móvil completa anterior al traslado de carpetas fue 88/100 en rendimiento y 100 en accesibilidad, buenas prácticas y SEO. La medición de escritorio previa fue 99/100 en rendimiento. Son pruebas locales de distintas iteraciones, no resultados de producción ni una pareja de mediciones finales.

## Comprobaciones después del traslado

20 páginas responden 200 desde la raíz; todas tienen un H1 y atributos alt en sus imágenes. Instagram y Maps están en los 20 footers. Sin errores JavaScript detectados. Contacto revisado en 1440 y 390 px, sin desbordamiento horizontal. Cinco textos verificados literalmente contra archive. Apache comprobado: portada 200, archive devuelve 403 incluso con su propio .htaccess, configuración privada y registro de errores inaccesibles; redirecciones canónicas 301 y compresión gzip correctas.

## Subir

Extraer el ZIP y sobrescribir sus archivos en la raíz del dominio. No borrar la instalación. Conservar services/config.local.php y el bloque del .htaccess que cPanel añade para seleccionar la versión PHP. Incorporar las reglas nuevas del .htaccess manteniendo ese bloque.

No subir archive, copia-dronex, .audit-work, docs, tools, node_modules ni archivos de error. Las capturas de los PDF permanecen en archive/.audit-work y las nuevas comprobaciones en .audit-work; ambas carpetas están ignoradas por Git.

Tras desplegar, revisar contacto, footer, fotos al desplazarse, menú móvil y formularios. Exportar Lighthouse de móvil y escritorio como JSON para medir el servidor real.

## Archivos del ZIP

- `.htaccess`
- `assets/css/elementor-post-8-css-fd96153a6f4c.css`
- `assets/css/pages/about.css`
- `assets/css/pages/aviso-legal.css`
- `assets/css/pages/blog.css`
- `assets/css/pages/como-inspeccionar-cubiertas-sin-riesgo-ni-andamios.css`
- `assets/css/pages/como-inspeccionar-un-edificio-sin-andamios-en-2026.css`
- `assets/css/pages/contacto.css`
- `assets/css/pages/diagnostico-fachadas.css`
- `assets/css/pages/fotogrametria-3d-edificios.css`
- `assets/css/pages/index.css`
- `assets/css/pages/ingenieria.css`
- `assets/css/pages/inspeccion-precompra.css`
- `assets/css/pages/inspeccion-tecnica-con-drones.css`
- `assets/css/pages/pagina-de-privacidad.css`
- `assets/css/pages/para-quien.css`
- `assets/css/pages/politica-de-cookies.css`
- `assets/css/pages/por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-piloto.css`
- `assets/css/pages/seguimiento-de-obra.css`
- `assets/css/pages/servicios.css`
- `assets/css/pages/streaming.css`
- `assets/css/pages/termografia-con-dron.css`
- `assets/css/site.css`
- `assets/img/corrosion-junta-panel-metalico.webp`
- `assets/img/detalle-desprendimiento-revestimiento-480.webp`
- `assets/img/detalle-desprendimiento-revestimiento-800.webp`
- `assets/img/detalle-desprendimiento-revestimiento.webp`
- `assets/img/dron-en-vuelo-sobre-bosque.jpg`
- `assets/img/edificio-residencial-blanco-negro.jpg`
- `assets/img/edificio-residencial-inspeccion-precompra-480.webp`
- `assets/img/edificio-residencial-inspeccion-precompra-800.webp`
- `assets/img/fachada-balcones-blanco-negro-1600.webp`
- `assets/img/fachada-balcones-blanco-negro-640.webp`
- `assets/img/fachada-balcones-paneles-colores-1280.webp`
- `assets/img/fachada-balcones-paneles-colores-480.webp`
- `assets/img/fachada-balcones-paneles-colores-800.webp`
- `assets/img/fachada-edificio-hormigon.jpg`
- `assets/img/fachada-edificio-paneles-ventanas-480.webp`
- `assets/img/fachada-edificio-paneles-ventanas-800.webp`
- `assets/img/fachada-paneles-blanco-negro-1600.webp`
- `assets/img/fachada-paneles-blanco-negro-640.webp`
- `assets/img/fachada-paneles-blanco-negro.jpg`
- `assets/img/fachada-paneles-ventanas-detalle-480.webp`
- `assets/img/fachada-paneles-ventanas-detalle-800.webp`
- `assets/img/humedades-revestimiento-fachada.webp`
- `assets/img/logo-eurodronex-fondo-oscuro.webp`
- `assets/img/modelo-3d-vivienda-detalle-480.webp`
- `assets/img/modelo-3d-vivienda-detalle-800.webp`
- `assets/img/modelo-3d-vivienda-perspectiva-480.webp`
- `assets/img/modelo-3d-vivienda-perspectiva-800.webp`
- `assets/img/modelo-topografico-terreno-480.webp`
- `assets/img/modelo-topografico-terreno-800.webp`
- `assets/img/modelo-topografico-terreno.webp`
- `assets/img/termografia-aerea-edificios-480.webp`
- `assets/img/termografia-aerea-edificios-800.webp`
- `assets/img/termografia-aerea-edificios.webp`
- `assets/img/termografia-fachadas-edificio-480.webp`
- `assets/img/termografia-fachadas-edificio-800.webp`
- `assets/img/termografia-fachadas-edificio.jpeg`
- `assets/img/visita-tecnica-obra-construccion-480.webp`
- `assets/img/visita-tecnica-obra-construccion-800.webp`
- `assets/img/vista-aerea-cubiertas-edificio-detalle-480.webp`
- `assets/img/vista-aerea-cubiertas-edificio-detalle-800.webp`
- `assets/img/vista-aerea-cubiertas-edificio-detalle.webp`
- `assets/img/vivienda-cartel-venta-480.webp`
- `assets/img/vivienda-cartel-venta-800.webp`
- `aviso-legal.php`
- `blog.php`
- `como-inspeccionar-cubiertas-sin-riesgo-ni-andamios.php`
- `components/about-02-no-capturamos-imagenes-interpretamos-edificios.php`
- `components/about-03-no-soy-solo-somos-pilotos-de-drones.php`
- `components/about-04-asi-trabajamos.php`
- `components/about-05-contenido.php`
- `components/aviso-legal-01-aviso-legal.php`
- `components/aviso-legal-02-contenido.php`
- `components/blog-01-nuestro-blog.php`
- `components/como-inspeccionar-cubiertas-sin-riesgo-ni-andamios-01-como-inspeccionar-cubiertas-sin-riesgo-ni-andamios.php`
- `components/como-inspeccionar-un-edificio-sin-andamios-en-2026-01-como-inspeccionar-un-edificio-sin-andamios-en-2026.php`
- `components/contact-privacy-notice.php`
- `components/contacto-01-solicite-informacion-tecnica.php`
- `components/contacto-02-contenido.php`
- `components/contacto-03-nacional.php`
- `components/contacto-04-contenido.php`
- `components/cookie-banner.php`
- `components/diagnostico-fachadas-01-inspeccion-pre-compra.php`
- `components/diagnostico-fachadas-03-beneficios.php`
- `components/diagnostico-fachadas-04-proceso.php`
- `components/diagnostico-fachadas-05-otros-servicios-relacionados.php`
- `components/diagnostico-fachadas-06-contenido.php`
- `components/diagnostico-fachadas-07-preguntas-frecuentes.php`
- `components/footer.php`
- `components/fotogrametria-3d-edificios-01-fotogrametria-3d-para-edificios-y-estructuras.php`
- `components/header.php`
- `components/index-03-servicios.php`
- `components/index-04-que-ayudamos-a-detectar.php`
- `components/index-05-metodologia-de-trabajo.php`
- `components/index-07-tipos-de-intervenciones-tecnicas.php`
- `components/index-08-pilotos-ingenieros-no-solo-operadores.php`
- `components/index-09-contenido.php`
- `components/index-10-nacional.php`
- `components/index-12-servicio-tecnico-pre-compra.php`
- `components/index-13-preguntas-frecuentes.php`
- `components/ingenieria-01-ingenieros-y-arquitectos-no-solo-operadores.php`
- `components/ingenieria-03-nuestros-valores.php`
- `components/ingenieria-04-por-que-no-somos-como-otras-empresas-de-drones.php`
- `components/ingenieria-05-que-implica-realmente-una-inspeccion-con-criterio-profe.php`
- `components/ingenieria-06-nuestras-inspecciones.php`
- `components/ingenieria-07-como-trabajamos-tecnicamente.php`
- `components/ingenieria-08-preguntas-frecuentes.php`
- `components/ingenieria-09-responsabilidad-tecnica-real.php`
- `components/ingenieria-10-necesita-una-evaluacion-tecnica-con-criterio-profesiona.php`
- `components/inspeccion-precompra-01-inspeccion-tecnica-para-inmobiliarias.php`
- `components/inspeccion-precompra-02-por-que-necesitas-inspeccion-tecnica.php`
- `components/inspeccion-precompra-03-que-incluye-el-servicio.php`
- `components/inspeccion-precompra-04-beneficios-para-tu-inmobiliaria.php`
- `components/inspeccion-precompra-05-como-funciona.php`
- `components/inspeccion-precompra-06-necesitas-una-inspeccion-tecnica-para-una-operacion-en-.php`
- `components/inspeccion-tecnica-con-drones-03-beneficios.php`
- `components/inspeccion-tecnica-con-drones-04-proceso.php`
- `components/inspeccion-tecnica-con-drones-05-otros-servicios-relacionados.php`
- `components/inspeccion-tecnica-con-drones-06-contenido.php`
- `components/inspeccion-tecnica-con-drones-07-preguntas-frecuentes.php`
- `components/inspeccion-tecnica-con-drones-08-mas-sobre-inspeccion-tecnica-con-drones.php`
- `components/pagina-de-privacidad-01-pagina-de-privacidad.php`
- `components/pagina-de-privacidad-02-contenido.php`
- `components/para-quien-introduccion.php`
- `components/politica-de-cookies-01-politica-de-cookies.php`
- `components/politica-de-cookies-02-contenido.php`
- `components/por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-piloto-01-por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-.php`
- `components/seguimiento-de-obra-01-seguimiento-o-visita-de-obra.php`
- `components/seguimiento-de-obra-02-control-fragmentado-y-vision-parcial-del-avance.php`
- `components/seguimiento-de-obra-03-beneficios.php`
- `components/seguimiento-de-obra-04-proceso.php`
- `components/seguimiento-de-obra-05-otros-servicios-relacionados.php`
- `components/seguimiento-de-obra-07-preguntas-frecuentes.php`
- `components/servicios-01-servicios-de-ingenieria-tecnica-con-tecnologia-aerea.php`
- `components/servicios-02-nuestro-enfoque-tecnico.php`
- `components/servicios-03-informes-de-patologias-de-fachadas-cubiertas-y-obras-en.php`
- `components/servicios-04-que-servicio-necesita.php`
- `components/servicios-05-no-ofrecemos-vuelos-ofrecemos-criterio-tecnico.php`
- `components/servicios-06-contenido.php`
- `components/servicios-07-contenido.php`
- `components/streaming-03-beneficios.php`
- `components/streaming-04-proceso.php`
- `components/streaming-05-otros-servicios-relacionados.php`
- `components/streaming-07-preguntas-frecuentes.php`
- `components/termografia-con-dron-03-beneficios.php`
- `components/termografia-con-dron-04-proceso.php`
- `components/termografia-con-dron-05-otros-servicios-relacionados.php`
- `components/termografia-con-dron-06-contenido.php`
- `components/termografia-con-dron-07-preguntas-frecuentes.php`
- `components/termografia-con-dron-08-lecturas-recomendadas-sobre-inspeccion-de-edificios.php`
- `components/whatsapp.php`
- `fotogrametria-3d-edificios.php`
- `index.php`
- `ingenieria.php`
- `pagina-de-privacidad.php`
- `politica-de-cookies.php`
- `seguimiento-de-obra.php`
- `services/common-head.php`
- `services/common-scripts.php`
- `services/structured-data.php`
- `servicios.php`
- `sitemap-images.xml`
- `streaming.php`
- `termografia-con-dron.php`
