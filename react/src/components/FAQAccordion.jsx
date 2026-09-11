import React, { useState } from 'react'
import { Plus } from 'lucide-react'

// FAQ accordion — technical, sober.
export default function FAQAccordion({ items }) {
	const [open, setOpen] = useState(0)
	return (
		<div className='border-t border-border'>
			{items.map((item, i) => {
				const isOpen = open === i
				return (
					<div key={i} className='border-b border-border'>
						<button
							onClick={() => setOpen(isOpen ? -1 : i)}
							className='w-full flex items-start justify-between gap-6 py-6 text-left group'
							aria-expanded={isOpen}
						>
							<span className='flex items-start gap-4'>
								<span className='font-mono text-[11px] uppercase tracking-[0.18em] text-primary pt-1.5 shrink-0'>
									{String(i + 1).padStart(2, '0')}
								</span>
								<span className='font-heading font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors'>
									{item.q}
								</span>
							</span>
							<span
								className='shrink-0 mt-1 text-foreground transition-transform duration-300'
								style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
							>
								<Plus className='h-5 w-5' />
							</span>
						</button>
						<div className={`faq-panel${isOpen ? ' is-open' : ''}`}>
							<div>
								<div className='pb-6 pl-9 pr-10'>
									<p className='text-base text-muted-foreground leading-relaxed max-w-3xl'>
										{item.a}
									</p>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
