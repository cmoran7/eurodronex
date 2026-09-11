import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// The "Operator vs Technician" manifesto — the core brand differentiator.
export default function Manifesto() {
	return (
		<section className='relative bg-foreground text-background overflow-hidden'>
			<div className='absolute inset-0 cad-grid opacity-15' />
			<div className='absolute top-0 left-0 right-0 h-px bg-primary' />
			<div className='relative section-pad py-24 md:py-36'>
				<div className='max-w-5xl mx-auto text-center'>
					<span className='font-mono text-[11px] uppercase tracking-[0.22em] text-primary'>
						Manifiesto / diferenciación técnica
					</span>
					<h2 className='mt-8 font-mono font-medium text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-balance'>
						No somos operadores.
						<br />
						<span className='text-primary'>Somos técnicos.</span>
					</h2>
					<p className='mt-8 text-lg md:text-xl text-background/70 leading-relaxed max-w-2xl mx-auto text-pretty'>
						Cualquier operador puede pilotar un dron y entregar fotografías. La
						diferencia está en saber qué significan esas imágenes, qué gravedad
						tiene cada lesión y qué recomendación técnica corresponde. El dron
						es la herramienta. La responsabilidad es humana.
					</p>
				</div>

				<div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/15 border border-background/15 max-w-5xl mx-auto'>
					{[
						{
							t: 'Inspeción por ingenieros o arquitectos',
							d: 'No subcontratamos operadores externos.',
						},
						{
							t: 'Interpretación profesional de las imágenes',
							d: 'Distinguimos fisura estructural de retracción.',
						},
						{
							t: 'Informes con validez técnica y pericial',
							d: 'Firmados con responsabilidad profesional.',
						},
						{
							t: 'Responsabilidad técnica real',
							d: 'Criterio ingenieril detrás de cada captura.',
						},
					].map((item) => (
						<div key={item.t} className='bg-foreground p-7 md:p-8 text-left'>
							<span className='font-mono text-[10px] uppercase tracking-[0.18em] text-primary'>
								+
							</span>
							<h3 className='mt-4 font-heading font-semibold text-base text-background leading-snug'>
								{item.t}
							</h3>
							<p className='mt-2 text-sm text-background/60 leading-relaxed'>
								{item.d}
							</p>
						</div>
					))}
				</div>

				<div className='mt-12 text-center'>
					<Link
						to='/ingenieria'
						className='inline-flex items-center gap-2 border border-background/30 text-background px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-background/10 transition-colors min-h-[52px]'
					>
						Conocer nuestro enfoque técnico
						<ArrowRight className='h-4 w-4' />
					</Link>
				</div>
			</div>
		</section>
	)
}
