import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { services } from '@/data/services'

const navItems = [
	{ label: 'Servicios', path: '/servicios', code: 'SRV.00' },
	{ label: 'Casos de estudio', path: '/casos-de-estudio', code: 'CAS.00' },
	{ label: 'Sectores', path: '/sectores', code: 'SEC.00' },
	{
		label: 'Conocimiento',
		path: '/conocimiento',
		code: 'KNW.00',
		children: [
			{ label: 'Patologías', path: '/patologias' },
			{ label: 'Blog técnico', path: '/blog' },
			{ label: 'Vídeos', path: '/videos' },
		],
	},
	{ label: 'Ingeniería', path: '/ingenieria', code: 'ING.00' },
	{ label: 'Sobre EurodroneX', path: '/about', code: 'ABT.00' },
	{ label: 'Contacto', path: '/contacto', code: 'CNT.00' },
]

const navLinkClass = ({ isActive }) =>
	`relative px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
		isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
	}`

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)
	const [dropdown, setDropdown] = useState(null) // "servicios" | "conocimiento" | null
	const location = useLocation()

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12)
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		setOpen(false)
		setDropdown(null)
	}, [location.pathname])

	return (
		<header
			className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-background/85 backdrop-blur-md border-b border-border'
					: 'bg-transparent border-b border-transparent'
			}`}
		>
			{/* top ruler line */}
			<div className='h-px w-full bg-border/60' />
			<div className='section-pad'>
				<div className='flex items-center justify-between h-16 md:h-20'>
					{/* Logo */}
					<Link
						to='/'
						className='flex items-center gap-2.5 group'
						aria-label='EurodroneX inicio'
					>
						<span className='relative flex h-8 w-8 items-center justify-center'>
							<span className='absolute inset-0 border border-foreground/80 rotate-45' />
							<span className='absolute inset-1.5 border border-primary' />
							<span className='h-1 w-1 rounded-full bg-primary' />
						</span>
						<span className='font-heading font-bold tracking-tight text-foreground text-lg leading-none'>
							EURODRONE<span className='text-primary'>X</span>
						</span>
					</Link>

					{/* Desktop nav */}
					<nav className='hidden xl:flex items-center gap-1'>
						{navItems.map((item) =>
							item.label === 'Servicios' ? (
								<div
									key={item.path}
									className='relative'
									onMouseEnter={() => setDropdown('servicios')}
									onMouseLeave={() => setDropdown(null)}
								>
									<NavLink to={item.path} className={navLinkClass}>
										{item.label}
									</NavLink>
									{dropdown === 'servicios' && (
										<div className='absolute left-0 top-full pt-2 w-[420px]'>
											<div className='border border-border bg-card shadow-xl p-2'>
												<div className='mono-label-accent px-3 py-2 border-b border-border'>
													Matriz de servicios / {services.length}
												</div>
												{services.map((s) => (
													<Link
														key={s.slug}
														to={`/servicios/${s.slug}`}
														className='flex items-start gap-3 px-3 py-2.5 hover:bg-muted transition-colors group'
													>
														<span className='mono-label pt-0.5 w-10 shrink-0'>
															{s.id}
														</span>
														<span>
															<span className='block text-sm font-medium text-foreground group-hover:text-primary transition-colors'>
																{s.shortTitle}
															</span>
															<span className='block text-xs text-muted-foreground'>
																{s.tagline}
															</span>
														</span>
													</Link>
												))}
												<div className='grid grid-cols-2 gap-1 mt-2 pt-2 border-t border-border'>
													<Link
														to='/tecnologia'
														className='px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors'
													>
														Tecnología y metodología
													</Link>
													<Link
														to='/entregables'
														className='px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors'
													>
														Entregables
													</Link>
												</div>
											</div>
										</div>
									)}
								</div>
							) : item.children ? (
								<div
									key={item.path}
									className='relative'
									onMouseEnter={() => setDropdown('conocimiento')}
									onMouseLeave={() => setDropdown(null)}
								>
									<NavLink to={item.path} className={navLinkClass}>
										{item.label}
									</NavLink>
									{dropdown === 'conocimiento' && (
										<div className='absolute left-0 top-full pt-2 w-[240px]'>
											<div className='border border-border bg-card shadow-xl p-2'>
												<div className='mono-label-accent px-3 py-2 border-b border-border'>
													Conocimiento / KNW
												</div>
												{item.children.map((child) => (
													<Link
														key={child.path}
														to={child.path}
														className='block px-3 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors'
													>
														{child.label}
													</Link>
												))}
												<Link
													to='/conocimiento'
													className='block px-3 py-2.5 mt-2 border-t border-border font-mono text-[11px] uppercase tracking-[0.16em] text-primary hover:bg-muted transition-colors'
												>
													Ver todo el conocimiento
												</Link>
											</div>
										</div>
									)}
								</div>
							) : (
								<NavLink
									key={item.path}
									to={item.path}
									className={navLinkClass}
								>
									{item.label}
								</NavLink>
							),
						)}
					</nav>

					{/* CTA */}
					<Link
						to='/contacto'
						className='hidden xl:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-primary/90 transition-colors min-h-[44px]'
					>
						Solicitar evaluación
					</Link>

					{/* Mobile toggle */}
					<button
						className='xl:hidden p-2 -mr-2 text-foreground'
						onClick={() => setOpen((v) => !v)}
						aria-label='Abrir menú'
					>
						{open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className='xl:hidden border-t border-border bg-background'>
					<div className='section-pad py-6 flex flex-col gap-1'>
						<Link
							to='/servicios'
							className='py-3 font-mono text-sm uppercase tracking-wider border-b border-border'
						>
							Servicios
						</Link>
						<div className='py-2 pl-4 flex flex-col gap-1'>
							{services.map((s) => (
								<Link
									key={s.slug}
									to={`/servicios/${s.slug}`}
									className='py-2 text-sm text-muted-foreground hover:text-primary'
								>
									{s.id} — {s.shortTitle}
								</Link>
							))}
							<Link
								to='/tecnologia'
								className='py-2 text-sm text-muted-foreground hover:text-primary'
							>
								Tecnología y metodología
							</Link>
							<Link
								to='/entregables'
								className='py-2 text-sm text-muted-foreground hover:text-primary'
							>
								Entregables
							</Link>
						</div>
						{navItems
							.filter((i) => i.label !== 'Servicios' && i.children)
							.map((item) => (
								<React.Fragment key={item.path}>
									<Link
										to={item.path}
										className='py-3 font-mono text-sm uppercase tracking-wider border-b border-border'
									>
										{item.label}
									</Link>
									<div className='py-2 pl-4 flex flex-col gap-1'>
										{item.children.map((child) => (
											<Link
												key={child.path}
												to={child.path}
												className='py-2 text-sm text-muted-foreground hover:text-primary'
											>
												{child.label}
											</Link>
										))}
									</div>
								</React.Fragment>
							))}
						{navItems
							.filter((i) => i.label !== 'Servicios' && !i.children)
							.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className='py-3 font-mono text-sm uppercase tracking-wider border-b border-border'
								>
									{item.label}
								</Link>
							))}
						<Link
							to='/contacto'
							className='mt-4 bg-primary text-primary-foreground px-5 py-3.5 font-mono text-sm uppercase tracking-wider text-center'
						>
							Solicitar evaluación
						</Link>
					</div>
				</div>
			)}
		</header>
	)
}
