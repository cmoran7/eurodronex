import React from 'react'

// Mono label/value data table — report factsheet style.
export default function DataSheet({ title, rows, className }) {
	return (
		<div className={`border border-border bg-card ${className || ''}`}>
			{title && (
				<div className='px-5 py-3 border-b border-border mono-label-accent'>
					{title}
				</div>
			)}
			<dl className='divide-y divide-border'>
				{rows.map((r, i) => (
					<div
						key={i}
						className='grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-6 px-5 py-3'
					>
						<dt className='mono-label pt-0.5'>{r.label}</dt>
						<dd className='text-sm text-foreground/90 leading-relaxed'>
							{r.value}
						</dd>
					</div>
				))}
			</dl>
		</div>
	)
}
