import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Reusable CTA section — consultative, professional.
export default function CTASection({
	eyebrow = 'Solicitar evaluación técnica',
	title = '¿Necesita una evaluación técnica con criterio profesional?',
	text = 'Cada edificio requiere un análisis específico. Hablemos de su caso con rigor técnico y sin compromiso. Respuesta en menos de 24 horas.',
	primary = { label: 'Solicitar evaluación técnica', to: '/contacto' },
	secondary,
}) {
	return (
		<section className='relative bg-foreground text-background overflow-hidden'>
			<div className='absolute inset-0 cad-grid opacity-20' />
			<div className='absolute top-0 left-0 right-0 h-px bg-primary' />
			<div className='relative section-pad py-20 md:py-28'>
				<div className='max-w-3xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						{eyebrow}
					</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
						{title}
					</h2>
					<p className='mt-5 text-lg text-background/75 leading-relaxed text-pretty'>
						{text}
					</p>
					<div className='mt-9 flex flex-col sm:flex-row gap-4'>
						<Link
							to={primary.to}
							className='inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-primary/90 transition-colors min-h-[52px]'
						>
							{primary.label}
							<ArrowRight className='h-4 w-4' />
						</Link>
						{secondary && (
							<Link
								to={secondary.to}
								className='inline-flex items-center justify-center gap-2 border border-background/30 text-background px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-background/10 transition-colors min-h-[52px]'
							>
								{secondary.label}
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
