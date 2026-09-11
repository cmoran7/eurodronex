import React from 'react'

// Section heading with technical monospaced eyebrow + CAD-style index.
export default function SectionHeading({
	index,
	eyebrow,
	title,
	intro,
	align = 'left',
	light = false,
}) {
	const isCenter = align === 'center'
	return (
		<div
			className={`${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}
		>
			{(index || eyebrow) && (
				<div
					className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}
				>
					{index && (
						<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary'>
							{index}
						</span>
					)}
					{eyebrow && (
						<span
							className={`font-mono text-[11px] uppercase tracking-[0.18em] ${light ? 'text-background/60' : 'text-muted-foreground'}`}
						>
							{eyebrow}
						</span>
					)}
				</div>
			)}
			<h2
				className={`mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance ${light ? 'text-background' : 'text-foreground'}`}
			>
				{title}
			</h2>
			{intro && (
				<p
					className={`mt-5 text-lg leading-relaxed text-pretty ${light ? 'text-background/75' : 'text-muted-foreground'}`}
				>
					{intro}
				</p>
			)}
		</div>
	)
}
