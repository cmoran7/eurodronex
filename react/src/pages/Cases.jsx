import React from 'react'
import CTASection from '@/components/CTASection'
import CaseCard from '@/components/cases/CaseCard'
import { cases } from '@/data/cases'

export default function Cases() {
	return (
		<>
			<section className='section-pad pt-12 md:pt-16 pb-12 border-b border-border'>
				<div className='max-w-4xl'>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
						CAS.00 / Expedientes técnicos
					</span>
					<h1 className='mt-6 heading-display text-4xl md:text-5xl lg:text-6xl text-balance'>
						Casos de estudio
					</h1>
					<p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty'>
						Cómo se plantea, ejecuta y documenta una inspección: problemática,
						metodología, captura, análisis y entregables. Cada expediente se
						presenta con la misma estructura con la que trabajamos internamente.
					</p>
					<p className='mt-4 mono-label'>
						Contenido de demostración — sin clientes ni resultados reales
						atribuibles a EurodroneX
					</p>
				</div>
			</section>

			<section className='section-pad py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{cases.map((c, i) => (
						<CaseCard key={c.slug} item={c} index={i} />
					))}
				</div>
			</section>

			<CTASection
				eyebrow='¿Un caso similar al suyo?'
				title='Solicite una evaluación técnica de su edificio'
				text='Le asesoramos sobre el enfoque de inspección y documentación más adecuado para su caso, con criterio profesional y sin compromiso.'
				secondary={{ label: 'Ver metodología', to: '/tecnologia' }}
			/>
		</>
	)
}
