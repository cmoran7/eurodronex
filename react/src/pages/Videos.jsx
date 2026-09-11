import React, { useState } from 'react'
import CTASection from '@/components/CTASection'
import VideoCard from '@/components/videos/VideoCard'
import VideoPlayerDialog from '@/components/videos/VideoPlayerDialog'
import { videos, videoCategories } from '@/data/videos'

export default function Videos() {
	const [filter, setFilter] = useState('Todos')
	const [playing, setPlaying] = useState(null)

	const filtered =
		filter === 'Todos' ? videos : videos.filter((v) => v.category === filter)

	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						VID.00 / Registro audiovisual
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Inspecciones en vídeo
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Documentación en movimiento de trabajos de inspección, patología,
						termografía y fotogrametría aplicada a la edificación. Cada vídeo
						forma parte del expediente técnico del caso que documenta.
					</p>
					<p className='mt-4 mono-label'>
						Contenido de demostración — material de referencia pendiente de
						sustituir por casos propios
					</p>
				</div>
			</section>

			{/* Filters */}
			<section className='section-pad pt-10 pb-8 border-b border-border'>
				<div className='flex flex-wrap items-center gap-2'>
					{videoCategories.map((cat) => {
						const count =
							cat === 'Todos'
								? videos.length
								: videos.filter((v) => v.category === cat).length
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

			{/* Grid */}
			<section className='section-pad py-16'>
				{filtered.length === 0 ? (
					<p className='text-muted-foreground text-center py-16'>
						No hay vídeos registrados en esta categoría.
					</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filtered.map((v, i) => (
							<VideoCard key={v.code} video={v} index={i} onPlay={setPlaying} />
						))}
					</div>
				)}
			</section>

			<CTASection
				eyebrow='¿Necesita documentación técnica de su edificio?'
				title='Solicite una evaluación técnica'
				text='Le asesoramos sobre el enfoque de inspección y documentación más adecuado para su caso, con criterio profesional y sin compromiso.'
				secondary={{ label: 'Ver servicios', to: '/servicios' }}
			/>

			<VideoPlayerDialog video={playing} onClose={() => setPlaying(null)} />
		</>
	)
}
