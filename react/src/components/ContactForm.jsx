import React, { useState } from 'react'
import { base44 } from '@/api/base44Client'
import {
	clientTypes,
	serviceTypes,
	buildingTypes,
	urgencyLevels,
} from '@/data/services'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const fieldClass =
	'w-full bg-background border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary transition-colors min-h-[48px]'

const labelClass =
	'font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 block'

export default function ContactForm({ defaultService }) {
	const [status, setStatus] = useState('idle') // idle | sending | success | error
	const [form, setForm] = useState({
		nombre: '',
		empresa: '',
		telefono: '',
		email: '',
		tipoCliente: '',
		tipoServicio: defaultService || '',
		tipoEdificio: '',
		ubicacion: '',
		urgencia: '',
		mensaje: '',
	})

	const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus('sending')
		try {
			const body = [
				`Nueva solicitud de evaluación técnica — EurodroneX`,
				``,
				`Nombre: ${form.nombre}`,
				`Empresa: ${form.empresa}`,
				`Teléfono: ${form.telefono}`,
				`Email: ${form.email}`,
				`Tipo de cliente: ${form.tipoCliente}`,
				`Tipo de servicio: ${form.tipoServicio}`,
				`Tipo de edificio: ${form.tipoEdificio}`,
				`Ubicación: ${form.ubicacion}`,
				`Urgencia: ${form.urgencia}`,
				``,
				`Mensaje:`,
				form.mensaje,
			].join('\n')

			await base44.integrations.Core.SendEmail({
				to: 'contacto@eurodronex.com',
				subject: `Nueva solicitud — ${form.tipoServicio || 'Consulta'} — ${form.nombre || 'Web'}`,
				body,
			})
			setStatus('success')
		} catch (err) {
			console.error(err)
			setStatus('error')
		}
	}

	if (status === 'success') {
		return (
			<div className='border border-border bg-card p-10 text-center'>
				<CheckCircle2 className='h-10 w-10 text-primary mx-auto' />
				<h3 className='mt-4 heading-display text-xl'>Solicitud recibida</h3>
				<p className='mt-2 text-sm text-muted-foreground max-w-md mx-auto'>
					Gracias. Nuestro equipo técnico revisará su caso y le responderá en
					menos de 24 horas.
				</p>
				<button
					onClick={() => {
						setStatus('idle')
						setForm({
							nombre: '',
							empresa: '',
							telefono: '',
							email: '',
							tipoCliente: '',
							tipoServicio: defaultService || '',
							tipoEdificio: '',
							ubicacion: '',
							urgencia: '',
							mensaje: '',
						})
					}}
					className='mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-primary hover:underline'
				>
					Enviar otra solicitud
				</button>
			</div>
		)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='border border-border bg-card p-6 md:p-8'
		>
			<div className='flex items-center justify-between mb-6 pb-4 border-b border-border'>
				<div>
					<span className='mono-label-accent'>Formulario técnico</span>
					<h3 className='mt-1.5 heading-display text-lg'>
						Solicitar revisión técnica
					</h3>
				</div>
				<span className='font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground hidden sm:block'>
					Respuesta &lt; 24h
				</span>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<div>
					<label className={labelClass} htmlFor='nombre'>
						Nombre completo *
					</label>
					<input
						id='nombre'
						required
						value={form.nombre}
						onChange={update('nombre')}
						className={fieldClass}
						placeholder='Nombre y apellidos'
					/>
				</div>
				<div>
					<label className={labelClass} htmlFor='empresa'>
						Empresa
					</label>
					<input
						id='empresa'
						value={form.empresa}
						onChange={update('empresa')}
						className={fieldClass}
						placeholder='Empresa / estudio'
					/>
				</div>
				<div>
					<label className={labelClass} htmlFor='telefono'>
						Teléfono
					</label>
					<input
						id='telefono'
						type='tel'
						value={form.telefono}
						onChange={update('telefono')}
						className={fieldClass}
						placeholder='+34 600 000 000'
					/>
				</div>
				<div>
					<label className={labelClass} htmlFor='email'>
						Email *
					</label>
					<input
						id='email'
						type='email'
						required
						value={form.email}
						onChange={update('email')}
						className={fieldClass}
						placeholder='email@dominio.com'
					/>
				</div>
				<div>
					<label className={labelClass} htmlFor='tipoCliente'>
						Tipo de cliente
					</label>
					<select
						id='tipoCliente'
						value={form.tipoCliente}
						onChange={update('tipoCliente')}
						className={fieldClass}
					>
						<option value=''>Seleccionar tipo</option>
						{clientTypes.map((t) => (
							<option key={t} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>
				<div>
					<label className={labelClass} htmlFor='tipoServicio'>
						Tipo de servicio
					</label>
					<select
						id='tipoServicio'
						value={form.tipoServicio}
						onChange={update('tipoServicio')}
						className={fieldClass}
					>
						<option value=''>Seleccionar servicio</option>
						{serviceTypes.map((t) => (
							<option key={t} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>
				<div>
					<label className={labelClass} htmlFor='tipoEdificio'>
						Tipo de edificio
					</label>
					<select
						id='tipoEdificio'
						value={form.tipoEdificio}
						onChange={update('tipoEdificio')}
						className={fieldClass}
					>
						<option value=''>Seleccionar tipo</option>
						{buildingTypes.map((t) => (
							<option key={t} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>
				<div>
					<label className={labelClass} htmlFor='ubicacion'>
						Ubicación
					</label>
					<input
						id='ubicacion'
						value={form.ubicacion}
						onChange={update('ubicacion')}
						className={fieldClass}
						placeholder='Localidad / provincia'
					/>
				</div>
				<div className='md:col-span-2'>
					<label className={labelClass} htmlFor='urgencia'>
						Urgencia
					</label>
					<select
						id='urgencia'
						value={form.urgencia}
						onChange={update('urgencia')}
						className={fieldClass}
					>
						<option value=''>Seleccionar urgencia</option>
						{urgencyLevels.map((t) => (
							<option key={t} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>
				<div className='md:col-span-2'>
					<label className={labelClass} htmlFor='mensaje'>
						Mensaje
					</label>
					<textarea
						id='mensaje'
						value={form.mensaje}
						onChange={update('mensaje')}
						rows={4}
						className={`${fieldClass} min-h-[120px] resize-y`}
						placeholder='Describe el edificio, la patología observada y el alcance técnico necesario.'
					/>
				</div>
			</div>

			{status === 'error' && (
				<div className='mt-5 flex items-center gap-2 text-sm text-destructive'>
					<AlertCircle className='h-4 w-4' /> No se pudo enviar. Inténtalo de
					nuevo o escríbenos a contacto@eurodronex.com
				</div>
			)}

			<button
				type='submit'
				disabled={status === 'sending'}
				className='mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 min-h-[52px]'
			>
				{status === 'sending' ? (
					<>
						<Loader2 className='h-4 w-4 animate-spin' /> Enviando…
					</>
				) : (
					<>
						<Send className='h-4 w-4' /> Solicitar revisión técnica
					</>
				)}
			</button>
			<p className='mt-4 text-xs text-muted-foreground text-center'>
				Sin compromiso. Sus datos se tratan con confidencialidad según nuestra
				política de privacidad.
			</p>
		</form>
	)
}
