import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Breadcrumbs from '@/components/Breadcrumbs'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import RelatedContent, {
	buildRelatedItems,
} from '@/components/related/RelatedContent'
import { getSector } from '@/data/sectors'

export default function SectorDetail() {
	const { slug } = useParams()
	const s = getSector(slug)
	if (!s) return <Navigate to='/sectores' replace />

	const Icon = s.icon
	const related = buildRelatedItems({
		services: s.services,
		cases: s.cases,
		pathologies: s.pathologies,
		videos: s.videos,
		articles: s.articles,
	})

	return (
		<>
			{/* Header */}
			<section className='section-pad pt-10 md:pt-14 pb-12 border-b border-border'>
				<Breadcrumbs
					items={[
						{ label: 'Inicio', to: '/' },
						{ label: 'Sectores', to: '/sectores' },
						{ label: s.title },
					]}
				/>
				<div className='max-w-4xl'>
					<div className='flex items-center gap-4'>
						<span className='flex items-center justify-center h-11 w-11 border border-border text-primary shrink-0'>
							{Icon && <Icon className='h-5 w-5' />}
						</span>
						<span className='mono-label-accent'>
							{s.code} · Para profesionales
						</span>
					</div>
					<h1 className='mt-6 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
						{s.title}
					</h1>
					<p className='mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground'>
						{s.tagline}
					</p>
					<p className='mt-6 text-lg text-muted-foreground leading-relaxed text-pretty'>
						{s.intro}
					</p>
				</div>
			</section>

			{/* Necesidades habituales */}
			<section className='section-pad py-16'>
				<SectionHeading
					index='NEC.00'
					eyebrow='Su perspectiva'
					title={s.needsIntro}
					intro='Lo que este perfil profesional necesita obtener de la inspección del edificio.'
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
					{s.needs.map((n, i) => (
						<div
							key={i}
							className='border border-border bg-card p-6 tech-lift rise-in'
							style={{ animationDelay: `${i * 60}ms` }}
						>
							<span className='mono-label-accent'>
								N-{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className='mt-3 heading-display text-base text-balance'>
								{n.title}
							</h3>
							<p className='mt-2.5 text-sm text-muted-foreground leading-relaxed'>
								{n.text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Cómo lo resuelve EurodroneX */}
			<section className='section-pad py-16 border-t border-border bg-secondary/30'>
				<SectionHeading
					index='RES.00'
					eyebrow='Nuestra respuesta'
					title={s.approachIntro}
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
					{s.approach.map((a, i) => (
						<div
							key={i}
							className='border border-border bg-card p-6 tech-lift rise-in'
							style={{ animationDelay: `${i * 60}ms` }}
						>
							<span className='mono-label-accent'>
								A-{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className='mt-3 heading-display text-base text-balance'>
								{a.title}
							</h3>
							<p className='mt-2.5 text-sm text-muted-foreground leading-relaxed'>
								{a.text}
							</p>
						</div>
					))}
				</div>
			</section>

			<RelatedContent items={related} />

			<CTASection
				eyebrow={`¿Trabaja en ${s.title.toLowerCase()}?`}
				title='Hablemos de su próximo encargo'
				text='Cuéntenos qué información necesita y le proponemos el enfoque técnico más adecuado, sin compromiso.'
				secondary={{ label: 'Ver sectores', to: '/sectores' }}
			/>
		</>
	)
}
