import React, { useState, useEffect } from 'react'

// Persistent technical status footer bar — a thin readout at the bottom of the viewport.
export default function TechnicalStatus() {
	const [coords, setCoords] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY })
		window.addEventListener('mousemove', onMove)
		return () => window.removeEventListener('mousemove', onMove)
	}, [])

	return (
		<div className='fixed bottom-0 inset-x-0 z-40 pointer-events-none'>
			<div className='h-px w-full bg-border/80' />
			<div className='bg-background/90 backdrop-blur-sm border-t border-border'>
				<div className='section-pad'>
					<div className='flex items-center justify-between h-7 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
						<div className='flex items-center gap-4'>
							<span className='text-primary'>●</span>
							<span className='hidden sm:inline'>EURODRONEX</span>
							<span className='hidden md:inline text-muted-foreground/60'>
								/
							</span>
							<span className='hidden md:inline'>Diagnóstico estructural</span>
						</div>
						<div className='flex items-center gap-4'>
							<span className='hidden lg:inline'>MADRID · 40.41°N 3.70°W</span>
							<span className='hidden sm:inline text-muted-foreground/60'>
								/
							</span>
							<span>
								X {String(coords.x).padStart(4, '0')} · Y{' '}
								{String(coords.y).padStart(4, '0')}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
