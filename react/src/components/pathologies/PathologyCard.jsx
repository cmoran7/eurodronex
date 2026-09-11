import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Image } from '@/components/ui/image'

// Pathology card for the library index.
export default function PathologyCard({ item: p, index = 0 }) {
	return (
		<Link
			to={`/patologias/${p.slug}`}
			className='group border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors tech-lift rise-in'
			style={{ animationDelay: `${index * 60}ms` }}
		>
			<div className='relative aspect-[16/9] overflow-hidden bg-muted'>
				<Image
					src={p.image}
					alt={p.title}
					className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
				/>
				<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
					{p.category}
				</span>
				<span className='absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.14em] text-background bg-foreground/70 px-2 py-1'>
					{p.code}
				</span>
			</div>
			<div className='p-5'>
				<h3 className='heading-display text-lg text-balance group-hover:text-primary transition-colors'>
					{p.title}
				</h3>
				<p className='mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3'>
					{p.excerpt}
				</p>
				<span className='mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 group-hover:text-primary transition-colors'>
					Ver ficha técnica <ArrowRight className='h-3.5 w-3.5' />
				</span>
			</div>
		</Link>
	)
}
