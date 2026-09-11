import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { services } from '@/data/services'

// Related services grid shown on service detail pages.
export default function RelatedServices({ excludeSlug }) {
	const related = services.filter((s) => s.slug !== excludeSlug).slice(0, 3)
	return (
		<section className='section-pad py-20 md:py-24 bg-secondary/40'>
			<div className='flex items-end justify-between mb-10'>
				<div>
					<span className='mono-label-accent'>
						Otros servicios relacionados
					</span>
					<h2 className='mt-3 heading-display text-2xl md:text-3xl'>
						Matriz de servicios técnicos
					</h2>
				</div>
				<Link
					to='/servicios'
					className='hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 hover:text-primary'
				>
					Ver todos <ArrowUpRight className='h-4 w-4' />
				</Link>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{related.map((s) => (
					<Link
						key={s.slug}
						to={`/servicios/${s.slug}`}
						className='group relative border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors'
					>
						<div className='relative aspect-[16/10] overflow-hidden bg-muted'>
							<Image
								src={s.image}
								alt={`Servicio técnico: ${s.shortTitle}`}
								className='h-full w-full transition-transform duration-700 group-hover:scale-105'
								fittingType='fill'
							/>
							<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
								{s.code}
							</span>
						</div>
						<div className='p-5'>
							<span className='mono-label'>{s.category}</span>
							<h3 className='mt-2 font-heading font-semibold text-base text-foreground group-hover:text-primary transition-colors'>
								{s.shortTitle}
							</h3>
							<p className='mt-1.5 text-sm text-muted-foreground line-clamp-2'>
								{s.tagline}
							</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}
