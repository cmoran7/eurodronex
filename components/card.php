<a href="<?= e($props['to']) ?>" class="group block border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors tech-lift rise-in">
	<?php if (!empty($props['image'])): ?>
	<div class="aspect-video overflow-hidden bg-muted">
		<img
			src="<?= e($props['image']) ?>"
			<?= image_attrs($props['image']) ?>
			alt="<?= e($props['title']) ?>"
			loading="lazy"
			decoding="async"
			class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
		/>
	</div>
	<?php endif; ?>
	<div class="p-6">
		<span class="mono-label-accent"><?= e($props['meta'] ?? '') ?></span>
		<h2 class="mt-3 heading-display text-xl md:text-2xl text-balance group-hover:text-primary"><?= e($props['title']) ?></h2>
		<?php if (!empty($props['excerpt'])): ?>
		<p class="mt-4 text-muted-foreground leading-relaxed"><?= e($props['excerpt']) ?></p>
		<?php endif; ?>
		<span class="mt-5 inline-flex gap-2 mono-label-accent">
			Ver contenido
			<span aria-hidden="true">→</span>
		</span>
	</div>
</a>
