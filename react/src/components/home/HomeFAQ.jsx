import React from 'react'
import FAQAccordion from '@/components/FAQAccordion'

const faqs = [
	{
		q: '¿Qué permisos son necesarios para realizar una inspección con drones?',
		a: 'Nosotros gestionamos todos los permisos necesarios: autorizaciones AESA, coordinación con ENAIRE para espacios aéreos controlados y avisos a autoridades locales cuando sea requerido. El cliente no tiene que realizar ninguna gestión.',
	},
	{
		q: '¿Los informes tienen validez técnica o pericial?',
		a: 'Todos nuestros informes pueden visarse en el colegio correspondiente. Están firmados por técnicos competentes con responsabilidad profesional directa.',
	},
	{
		q: '¿En qué zonas operan actualmente?',
		a: 'Operamos principalmente en la Comunidad de Madrid y provincias limítrofes (Toledo, Guadalajara, Segovia, Ávila). Para proyectos de envergadura, podemos desplazarnos a cualquier punto de España.',
	},
	{
		q: '¿Es necesario instalar medios auxiliares?',
		a: 'No. Esa es precisamente nuestra ventaja principal. Inspeccionamos la envolvente completa (fachadas y cubiertas) sin andamios, grúas ni plataformas elevadoras, eliminando costes, permisos y tiempos de instalación.',
	},
	{
		q: '¿Cuánto tiempo tarda el proceso completo?',
		a: 'El plazo medio desde la solicitud hasta la entrega del informe es de 5 a 20 días, dependiendo de la complejidad. La inspección en campo suele realizarse en una única jornada.',
	},
	{
		q: '¿Quién realiza la inspección?',
		a: 'Todas las inspecciones son realizadas por ingenieros o arquitectos colegiados con licencia de piloto RPAS. No subcontratamos operadores externos. Garantizamos interpretación técnica real, no solo captura de imágenes.',
	},
]

export default function HomeFAQ() {
	return (
		<section className='section-pad py-20 md:py-28 border-t border-border'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
				<div className='lg:col-span-4'>
					<span className='mono-label-accent'>Preguntas frecuentes</span>
					<h2 className='mt-4 heading-display text-3xl md:text-4xl text-balance'>
						Resolvemos las dudas más habituales
					</h2>
					<p className='mt-5 text-muted-foreground leading-relaxed'>
						Sobre nuestros servicios técnicos de inspección, diagnóstico y
						documentación de edificios.
					</p>
				</div>
				<div className='lg:col-span-8'>
					<FAQAccordion items={faqs} />
				</div>
			</div>
		</section>
	)
}
