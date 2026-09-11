import React from 'react'
import {
	Camera,
	Video,
	Thermometer,
	Boxes,
	Box,
	Map,
	Eye,
	FileText,
	ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import PhaseList from '@/components/PhaseList'
import AnnotatedImage from '@/components/AnnotatedImage'
import CTASection from '@/components/CTASection'

const THERMOGRAM =
	'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/1133ccd70_generated_image.png'

const pipeline = [
	{
		code: '01',
		title: 'Captura',
		text: 'El dron registra el edificio con el instrumental adecuado.',
	},
	{
		code: '02',
		title: 'Dato',
		text: 'Imágenes, termogramas y bloques fotogramétricos.',
	},
	{
		code: '03',
		title: 'Información',
		text: 'Procesado, orden y codificación del material.',
	},
	{
		code: '04',
		title: 'Decisión',
		text: 'Interpretación técnica del profesional responsable.',
	},
]

const phases = [
	{
		code: 'FASE 01',
		title: 'Análisis de necesidad',
		text: 'Cada edificio y cada encargo plantea una pregunta distinta: una patología concreta, una inspección reglamentaria, un levantamiento previo a proyecto. Definir con el técnico qué información se necesita es el primer paso; de ello depende todo el proceso posterior.',
	},
	{
		code: 'FASE 02',
		title: 'Planificación',
		text: 'Diseño de la misión según el objetivo: recorridos, cotas, puntos singulares y condiciones necesarias — diferencial térmico para termografía, solapamiento para fotogrametría. Gestión completa de permisos y ventanas operativas.',
	},
	{
		code: 'FASE 03',
		title: 'Inspección',
		text: 'Vuelo dirigido por un técnico que conoce la edificación: decide en tiempo real qué encuentros constructivos revisar, dónde acercarse y qué zonas requieren documentación adicional.',
	},
	{
		code: 'FASE 04',
		title: 'Captura',
		text: 'Fotografía de alta resolución, vídeo, termografía o bloques fotogramétricos según el plan de vuelo. Cada punto queda georreferenciado y codificado.',
	},
	{
		code: 'FASE 05',
		title: 'Procesamiento',
		text: 'El dato bruto se convierte en información: series ordenadas, termogramas interpretados, nubes de puntos, mallas 3D y ortofotografías con escala real.',
	},
	{
		code: 'FASE 06',
		title: 'Interpretación',
		text: 'La información se analiza con criterio técnico: clasificación de lesiones, prioridades y contexto suficiente para la decisión del técnico responsable.',
	},
	{
		code: 'FASE 07',
		title: 'Entrega',
		text: 'Documentación estructurada y explotable: informe técnico, catálogo de puntos y formatos CAD/BIM cuando correspondan, con base para seguimientos futuros.',
	},
]

const captureTypes = [
	{
		icon: Camera,
		title: 'Fotografía de alta resolución',
		text: 'Detalle máximo de cada punto de la envolvente.',
	},
	{
		icon: Video,
		title: 'Vídeo documental',
		text: 'Recorrido continuo de paramentos y cubiertas.',
	},
	{
		icon: Thermometer,
		title: 'Termografía',
		text: 'Mapa de temperaturas superficiales de la envolvente.',
	},
	{
		icon: Boxes,
		title: 'Fotogrametría',
		text: 'Cientos de imágenes solapadas para reconstrucción métrica.',
	},
	{
		icon: Box,
		title: 'Modelos 3D',
		text: 'Mallas y gemelos digitales para medir y comparar.',
	},
	{
		icon: Map,
		title: 'Ortofotografía',
		text: 'Imagen corregida geométricamente, con escala real.',
	},
	{
		icon: Eye,
		title: 'Inspección visual',
		text: 'Criterio técnico durante el vuelo, no grabación automática.',
	},
	{
		icon: FileText,
		title: 'Documentación técnica',
		text: 'Toda la captura ordenada, codificada y localizable.',
	},
]

export default function Technology() {
	return (
		<>
			{/* Hero + declaración de principio */}
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						TEC.00 / Método de trabajo
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Tecnología y metodología
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Cómo una inspección aérea se transforma en información útil para un
						técnico.
					</p>
					<div className='mt-10 border-t border-border pt-8'>
						<p className='heading-display text-2xl md:text-3xl text-balance'>
							El dron es una herramienta de captura.
						</p>
						<p className='mt-2 heading-display text-2xl md:text-3xl text-primary text-balance'>
							El valor está en la información y su interpretación.
						</p>
					</div>
				</div>
			</section>

			{/* Pipeline: captura → dato → información → decisión */}
			<section className='section-pad py-16'>
				<SectionHeading
					index='PIPE.00'
					eyebrow='Del píxel a la decisión'
					title='La cadena de valor del dato'
					intro='Un vuelo solo produce imágenes. El valor aparece cuando esas imágenes se convierten en información ordenada y en criterio para decidir.'
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border'>
					{pipeline.map((p, i) => (
						<div
							key={i}
							className='relative bg-card p-6 rise-in'
							style={{ animationDelay: `${i * 80}ms` }}
						>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								{p.code}
							</span>
							<h3 className='mt-3 heading-display text-lg'>{p.title}</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{p.text}
							</p>
							{i < pipeline.length - 1 && (
								<ArrowRight className='hidden md:block absolute top-6 -right-3 h-5 w-5 bg-background text-primary z-10' />
							)}
						</div>
					))}
				</div>
			</section>

			{/* Fases */}
			<section className='section-pad pb-16'>
				<SectionHeading
					index='MET.00'
					eyebrow='Metodología'
					title='Siete fases, un solo responsable técnico'
				/>
				<div className='mt-10'>
					<PhaseList phases={phases} />
				</div>
			</section>

			{/* Qué capturamos */}
			<section className='section-pad py-16 border-t border-border bg-secondary/30'>
				<SectionHeading
					index='CAP.00'
					eyebrow='Instrumental'
					title='Qué se captura'
					intro='Los tipos de captura que integran el proceso, combinados según el encargo.'
				/>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{captureTypes.map((ct, i) => (
						<div
							key={i}
							className='border border-border bg-card p-6 tech-lift rise-in'
							style={{ animationDelay: `${i * 50}ms` }}
						>
							<span className='flex items-center justify-center h-11 w-11 border border-border text-primary'>
								<ct.icon className='h-5 w-5' />
							</span>
							<h3 className='mt-4 heading-display text-base'>{ct.title}</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{ct.text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Overlay de ejemplo */}
			<section className='section-pad py-16'>
				<div className='grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center'>
					<AnnotatedImage
						src={THERMOGRAM}
						alt='Termograma con puntos de inspección anotados — contenido de demostración'
						points={[
							{ x: 32, y: 30, label: 'ΔT +4.2 °C' },
							{ x: 66, y: 54, label: 'Marco · sello' },
							{ x: 48, y: 74, label: 'Encuentro forjado' },
						]}
						badge='TERM-042'
						caption='Termograma anotado — contenido de demostración'
					/>
					<div>
						<SectionHeading
							index='EJ.00'
							eyebrow='Ejemplo de lectura técnica'
							title='Cada punto, codificado e interpretable'
							intro='La captura se entrega anotada y codificada: cada punto de inspección conserva su coordenada, su referencia y su contexto fotográfico, listo para el análisis del técnico responsable.'
						/>
						<p className='mt-6 mono-label'>
							Ejemplo visual de demostración — sin datos de un edificio real
						</p>
					</div>
				</div>
			</section>

			<CTASection
				eyebrow='¿Quiere ver el método aplicado?'
				title='Vea cómo se ejecuta en un expediente real'
				text='Cada caso de estudio muestra el proceso completo: problema, metodología, captura, análisis y entregables.'
				primary={{ label: 'Ver casos de estudio', to: '/casos-de-estudio' }}
				secondary={{ label: 'Ver entregables', to: '/entregables' }}
			/>
		</>
	)
}
