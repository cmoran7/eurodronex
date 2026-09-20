<section id="comments" class="comments-area">
	<div id="respond" class="comment-respond">
		<h2 id="reply-title" class="comment-reply-title">
			Deja una respuesta
			<small>
				<a
					rel="nofollow"
					id="cancel-comment-reply-link"
					href="/como-inspeccionar-un-edificio-sin-andamios-en-2026/#respond"
					style="display: none"
				>
					Cancelar la respuesta
				</a>
			</small>
		</h2>
		<form
			action="/services/contact_process.php"
			method="post"
			id="commentform"
			class="comment-form"
			enctype="multipart/form-data"
			data-contact-form=""
		>
			<input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>" />
			<input type="text" name="website" class="form-trap" tabindex="-1" autocomplete="off" aria-hidden="true" />
			<p class="form-status" role="status" hidden=""></p>
					<?php include ROOT . "/components/contact-privacy-notice.php"; ?>
			<p class="comment-notes">
				<span id="email-notes">Tu dirección de correo electrónico no será publicada.</span>
				<span class="required-field-message">
					Los campos obligatorios están marcados con
					<span class="required">*</span>
				</span>
			</p>
			<p class="comment-form-comment">
				<label for="comment">
					Comentario
					<span class="required">*</span>
				</label>
				<textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required=""></textarea>
			</p>
			<p class="comment-form-author">
				<label for="author">
					Nombre
					<span class="required">*</span>
				</label>
				<input
					id="author"
					name="author"
					type="text"
					value=""
					size="30"
					maxlength="245"
					autocomplete="name"
					required=""
				/>
			</p>
			<p class="comment-form-email">
				<label for="email">
					Correo electrónico
					<span class="required">*</span>
				</label>
				<input
					id="email"
					name="email"
					type="email"
					value=""
					size="30"
					maxlength="100"
					aria-describedby="email-notes"
					autocomplete="email"
					required=""
				/>
			</p>
			<p class="comment-form-url">
				<label for="url">Web</label>
				<input id="url" name="url" type="url" value="" size="30" maxlength="200" autocomplete="url" />
			</p>
			<p class="comment-form-cookies-consent">
				<input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
				<label for="wp-comment-cookies-consent">
					Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.
				</label>
			</p>
			<p class="form-submit">
				<input name="submit" type="submit" id="submit" class="submit" value="Publicar el comentario" />
			</p>
		</form>
	</div>
</section>
