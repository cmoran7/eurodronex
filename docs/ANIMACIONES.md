# Animaciones recuperadas de Base44

Comparación con `react/src/index.css`, `FAQAccordion.jsx`, `RevealOnScroll.jsx`, `Navbar.jsx`, `StatsGrid.jsx`, `ProcessSteps.jsx` y tarjetas compartidas.

- Acordeón: apertura y cierre de 300 ms con la curva original; un elemento abierto por grupo, giro del signo y soporte de teclado. El elemento details sigue funcionando sin JavaScript.
- Scroll: secciones fuera de pantalla aparecen con opacidad y desplazamiento de 20 px durante 550 ms. El contenido inicial no se oculta.
- Microanimaciones: líneas, marcas de esquina, puntos de inspección y entrada escalonada de estadísticas, fases y tarjetas. Las de secciones inferiores comienzan al entrar en pantalla.
- Interacciones: elevación de tarjetas, zoom de imágenes y transiciones de color existentes conservadas; transiciones de botones, campos y preguntas compartidas restauradas.
- Cabecera: transición de fondo y desenfoque al superar los 12 px de scroll.
- Movimiento reducido: se desactivan las animaciones y el contenido continúa accesible. Cambiar esa preferencia con la página abierta también funciona.
- Caché: site.js incorpora filemtime en su URL, como los estilos. El dominio de prueba servía el JS con max-age de una semana y sin versión; un navegador podía mantener código anterior.

Verificación en Edge real a 1440 y 390 px: alturas intermedias durante apertura y cierre, clics rápidos, entrada de secciones, ausencia de desbordamiento, movimiento reducido y funcionamiento sin JavaScript. Resultados en `docs/qa/motion.json`.

## Archivos a actualizar en el alojamiento

- `services/common-scripts.php`
- `assets/js/site.js`
- `assets/css/custom.css`
- `assets/css/site.css`
- `assets/css/source.css` (fuente para futuras compilaciones)
- `components/stats.php`
- `components/process-steps.php`
- `components/card.php`

No se ha desplegado desde Codex. Si el alojamiento almacena HTML en caché, purgarlo al subir common-scripts.php para servir la URL versionada.
