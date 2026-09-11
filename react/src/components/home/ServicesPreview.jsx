import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'

export default function ServicesPreview() {
	return (
		<section className='section-pad py-20 md:py-28 border-t border-border'>
			<div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
				<div className='max-w-2xl'>
					<span className='mono-label-accent'>Servicios / 06</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl lg:text-5xl text-balance'>
						Un ecosistema técnico integral
					</h2>
					<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
						No ofrecemos servicios aislados. Cada inspección está respaldada por
						criterio ingenieril, interpretación profesional y validez pericial.
					</p>
				</div>
				<Link
					to='/servicios'
					className='inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 hover:text-primary shrink-0'
				>
					Ver matriz completa <ArrowUpRight className='h-4 w-4' />
				</Link>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((s) => (
					<ServiceCard key={s.slug} service={s} />
				))}
			</div>
		</section>
	)
}
