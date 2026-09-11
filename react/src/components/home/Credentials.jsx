import React from 'react'
import { ShieldCheck, FileCheck, Award, MapPin } from 'lucide-react'

const credentials = [
	{
		icon: ShieldCheck,
		t: 'Seguro de responsabilidad civil',
		d: 'Cobertura profesional específica para actividad pericial y técnica en edificación.',
	},
	{
		icon: FileCheck,
		t: 'Certificación AESA',
		d: 'Pilotos certificados con licencia oficial para operaciones aéreas profesionales.',
	},
	{
		icon: Award,
		t: 'Validez pericial',
		d: 'Informes firmados por técnicos competentes, con plena validez legal.',
	},
	{
		icon: MapPin,
		t: 'Cumplimiento normativo',
		d: 'Procedimientos adaptados a CTE, LOE y normativa sectorial aplicable.',
	},
]

export default function Credentials() {
	return (
		<section className='section-pad py-20 md:py-28 border-t border-border bg-secondary/30'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
				<div className='lg:col-span-5'>
					<span className='mono-label-accent'>
						Credenciales y diferenciación técnica
					</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
						Pilotos ingenieros. No solo operadores.
					</h2>
					<p className='mt-5 text-lg text-muted-foreground leading-relaxed text-pretty'>
						Nuestro equipo está formado por ingenieros y arquitectos colegiados.
						No capturamos solo imágenes: las interpretamos técnicamente.
						Posibilidad de incorporar técnicos colegiados cuando el encargo lo
						exija o se solicite expresamente.
					</p>
					<ul className='mt-8 space-y-3'>
						{[
							'Ingeniería en edificación',
							'Arquitectura técnica',
							'Informes con validez pericial',
							'Interpretación técnica real',
						].map((t) => (
							<li
								key={t}
								className='flex items-center gap-3 text-sm text-foreground'
							>
								<span className='h-1.5 w-1.5 bg-primary' />
								{t}
							</li>
						))}
					</ul>
				</div>
				<div className='lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border'>
					{credentials.map((c, i) => (
						<div
							key={c.t}
							className='bg-background p-7 rise-in'
							style={{ animationDelay: `${i * 70}ms` }}
						>
							<c.icon className='h-7 w-7 text-primary' strokeWidth={1.5} />
							<h3 className='mt-4 font-heading font-semibold text-base text-foreground'>
								{c.t}
							</h3>
							<p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
								{c.d}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
