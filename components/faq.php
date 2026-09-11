<?php $pageFaqs = array_merge($pageFaqs ?? [], $props['items'] ?? []); ?>
<div class="border-t border-border">
	<?php foreach ($props['items'] ?? [] as $i => $item): ?>
	<details class="faq border-b border-border" <?= $i === 0 ? 'open' : '' ?>>
		<summary class="flex items-start justify-between gap-6 py-6 cursor-pointer">
			<span class="flex gap-4">
				<span class="mono-label-accent pt-1.5"><?= sprintf('%02d', $i + 1) ?></span>
				<span class="font-heading font-semibold text-base md:text-lg"><?= e($item['q']) ?></span>
			</span>
			<span class="faq-plus text-xl" aria-hidden="true">+</span>
		</summary>
		<div class="pb-6 pl-9 pr-10">
			<p class="text-base text-muted-foreground leading-relaxed max-w-3xl"><?= e($item['a']) ?></p>
		</div>
	</details>
	<?php endforeach; ?>
</div>
