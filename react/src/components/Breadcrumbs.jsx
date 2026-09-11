import React from 'react'
import { Link } from 'react-router-dom'

// Technical breadcrumb — mono style, consistent across typologies.
export default function Breadcrumbs({ items }) {
	return (
		<nav
			aria-label='Ruta de navegación'
			className='flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-8'
		>
			{items.map((item, i) => (
				<React.Fragment key={i}>
					{item.to ? (
						<Link to={item.to} className='hover:text-primary transition-colors'>
							{item.label}
						</Link>
					) : (
						<span className='text-primary line-clamp-1'>{item.label}</span>
					)}
					{i < items.length - 1 && <span>/</span>}
				</React.Fragment>
			))}
		</nav>
	)
}
