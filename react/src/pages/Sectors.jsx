import React from 'react'
import CTASection from '@/components/CTASection'
import SectorCard from '@/components/sectors/SectorCard'
import { sectors } from '@/data/sectors'

export default function Sectors() {
	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						SEC.00 / Para profesionales
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Sectores profesionales
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Una página de servicio responde a «¿qué hace EurodroneX?». Esta
						responde a otra pregunta: ¿cómo puede ayudarle a usted, en su
						trabajo concreto? Cada perfil profesional obtiene una información
						distinta de la misma captura técnica.
					</p>
				</div>
			</section>

			<section className='section-pad py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{sectors.map((s, i) => (
						<SectorCard key={s.slug} item={s} index={i} />
					))}
				</div>
			</section>

			<CTASection
				eyebrow='¿Su perfil no aparece?'
				title='Hablemos de su caso concreto'
				text='Cada encargo se adapta al profesional que lo solicita: arquitecto, administrador de fincas, constructora, aseguradora o perito. Cuéntenos qué información necesita.'
				secondary={{ label: 'Ver servicios', to: '/servicios' }}
			/>
		</>
	)
}
