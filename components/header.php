<?php $menuServices = content('services')['services']; ?>
<header class="site-header fixed top-0 inset-x-0 z-50 bg-background border-b border-border">
	<div class="section-pad">
		<div class="flex items-center justify-between h-20 gap-4">
			<a class="site-brand" href="/" aria-label="EurodroneX, inicio">
					<img src="/assets/img/logo-eurodronex-oficial.png" alt="EurodroneX — Ingeniería técnica con drones" width="600" height="200" />
				</a>
			<button type="button" class="menu-toggle button-secondary" aria-expanded="false" aria-controls="site-nav" aria-label="Abrir menú">
				☰
				<span>Menú</span>
			</button>
			<nav id="site-nav" class="site-nav" aria-label="Navegación principal">
				<details class="nav-group">
					<summary>Servicios</summary>
					<div class="nav-dropdown">
						<a href="/servicios">Todos los servicios</a>
						<?php foreach ($menuServices as $s): ?>
						<a href="/<?= e($s['slug']) ?>">
							<span class="text-primary"><?= e($s['id']) ?></span>
							<?= e($s['shortTitle']) ?>
						</a>
						<?php endforeach; ?>
						<a href="/tecnologia">Tecnología y metodología</a>
						<a href="/entregables">Entregables</a>
					</div>
				</details>
				<a href="/casos-de-estudio">Casos de estudio</a>
				<a href="/sectores">Sectores</a>
				<details class="nav-group">
					<summary>Conocimiento</summary>
					<div class="nav-dropdown">
						<a href="/conocimiento">Centro de conocimiento</a>
						<a href="/patologias">Patologías</a>
						<a href="/blog">Blog técnico</a>
						<a href="/videos">Vídeos</a>
					</div>
				</details>
				<a href="/ingenieria">Ingeniería</a>
				<a href="/sobre-eurodronex">Sobre EurodroneX</a>
				<a href="/contacto">Contacto</a>
			</nav>
			<a href="/contacto" class="header-cta button-primary">Solicitar evaluación</a>
		</div>
	</div>
</header>
