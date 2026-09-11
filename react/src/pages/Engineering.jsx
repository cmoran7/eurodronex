import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Image } from '@/components/ui/image'
import SectionHeading from '@/components/SectionHeading'
import ProcessSteps from '@/components/ProcessSteps'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'

const founderImg =
	'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/4cfe6f0ac_generated_b09e9632.jpg'

const values = [
	{
		t: 'Rigor técnico',
		d: 'Todos nuestros informes están elaborados por ingenieros o arquitectos.',
	},
	{
		t: 'Experiencia profesional',
		d: 'Más de 20 años en inspección técnica de edificios y peritaciones.',
	},
	{
		t: 'Validez pericial',
		d: 'Documentación con plena validez legal para cualquier procedimiento.',
	},
	{
		t: 'Metodología contrastada',
		d: 'Procesos certificados y auditorías de calidad sistemáticas.',
	},
]

const differences = [
	{
		t: 'Servicios de ingeniería y arquitectura',
		d: 'No nos limitamos a entregar imágenes. Analizamos técnicamente cada patología, evaluamos causas, identificamos riesgos y proponemos soluciones desde el criterio profesional de un ingeniero.',
	},
	{
		t: 'Técnicos colegiados, cuando se requiere',
		d: 'Podemos incorporar técnicos colegiados cuando el encargo lo exija o se solicite expresamente, adaptando el alcance documental y técnico a las necesidades reales del proyecto.',
	},
	{
		t: 'Especialización exclusiva en edificación',
		d: 'No hacemos fotografía aérea recreativa ni eventos. Nuestra dedicación total está en el mundo de la arquitectura y la ingeniería.',
	},
]

const whatImplies = [
	'Análisis previo de la tipología constructiva',
	'Evaluación de puntos singulares y zonas críticas',
	'Identificación de patologías visibles y no visibles',
	'Interpretación de fisuras, grietas, humedades, deformaciones, desprendimientos, corrosiones…',
	'Valoración de riesgos estructurales',
	'Redacción de conclusiones técnicas fundamentadas',
]

const inspections = [
	'Fachadas',
	'Cubiertas planas e inclinadas',
	'Elementos estructurales',
	'Seguimiento de ejecución de obra',
	'Evaluación previa a compra de activos',
	'Inspecciones para comunidades y administradores',
	'Diagnóstico de patologías constructivas',
]

const steps = [
	{
		step: '01',
		title: 'Estudio previo del trabajo',
		text: 'Análisis inicial y búsqueda de puntos críticos a evaluar.',
	},
	{
		step: '02',
		title: 'Coordinación de permisos y seguridad',
		text: 'Gestión de autorizaciones necesarias y establecimiento de protocolo de seguridad.',
	},
	{
		step: '03',
		title: 'Inspección aérea ejecutada por técnico',
		text: 'Captura sistemática de información visual por piloto ingeniero o arquitecto.',
	},
	{
		step: '04',
		title: 'Análisis técnico en gabinete',
		text: 'Interpretación profesional de patologías, evaluación de causas y riesgos.',
	},
	{
		step: '05',
		title: 'Redacción de informe o dictamen',
		text: 'Entrega de informe técnico fundamentado y, cuando se solicite, dictamen con requisitos colegiales.',
	},
	{
		step: '06',
		title: 'Entrega y asesoramiento posterior',
		text: 'Explicación detallada de conclusiones y orientación sobre actuaciones recomendadas.',
	},
]

const faqs = [
	{
		q: '¿Qué diferencia a un piloto operador de un ingeniero especializado?',
		a: 'Un operador captura imágenes. Un ingeniero interpreta técnicamente la información obtenida y emite conclusiones profesionales fundamentadas.',
	},
	{
		q: '¿Los informes tienen validez legal?',
		a: 'Sí. Están firmados por profesionales colegiados con capacidad legal para emitir dictámenes técnicos válidos en procedimientos administrativos y judiciales.',
	},
	{ q: '¿Se necesitan andamios o medios auxiliares?', a: 'No.' },
	{
		q: '¿Qué tipo de patologías pueden detectarse?',
		a: 'Cualquier patología que presente el envolvente.',
	},
	{
		q: '¿En cuánto tiempo se entrega el informe?',
		a: 'Depende de la complejidad del edificio, pero normalmente en un plazo breve tras la inspección.',
	},
	{
		q: '¿Trabajan con inmobiliarias y aseguradoras?',
		a: 'Sí. Ofrecemos evaluaciones técnicas previas a compra, peritaciones y análisis post-siniestro.',
	},
]

const responsibility = [
	{
		t: 'Intervención colegiada, cuando se requiere',
		d: 'Posibilidad de incorporar técnicos colegiados en aquellos encargos que lo exijan o cuando se solicite expresamente.',
	},
	{
		t: 'Seguro de responsabilidad civil',
		d: 'Cobertura profesional específica para actividad pericial y técnica en edificación.',
	},
	{
		t: 'Certificación AESA',
		d: 'Pilotos certificados con licencia oficial para operaciones aéreas profesionales.',
	},
	{
		t: 'Cumplimiento normativo vigente',
		d: 'Procedimientos adaptados a CTE, LOE y normativa sectorial aplicable.',
	},
]

export default function Engineering() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-16 border-b border-border'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
					<div className='lg:col-span-7'>
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							ING.00 / Ingeniería
						</span>
						<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
							Ingenieros y arquitectos. No solo operadores.
						</h1>
						<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
							Ingeniería aplicada con tecnología aérea. Interpretación técnica
							real. Eurodrónex nace de la necesidad de aplicar rigor técnico
							profesional a la inspección de edificios mediante drones.
						</p>
					</div>
					<div className='lg:col-span-5'>
						<div className='relative aspect-[4/3] overflow-hidden border border-border bg-muted'>
							<Image
								src={founderImg}
								alt='Ingeniero de EurodroneX interpretando datos de inspección técnica de edificio'
								className='h-full w-full'
								fittingType='fill'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Especialización */}
			<section className='section-pad py-20'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-5'>
						<span className='mono-label-accent'>Fundador</span>
						<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
							Ingeniería especializada en edificación
						</h2>
					</div>
					<div className='lg:col-span-7'>
						<p className='text-lg text-muted-foreground leading-relaxed'>
							No somos una empresa de servicios aéreos genéricos: somos
							ingenieros especializados que utilizan la tecnología como
							herramienta. Esta diferencia fundamental nos permite no solo
							capturar imágenes, sino interpretarlas técnicamente, identificar
							patologías constructivas, evaluar riesgos estructurales y proponer
							soluciones fundamentadas en criterio profesional.
						</p>
						<ul className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3'>
							{[
								'Ingeniería en edificación',
								'Arquitectura técnica',
								'Piloto RPAS Certificado AESA',
								'Seguro RC Profesional',
							].map((t) => (
								<li
									key={t}
									className='flex items-center gap-3 text-sm text-foreground'
								>
									<Check className='h-4 w-4 text-primary shrink-0' /> {t}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Valores */}
			<section className='section-pad py-20 border-t border-border bg-secondary/30'>
				<SectionHeading
					index='01'
					eyebrow='Nuestros valores'
					title='Rigor, experiencia y validez pericial'
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border'>
					{values.map((v, i) => (
						<div key={v.t} className='bg-background p-7'>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								0{i + 1}
							</span>
							<h3 className='mt-3 font-heading font-semibold text-base text-foreground'>
								{v.t}
							</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{v.d}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Diferencias */}
			<section className='section-pad py-20 border-t border-border'>
				<SectionHeading
					index='02'
					eyebrow='Diferenciación'
					title='Por qué no somos como otras empresas de drones'
				/>
				<div className='mt-10 space-y-px bg-border border border-border'>
					{differences.map((d, i) => (
						<div
							key={d.t}
							className='bg-background p-7 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6'
						>
							<span className='md:col-span-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className='md:col-span-4 font-heading font-semibold text-lg text-foreground'>
								{d.t}
							</h3>
							<p className='md:col-span-7 text-sm text-muted-foreground leading-relaxed'>
								{d.d}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Qué implica */}
			<section className='section-pad py-20 border-t border-border bg-foreground text-background relative overflow-hidden'>
				<div className='absolute inset-0 cad-grid opacity-15' />
				<div className='absolute top-0 left-0 right-0 h-px bg-primary' />
				<div className='relative grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-5'>
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							Criterio profesional
						</span>
						<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
							Qué implica realmente una inspección con criterio profesional
						</h2>
						<p className='mt-5 text-background/70 leading-relaxed'>
							No se trata solo de volar un dron.
						</p>
					</div>
					<div className='lg:col-span-7'>
						<ul className='space-y-3'>
							{whatImplies.map((t) => (
								<li
									key={t}
									className='flex items-start gap-3 text-background/90 border-b border-background/15 pb-3'
								>
									<span className='font-mono text-[11px] text-primary mt-1'>
										→
									</span>
									<span className='text-base'>{t}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Inspecciones */}
			<section className='section-pad py-20 border-t border-border'>
				<span className='mono-label-accent'>Nuestras inspecciones</span>
				<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance mb-8'>
					Ámbitos de inspección
				</h2>
				<div className='flex flex-wrap gap-2'>
					{inspections.map((t) => (
						<span
							key={t}
							className='border border-border bg-background px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/80'
						>
							{t}
						</span>
					))}
				</div>
			</section>

			{/* Cómo trabajamos */}
			<section className='section-pad py-20 border-t border-border bg-secondary/30'>
				<span className='mono-label-accent'>Cómo trabajamos técnicamente</span>
				<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance mb-10'>
					Proceso técnico completo
				</h2>
				<ProcessSteps steps={steps} columns={3} />
			</section>

			{/* Responsabilidad */}
			<section className='section-pad py-20 border-t border-border'>
				<SectionHeading
					index='03'
					eyebrow='Responsabilidad técnica real'
					title='Intervención colegiada y cobertura profesional'
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border'>
					{responsibility.map((r) => (
						<div key={r.t} className='bg-background p-7'>
							<h3 className='font-heading font-semibold text-base text-foreground'>
								{r.t}
							</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{r.d}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* FAQ */}
			<section className='section-pad py-20 border-t border-border'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='lg:col-span-4'>
						<span className='mono-label-accent'>Preguntas frecuentes</span>
						<h2 className='mt-4 heading-display text-3xl text-balance'>
							Dudas habituales
						</h2>
					</div>
					<div className='lg:col-span-8'>
						<FAQAccordion items={faqs} />
					</div>
				</div>
			</section>

			<CTASection
				eyebrow='Evaluación con criterio profesional'
				title='¿Necesita una evaluación técnica con criterio profesional?'
				text='Cada edificio requiere un análisis específico. Hablemos de su caso con rigor técnico y sin compromiso.'
			/>
		</>
	)
}
