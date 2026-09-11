import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, ArrowRight } from 'lucide-react'
import { Image } from '@/components/ui/image'
import CTASection from '@/components/CTASection'
import { base44 } from '@/api/base44Client'
import { cases } from '@/data/cases'
import { pathologies } from '@/data/pathologies'
import { videos } from '@/data/videos'

const contentTypes = [
	'Todos',
	'Artículos',
	'Vídeos',
	'Casos de estudio',
	'Patologías',
]
const topics = [
	'Fachadas',
	'Cubiertas',
	'Patologías',
	'Termografía',
	'Fotogrametría',
	'Inspección',
	'Obra',
]

// Normalizes a free-form category into one of the hub topics.
const mapTopic = (cat = '') => {
	const c = cat.toLowerCase()
	if (c.includes('fachada')) return 'Fachadas'
	if (c.includes('cubierta')) return 'Cubiertas'
	if (c.includes('termo')) return 'Termografía'
	if (c.includes('fotogrametr') || c.includes('3d')) return 'Fotogrametría'
	if (c.includes('obra')) return 'Obra'
	if (c.includes('patolog') || c.includes('humedad') || c.includes('fisura'))
		return 'Patologías'
	return 'Inspección'
}

export default function Knowledge() {
	const [posts, setPosts] = useState(null)
	const [type, setType] = useState('Todos')
	const [topic, setTopic] = useState('Todos')

	useEffect(() => {
		let active = true
		base44.entities.BlogPost.filter({ published: true }, '-date', 50)
			.then((p) => active && setPosts(p))
			.catch(() => active && setPosts([]))
		return () => {
			active = false
		}
	}, [])

	if (!posts) {
		return (
			<div className='flex items-center justify-center py-40'>
				<Loader2 className='h-6 w-6 animate-spin text-primary' />
			</div>
		)
	}

	const featured = posts.find((p) => p.featured) || posts[0]

	const items = [
		...posts.map((p) => ({
			type: 'Artículos',
			title: p.title,
			topic: mapTopic(p.category),
			meta: `${p.category} · ${p.readTime || ''}`.trim(),
			to: `/blog/${p.slug}`,
			image: p.image,
		})),
		...videos.map((v) => ({
			type: 'Vídeos',
			title: v.title,
			topic: v.category,
			meta: v.category + (v.duration ? ` · ${v.duration}` : ''),
			to: '/videos',
			image: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
		})),
		...cases.map((c) => ({
			type: 'Casos de estudio',
			title: c.title,
			topic: c.topic,
			meta: c.buildingType,
			to: `/casos-de-estudio/${c.slug}`,
			image: c.coverImage,
		})),
		...pathologies.map((p) => ({
			type: 'Patologías',
			title: p.title,
			topic: p.topic,
			meta: p.category,
			to: `/patologias/${p.slug}`,
			image: p.image,
		})),
	]

	const filtered = items.filter(
		(it) =>
			(type === 'Todos' || it.type === type) &&
			(topic === 'Todos' || it.topic === topic),
	)
	const showFeatured = type === 'Todos' && topic === 'Todos' && featured

	const filterButton = (label, active, onClick, count) => (
		<button
			type='button'
			onClick={onClick}
			className={`font-mono text-[11px] uppercase tracking-[0.14em] px-4 py-2.5 border transition-colors min-h-[40px] ${
				active
					? 'border-primary bg-primary text-primary-foreground'
					: 'border-border text-foreground/70 hover:border-primary/50 hover:text-foreground'
			}`}
		>
			{label}{' '}
			<span className={active ? 'opacity-70' : 'text-muted-foreground'}>
				({count})
			</span>
		</button>
	)

	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						KNW.00 / Centro de conocimiento
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Conocimiento técnico
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Todo el conocimiento de EurodroneX en un mismo lugar: artículos
						técnicos, vídeos de inspección, expedientes de casos y la biblioteca
						de patologías de la edificación.
					</p>
					<p className='mt-4 mono-label'>
						Casos y patologías usan contenido de demostración en esta fase
					</p>
				</div>
			</section>

			{/* Destacado */}
			{showFeatured && (
				<section className='section-pad pt-16 pb-8'>
					<div className='flex items-end justify-between mb-8'>
						<span className='mono-label-accent'>Recomendado</span>
						<span className='mono-label'>Última publicación</span>
					</div>
					<Link
						to={`/blog/${featured.slug}`}
						className='group grid grid-cols-1 lg:grid-cols-2 border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors tech-lift'
					>
						<div className='relative aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-muted'>
							<Image
								src={featured.image}
								alt={featured.title}
								className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
							/>
						</div>
						<div className='p-8 md:p-10 flex flex-col justify-center'>
							<span className='mono-label-accent'>
								Artículo · {featured.category} · {featured.readTime}
							</span>
							<h2 className='mt-4 heading-display text-2xl md:text-3xl text-balance group-hover:text-primary transition-colors'>
								{featured.title}
							</h2>
							<p className='mt-4 text-base text-muted-foreground leading-relaxed line-clamp-4'>
								{featured.excerpt}
							</p>
							<span className='mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 group-hover:text-primary transition-colors'>
								Leer artículo <ArrowRight className='h-3.5 w-3.5' />
							</span>
						</div>
					</Link>
				</section>
			)}

			{/* Filtros */}
			<section className='section-pad py-10 border-t border-border'>
				<div className='flex flex-wrap items-center gap-2'>
					{contentTypes.map((t) =>
						filterButton(
							t,
							type === t,
							() => setType(t),
							t === 'Todos'
								? items.length
								: items.filter((it) => it.type === t).length,
						),
					)}
				</div>
				<div className='mt-3 flex flex-wrap items-center gap-2'>
					{topics.map((t) =>
						filterButton(
							t,
							topic === t,
							() => setTopic(t),
							t === 'Todos'
								? items.length
								: items.filter((it) => it.topic === t).length,
						),
					)}
				</div>
			</section>

			{/* Grid */}
			<section className='section-pad pb-16'>
				{filtered.length === 0 ? (
					<p className='text-muted-foreground text-center py-16'>
						No hay contenido que coincida con esta combinación de filtros.
					</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filtered.map((it, i) => (
							<Link
								key={i}
								to={it.to}
								className='group border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors tech-lift rise-in'
								style={{ animationDelay: `${i * 40}ms` }}
							>
								<div className='relative aspect-[16/9] overflow-hidden bg-muted'>
									<Image
										src={it.image}
										alt={it.title}
										className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
										{it.type}
									</span>
								</div>
								<div className='p-5'>
									<span className='mono-label'>{it.meta}</span>
									<h3 className='mt-2 heading-display text-lg text-balance group-hover:text-primary transition-colors'>
										{it.title}
									</h3>
								</div>
							</Link>
						))}
					</div>
				)}
			</section>

			<CTASection
				eyebrow='¿Quiere aplicar esto a su edificio?'
				title='Solicite una evaluación técnica'
				text='Toda esta documentación existe para lo mismo: que su próxima decisión técnica esté respaldada por información real. Hablemos de su caso.'
				secondary={{ label: 'Ver servicios', to: '/servicios' }}
			/>
		</>
	)
}
