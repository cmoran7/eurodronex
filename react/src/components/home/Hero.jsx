import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Image } from '@/components/ui/image'

const heroImg =
	'https://media.base44.com/images/public/6aa02279bb40b972ab2ba76a/c20e78e0a_generated_8d8c2abd.jpg'

export default function Hero() {
	return (
		<section className='relative'>
			{/* top ruler with coordinate marks */}
			<div className='section-pad pt-4 pb-2'>
				<div className='flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground'>
					<span>EDX / HOME / 00</span>
					<span className='hidden sm:inline'>
						40.4168°N · 3.7038°W · MADRID
					</span>
					<span>REV. 2026.09</span>
				</div>
			</div>

			<div className='section-pad pb-16 md:pb-24'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
					{/* Text */}
					<div className='lg:col-span-6 order-2 lg:order-1'>
						<div className='flex items-center gap-3'>
							<span className='draw-line h-px w-10 bg-primary' />
							<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
								Ingeniería técnica de inspección
							</span>
						</div>
						<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance'>
							Ingeniería técnica aplicada a la inspección de edificios.
						</h1>
						<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty'>
							No somos operadores de drones. Somos ingenieros y arquitectos que
							utilizan la inspección aérea para diagnosticar edificios{' '}
							<span className='text-foreground font-medium'>
								sin andamios, grúas ni plataformas elevadoras
							</span>
							. El dron es el instrumento. La ingeniería es el producto.
						</p>

						<div className='mt-9 flex flex-col sm:flex-row gap-4'>
							<Link
								to='/contacto'
								className='inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-primary/90 transition-colors min-h-[52px]'
							>
								Solicitar evaluación técnica
								<ArrowRight className='h-4 w-4' />
							</Link>
							<Link
								to='/servicios'
								className='inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-foreground/5 transition-colors min-h-[52px]'
							>
								Ver servicios
							</Link>
						</div>

						<div className='mt-10 grid grid-cols-3 gap-px bg-border border border-border max-w-md'>
							{[
								{ v: '80%', l: 'Ahorro vs. andamios' },
								{ v: '5-21', l: 'Días de plazo' },
								{ v: '+20', l: 'Años experiencia' },
							].map((s, i) => (
								<div
									key={s.l}
									className='bg-background p-4 rise-in'
									style={{ animationDelay: `${i * 60}ms` }}
								>
									<span className='font-heading font-bold text-2xl text-foreground'>
										{s.v}
									</span>
									<span className='block mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground'>
										{s.l}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Image */}
					<div className='lg:col-span-6 order-1 lg:order-2'>
						<div className='relative'>
							<div className='relative aspect-[4/3] overflow-hidden bg-muted border border-border'>
								<Image
									src={heroImg}
									alt='Fachada de edificio residencial inspeccionada con dron profesional por ingenieros de EurodroneX'
									className='h-full w-full'
									fittingType='fill'
								/>
								{/* callout annotation */}
								<div className='point-in absolute top-6 right-6 bg-background/95 border border-border px-3 py-2'>
									<span className='font-mono text-[9px] uppercase tracking-[0.16em] text-primary block'>
										Punto de inspección
									</span>
									<span className='font-mono text-[10px] text-foreground'>
										PT-01 · Cornisa NE
									</span>
								</div>
								<div className='point-in point-in-late absolute bottom-6 left-6 bg-foreground/85 px-3 py-2'>
									<span className='font-mono text-[9px] uppercase tracking-[0.16em] text-background/70 block'>
										Captura aérea
									</span>
									<span className='font-mono text-[10px] text-background'>
										4K · georreferenciada
									</span>
								</div>
							</div>
							{/* corner crosshair marks */}
							<span className='corner-mark corner-tl absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-primary' />
							<span className='corner-mark corner-tr absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-primary' />
							<span className='corner-mark corner-bl absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-primary' />
							<span className='corner-mark corner-br absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-primary' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
