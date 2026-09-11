<?php $props = [
	'eyebrow' => 'Error 404',
	'title' => 'No encontramos esta página',
	'text' =>
		'Puede que la dirección haya cambiado. Explore nuestros servicios o póngase en contacto con el equipo.',
];
include __DIR__ . '/page-heading.php';
?>
<section class="section-pad py-16 flex flex-wrap gap-5">
	<a class="button-primary" href="/">Volver al inicio</a>
	<a class="button-secondary" href="/servicios">Ver servicios</a>
</section>
