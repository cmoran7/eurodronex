import React from 'react';
import { X, Check } from 'lucide-react';

// Problem → Solution narrative: traditional auxiliary means vs aerial technical inspection.
export default function ProblemSolution() {
	const traditional = [
		'Andamios, grúas o plataformas elevadoras',
		'Permisos de ocupación de vía pública',
		'Semanas de montaje, inspección y desmontaje',
		'Riesgo laboral en altura',
		'Coste entre el 30% y 50% del presupuesto',
		'Acceso limitado a cubiertas, medianeras y patios',
	];
	const aerial = [
		'Acceso instantáneo a cualquier punto de la envolvente',
		'Gestionamos todos los permisos (AESA, u otros organismos)',
		'Inspección en una jornada de campo',
		'Sin trabajos en altura ni riesgo para operarios',
		'Hasta 80% de ahorro frente a medios auxiliares',
		'Cobertura total de zonas de difícil acceso',
	];

	return (
		<section className="section-pad py-20 md:py-28 border-t border-border">
			<div className="max-w-3xl mb-12">
				<span className="mono-label-accent">El problema / la solución</span>
				<h2 className="mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance">
					Un técnico necesita estudiar una fisura, una humedad o una cubierta a gran altura.
				</h2>
				<p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
					Obtener esa información tradicionalmente requiere andamios, plataformas, permisos,
					personal y costes importantes solo para poder observar y documentar la zona. EurodroneX
					utiliza inspección aérea profesional para acercar al técnico información visual de alta
					resolución y realizar después el análisis técnico.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
				<div className="bg-background p-8 md:p-10">
					<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
						Medios auxiliares tradicionales
					</span>
					<ul className="mt-6 space-y-4">
						{traditional.map((t) => (
							<li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
								<X className="h-4 w-4 text-muted-foreground/60 mt-0.5 shrink-0" />
								<span className="line-through decoration-muted-foreground/40">{t}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="bg-foreground text-background p-8 md:p-10 relative">
					<div className="absolute top-0 left-0 right-0 h-px bg-primary" />
					<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
						Inspección aérea técnica · EurodroneX
					</span>
					<ul className="mt-6 space-y-4">
						{aerial.map((t) => (
							<li key={t} className="flex items-start gap-3 text-sm text-background/90">
								<Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
								<span>{t}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* flow diagram */}
			<div className="mt-12 border border-border p-6 md:p-8 bg-secondary/30">
				<span className="mono-label">Flujo de valor</span>
				<div className="mt-5 flex flex-wrap items-center gap-2 md:gap-3 font-mono text-[11px] uppercase tracking-[0.12em]">
					{[
						'Problema constructivo',
						'Dificultad de acceso',
						'Inspección aérea',
						'Información técnica',
						'Interpretación profesional',
						'Diagnóstico / documentación',
					].map((step, i, arr) => (
						<React.Fragment key={step}>
							<span className="border border-border bg-background px-3 py-2 text-foreground/80">
								{step}
							</span>
							{i < arr.length - 1 && <span className="text-primary">→</span>}
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
