import React from 'react'
import ProcessSteps from '@/components/ProcessSteps'

const steps = [
	{
		step: '01',
		title: 'Encargo',
		text: 'Recepción del encargo y análisis previo del servicio solicitado.',
	},
	{
		step: '02',
		title: 'Permisos',
		text: 'Gestión de permisos y coordinación previa a la inspección.',
	},
	{
		step: '03',
		title: 'Inspección',
		text: 'Ejecución del trabajo coordinado por un ingeniero o arquitecto.',
	},
	{
		step: '04',
		title: 'Entrega e informe',
		text: 'Entrega de la documentación videográfica o informe técnico en su caso.',
	},
]

export default function Methodology() {
	return (
		<section className='section-pad py-20 md:py-28 border-t border-border bg-secondary/30'>
			<div className='max-w-2xl mb-12'>
				<span className='mono-label-accent'>Metodología de trabajo</span>
				<h2 className='mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
					Proceso técnico claro, eficiente y profesional
				</h2>
			</div>
			<ProcessSteps steps={steps} columns={4} />
		</section>
	)
}
