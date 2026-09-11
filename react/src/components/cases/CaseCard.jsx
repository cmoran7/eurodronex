import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Image } from '@/components/ui/image'

// Case card for the cases index and knowledge hub.
export default function CaseCard({ item: c, index = 0 }) {
	return (
		<Link
			to={`/casos-de-estudio/${c.slug}`}
			className='group border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors tech-lift rise-in'
			style={{ animationDelay: `${index * 60}ms` }}
		>
			<div className='relative aspect-[16/9] overflow-hidden bg-muted'>
				<Image
					src={c.coverImage}
					alt={c.title}
					className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
				/>
				<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
					{c.topic}
				</span>
				<span className='absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.14em] text-background bg-foreground/70 px-2 py-1'>
					{c.code} · DEMO
				</span>
			</div>
			<div className='p-5'>
				<span className='mono-label'>{c.buildingType}</span>
				<h3 className='mt-2 heading-display text-lg text-balance group-hover:text-primary transition-colors'>
					{c.title}
				</h3>
				<p className='mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2'>
					{c.excerpt}
				</p>
				<span className='mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 group-hover:text-primary transition-colors'>
					Ver expediente <ArrowRight className='h-3.5 w-3.5' />
				</span>
			</div>
		</Link>
	)
}
