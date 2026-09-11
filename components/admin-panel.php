<a class="mono-label-accent" href="/">← EurodroneX</a>
<h1 class="heading-display text-3xl mt-8">Administración del blog</h1>
<?php if ($message): ?>
<p class="admin-notice" role="alert"><?= e($message) ?></p>
<?php endif; ?>
<?php if (empty($_SESSION['admin'])): ?>
<?php if ( !$configured ): ?>
<p class="admin-notice">El acceso de administración aún no está configurado. Contacte con el responsable del sitio.</p>
<?php endif; ?>
<form method="post" class="max-w-md">
	<input type="hidden" name="csrf" value="<?= e($token) ?>" />
	<input type="hidden" name="action" value="login" />
	<label for="email">Email</label>
	<input id="email" type="email" name="email" autocomplete="username" required />
	<label for="password">Contraseña</label>
	<input id="password" type="password" name="password" autocomplete="current-password" required />
	<button class="button-primary mt-6">Acceder</button>
</form>
<?php else:
	$all = posts(true);
	$editing = null;
	$edit = is_string($_GET['editar'] ?? null) ? $_GET['editar'] : null;
	if ($edit !== null) {
		foreach ($all as $item) {
			if ($item['slug'] === $edit) {
				$editing = $item;
			}
		}
		if ($edit === 'nuevo') {
			$editing = [
				'slug' => '',
				'title' => '',
				'category' => 'Inspección técnica',
				'date' => date('Y-m-d'),
				'readTime' => '5 min',
				'excerpt' => '',
				'image' => '/assets/img/464bbf7f1798693b.webp',
				'published' => false,
				'featured' => false,
				'sections' => [['h' => '', 'p' => '']],
			];
		}
	}
	?>
<div class="admin-actions">
	<a class="button-primary" href="/admin-blog?editar=nuevo">Nuevo artículo</a>
	<a class="button-secondary" href="/admin-blog">Listado</a>
	<form method="post">
		<input type="hidden" name="csrf" value="<?= e($token) ?>" />
		<button class="button-secondary" name="action" value="logout">Cerrar sesión</button>
	</form>
</div>
<?php if ( isset($_GET['guardado']) ): ?>
<p role="status" class="admin-notice">Artículo guardado.</p>
<?php endif; ?>
<?php if ($editing): ?>
<form method="post" enctype="multipart/form-data">
	<input type="hidden" name="csrf" value="<?= e($token) ?>" />
	<input type="hidden" name="action" value="save" />
	<input type="hidden" name="original" value="<?= e($editing['slug']) ?>" />
	<input type="hidden" name="version" value="<?= e(hash('sha256', json_encode($all))) ?>" />
	<?php foreach (
		[
			'title' => 'Título',
			'slug' => 'URL del artículo',
			'category' => 'Categoría',
			'date' => 'Fecha',
			'readTime' => 'Tiempo de lectura',
		]
		as $key => $label
	): ?>
	<label for="<?= $key ?>"><?= $label ?></label>
	<input id="<?= $key ?>" name="<?= $key ?>" value="<?= e($editing[$key] ?? '') ?>" <?= $key === 'slug' && $editing['slug'] !== '' ? 'readonly' : '' ?> required />
	<?php endforeach; ?>
	<label for="excerpt">Resumen y descripción SEO</label>
	<textarea id="excerpt" name="excerpt" required><?= e($editing['excerpt']) ?></textarea>
	<label for="image">Imagen</label>
	<select id="image" name="image">
		<?php foreach (
			glob(ROOT . '/assets/img/*')
			as $img
		):
		
			$name = basename($img);
			if (!preg_match('/\.(jpg|jpeg|png|webp)$/', $name)) {
				continue;
			}
			?>
		<option value="/assets/img/<?= e($name) ?>" <?= '/assets/img/' . $name === $editing['image'] ? 'selected' : '' ?>><?= e($name) ?></option>
		<?php
		endforeach; ?>
	</select>
	<img id="cover-preview" src="<?= e($editing['image']) ?>" alt="Vista previa de la portada del artículo" class="mt-4 max-w-sm w-full" />
	<label for="cover">O subir una nueva portada (JPG, PNG o WebP; máximo 3 MB)</label>
	<input id="cover" name="cover" type="file" accept="image/jpeg,image/png,image/webp" />
	<label>
		<input type="checkbox" name="published" <?= $editing['published'] ?? true ? 'checked' : '' ?> />
		Publicado
	</label>
	<label>
		<input type="checkbox" name="featured" <?= $editing['featured'] ?? false ? 'checked' : '' ?> />
		Destacado
	</label>
	<h2 class="heading-display text-2xl mt-8">Secciones del artículo</h2>
	<div id="article-sections">
		<?php foreach (
			$editing['sections']
			as $i => $sec
		): ?>
		<fieldset class="border border-border p-4 mt-5">
			<legend>Sección <?= $i + 1 ?></legend>
			<label>
				Título de sección
				<input name="section_h[]" value="<?= e($sec['h']) ?>" />
			</label>
			<label>
				Texto
				<textarea name="section_p[]"><?= e($sec['p']) ?></textarea>
			</label>
			<button type="button" class="button-secondary" data-remove-section>Quitar sección</button>
		</fieldset>
		<?php endforeach; ?>
	</div>
	<div class="admin-actions">
		<button type="button" class="button-secondary" data-add-section>Añadir sección</button>
		<button class="button-primary">Guardar artículo</button>
	</div>
</form>
<?php else: ?>
<div class="overflow-x-auto">
	<table class="admin-table">
		<thead>
			<tr>
				<th>Artículo</th>
				<th>Estado</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<?php foreach ( $all as $entry ): ?>
			<tr>
				<td><?= e($entry['title']) ?></td>
				<td><?= $entry['published'] ?? true ? 'Publicado' : 'Borrador' ?></td>
				<td>
					<a class="underline" href="/admin-blog?editar=<?= e($entry['slug']) ?>">Editar</a>
					<?php if ($entry['published'] ?? true): ?> ·
					<a class="underline" href="<?= e(post_path($entry['slug'])) ?>">Ver</a>
					<?php endif; ?>
				</td>
			</tr>
			<?php endforeach; ?>
		</tbody>
	</table>
</div>
<p class="mt-5 text-sm text-muted-foreground">
	Para retirar un artículo, desmarque «Publicado». Se conserva como borrador y cada guardado mantiene una copia de respaldo.
</p>
<?php endif; ?>
<?php endif; ?>
