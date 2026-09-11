import React from 'react'

// Technical process steps with numbered phases.
export default function ProcessSteps({ steps, columns = 4 }) {
	const colClass =
		columns === 6
			? 'md:grid-cols-3 lg:grid-cols-6'
			: columns === 3
				? 'md:grid-cols-3'
				: 'md:grid-cols-2 lg:grid-cols-4'
	return (
		<div
			className={`grid grid-cols-1 ${colClass} gap-px bg-border border border-border`}
		>
			{steps.map((step, i) => (
				<div
					key={step.step}
					className='bg-background p-6 md:p-8 flex flex-col rise-in'
					style={{ animationDelay: `${i * 60}ms` }}
				>
					<div className='flex items-center justify-between'>
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							Fase {step.step}
						</span>
						<span className='font-mono text-[11px] text-muted-foreground/60'>
							{step.step}/{String(steps.length).padStart(2, '0')}
						</span>
					</div>
					<h3 className='mt-4 font-heading font-semibold text-lg text-foreground'>
						{step.title}
					</h3>
					<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
						{step.text}
					</p>
				</div>
			))}
		</div>
	)
}
