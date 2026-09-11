<div class="grid <?= count($props['stats']) === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-4' ?> gap-px bg-border border border-border">
	<?php foreach ( $props['stats'] as $i => $s ): ?>
	<div class="bg-background p-6 md:p-8 flex flex-col rise-in" style="animation-delay: <?= $i * 60 ?>ms">
		<span class="font-heading font-bold text-3xl md:text-4xl text-primary tracking-tight"><?= e($s['value']) ?></span>
		<span class="mt-2 font-mono text-[11px] uppercase tracking-wider"><?= e($s['label']) ?></span>
		<?php if (!empty($s['note'])): ?>
		<span class="mt-1 text-xs text-muted-foreground"><?= e($s['note']) ?></span>
		<?php endif; ?>
	</div>
	<?php endforeach; ?>
</div>
