import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { services } from '@/data/services'

export default function Footer() {
	return (
		<footer className='relative bg-foreground text-background border-t border-border'>
			<div className='h-px w-full bg-primary' />
			<div className='section-pad py-16 md:py-20'>
				<div className='grid grid-cols-1 md:grid-cols-12 gap-10'>
					{/* Brand */}
					<div className='md:col-span-4'>
						<Link to='/' className='flex items-center gap-2.5'>
							<span className='relative flex h-8 w-8 items-center justify-center'>
								<span className='absolute inset-0 border border-background/80 rotate-45' />
								<span className='absolute inset-1.5 border border-primary' />
								<span className='h-1 w-1 rounded-full bg-primary' />
							</span>
							<span className='font-heading font-bold tracking-tight text-lg'>
								EURODRONE<span className='text-primary'>X</span>
							</span>
						</Link>
						<p className='mt-6 text-sm text-background/70 leading-relaxed max-w-xs'>
							Ingeniería técnica especializada en edificación. Inspección,
							diagnóstico y documentación de edificios mediante tecnología
							aérea.
						</p>
						<p className='mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							No somos operadores. Somos técnicos.
						</p>
					</div>

					{/* Services */}
					<div className='md:col-span-4'>
						<p className='mono-label text-background/50'>Servicios / 06</p>
						<ul className='mt-4 space-y-2.5'>
							{services.map((s) => (
								<li key={s.slug}>
									<Link
										to={`/servicios/${s.slug}`}
										className='text-sm text-background/75 hover:text-primary transition-colors'
									>
										{s.shortTitle}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Nav + contact */}
					<div className='md:col-span-4'>
						<p className='mono-label text-background/50'>Navegación</p>
						<ul className='mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5'>
							<li>
								<Link
									to='/conocimiento'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Conocimiento
								</Link>
							</li>
							<li>
								<Link
									to='/casos-de-estudio'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Casos de estudio
								</Link>
							</li>
							<li>
								<Link
									to='/patologias'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Patologías
								</Link>
							</li>
							<li>
								<Link
									to='/sectores'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Sectores
								</Link>
							</li>
							<li>
								<Link
									to='/blog'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to='/videos'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Vídeos
								</Link>
							</li>
							<li>
								<Link
									to='/tecnologia'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Tecnología
								</Link>
							</li>
							<li>
								<Link
									to='/entregables'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Entregables
								</Link>
							</li>
							<li>
								<Link
									to='/ingenieria'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Ingeniería
								</Link>
							</li>
							<li>
								<Link
									to='/about'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Sobre EurodroneX
								</Link>
							</li>
							<li>
								<Link
									to='/contacto'
									className='text-sm text-background/75 hover:text-primary transition-colors'
								>
									Contacto
								</Link>
							</li>
						</ul>

						<p className='mono-label text-background/50 mt-8'>Contacto</p>
						<ul className='mt-4 space-y-3'>
							<li>
								<a
									href='mailto:contacto@eurodronex.com'
									className='flex items-center gap-2.5 text-sm text-background/75 hover:text-primary transition-colors'
								>
									<Mail className='h-4 w-4 shrink-0' /> contacto@eurodronex.com
								</a>
							</li>
							<li>
								<a
									href='tel:+34611623480'
									className='flex items-center gap-2.5 text-sm text-background/75 hover:text-primary transition-colors'
								>
									<Phone className='h-4 w-4 shrink-0' /> +34 611 623 480
								</a>
							</li>
							<li className='flex items-start gap-2.5 text-sm text-background/75'>
								<MapPin className='h-4 w-4 shrink-0 mt-0.5' />
								<span>
									Comunidad de Madrid y provincias limítrofes. Escalado nacional
									para proyectos de envergadura.
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-14 pt-6 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3'>
					<p className='font-mono text-[11px] uppercase tracking-[0.14em] text-background/50'>
						© {new Date().getFullYear()} EurodroneX — Ingeniería técnica de
						inspección de edificios
					</p>
					<p className='font-mono text-[11px] uppercase tracking-[0.14em] text-background/40'>
						Pilotos RPAS certificados AESA · Seguro RC profesional
					</p>
				</div>
			</div>
		</footer>
	)
}
