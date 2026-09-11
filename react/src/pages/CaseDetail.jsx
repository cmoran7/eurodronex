import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Breadcrumbs from '@/components/Breadcrumbs'
import DataSheet from '@/components/DataSheet'
import AnnotatedImage from '@/components/AnnotatedImage'
import PhaseList from '@/components/PhaseList'
import SectionHeading from '@/components/SectionHeading'
import StatBlock from '@/components/StatBlock'
import CTASection from '@/components/CTASection'
import RelatedContent, {
	buildRelatedItems,
} from '@/components/related/RelatedContent'
import { getCase } from '@/data/cases'
import { getService } from '@/data/services'
import { getPathology } from '@/data/pathologies'

export default function CaseDetail() {
	const { slug } = useParams()
	const c = getCase(slug)
	if (!c) return <Navigate to='/casos-de-estudio' replace />

	const service = getService(c.serviceSlug)
	const pathologyNames = c.pathologySlugs
		.map((s) => getPathology(s)?.title)
		.filter(Boolean)
		.join(' · ')

	const phases = [
		{ code: 'FASE 01', title: 'Problema', text: c.problem },
		{ code: 'FASE 02', title: 'Necesidad de inspección', text: c.need },
		{
			code: 'FASE 03',
			title: 'Metodología',
			text: c.methodology,
			items: c.technology,
		},
		{ code: 'FASE 04', title: 'Captura de información', text: c.capture },
		{ code: 'FASE 05', title: 'Análisis', text: c.analysis },
		{
			code: 'FASE 06',
			title: 'Hallazgos',
			text: c.findingsIntro,
			items: c.findings.map((f) => f.title),
		},
		{
			code: 'FASE 07',
			title: 'Entregables',
			text: c.deliverablesIntro,
			items: c.deliverables,
		},
	]

	const related = buildRelatedItems({
		services: [c.serviceSlug],
		pathologies: c.pathologySlugs,
		videos: c.videos,
		articles: c.articles,
	})

	return (
		<>
			{/* Header */}
			<section className='section-pad pt-10 md:pt-14 pb-12 border-b border-border'>
				<Breadcrumbs
					items={[
						{ label: 'Inicio', to: '/' },
						{ label: 'Casos de estudio', to: '/casos-de-estudio' },
						{ label: c.title },
					]}
				/>
				<div className='max-w-4xl'>
					<span className='mono-label-accent'>
						{c.code} · {c.topic} · DEMO
					</span>
					<h1 className='mt-5 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
						{c.title}
					</h1>
					<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
						{c.excerpt}
					</p>
				</div>
			</section>

			{/* Ficha técnica + portada */}
			<section className='section-pad py-12'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 items-start'>
					<DataSheet
						title={`Expediente ${c.code} — ficha técnica`}
						rows={[
							{ label: 'Tipología', value: c.buildingType },
							{
								label: 'Servicio principal',
								value: service ? service.shortTitle : '—',
							},
							{
								label: 'Patologías relacionadas',
								value: pathologyNames || '—',
							},
							{ label: 'Dificultad de acceso', value: c.access },
							{ label: 'Tecnología empleada', value: c.technology.join(' · ') },
						]}
					/>
					<AnnotatedImage
						src={c.coverImage}
						alt={c.title}
						points={c.coverPoints}
						badge={c.code}
						caption='Imagen de demostración'
					/>
				</div>
			</section>

			{/* Desarrollo del expediente */}
			<section className='section-pad pb-16'>
				<SectionHeading
					index='DEV.00'
					eyebrow='Desarrollo del expediente'
					title='Del problema al entregable'
				/>
				<div className='mt-10'>
					<PhaseList phases={phases} />
				</div>
			</section>

			{/* Hallazgos */}
			<section className='section-pad py-16 border-t border-border bg-secondary/30'>
				<SectionHeading
					index='HLG.00'
					eyebrow='FASE 06 — extracto'
					title='Hallazgos documentados'
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
					{c.findings.map((f, i) => (
						<div
							key={i}
							className='border border-border bg-card p-6 tech-lift rise-in'
							style={{ animationDelay: `${i * 60}ms` }}
						>
							<span className='mono-label-accent'>
								F-{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className='mt-3 heading-display text-base text-balance'>
								{f.title}
							</h3>
							<p className='mt-2.5 text-sm text-muted-foreground leading-relaxed'>
								{f.text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Documentación obtenida */}
			<section className='section-pad py-16'>
				<SectionHeading
					index='DOC.00'
					eyebrow='Documentación obtenida'
					title='Fragmentos del expediente'
					intro='Extractos visuales de la documentación generada. Toda la información se entrega codificada, localizada y lista para su interpretación técnica.'
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
					{c.images.map((img, i) => (
						<AnnotatedImage
							key={i}
							src={img.src}
							alt={img.alt}
							badge={img.type}
							caption={img.caption}
						/>
					))}
				</div>
				<div className='mt-10'>
					<StatBlock stats={c.stats} />
				</div>
			</section>

			<RelatedContent items={related} />

			<CTASection
				eyebrow='¿Un expediente similar?'
				title='Solicite una evaluación técnica de su edificio'
				text='Le asesoramos sobre el enfoque de inspección y documentación más adecuado para su caso, con criterio profesional y sin compromiso.'
				secondary={{ label: 'Ver entregables', to: '/entregables' }}
			/>
		</>
	)
}
