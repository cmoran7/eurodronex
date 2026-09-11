import React, { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { Image } from '@/components/ui/image'
import CTASection from '@/components/CTASection'
import { base44 } from '@/api/base44Client'

export default function BlogPost() {
	const { slug } = useParams()
	const [data, setData] = useState(null) // { post, others }

	useEffect(() => {
		let active = true
		setData(null)
		base44.entities.BlogPost.filter({ published: true }, '-date', 50)
			.then((all) => {
				if (!active) return
				setData({
					post: all.find((p) => p.slug === slug) || null,
					others: all.filter((p) => p.slug !== slug),
				})
			})
			.catch(() => {
				if (active) setData({ post: null, others: [] })
			})
		return () => {
			active = false
		}
	}, [slug])

	if (!data) {
		return (
			<div className='flex items-center justify-center py-40'>
				<Loader2 className='h-6 w-6 animate-spin text-primary' />
			</div>
		)
	}

	const { post, others } = data
	if (!post) return <Navigate to='/blog' replace />

	const sections = post.sections || []

	return (
		<>
			<article>
				{/* Header */}
				<section className='section-pad pt-10 md:pt-14 pb-12 border-b border-border'>
					<nav className='flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-8'>
						<Link to='/' className='hover:text-primary'>
							Inicio
						</Link>
						<span>/</span>
						<Link to='/blog' className='hover:text-primary'>
							Blog
						</Link>
						<span>/</span>
						<span className='text-primary line-clamp-1'>{post.category}</span>
					</nav>
					<div className='max-w-3xl'>
						<span className='mono-label-accent'>
							{post.category} · {post.readTime} de lectura
						</span>
						<h1 className='mt-5 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
							{post.title}
						</h1>
						<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
							{post.excerpt}
						</p>
					</div>
				</section>

				{/* Cover */}
				<section className='section-pad py-10'>
					<div className='relative aspect-[16/8] overflow-hidden border border-border bg-muted max-w-5xl'>
						<Image
							src={post.image}
							alt={post.title}
							className='h-full w-full'
							fittingType='fill'
						/>
						<span className='corner-mark corner-tl absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-primary' />
						<span className='corner-mark corner-tr absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-primary' />
						<span className='corner-mark corner-bl absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-primary' />
						<span className='corner-mark corner-br absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-primary' />
					</div>
				</section>

				{/* Body */}
				<section className='section-pad pb-16'>
					<div className='max-w-3xl'>
						{sections.map((sec, i) => (
							<div key={i} className='mb-10'>
								<div className='flex items-baseline gap-3 mb-3'>
									<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary shrink-0'>
										{String(i + 1).padStart(2, '0')}
									</span>
									<h2 className='heading-display text-xl md:text-2xl text-balance'>
										{sec.h}
									</h2>
								</div>
								<p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
									{sec.p}
								</p>
							</div>
						))}
					</div>
				</section>
			</article>

			{/* More posts */}
			{others.length > 0 && (
				<section className='section-pad py-16 border-t border-border bg-secondary/30'>
					<div className='flex items-end justify-between mb-8'>
						<h2 className='heading-display text-2xl md:text-3xl'>
							Más artículos técnicos
						</h2>
						<Link
							to='/blog'
							className='inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 hover:text-primary'
						>
							<ArrowLeft className='h-4 w-4' /> Volver al blog
						</Link>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{others.map((p) => (
							<Link
								key={p.slug}
								to={`/blog/${p.slug}`}
								className='group border border-border overflow-hidden hover:border-primary/50 transition-colors'
							>
								<div className='relative aspect-[16/9] overflow-hidden bg-muted'>
									<Image
										src={p.image}
										alt={p.title}
										className='h-full w-full transition-transform duration-700 group-hover:scale-105'
										fittingType='fill'
									/>
								</div>
								<div className='p-5'>
									<span className='mono-label'>{p.category}</span>
									<h3 className='mt-2 heading-display text-lg text-balance group-hover:text-primary transition-colors'>
										{p.title}
									</h3>
								</div>
							</Link>
						))}
					</div>
				</section>
			)}

			<CTASection
				eyebrow='¿Necesita una inspección técnica?'
				title='Solicite una evaluación técnica de su edificio'
				text='Le asesoramos sobre el enfoque técnico más adecuado, con criterio profesional y sin compromiso.'
				secondary={{ label: 'Ver servicios', to: '/servicios' }}
			/>
		</>
	)
}
