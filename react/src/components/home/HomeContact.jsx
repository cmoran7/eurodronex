import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function HomeContact() {
	return (
		<section className='section-pad py-20 md:py-28 border-t border-border bg-secondary/30'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
				<div className='lg:col-span-5'>
					<span className='mono-label-accent'>Solicite información</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
						Sin compromiso. Respuesta en 24 horas.
					</h2>
					<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
						Los servicios requieren comprender previamente el edificio,
						ubicación, alcance y necesidad técnica. Cuéntenos su caso y le
						asesoramos sobre el mejor enfoque técnico.
					</p>

					<div className='mt-10 space-y-4'>
						<a
							href='tel:+34611623480'
							className='flex items-center gap-3 text-foreground hover:text-primary transition-colors'
						>
							<span className='flex h-10 w-10 items-center justify-center border border-border bg-background'>
								<Phone className='h-4 w-4' />
							</span>
							<span className='text-sm'>+34 611 623 480</span>
						</a>
						<a
							href='mailto:contacto@eurodronex.com'
							className='flex items-center gap-3 text-foreground hover:text-primary transition-colors'
						>
							<span className='flex h-10 w-10 items-center justify-center border border-border bg-background'>
								<Mail className='h-4 w-4' />
							</span>
							<span className='text-sm'>contacto@eurodronex.com</span>
						</a>
					</div>

					<div className='mt-10 border border-border bg-background p-6'>
						<span className='mono-label'>Ámbito geográfico</span>
						<p className='mt-3 text-sm text-muted-foreground leading-relaxed'>
							Operamos principalmente en la Comunidad de Madrid y provincias
							limítrofes. Capacidad de escalado a nivel nacional para proyectos
							de envergadura.
						</p>
						<Link
							to='/contacto'
							className='mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary hover:underline'
						>
							Ver detalles de contacto <ArrowRight className='h-3.5 w-3.5' />
						</Link>
					</div>
				</div>
				<div className='lg:col-span-7'>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
