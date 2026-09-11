import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Image } from '@/components/ui/image'
import ProcessSteps from '@/components/ProcessSteps'
import CTASection from '@/components/CTASection'

const aboutImg =
	'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/4cfe6f0ac_generated_b09e9632.jpg'

const profile = [
	{
		t: 'Ingeniero de edificación',
		d: 'Formación técnica especializada en patología y diagnóstico constructivo.',
	},
	{
		t: 'Interpretación técnica',
		d: 'Capacidad real de análisis profesional, no solo captación de imágenes.',
	},
	{
		t: 'Validez pericial',
		d: 'Informes firmados con responsabilidad legal profesional.',
	},
	{
		t: 'Compromiso directo',
		d: 'Atención personalizada en cada proyecto, sin intermediarios.',
	},
]

const steps = [
	{
		step: '01',
		title: 'Análisis previo',
		text: 'Entendemos el problema antes de volar.',
	},
	{
		step: '02',
		title: 'Permisos',
		text: 'Gestionamos toda la documentación legal.',
	},
	{
		step: '03',
		title: 'Inspección',
		text: 'Volamos y capturamos lo necesario.',
	},
	{
		step: '04',
		title: 'Interpretación',
		text: 'Analizamos técnicamente cada patología.',
	},
	{ step: '05', title: 'Informe', text: 'Firmamos con responsabilidad.' },
]

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-16 border-b border-border'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
					<div className='lg:col-span-7'>
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							ABT.00 / Quiénes somos
						</span>
						<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
							Ingeniería aérea especializada en servicios para la construcción
						</h1>
						<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl italic text-pretty'>
							«Siempre he entendido la ingeniería como una herramienta para
							resolver problemas reales. La tecnología solo tiene sentido cuando
							aporta precisión, seguridad y ahorro.»
						</p>
					</div>
					<div className='lg:col-span-5'>
						<div className='relative aspect-[4/3] overflow-hidden border border-border bg-muted'>
							<Image
								src={aboutImg}
								alt='Equipo técnico de EurodroneX, ingenieros y arquitectos pilotos de drones'
								className='h-full w-full'
								fittingType='fill'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Historia */}
			<section className='section-pad py-20'>
				<div className='max-w-3xl'>
					<span className='mono-label-accent'>
						No capturamos imágenes. Interpretamos edificios.
					</span>
					<div className='mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed'>
						<p>
							Llevamos más de 30 años trabajando en la construcción. Empezamos
							en obras, después en diagnósticos de patologías y peritaciones.
							Vimos de primera mano el coste desproporcionado de montar andamios
							solo para ver grietas.
						</p>
						<p>
							Cuando descubrimos que los drones podían acercarse a cualquier
							punto de las fachadas sin estructuras auxiliares, lo vimos claro:
							había que combinar ingeniería técnica con tecnología aérea.
						</p>
						<p>
							Las diferencias entre operadores de drones e ingenieros con drones
							son enormes. No nos limitamos a entregar fotografías. Sabemos
							identificar fisuras estructurales de unas de retracción. Sabemos
							cuándo las humedades son por filtración o por condensación. Y
							sabemos qué tiene validez legal y qué no.
						</p>
						<p className='text-foreground font-medium'>
							Eurodrónex nace de esa necesidad: ofrecer diagnósticos técnicos
							reales, con responsabilidad profesional directa, sin
							intermediarios que no entienden lo que están viendo.
						</p>
					</div>
				</div>
			</section>

			{/* No solo pilotos */}
			<section className='section-pad py-20 border-t border-border bg-secondary/30'>
				<div className='max-w-2xl mb-12'>
					<span className='mono-label-accent'>
						No somos solo pilotos de drones
					</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
						La certificación de piloto es una condición necesaria, pero no
						suficiente
					</h2>
					<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
						Lo que realmente importa es la capacidad de interpretación técnica.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border'>
					{profile.map((p, i) => (
						<div key={p.t} className='bg-background p-7'>
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								0{i + 1}
							</span>
							<h3 className='mt-3 font-heading font-semibold text-base text-foreground'>
								{p.t}
							</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{p.d}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Así trabajamos */}
			<section className='section-pad py-20 border-t border-border'>
				<span className='mono-label-accent'>Así trabajamos</span>
				<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance mb-10'>
					Nuestro proceso
				</h2>
				<ProcessSteps steps={steps} columns={5} />
			</section>

			{/* Quote */}
			<section className='section-pad py-20 border-t border-border bg-foreground text-background relative overflow-hidden'>
				<div className='absolute inset-0 cad-grid opacity-15' />
				<div className='absolute top-0 left-0 right-0 h-px bg-primary' />
				<div className='relative max-w-4xl mx-auto text-center'>
					<p className='font-heading font-semibold text-2xl md:text-4xl leading-tight text-balance'>
						«La tecnología es una herramienta.
						<br />
						<span className='text-primary'>La responsabilidad es humana.</span>»
					</p>
				</div>
			</section>

			<CTASection
				eyebrow='Solicitar información técnica'
				title='Hablemos de su edificio'
				text='Cada caso es distinto. Analizamos su necesidad técnica y le proponemos el enfoque más adecuado, sin compromiso.'
			/>
		</>
	)
}
