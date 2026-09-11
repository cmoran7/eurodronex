<?php
$service = null;
foreach (content('services')['services'] as $s) {
	if ($s['slug'] === $props['slug']) {
		$service = $s;
		break;
	}
}
if (!$service) {
	throw new LogicException('Service not found');
}
$types = [
	'inspeccion-tecnica-con-drones' => 'Inspección técnica ITE',
	'termografia-con-dron' => 'Termografía',
	'fotogrametria-3d-edificios' => 'Fotogrametría / Gemelo digital',
	'diagnostico-fachadas' => 'Diagnóstico de fachadas',
	'seguimiento-de-obra' => 'Seguimiento de obra',
	'streaming' => 'Inspección en streaming',
];
?>
<section class="section-pad pt-10 md:pt-14 pb-12 border-b border-border">
	<nav aria-label="Migas de pan" class="flex items-center gap-2 mono-label mb-8">
		<a href="/">Inicio</a>
		<span>/</span>
		<a href="/servicios">Servicios</a>
		<span>/</span>
		<span class="text-primary"><?= e($service['code']) ?></span>
	</nav>
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
		<div class="lg:col-span-7">
			<div class="flex items-center gap-3">
				<span class="mono-label-accent"><?= e($service['code']) ?></span>
				<span class="mono-label"><?= e($service['category']) ?></span>
			</div>
			<h1 class="mt-5 heading-display text-3xl md:text-4xl lg:text-5xl text-balance"><?= e($service['title']) ?></h1>
			<p class="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl"><?= e($service['summary']) ?></p>
			<div class="mt-8 flex flex-col sm:flex-row gap-4">
				<a href="#solicitar" class="button-primary">Solicitar evaluación técnica →</a>
				<a href="/servicios" class="button-secondary">← Todos los servicios</a>
			</div>
		</div>
		<div class="lg:col-span-5">
			<div class="relative aspect-[4/3] border border-border bg-muted">
				<img src="<?= e($service['image']) ?>" alt="<?= e($service['shortTitle']) ?>" <?= image_attrs($service['image']) ?> class="w-full h-full object-cover" fetchpriority="high" decoding="async" />
				<span aria-hidden="true" class="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-primary"></span>
				<span aria-hidden="true" class="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-primary"></span>
			</div>
		</div>
	</div>
</section>
<section class="section-pad py-20 md:py-24">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
		<div class="bg-background p-8 md:p-10">
			<span class="mono-label">El problema</span>
			<h2 class="mt-4 heading-display text-xl md:text-2xl text-balance"><?= e($service['problem']) ?></h2>
		</div>
		<div class="bg-foreground text-background p-8 md:p-10 relative">
			<div class="absolute top-0 left-0 right-0 h-px bg-primary"></div>
			<span class="mono-label-accent">La solución</span>
			<h2 class="mt-4 font-heading font-bold tracking-tight text-xl md:text-2xl text-balance"><?= e($service['solution']) ?></h2>
		</div>
	</div>
</section>
<section class="section-pad pb-20 md:pb-24">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
		<?php foreach ( ['whatIs' => 'Qué es y para qué sirve', 'whenToUse' => 'Cuándo se utiliza'] as $key => $label ): ?>
		<div>
			<h2 class="mono-label-accent"><?= $label ?></h2>
			<p class="mt-5 text-lg text-muted-foreground leading-relaxed"><?= e($service[$key]) ?></p>
		</div>
		<?php endforeach; ?>
	</div>
</section>
<section class="section-pad py-20 border-t border-border bg-secondary/30">
	<span class="mono-label-accent">Beneficios</span>
	<h2 class="mt-4 heading-display text-3xl md:text-4xl text-balance max-w-2xl">Qué problema resuelve</h2>
	<div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
		<?php foreach ( $service['benefits'] as $i => $b ): ?>
		<div class="bg-background p-7 md:p-8">
			<span class="mono-label-accent"><?= sprintf('%02d', $i + 1) ?></span>
			<h3 class="mt-3 font-heading font-semibold text-lg"><?= e($b['title']) ?></h3>
			<p class="mt-2 text-sm text-muted-foreground leading-relaxed"><?= e($b['text']) ?></p>
		</div>
		<?php endforeach; ?>
	</div>
	<?php if ( !empty($service['keyPoints']) ): ?>
	<div class="mt-8 border border-border bg-background p-6 md:p-8">
		<span class="mono-label">Puntos clave</span>
		<ul class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
			<?php foreach ( $service['keyPoints'] as $k ): ?>
			<li class="flex items-start gap-3 text-sm">
				<span class="text-primary" aria-hidden="true">✓</span>
				<?= e($k) ?>
			</li>
			<?php endforeach; ?>
		</ul>
	</div>
	<?php endif; ?>
</section>
<?php if ( !empty($service['products']) ): ?>
<section class="section-pad py-20 border-t border-border">
	<span class="mono-label-accent">Productos / entregables</span>
	<h2 class="mt-4 heading-display text-3xl md:text-4xl max-w-2xl">Modelos y documentos generados</h2>
	<div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
		<?php foreach ( $service['products'] as $i => $p ): ?>
		<div class="bg-background p-7">
			<span class="mono-label-accent">PRD-<?= sprintf('%02d', $i + 1) ?></span>
			<h3 class="mt-3 font-heading font-semibold"><?= e($p['title']) ?></h3>
			<p class="mt-2 text-sm text-muted-foreground leading-relaxed"><?= e($p['text']) ?></p>
		</div>
		<?php endforeach; ?>
	</div>
</section>
<?php endif; ?>
<section class="section-pad py-20 border-t border-border">
	<span class="mono-label-accent">Proceso</span>
	<h2 class="mt-4 heading-display text-3xl md:text-4xl max-w-2xl mb-10">Metodología de trabajo</h2>
	<?php
		$props = ['steps' => $service['process']];
		include __DIR__ . '/process-steps.php';
		?>
</section>
<section class="section-pad py-12 border-t border-border bg-secondary/30"><?php
$props = ['stats' => $service['stats']];
include __DIR__ . '/stats.php';
?></section>
<section class="section-pad py-20 border-t border-border">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
		<div class="lg:col-span-4">
			<span class="mono-label-accent">Preguntas frecuentes</span>
			<h2 class="mt-4 heading-display text-3xl md:text-4xl">Resolvemos sus dudas</h2>
		</div>
		<div class="lg:col-span-8"><?php
				$props = ['items' => $service['faq']];
				include __DIR__ . '/faq.php';
				?></div>
	</div>
</section>
<section id="solicitar" class="section-pad py-20 border-t border-border bg-secondary/30">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
		<div class="lg:col-span-5">
			<span class="mono-label-accent">Solicitar presupuesto</span>
			<h2 class="mt-4 heading-display text-3xl md:text-4xl">Respuesta en menos de 24 horas</h2>
			<p class="mt-5 text-lg text-muted-foreground leading-relaxed">
				Cuéntenos su caso técnico. Analizamos el edificio, la ubicación y el alcance para proponer el enfoque más adecuado.
			</p>
		</div>
		<div class="lg:col-span-7"><?php
				$props = ['defaultService' => $types[$service['slug']] ?? ''];
				include __DIR__ . '/contact-form.php';
				?></div>
	</div>
</section>
<section class="section-pad py-16 border-t border-border">
	<h2 class="heading-display text-2xl mb-8">Otros servicios técnicos</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6"><?php
		$n = 0;
		foreach (content('services')['services'] as $s) {
			if ($s['slug'] === $service['slug']) {
				continue;
			}
			$props = [
				'to' => '/' . $s['slug'],
				'title' => $s['shortTitle'],
				'image' => $s['image'],
				'meta' => $s['code'],
			];
			include __DIR__ . '/card.php';
			if (++$n === 3) {
				break;
			}
		}
		?></div>
</section>
