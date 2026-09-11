import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'
import { services } from '@/data/services'

const guide = [
	{
		need: 'Detectar patologías visibles',
		service: 'Informes de patologías de fachadas, cubiertas y obras',
	},
	{
		need: 'Análisis térmico y humedades ocultas',
		service: 'Termografía avanzada',
	},
	{ need: 'Modelo 3D y mediciones precisas', service: 'Fotogrametría' },
	{ need: 'Evaluación remota inmediata', service: 'Peritajes en streaming' },
	{
		need: 'Diagnóstico de lesiones en fachada',
		service: 'Inspección pre compra',
	},
	{
		need: 'Control periódico de avance',
		service: 'Seguimiento o visita de obra',
	},
]

export default function Services() {
	return (
		<>
			{/* Hero */}
			<section className='section-pad pt-12 md:pt-16 pb-16 border-b border-border'>
				<div className='max-w-4xl'>
					<div className='flex items-center gap-3'>
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							SRV.00 / Matriz de servicios
						</span>
					</div>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Servicios de ingeniería técnica con tecnología aérea
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						No ofrecemos servicios aislados. Ofrecemos un ecosistema técnico
						integral donde cada inspección está respaldada por criterio
						ingenieril, interpretación profesional y validez pericial.
					</p>
				</div>
			</section>

			{/* Enfoque técnico */}
			<section className='section-pad py-20'>
				<SectionHeading
					index='01'
					eyebrow='Nuestro enfoque técnico'
					title='La diferencia fundamental es la interpretación profesional'
					intro='No nos limitamos a capturar imágenes: analizamos, diagnosticamos y emitimos criterio técnico fundamentado.'
				/>
				<div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border'>
					{[
						{
							t: 'Ingenieros colegiados',
							d: 'Todos los informes están elaborados y firmados por ingenieros con responsabilidad profesional directa.',
						},
						{
							t: 'Validez pericial',
							d: 'Informes con plena validez legal para ITE, IEE, peritajes judiciales y proyectos de rehabilitación.',
						},
						{
							t: 'Interpretación profesional',
							d: 'Sabemos distinguir una fisura estructural de una de retracción. Una humedad por filtración de una por condensación.',
						},
						{
							t: 'Asesoramiento técnico',
							d: 'No entregamos un informe y desaparecemos. Asesoramos sobre las conclusiones y recomendaciones técnicas.',
						},
					].map((c, i) => (
						<div key={c.t} className='bg-background p-7'>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								0{i + 1}
							</span>
							<h3 className='mt-4 font-heading font-semibold text-base text-foreground'>
								{c.t}
							</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{c.d}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Service matrix */}
			<section className='section-pad pb-20'>
				<div className='flex items-end justify-between mb-10'>
					<div>
						<span className='mono-label-accent'>Servicios / 06</span>
						<h2 className='mt-3 heading-display text-2xl md:text-3xl'>
							Matriz completa
						</h2>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{services.map((s) => (
						<ServiceCard key={s.slug} service={s} />
					))}
				</div>
			</section>

			{/* Guía rápida */}
			<section className='section-pad py-20 border-t border-border bg-secondary/30'>
				<SectionHeading
					index='02'
					eyebrow='¿Qué servicio necesita?'
					title='Guía rápida para identificar el servicio técnico más adecuado'
					intro='Según su necesidad específica, le orientamos sobre el servicio que mejor encaja con su caso.'
				/>
				<div className='mt-10 border border-border bg-background'>
					{guide.map((g, i) => (
						<div
							key={g.need}
							className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-5 md:p-6 ${i !== guide.length - 1 ? 'border-b border-border' : ''}`}
						>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary shrink-0 w-8'>
								{String(i + 1).padStart(2, '0')}
							</span>
							<div className='flex-1'>
								<p className='text-sm text-muted-foreground'>Si necesita</p>
								<p className='font-heading font-semibold text-foreground'>
									{g.need}
								</p>
							</div>
							<div className='flex items-center gap-3 md:flex-1'>
								<span className='text-primary hidden md:inline'>→</span>
								<p className='text-sm text-foreground/80'>{g.service}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Cierre */}
			<section className='section-pad py-20 border-t border-border'>
				<div className='max-w-3xl'>
					<span className='mono-label-accent'>Criterio técnico</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
						No ofrecemos vuelos. Ofrecemos criterio técnico.
					</h2>
					<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
						Cualquier operador puede pilotar un dron y entregar fotografías. La
						diferencia está en saber qué significan esas imágenes, qué gravedad
						tiene cada lesión detectada y qué recomendación técnica corresponde.
					</p>
					<Link
						to='/ingenieria'
						className='mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-primary hover:underline'
					>
						Conocer nuestro enfoque técnico <ArrowRight className='h-4 w-4' />
					</Link>
				</div>
			</section>

			<CTASection />
		</>
	)
}
