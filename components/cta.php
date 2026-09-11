<?php $primary=$props['primary'] ?? ['label'=>'Solicitar evaluación técnica','to'=>'/contacto']; ?>
<section class="relative bg-foreground text-background overflow-hidden cta-section">
<div class="absolute inset-0 cad-grid opacity-20"></div><div class="absolute top-0 left-0 right-0 h-px bg-primary"></div>
<div class="relative section-pad py-20 md:py-28"><div class="max-w-3xl">
<span class="mono-label-accent"><?= e($props['eyebrow'] ?? 'Solicitar evaluación técnica') ?></span>
<h2 class="mt-4 font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-balance"><?= e($props['title'] ?? '¿Necesita una evaluación técnica con criterio profesional?') ?></h2>
<p class="mt-5 text-lg text-background/75 leading-relaxed"><?= e($props['text'] ?? 'Cada edificio requiere un análisis específico. Hablemos de su caso con rigor técnico y sin compromiso. Respuesta en menos de 24 horas.') ?></p>
<div class="mt-9 flex flex-col sm:flex-row gap-4"><a class="button-primary" href="<?= e($primary['to']) ?>"><?= e($primary['label']) ?> <span aria-hidden="true">→</span></a>
<?php if (isset($props['secondary'])): ?><a class="inline-flex justify-center border border-background/30 px-7 py-4 font-mono text-xs uppercase tracking-wider" href="<?= e($props['secondary']['to']) ?>"><?= e($props['secondary']['label']) ?></a><?php endif; ?>
</div></div></div></section>
