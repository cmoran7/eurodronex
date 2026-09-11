import React from 'react'

// Stat block — technical readout style.
export default function StatBlock({ stats, columns }) {
	const cols = columns || stats.length
	const colClass =
		cols === 4
			? 'grid-cols-2 md:grid-cols-4'
			: cols === 3
				? 'grid-cols-1 md:grid-cols-3'
				: 'grid-cols-2 md:grid-cols-4'
	return (
		<div className={`grid ${colClass} gap-px bg-border border border-border`}>
			{stats.map((s, i) => (
				<div
					key={i}
					className='bg-background p-6 md:p-8 flex flex-col rise-in'
					style={{ animationDelay: `${i * 60}ms` }}
				>
					<span className='font-heading font-bold text-3xl md:text-4xl text-primary tracking-tight'>
						{s.value}
					</span>
					<span className='mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/80'>
						{s.label}
					</span>
					{s.note && (
						<span className='mt-1 text-xs text-muted-foreground'>{s.note}</span>
					)}
				</div>
			))}
		</div>
	)
}
