import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { getService } from '@/data/services'
import { getCase } from '@/data/cases'
import { getPathology } from '@/data/pathologies'
import { videos } from '@/data/videos'
import { getArticle } from '@/data/articles'

// Resolves cross-references (slugs / codes) into related-content link items.
// The connective tissue of the site: service ↔ pathology ↔ case ↔ video ↔ article.
export function buildRelatedItems({
	services = [],
	cases = [],
	pathologies = [],
	videos: videoCodes = [],
	articles = [],
}) {
	const out = []
	services.forEach((slug) => {
		const s = getService(slug)
		if (s)
			out.push({
				type: 'Servicio',
				code: s.code,
				title: s.shortTitle,
				to: `/servicios/${s.slug}`,
				note: s.tagline,
			})
	})
	cases.forEach((slug) => {
		const c = getCase(slug)
		if (c)
			out.push({
				type: 'Caso de estudio',
				code: c.code,
				title: c.title,
				to: `/casos-de-estudio/${c.slug}`,
			})
	})
	pathologies.forEach((slug) => {
		const p = getPathology(slug)
		if (p)
			out.push({
				type: 'Patología',
				code: p.code,
				title: p.title,
				to: `/patologias/${p.slug}`,
				note: p.category,
			})
	})
	videoCodes.forEach((code) => {
		const v = videos.find((x) => x.code === code)
		if (v)
			out.push({
				type: 'Vídeo',
				code: v.code,
				title: v.title,
				to: '/videos',
				note: v.category,
			})
	})
	articles.forEach((slug) => {
		const a = getArticle(slug)
		if (a)
			out.push({
				type: 'Artículo',
				code: 'BLG',
				title: a.title,
				to: `/blog/${a.slug}`,
			})
	})
	return out
}

// Related content section — shared by every typology.
export default function RelatedContent({ index = 'REL.00', items }) {
	if (!items || items.length === 0) return null
	return (
		<section className='section-pad py-16 border-t border-border bg-secondary/30'>
			<SectionHeading
				index={index}
				eyebrow='Sistema conectado'
				title='Contenido relacionado'
			/>
			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{items.map((it, i) => (
					<Link
						key={i}
						to={it.to}
						className='group border border-border bg-card p-5 hover:border-primary/50 transition-colors tech-lift rise-in'
						style={{ animationDelay: `${i * 60}ms` }}
					>
						<span className='mono-label-accent'>
							{it.type} · {it.code}
						</span>
						<span className='block mt-2.5 heading-display text-base text-balance group-hover:text-primary transition-colors'>
							{it.title}
						</span>
						{it.note && (
							<span className='block mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2'>
								{it.note}
							</span>
						)}
						<span className='mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 group-hover:text-primary transition-colors'>
							Ver <ArrowRight className='h-3.5 w-3.5' />
						</span>
					</Link>
				))}
			</div>
		</section>
	)
}
