import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { Image } from '@/components/ui/image'
import CTASection from '@/components/CTASection'
import { base44 } from '@/api/base44Client'

export default function Blog() {
	const [posts, setPosts] = useState(null)

	useEffect(() => {
		let active = true
		base44.entities.BlogPost.filter({ published: true }, '-date', 50)
			.then((r) => {
				if (active) setPosts(r)
			})
			.catch(() => {
				if (active) setPosts([])
			})
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
	const rest = posts.filter((p) => p !== featured)

	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						BLG.00 / Blog técnico
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Inspección, diagnóstico y patología de edificios
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Artículos técnicos sobre metodología, normativa y casos reales de
						inspección aérea aplicada a la edificación.
					</p>
				</div>
			</section>

			{posts.length === 0 ? (
				<section className='section-pad py-24 text-center'>
					<p className='text-muted-foreground'>
						Aún no hay artículos publicados.
					</p>
				</section>
			) : (
				<>
					{/* Featured */}
					<section className='section-pad py-16'>
						<Link
							to={`/blog/${featured.slug}`}
							className='group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-border overflow-hidden hover:border-primary/50 transition-colors'
						>
							<div className='lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-muted'>
								<Image
									src={featured.image}
									alt={featured.title}
									className='h-full w-full transition-transform duration-700 group-hover:scale-105'
									fittingType='fill'
								/>
								<span className='absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
									Destacado
								</span>
							</div>
							<div className='lg:col-span-5 p-6 lg:p-10'>
								<span className='mono-label-accent'>
									{featured.category} · {featured.readTime}
								</span>
								<h2 className='mt-4 heading-display text-2xl md:text-3xl text-balance group-hover:text-primary transition-colors'>
									{featured.title}
								</h2>
								<p className='mt-4 text-muted-foreground leading-relaxed'>
									{featured.excerpt}
								</p>
								<span className='mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary'>
									Leer artículo <ArrowUpRight className='h-4 w-4' />
								</span>
							</div>
						</Link>
					</section>

					{/* Rest */}
					{rest.length > 0 && (
						<section className='section-pad pb-20'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								{rest.map((p) => (
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
											<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
												{p.category}
											</span>
										</div>
										<div className='p-6'>
											<span className='mono-label'>
												{p.readTime} de lectura
											</span>
											<h3 className='mt-3 heading-display text-xl text-balance group-hover:text-primary transition-colors'>
												{p.title}
											</h3>
											<p className='mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3'>
												{p.excerpt}
											</p>
										</div>
									</Link>
								))}
							</div>
						</section>
					)}
				</>
			)}

			<CTASection
				eyebrow='¿Tiene un edificio que inspeccionar?'
				title='Conversemos sobre su caso'
				text='Le asesoramos sobre el enfoque técnico más adecuado para su edificio, sin compromiso.'
			/>
		</>
	)
}
