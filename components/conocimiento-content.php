<?php
$props = [
	'eyebrow' => 'KNW.00 / Centro de conocimiento',
	'title' => 'Conocimiento técnico',
	'text' =>
		'Todo el conocimiento de EurodroneX en un mismo lugar: artículos técnicos, vídeos de inspección, expedientes de casos y la biblioteca de patologías de la edificación.',
];
include __DIR__ . '/page-heading.php';
$items = [];
function topic_name(string $category): string
{
	$c = mb_strtolower($category);
	foreach (
		[
			'fachada' => 'Fachadas',
			'cubierta' => 'Cubiertas',
			'termo' => 'Termografía',
			'fotogram' => 'Fotogrametría',
			'3d' => 'Fotogrametría',
			'obra' => 'Obra',
			'patolog' => 'Patologías',
			'humedad' => 'Patologías',
			'fisura' => 'Patologías',
		]
		as $key => $topic
	) {
		if (str_contains($c, $key)) {
			return $topic;
		}
	}
	return 'Inspección';
}
foreach (posts() as $p) {
	$items[] = [
		'type' => 'Artículos',
		'title' => $p['title'],
		'topic' => topic_name($p['category']),
		'meta' => $p['category'],
		'to' => post_path($p['slug']),
		'image' => $p['image'],
	];
}
$assets = json_decode(file_get_contents(ROOT . '/services/data/assets.json'), true);
foreach (content('videos')['videos'] as $v) {
	$items[] = [
		'type' => 'Vídeos',
		'title' => $v['title'],
		'topic' => $v['category'],
		'meta' => $v['category'] . ' · DEMO',
		'to' => '/videos',
		'image' => $assets['https://i.ytimg.com/vi/' . $v['youtubeId'] . '/hqdefault.jpg'] ?? '',
	];
}
foreach (content('cases')['cases'] as $c) {
	$items[] = [
		'type' => 'Casos de estudio',
		'title' => $c['title'],
		'topic' => $c['topic'],
		'meta' => $c['buildingType'] . ' · DEMO',
		'to' => '/' . $c['slug'],
		'image' => $c['coverImage'],
	];
}
foreach (content('pathologies')['pathologies'] as $p) {
	$items[] = [
		'type' => 'Patologías',
		'title' => $p['title'],
		'topic' => $p['topic'],
		'meta' => $p['category'] . ' · DEMO',
		'to' => '/' . $p['slug'],
		'image' => $p['image'],
	];
}
$types = ['Todos', 'Artículos', 'Vídeos', 'Casos de estudio', 'Patologías'];
$topics = [
	'Todos',
	'Fachadas',
	'Cubiertas',
	'Patologías',
	'Termografía',
	'Fotogrametría',
	'Inspección',
	'Obra',
];
$type = is_string($_GET['tipo'] ?? null) && in_array($_GET['tipo'], $types, true) ? $_GET['tipo'] : 'Todos';
$topic = is_string($_GET['tema'] ?? null) && in_array($_GET['tema'], $topics, true) ? $_GET['tema'] : 'Todos';
?>
<section class="section-pad pt-8 pb-10 border-b border-border">
	<p class="mono-label mb-6">Casos, vídeos y fichas de patologías incluyen contenido de demostración.</p>
	<form method="get" action="/conocimiento" class="flex flex-wrap items-end gap-5">
		<div>
			<label class="field-label" for="tipo">Tipo de contenido</label>
			<select class="form-field" name="tipo" id="tipo">
				<?php foreach ( $types as $value ): ?>
				<option <?= $value === $type ? 'selected' : '' ?>><?= e($value) ?></option>
				<?php endforeach; ?>
			</select>
		</div>
		<div>
			<label class="field-label" for="tema">Tema</label>
			<select class="form-field" name="tema" id="tema">
				<?php foreach ( $topics as $value ): ?>
				<option <?= $value === $topic ? 'selected' : '' ?>><?= e($value) ?></option>
				<?php endforeach; ?>
			</select>
		</div>
		<button class="button-primary">Filtrar</button>
		<a class="button-secondary" href="/conocimiento">Ver todos</a>
	</form>
</section>
<section class="section-pad py-16">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><?php
		$count = 0;
		foreach ($items as $item) {
			if (($type === 'Todos' || $type === $item['type']) && ($topic === 'Todos' || $topic === $item['topic'])) {
				$props = $item;
				include __DIR__ . '/card.php';
				$count++;
			}
		}
		?></div>
	<?php if ( !$count ): ?>
	<p>No hay contenidos para esta combinación de filtros.</p>
	<?php endif; ?>
</section>
<?php
$props = ['title' => 'Información para tomar decisiones técnicas'];
include __DIR__ . '/cta.php';
?>
