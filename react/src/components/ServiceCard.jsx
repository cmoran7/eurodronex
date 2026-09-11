import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Image } from '@/components/ui/image'

// Service card — technical detail aesthetic.
export default function ServiceCard({ service }) {
	return (
		<Link
			to={`/servicios/${service.slug}`}
			className='group relative flex flex-col border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors tech-lift'
		>
			<div className='relative aspect-[4/3] overflow-hidden bg-muted'>
				<Image
					src={service.image}
					alt={`Inspección técnica: ${service.shortTitle} — ${service.tagline}`}
					className='h-full w-full transition-transform duration-700 group-hover:scale-105'
					fittingType='fill'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent' />
				<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
					{service.code}
				</span>
				<span className='absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary bg-background/90 px-2 py-1'>
					{service.category}
				</span>
			</div>
			<div className='flex-1 p-6 flex flex-col'>
				<h3 className='font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors'>
					{service.shortTitle}
				</h3>
				<p className='mt-2 text-sm text-muted-foreground leading-relaxed flex-1'>
					{service.tagline}
				</p>
				<div className='mt-5 flex items-center justify-between'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70'>
						Ver servicio
					</span>
					<ArrowUpRight className='h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
				</div>
			</div>
		</Link>
	)
}
