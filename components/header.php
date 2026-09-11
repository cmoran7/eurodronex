<?php $menuServices = content('services')['services']; ?>
<header class="site-header fixed top-0 inset-x-0 z-50 bg-background border-b border-border">
<div class="section-pad"><div class="flex items-center justify-between h-20 gap-4">
<a href="/" class="flex items-center gap-2.5 shrink-0" aria-label="EurodroneX, inicio"><span class="relative flex h-8 w-8 items-center justify-center" aria-hidden="true"><span class="absolute inset-0 border border-foreground/80 rotate-45"></span><span class="absolute inset-1.5 border border-primary"></span><span class="h-1 w-1 rounded-full bg-primary"></span></span><span class="font-heading font-bold tracking-tight text-lg">EURODRONE<span class="text-primary">X</span></span></a>
<button type="button" class="menu-toggle button-secondary" aria-expanded="false" aria-controls="site-nav" aria-label="Abrir menú">☰ <span>Menú</span></button>
<nav id="site-nav" class="site-nav" aria-label="Navegación principal">
<details class="nav-group"><summary>Servicios</summary><div class="nav-dropdown"><a href="/servicios">Todos los servicios</a>
<?php foreach($menuServices as $s): ?><a href="/servicios/<?= e($s['slug']) ?>"><span class="text-primary"><?= e($s['id']) ?></span> <?= e($s['shortTitle']) ?></a><?php endforeach; ?>
<a href="/tecnologia">Tecnología y metodología</a><a href="/entregables">Entregables</a></div></details>
<a href="/casos-de-estudio">Casos de estudio</a><a href="/sectores">Sectores</a>
<details class="nav-group"><summary>Conocimiento</summary><div class="nav-dropdown"><a href="/conocimiento">Centro de conocimiento</a><a href="/patologias">Patologías</a><a href="/blog">Blog técnico</a><a href="/videos">Vídeos</a></div></details>
<a href="/ingenieria">Ingeniería</a><a href="/sobre-eurodronex">Sobre EurodroneX</a><a href="/contacto">Contacto</a>
</nav>
<a href="/contacto" class="header-cta button-primary">Solicitar evaluación</a>
</div></div></header>
