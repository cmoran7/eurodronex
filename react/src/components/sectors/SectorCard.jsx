import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Sector card — typographic, icon-led; deliberately distinct from service cards.
export default function SectorCard({ item: s, index = 0 }) {
	const Icon = s.icon
	return (
		<Link
			to={`/sectores/${s.slug}`}
			className='group border border-border bg-card p-6 hover:border-primary/50 transition-colors tech-lift rise-in'
			style={{ animationDelay: `${index * 60}ms` }}
		>
			<div className='flex items-start justify-between gap-4'>
				<span className='flex items-center justify-center h-11 w-11 border border-border text-primary group-hover:border-primary/60 transition-colors'>
					{Icon && <Icon className='h-5 w-5' />}
				</span>
				<span className='mono-label'>{s.code}</span>
			</div>
			<h3 className='mt-5 heading-display text-lg text-balance group-hover:text-primary transition-colors'>
				{s.title}
			</h3>
			<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
				{s.tagline}
			</p>
			<span className='mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 group-hover:text-primary transition-colors'>
				Cómo trabajamos con usted <ArrowRight className='h-3.5 w-3.5' />
			</span>
		</Link>
	)
}
