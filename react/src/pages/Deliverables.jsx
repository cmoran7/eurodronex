import React from 'react'
import {
	FileText,
	Camera,
	Video,
	Crosshair,
	Thermometer,
	Map,
	Box,
	Layers,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import AnnotatedImage from '@/components/AnnotatedImage'
import CTASection from '@/components/CTASection'

const IMG_FISURA =
	'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/e3ab1975f_generated_image.png'

// Deliverable types aligned with the real service catalogue.
const deliverables = [
	{
		icon: FileText,
		code: 'DEL-01',
		title: 'Informe técnico',
		text: 'Documento con catálogo de puntos, clasificación de incidencias y recomendaciones. Base para ITE/IEE, rehabilitación o peritajes.',
		includes: [
			'Catálogo de lesiones',
			'Clasificación por gravedad',
			'Fotografía por punto',
		],
	},
	{
		icon: Camera,
		code: 'DEL-02',
		title: 'Fotografía de alta resolución',
		text: 'Serie completa de la envolvente con imagen general y de detalle de cada punto inspeccionado.',
		includes: [
			'Puntos georreferenciados',
			'General + detalle',
			'Archivo en alta resolución',
		],
	},
	{
		icon: Video,
		code: 'DEL-03',
		title: 'Vídeo documental',
		text: 'Recorrido continuo de paramentos y cubiertas que permite revisar el edificio sin desplazarse.',
		includes: ['Vídeo 4K por paramento', 'Grabación completa del vuelo'],
	},
	{
		icon: Crosshair,
		code: 'DEL-04',
		title: 'Documentación de puntos inspeccionados',
		text: 'Cada punto con su código, su coordenada y su contexto fotográfico, comparable en campañas futuras.',
		includes: [
			'Código por punto',
			'Localización planimétrica',
			'Comparativa temporal',
		],
	},
	{
		icon: Thermometer,
		code: 'DEL-05',
		title: 'Imágenes térmicas',
		text: 'Termogramas de la envolvente con su homóloga en imagen convencional para localizar anomalías.',
		includes: [
			'Termogramas georreferenciados',
			'RGB sincronizada',
			'Mapa de anomalías',
		],
	},
	{
		icon: Map,
		code: 'DEL-06',
		title: 'Ortofotografía',
		text: 'Imágenes corregidas geométricamente con escala uniforme: un plano en verdadera magnitud para medir sin error de perspectiva.',
		includes: ['GeoTIFF', 'Escala real', 'Medición de superficies'],
	},
	{
		icon: Box,
		code: 'DEL-07',
		title: 'Modelos 3D y nubes de puntos',
		text: 'Réplicas digitales métricas del edificio para medir, seccionar y comparar en el tiempo.',
		includes: ['LAZ · E57', 'OBJ · FBX', 'Medición dimensional'],
	},
	{
		icon: Layers,
		code: 'DEL-08',
		title: 'Documentación compatible BIM',
		text: 'Modelos exportables a flujos de trabajo BIM y gemelos digitales del edificio.',
		includes: ['RVT · IFC', 'Gemelo digital', 'Base As-Built'],
	},
]

const reportExcerpt = [
	{
		point: 'P-01',
		place: 'Fachada norte',
		observation: 'Fisura escalonada en encuentro de forjado',
		class: 'A valorar por técnico',
	},
	{
		point: 'P-02',
		place: 'Fachada norte',
		observation: 'Desconchado de revestimiento con soporte visible',
		class: 'Seguimiento',
	},
	{
		point: 'P-03',
		place: 'Cubierta',
		observation: 'Encharcamiento junto a sumidero',
		class: 'Seguimiento',
	},
	{
		point: 'P-04',
		place: 'Fachada oeste',
		observation: 'Junta de dilatación con sellado envejecido',
		class: 'Recomendación',
	},
]

export default function Deliverables() {
	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						DEL.00 / Entregables
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						¿Qué recibe el cliente?
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Tras cada inspección, el cliente recibe un paquete de documentación
						estructurada. Lo que varía entre servicios es el instrumental, no el
						rigor: todo se entrega codificado, localizado y listo para su
						interpretación técnica.
					</p>
				</div>
			</section>

			{/* Tipología de entregables */}
			<section className='section-pad py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{deliverables.map((d, i) => (
						<div
							key={d.code}
							className='border border-border bg-card p-6 tech-lift rise-in'
							style={{ animationDelay: `${i * 50}ms` }}
						>
							<div className='flex items-start justify-between gap-3'>
								<span className='flex items-center justify-center h-11 w-11 border border-border text-primary'>
									<d.icon className='h-5 w-5' />
								</span>
								<span className='mono-label'>{d.code}</span>
							</div>
							<h2 className='mt-4 heading-display text-base'>{d.title}</h2>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{d.text}
							</p>
							<ul className='mt-4 space-y-1.5 border-t border-border pt-4'>
								{d.includes.map((inc, j) => (
									<li
										key={j}
										className='font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60'
									>
										+ {inc}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* Fragmento de documentación */}
			<section className='section-pad py-16 border-t border-border bg-secondary/30'>
				<SectionHeading
					index='FRAG.00'
					eyebrow='Aspecto de la entrega'
					title='Fragmentos de un expediente'
					intro='Simulación visual de cómo se recibe la documentación: imágenes anotadas con puntos codificados y el catálogo de hallazgos del informe. Contenido de demostración.'
				/>
				<div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
					<AnnotatedImage
						src={IMG_FISURA}
						alt='Fotografía anotada de una fisura — contenido de demostración'
						points={[
							{ x: 30, y: 38, label: 'P-01' },
							{ x: 62, y: 62, label: 'P-02' },
						]}
						badge='FOTO ANOTADA'
						caption='Extracto de demostración'
					/>
					{/* Extracto de informe */}
					<div className='border border-border bg-card'>
						<div className='flex items-center justify-between gap-4 px-5 py-3.5 border-b border-border'>
							<span className='mono-label-accent'>Extracto de informe</span>
							<span className='font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground'>
								CAS-01 · DEMO
							</span>
						</div>
						<table className='w-full text-left'>
							<thead>
								<tr className='border-b border-border'>
									<th className='px-5 py-3 mono-label'>Punto</th>
									<th className='px-3 py-3 mono-label'>Paramento</th>
									<th className='px-3 py-3 mono-label'>Observación</th>
									<th className='px-5 py-3 mono-label'>Estado</th>
								</tr>
							</thead>
							<tbody>
								{reportExcerpt.map((r, i) => (
									<tr
										key={i}
										className='border-b border-border last:border-b-0'
									>
										<td className='px-5 py-3.5 font-mono text-[11px] text-primary align-top whitespace-nowrap'>
											{r.point}
										</td>
										<td className='px-3 py-3.5 text-xs text-foreground/80 align-top whitespace-nowrap'>
											{r.place}
										</td>
										<td className='px-3 py-3.5 text-xs text-muted-foreground leading-relaxed align-top'>
											{r.observation}
										</td>
										<td className='px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/60 align-top'>
											{r.class}
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<p className='px-5 py-3 border-t border-border mono-label'>
							Simulación de diseño — sin datos de un edificio real
						</p>
					</div>
				</div>
			</section>

			<CTASection
				eyebrow='¿Necesita esta documentación?'
				title='Solicite una evaluación técnica'
				text='Cada encargo define su paquete de entregables según el objetivo. Le asesoramos sobre el más adecuado, sin compromiso.'
				secondary={{ label: 'Ver tecnología y metodología', to: '/tecnologia' }}
			/>
		</>
	)
}
