import React, { useEffect } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const stats = [
	{ value: '<24h', label: 'Tiempo de respuesta' },
	{ value: '5-20', label: 'Días para permisos' },
	{ value: '100%', label: 'Validez pericial' },
	{ value: '+20', label: 'Años experiencia' },
]

const areas = [
	'Madrid capital y área metropolitana',
	'Comunidad de Madrid completa',
	'Provincias limítrofes (Toledo, Guadalajara, Segovia, Ávila)',
	'Escalado nacional (proyectos especiales)',
]

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						CNT.00 / Contacto
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Solicite información técnica
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Responderemos en menos de 24 horas. Los servicios requieren
						comprender previamente el edificio, ubicación, alcance y necesidad
						técnica.
					</p>
				</div>
			</section>

			{/* Stats */}
			<section className='section-pad py-12 border-b border-border bg-secondary/30'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border'>
					{stats.map((s) => (
						<div key={s.label} className='bg-background p-6 text-center'>
							<span className='font-heading font-bold text-3xl text-primary'>
								{s.value}
							</span>
							<span className='block mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
								{s.label}
							</span>
						</div>
					))}
				</div>
			</section>

			<section className='section-pad py-16 md:py-20'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					{/* Contact info */}
					<div className='lg:col-span-5'>
						<span className='mono-label-accent'>Datos de contacto</span>
						<h2 className='mt-4 heading-display text-2xl md:text-3xl'>
							Hablemos de su caso
						</h2>
						<div className='mt-8 space-y-5'>
							<a
								href='tel:+34611623480'
								className='flex items-start gap-4 group'
							>
								<span className='flex h-11 w-11 items-center justify-center border border-border bg-background shrink-0'>
									<Phone className='h-4 w-4 text-primary' />
								</span>
								<span>
									<span className='block mono-label'>Teléfono</span>
									<span className='text-foreground group-hover:text-primary transition-colors'>
										+34 611 623 480
									</span>
								</span>
							</a>
							<a
								href='mailto:contacto@eurodronex.com'
								className='flex items-start gap-4 group'
							>
								<span className='flex h-11 w-11 items-center justify-center border border-border bg-background shrink-0'>
									<Mail className='h-4 w-4 text-primary' />
								</span>
								<span>
									<span className='block mono-label'>Email</span>
									<span className='text-foreground group-hover:text-primary transition-colors'>
										contacto@eurodronex.com
									</span>
								</span>
							</a>
							<div className='flex items-start gap-4'>
								<span className='flex h-11 w-11 items-center justify-center border border-border bg-background shrink-0'>
									<Clock className='h-4 w-4 text-primary' />
								</span>
								<span>
									<span className='block mono-label'>Tiempo de respuesta</span>
									<span className='text-foreground'>Menos de 24 horas</span>
								</span>
							</div>
						</div>

						<div className='mt-10 border border-border p-6 bg-secondary/30'>
							<div className='flex items-center gap-2'>
								<MapPin className='h-4 w-4 text-primary' />
								<span className='mono-label'>Ámbito geográfico</span>
							</div>
							<p className='mt-3 text-sm text-muted-foreground leading-relaxed'>
								Operamos principalmente en la Comunidad de Madrid y provincias
								limítrofes. Para proyectos de envergadura o carteras de activos,
								disponemos de capacidad de escalado a nivel nacional.
							</p>
							<ul className='mt-4 space-y-2'>
								{areas.map((a) => (
									<li
										key={a}
										className='flex items-start gap-2 text-sm text-foreground/80'
									>
										<span className='h-1.5 w-1.5 bg-primary mt-1.5 shrink-0' />{' '}
										{a}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Form */}
					<div className='lg:col-span-7'>
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	)
}
