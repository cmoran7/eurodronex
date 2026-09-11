<section class="section-pad py-20 md:py-28 border-t border-border bg-secondary/30">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
		<div class="lg:col-span-5">
			<span class="mono-label-accent">Solicite información</span>
			<h2 class="mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance">Sin compromiso. Respuesta en 24 horas.</h2>
			<p class="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
				Los servicios requieren comprender previamente el edificio, ubicación, alcance y necesidad técnica. Cuéntenos su caso y le asesoramos sobre el
				mejor enfoque técnico.
			</p>
			<div class="mt-10 space-y-4">
				<a href="tel:+34611623480" class="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
					<span class="flex h-10 w-10 items-center justify-center border border-border bg-background">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-phone h-4 w-4"
						>
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							></path>
						</svg>
					</span>
					<span class="text-sm">+34 611 623 480</span>
				</a>
				<a href="mailto:contacto@eurodronex.com" class="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
					<span class="flex h-10 w-10 items-center justify-center border border-border bg-background">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-mail h-4 w-4"
						>
							<rect width="20" height="16" x="2" y="4" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
					</span>
					<span class="text-sm">contacto@eurodronex.com</span>
				</a>
			</div>
			<div class="mt-10 border border-border bg-background p-6">
				<span class="mono-label">Ámbito geográfico</span>
				<p class="mt-3 text-sm text-muted-foreground leading-relaxed">
					Operamos principalmente en la Comunidad de Madrid y provincias limítrofes. Capacidad de escalado a nivel nacional para proyectos de
					envergadura.
				</p>
				<a class="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary hover:underline" href="/contacto">
					Ver detalles de contacto
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-arrow-right h-3.5 w-3.5"
					>
						<path d="M5 12h14"></path>
						<path d="m12 5 7 7-7 7"></path>
					</svg>
				</a>
			</div>
		</div>
		<div class="lg:col-span-7"><?php
				$props = [];
				include __DIR__ . '/contact-form.php';
				?></div>
	</div>
</section>
