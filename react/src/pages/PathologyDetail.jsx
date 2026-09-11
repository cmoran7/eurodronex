import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Breadcrumbs from '@/components/Breadcrumbs'
import AnnotatedImage from '@/components/AnnotatedImage'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import RelatedContent, {
	buildRelatedItems,
} from '@/components/related/RelatedContent'
import { getPathology } from '@/data/pathologies'

export default function PathologyDetail() {
	const { slug } = useParams()
	const p = getPathology(slug)
	if (!p) return <Navigate to='/patologias' replace />

	const related = buildRelatedItems({
		services: p.services,
		cases: p.relatedCases,
		videos: p.videos,
		articles: p.articles,
	})

	return (
		<>
			{/* Header */}
			<section className='section-pad pt-10 md:pt-14 pb-12 border-b border-border'>
				<Breadcrumbs
					items={[
						{ label: 'Inicio', to: '/' },
						{ label: 'Patologías', to: '/patologias' },
						{ label: p.title },
					]}
				/>
				<div className='max-w-4xl'>
					<span className='mono-label-accent'>
						{p.code} · {p.category}
					</span>
					<h1 className='mt-5 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
						{p.title}
					</h1>
					<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
						{p.excerpt}
					</p>
				</div>
			</section>

			{/* Definición + dónde se manifiesta */}
			<section className='section-pad py-16'>
				<div className='grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start'>
					<div>
						<SectionHeading
							index='DEF.00'
							eyebrow='Qué es'
							title='Definición técnica'
						/>
						<p className='mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty'>
							{p.definition}
						</p>
						<h3 className='mt-10 heading-display text-lg'>
							{p.manifestationIntro}
						</h3>
						<ul className='mt-5 border-t border-border'>
							{p.manifestationItems.map((item, i) => (
								<li
									key={i}
									className='flex gap-4 py-3.5 border-b border-border rise-in'
									style={{ animationDelay: `${i * 60}ms` }}
								>
									<span className='font-mono text-[10px] uppercase tracking-[0.18em] text-primary pt-1.5 shrink-0'>
										M-{String(i + 1).padStart(2, '0')}
									</span>
									<span className='text-sm text-foreground/85'>{item}</span>
								</li>
							))}
						</ul>
					</div>
					<AnnotatedImage
						src={p.image}
						alt={`${p.title} — imagen de demostración`}
						badge={p.code}
						caption='Imagen de demostración'
					/>
				</div>
			</section>

			{/* Qué puede observarse / qué información obtiene el cliente */}
			<section className='section-pad py-16 border-t border-border bg-secondary/30'>
				<SectionHeading
					index='OBS.00'
					eyebrow='Inspección aérea aplicada'
					title='Qué puede observarse mediante inspección'
					intro={p.observationIntro}
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
					{p.eurodroneItems.map((item, i) => (
						<div
							key={i}
							className='flex gap-4 border border-border bg-card p-5 rise-in'
							style={{ animationDelay: `${i * 60}ms` }}
						>
							<span className='font-mono text-[10px] uppercase tracking-[0.18em] text-primary pt-1 shrink-0'>
								O-{String(i + 1).padStart(2, '0')}
							</span>
							<span className='text-sm text-foreground/85 leading-relaxed'>
								{item}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* Técnicas aplicables + limitaciones */}
			<section className='section-pad py-16'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
					<div>
						<SectionHeading
							index='TEC.01'
							eyebrow='Instrumental'
							title='Técnicas aplicables'
						/>
						<ul className='mt-8 border-t border-border'>
							{p.techniques.map((t, i) => (
								<li
									key={i}
									className='flex gap-4 py-3.5 border-b border-border rise-in'
									style={{ animationDelay: `${i * 60}ms` }}
								>
									<span className='font-mono text-[10px] uppercase tracking-[0.18em] text-primary pt-1 shrink-0'>
										T-{String(i + 1).padStart(2, '0')}
									</span>
									<span className='text-sm text-foreground/85'>{t}</span>
								</li>
							))}
						</ul>
					</div>
					<div className='border border-border bg-card'>
						<div className='px-5 py-3 border-b border-border mono-label-accent'>
							LIM.00 / Limitaciones
						</div>
						<p className='px-5 py-5 text-sm text-muted-foreground leading-relaxed'>
							{p.limitations}
						</p>
					</div>
				</div>
			</section>

			{/* Observación vs diagnóstico */}
			<section className='relative section-pad py-16 border-t border-border bg-foreground text-background overflow-hidden'>
				<div className='absolute inset-0 cad-grid opacity-10 pointer-events-none' />
				<div className='relative'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						CRITERIO.00 / Distinción fundamental
					</span>
					<h2 className='mt-4 heading-display text-2xl md:text-3xl lg:text-4xl text-balance text-background'>
						Observar no es diagnosticar
					</h2>
					<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-background/20 border border-background/20'>
						<div className='bg-foreground p-6 md:p-8'>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								Observación / Documentación
							</span>
							<p className='mt-4 text-sm md:text-base text-background/75 leading-relaxed'>
								{p.observationVsDiagnosis.observation}
							</p>
						</div>
						<div className='bg-foreground p-6 md:p-8'>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								Diagnóstico / Interpretación técnica
							</span>
							<p className='mt-4 text-sm md:text-base text-background/75 leading-relaxed'>
								{p.observationVsDiagnosis.diagnosis}
							</p>
						</div>
					</div>
				</div>
			</section>

			<RelatedContent items={related} />

			<CTASection
				eyebrow={`¿Sospecha de ${p.category.toLowerCase()} en su edificio?`}
				title='Documente la patología con criterio técnico'
				text='La captura aérea aporta la base objetiva que el técnico necesita para interpretar. Le asesoramos sin compromiso.'
				secondary={{ label: 'Casos de estudio', to: '/casos-de-estudio' }}
			/>
		</>
	)
}
