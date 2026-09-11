<section class="section-pad pt-12 md:pt-16 pb-12 border-b border-border">
	<div class="max-w-4xl">
		<span class="mono-label-accent"><?= e($props['eyebrow'] ?? 'EurodroneX') ?></span>
		<h1 class="mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance"><?= e($props['title']) ?></h1>
		<?php if ( !empty($props['text']) ): ?>
		<p class="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"><?= e($props['text']) ?></p>
		<?php endif; ?>
	</div>
</section>
