import React, { useState } from 'react'
import CTASection from '@/components/CTASection'
import PathologyCard from '@/components/pathologies/PathologyCard'
import { pathologies } from '@/data/pathologies'

const categories = ['Todas', ...new Set(pathologies.map((p) => p.category))]

export default function Pathologies() {
	const [filter, setFilter] = useState('Todas')
	const filtered =
		filter === 'Todas'
			? pathologies
			: pathologies.filter((p) => p.category === filter)

	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						PAT.00 / Biblioteca técnica
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Patologías de edificios
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Biblioteca técnica sobre las patologías de la envolvente que pueden
						documentarse mediante captura aérea: qué son, dónde se manifiestan,
						qué puede observarse y qué exige su interpretación. Escrita para
						profesionales de la edificación, no para curiosos.
					</p>
					<p className='mt-4 mono-label'>
						Contenido en desarrollo — fichas de demostración
					</p>
				</div>
			</section>

			{/* Filtros por categoría */}
			<section className='section-pad pt-10 pb-8 border-b border-border'>
				<div className='flex flex-wrap items-center gap-2'>
					{categories.map((cat) => {
						const count =
							cat === 'Todas'
								? pathologies.length
								: pathologies.filter((p) => p.category === cat).length
						const active = filter === cat
						return (
							<button
								key={cat}
								type='button'
								onClick={() => setFilter(cat)}
								className={`font-mono text-[11px] uppercase tracking-[0.14em] px-4 py-2.5 border transition-colors min-h-[40px] ${
									active
										? 'border-primary bg-primary text-primary-foreground'
										: 'border-border text-foreground/70 hover:border-primary/50 hover:text-foreground'
								}`}
							>
								{cat}{' '}
								<span
									className={active ? 'opacity-70' : 'text-muted-foreground'}
								>
									({count})
								</span>
							</button>
						)
					})}
				</div>
			</section>

			<section className='section-pad py-16'>
				{filtered.length === 0 ? (
					<p className='text-muted-foreground text-center py-16'>
						No hay fichas registradas en esta categoría.
					</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filtered.map((p, i) => (
							<PathologyCard key={p.slug} item={p} index={i} />
						))}
					</div>
				)}
			</section>

			<CTASection
				eyebrow='¿Una patología en su edificio?'
				title='Documentarla es el primer paso'
				text='La captura aérea aporta la base objetiva; la interpretación corresponde al técnico. Le asesoramos sobre el enfoque más adecuado, sin compromiso.'
				secondary={{ label: 'Ver servicios', to: '/servicios' }}
			/>
		</>
	)
}
