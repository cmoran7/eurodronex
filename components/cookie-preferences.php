<dialog id="cookie-dialog" aria-labelledby="cookie-title" class="cookie-dialog">
	<form method="dialog">
		<h2 id="cookie-title" class="heading-display text-2xl">Preferencias de contenido externo</h2>
		<p class="mt-4 text-muted-foreground">
			Utilizamos cookies técnicas para proteger formularios y administrar la web. No cargamos analítica ni publicidad. Los vídeos de YouTube requieren su
			autorización para conectar con ese servicio.
		</p>
		<p class="mt-3 text-sm">
			<a class="underline" href="/politica-de-cookies">Consultar la política de cookies</a>
		</p>
		<div class="mt-6 flex flex-wrap gap-3">
			<button class="button-secondary" value="reject" data-consent="reject">Rechazar contenido externo</button>
			<button class="button-primary" value="accept" data-consent="accept">Permitir vídeos de YouTube</button>
			<button class="button-secondary" value="cancel">Cerrar</button>
		</div>
	</form>
</dialog>
<dialog id="video-dialog" class="video-dialog" aria-labelledby="video-title">
	<div class="flex justify-between items-center gap-4 mb-4">
		<h2 id="video-title" class="font-heading font-semibold">Vídeo de referencia</h2>
		<button type="button" data-close-video class="button-secondary" aria-label="Cerrar vídeo">Cerrar ×</button>
	</div>
	<div id="video-container"></div>
</dialog>
