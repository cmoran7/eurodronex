import React from 'react'

const audiences = [
	{
		t: 'Estudios de arquitectura',
		d: 'Apoyo técnico en diagnósticos patológicos, levantamiento de planos, control de obra y visitas de obra en streaming.',
	},
	{
		t: 'Ingenierías',
		d: 'Inspecciones de cualquier tipo de obra o estructura, llegando a los elementos de mayor dificultad de acceso, termografía y fotogrametría.',
	},
	{
		t: 'Administradores de fincas',
		d: 'Evaluaciones, búsquedas de patología, peritajes, humedades, pérdidas de eficiencia energética, etc.',
	},
	{
		t: 'Aseguradoras',
		d: 'Inspección post-siniestro y streaming en directo para valoración de daños.',
	},
	{
		t: 'Promotoras',
		d: 'Seguimiento de obra e informes para la valoración económica de avance. Visitas de obra junto a la dirección facultativa en streaming.',
	},
	{
		t: 'Inmobiliarias',
		d: 'Inspecciones técnicas, identificando posibles patologías y termografías y evaluando la calidad de los cerramientos y las cubiertas.',
	},
]

export default function Audiences() {
	return (
		<section className='section-pad py-20 md:py-28 border-t border-border'>
			<div className='max-w-2xl mb-12'>
				<span className='mono-label-accent'>Trabajamos para</span>
				<h2 className='mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
					Profesionales y empresas del sector de la construcción
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border'>
				{audiences.map((a, i) => (
					<div key={a.t} className='bg-background p-7 md:p-8 flex flex-col'>
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							Cliente {String(i + 1).padStart(2, '0')}
						</span>
						<h3 className='mt-4 font-heading font-semibold text-lg text-foreground'>
							{a.t}
						</h3>
						<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
							{a.d}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
