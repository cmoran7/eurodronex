import React from 'react'

// Vertical narrative of numbered phases — report workflow style.
// phases: [{ code?, title, text, items? }]
export default function PhaseList({ phases }) {
	return (
		<div className='border-t border-border'>
			{phases.map((ph, i) => (
				<div
					key={i}
					className='grid grid-cols-1 md:grid-cols-[90px_240px_1fr] gap-2 md:gap-8 py-8 border-b border-border rise-in'
					style={{ animationDelay: `${i * 60}ms` }}
				>
					<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary pt-1.5'>
						{ph.code || `FASE ${String(i + 1).padStart(2, '0')}`}
					</span>
					<h3 className='heading-display text-lg md:text-xl pt-1'>
						{ph.title}
					</h3>
					<div>
						<p className='text-base text-muted-foreground leading-relaxed'>
							{ph.text}
						</p>
						{ph.items && (
							<ul className='mt-4 space-y-2'>
								{ph.items.map((it, j) => (
									<li key={j} className='flex gap-3'>
										<span className='font-mono text-[10px] text-primary pt-1.5 shrink-0'>
											{String(j + 1).padStart(2, '0')}
										</span>
										<span className='text-sm text-foreground/85'>{it}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			))}
		</div>
	)
}
