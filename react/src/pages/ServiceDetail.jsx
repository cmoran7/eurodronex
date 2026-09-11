import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Image } from '@/components/ui/image'
import { getService, services } from '@/data/services'
import ProcessSteps from '@/components/ProcessSteps'
import StatBlock from '@/components/StatBlock'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import ContactForm from '@/components/ContactForm'

export default function ServiceDetail() {
	const { slug } = useParams()
	const service = getService(slug)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [slug])

	if (!service) return <Navigate to='/servicios' replace />

	const serviceTypeMap = {
		'inspeccion-tecnica-con-drones': 'Inspección técnica ITE',
		'termografia-con-dron': 'Termografía',
		'fotogrametria-3d-edificios': 'Fotogrametría / Gemelo digital',
		'diagnostico-fachadas': 'Diagnóstico de fachadas',
		'seguimiento-de-obra': 'Seguimiento de obra',
		streaming: 'Inspección en streaming',
	}

	return (
		<>
			{/* Breadcrumb + hero */}
			<section className='section-pad pt-10 md:pt-14 pb-12 border-b border-border'>
				<nav className='flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-8'>
					<Link to='/' className='hover:text-primary'>
						Inicio
					</Link>
					<span>/</span>
					<Link to='/servicios' className='hover:text-primary'>
						Servicios
					</Link>
					<span>/</span>
					<span className='text-primary'>{service.code}</span>
				</nav>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
					<div className='lg:col-span-7'>
						<div className='flex items-center gap-3'>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								{service.code}
							</span>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground'>
								{service.category}
							</span>
						</div>
						<h1 className='mt-5 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
							{service.title}
						</h1>
						<p className='mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
							{service.summary}
						</p>
						<div className='mt-8 flex flex-col sm:flex-row gap-4'>
							<a
								href='#solicitar'
								className='inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-primary/90 transition-colors min-h-[52px]'
							>
								Solicitar presupuesto <ArrowRight className='h-4 w-4' />
							</a>
							<Link
								to='/servicios'
								className='inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-foreground/5 transition-colors min-h-[52px]'
							>
								<ArrowLeft className='h-4 w-4' /> Otros servicios
							</Link>
						</div>
					</div>
					<div className='lg:col-span-5'>
						<div className='relative'>
							<div className='relative aspect-[4/3] overflow-hidden border border-border bg-muted'>
								<Image
									src={service.image}
									alt={`${service.shortTitle}: ${service.tagline}`}
									className='h-full w-full'
									fittingType='fill'
								/>
								<span className='point-in absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
									{service.code}
								</span>
							</div>
							<span className='corner-mark corner-tl absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-primary' />
							<span className='corner-mark corner-tr absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-primary' />
							<span className='corner-mark corner-bl absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-primary' />
							<span className='corner-mark corner-br absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-primary' />
						</div>
					</div>
				</div>
			</section>

			{/* Problema / Solución */}
			<section className='section-pad py-20 md:py-24'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border'>
					<div className='bg-background p-8 md:p-10'>
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground'>
							El problema
						</span>
						<h2 className='mt-4 heading-display text-xl md:text-2xl text-balance'>
							{service.problem}
						</h2>
					</div>
					<div className='bg-foreground text-background p-8 md:p-10 relative'>
						<div className='absolute top-0 left-0 right-0 h-px bg-primary' />
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							La solución
						</span>
						<h2 className='mt-4 heading-display text-xl md:text-2xl text-balance'>
							{service.solution}
						</h2>
					</div>
				</div>
			</section>

			{/* Qué es / Cuándo */}
			<section className='section-pad pb-20 md:pb-24'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<div>
						<span className='mono-label-accent'>Qué es y para qué sirve</span>
						<p className='mt-5 text-lg text-muted-foreground leading-relaxed'>
							{service.whatIs}
						</p>
					</div>
					<div>
						<span className='mono-label-accent'>Cuándo se utiliza</span>
						<p className='mt-5 text-lg text-muted-foreground leading-relaxed'>
							{service.whenToUse}
						</p>
					</div>
				</div>
			</section>

			{/* Beneficios */}
			<section className='section-pad py-20 border-t border-border bg-secondary/30'>
				<span className='mono-label-accent'>Beneficios</span>
				<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance max-w-2xl'>
					Qué problema resuelve
				</h2>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border'>
					{service.benefits.map((b, i) => (
						<div key={b.title} className='bg-background p-7 md:p-8'>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className='mt-3 font-heading font-semibold text-lg text-foreground'>
								{b.title}
							</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{b.text}
							</p>
						</div>
					))}
				</div>

				{service.keyPoints && (
					<div className='mt-8 border border-border bg-background p-6 md:p-8'>
						<span className='mono-label'>Puntos clave</span>
						<ul className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-3'>
							{service.keyPoints.map((k) => (
								<li
									key={k}
									className='flex items-start gap-3 text-sm text-foreground'
								>
									<Check className='h-4 w-4 text-primary mt-0.5 shrink-0' /> {k}
								</li>
							))}
						</ul>
					</div>
				)}
			</section>

			{/* Productos (fotogrametría) */}
			{service.products && (
				<section className='section-pad py-20 border-t border-border'>
					<span className='mono-label-accent'>Productos / entregables</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance max-w-2xl'>
						Modelos y documentos generados
					</h2>
					<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border'>
						{service.products.map((p, i) => (
							<div key={p.title} className='bg-background p-7'>
								<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
									PRD-{String(i + 1).padStart(2, '0')}
								</span>
								<h3 className='mt-3 font-heading font-semibold text-base text-foreground'>
									{p.title}
								</h3>
								<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
									{p.text}
								</p>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Proceso */}
			<section className='section-pad py-20 border-t border-border'>
				<span className='mono-label-accent'>Proceso</span>
				<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance max-w-2xl mb-10'>
					Metodología de trabajo
				</h2>
				<ProcessSteps
					steps={service.process}
					columns={service.process.length}
				/>
			</section>

			{/* Stats */}
			<section className='section-pad py-12 border-t border-border bg-secondary/30'>
				<StatBlock stats={service.stats} columns={service.stats.length} />
			</section>

			{/* FAQ */}
			<section className='section-pad py-20 border-t border-border'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-4'>
						<span className='mono-label-accent'>Preguntas frecuentes</span>
						<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
							Resolvemos sus dudas
						</h2>
					</div>
					<div className='lg:col-span-8'>
						<FAQAccordion items={service.faq} />
					</div>
				</div>
			</section>

			{/* Contacto */}
			<section
				id='solicitar'
				className='section-pad py-20 border-t border-border bg-secondary/30'
			>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-5'>
						<span className='mono-label-accent'>Solicitar presupuesto</span>
						<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
							Respuesta en menos de 24 horas
						</h2>
						<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
							Cuéntenos su caso técnico. Analizamos el edificio, la ubicación y
							el alcance para proponer el enfoque más adecuado.
						</p>
					</div>
					<div className='lg:col-span-7'>
						<ContactForm defaultService={serviceTypeMap[service.slug]} />
					</div>
				</div>
			</section>

			<RelatedServices excludeSlug={service.slug} />
		</>
	)
}
