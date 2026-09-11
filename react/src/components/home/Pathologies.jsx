import React from 'react'
import { Image } from '@/components/ui/image'

const pathologies = [
	{
		t: 'Daños estructurales',
		d: 'Fisuras, grietas y patologías',
		img: 'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/65a0b72b1_generated_b488f22a.jpg',
	},
	{
		t: 'Humedades ocultas',
		d: 'Filtraciones no visibles',
		img: 'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/6142ae27c_generated_61428c6e.jpg',
	},
	{
		t: 'Puentes térmicos',
		d: 'Deficiencias de aislamiento',
		img: 'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/6142ae27c_generated_61428c6e.jpg',
	},
	{
		t: 'Riesgo de caída',
		d: 'Elementos en fachadas',
		img: 'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/c20e78e0a_generated_8d8c2abd.jpg',
	},
	{
		t: 'Roturas en cubierta',
		d: 'Puntos críticos de tejados',
		img: 'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/aee1f9c1c_generated_4c33008f.jpg',
	},
	{
		t: 'Control de obra',
		d: 'Evaluaciones previas a compra',
		img: 'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/09c0dbf4c_generated_1bc27bd4.jpg',
	},
]

const interventions = [
	'Humedades',
	'Impermeabilizaciones defectuosas',
	'Comprobación sistemas de seguridad',
	'Rotura de tejados',
	'Fisuras en cubierta',
	'Encuentros',
]

export default function Pathologies() {
	return (
		<section className='section-pad py-20 md:py-28 border-t border-border'>
			<div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
				<div className='max-w-2xl'>
					<span className='mono-label-accent'>Qué ayudamos a detectar</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
						Patologías y problemas que podemos estudiar
					</h2>
				</div>
				<p className='text-sm text-muted-foreground max-w-sm'>
					Cualquier patología que se manifieste en la envolvente del edificio,
					visible o no visible, documentada con criterio técnico.
				</p>
			</div>

			<div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
				{pathologies.map((p, i) => (
					<div
						key={p.t}
						className='group relative aspect-[4/5] overflow-hidden border border-border bg-muted'
					>
						<Image
							src={p.img}
							alt={`Patología constructiva: ${p.t} — ${p.d}`}
							className='h-full w-full transition-transform duration-700 group-hover:scale-105'
							fittingType='fill'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent' />
						<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.16em] text-primary bg-background/90 px-2 py-1'>
							PT-{String(i + 1).padStart(2, '0')}
						</span>
						<div className='absolute bottom-0 left-0 right-0 p-5'>
							<h3 className='font-heading font-semibold text-base md:text-lg text-background'>
								{p.t}
							</h3>
							<p className='mt-1 text-xs text-background/70'>{p.d}</p>
						</div>
					</div>
				))}
			</div>

			<div className='mt-10 border border-border p-6 md:p-8 bg-secondary/30'>
				<span className='mono-label'>
					Tipos de intervenciones técnicas · ámbitos de actuación
				</span>
				<div className='mt-5 flex flex-wrap gap-2'>
					{interventions.map((it) => (
						<span
							key={it}
							className='border border-border bg-background px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/80'
						>
							{it}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}
