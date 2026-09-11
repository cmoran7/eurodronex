import React, { useState } from 'react'
import { base44 } from '@/api/base44Client'
import { Loader2, Save, X, Upload } from 'lucide-react'
import { Image } from '@/components/ui/image'
import SectionsEditor from '@/components/admin/SectionsEditor'

const fieldClass =
	'w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary transition-colors min-h-[48px]'
const labelClass =
	'font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 block'

const slugify = (str) =>
	str
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/[\s-]+/g, '-')

// Create / edit form for a blog entry. Pass `initial` to edit an existing record.
export default function BlogPostForm({ initial, onSaved, onCancel }) {
	const [form, setForm] = useState(() => ({
		title: initial?.title || '',
		slug: initial?.slug || '',
		category: initial?.category || '',
		excerpt: initial?.excerpt || '',
		image: initial?.image || '',
		date: initial?.date || new Date().toISOString().slice(0, 10),
		readTime: initial?.readTime || '6 min',
		featured: initial?.featured || false,
		published: initial?.published !== false,
		sections: initial?.sections?.length ? initial.sections : [{ h: '', p: '' }],
	}))
	const [saving, setSaving] = useState(false)
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState(null)

	const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
	const setTitle = (e) => {
		const title = e.target.value
		setForm((f) => ({ ...f, title, slug: f.slug ? f.slug : slugify(title) }))
	}

	const handleFile = async (e) => {
		const file = e.target.files?.[0]
		if (!file) return
		setUploading(true)
		setError(null)
		try {
			const { file_url } = await base44.integrations.Core.UploadFile({ file })
			setForm((f) => ({ ...f, image: file_url }))
		} catch (err) {
			console.error(err)
			setError('No se pudo subir la imagen. Inténtalo de nuevo.')
		} finally {
			setUploading(false)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setSaving(true)
		setError(null)
		const data = {
			...form,
			slug: form.slug || slugify(form.title),
			sections: form.sections.filter((s) => s.h.trim() || s.p.trim()),
		}
		try {
			if (initial?.id) {
				await base44.entities.BlogPost.update(initial.id, data)
			} else {
				await base44.entities.BlogPost.create(data)
			}
			onSaved()
		} catch (err) {
			console.error(err)
			setError(
				'No se pudo guardar la entrada. Revisa los campos e inténtalo de nuevo.',
			)
		} finally {
			setSaving(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='border border-border bg-card p-6 md:p-8'
		>
			<div className='flex items-center justify-between mb-6 pb-4 border-b border-border'>
				<div>
					<span className='mono-label-accent'>
						{initial?.id ? 'Editar entrada' : 'Nueva entrada'}
					</span>
					<h2 className='mt-1.5 heading-display text-lg'>
						{initial?.id
							? form.title || 'Entrada'
							: 'Registrar entrada del blog'}
					</h2>
				</div>
				<button
					type='button'
					onClick={onCancel}
					className='p-2 text-muted-foreground hover:text-foreground'
					aria-label='Cerrar'
				>
					<X className='h-5 w-5' />
				</button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<div className='md:col-span-2'>
					<label className={labelClass} htmlFor='bp-title'>
						Título *
					</label>
					<input
						id='bp-title'
						required
						value={form.title}
						onChange={setTitle}
						className={fieldClass}
						placeholder='Título del artículo'
					/>
				</div>
				<div>
					<label className={labelClass} htmlFor='bp-slug'>
						Slug (URL) *
					</label>
					<input
						id='bp-slug'
						required
						value={form.slug}
						onChange={set('slug')}
						className={`${fieldClass} font-mono`}
						placeholder='se-genera-del-titulo'
					/>
					<p className='mt-1.5 text-xs text-muted-foreground'>
						Se genera automáticamente desde el título. URL: /blog/
						{form.slug || '…'}
					</p>
				</div>
				<div>
					<label className={labelClass} htmlFor='bp-category'>
						Categoría *
					</label>
					<input
						id='bp-category'
						required
						value={form.category}
						onChange={set('category')}
						className={fieldClass}
						placeholder='Inspección técnica'
					/>
				</div>
				<div>
					<label className={labelClass} htmlFor='bp-date'>
						Fecha
					</label>
					<input
						id='bp-date'
						type='date'
						value={form.date}
						onChange={set('date')}
						className={fieldClass}
					/>
				</div>
				<div>
					<label className={labelClass} htmlFor='bp-readtime'>
						Tiempo de lectura
					</label>
					<input
						id='bp-readtime'
						value={form.readTime}
						onChange={set('readTime')}
						className={fieldClass}
						placeholder='6 min'
					/>
				</div>
				<div className='md:col-span-2'>
					<label className={labelClass} htmlFor='bp-excerpt'>
						Entradilla *
					</label>
					<textarea
						id='bp-excerpt'
						required
						rows={3}
						value={form.excerpt}
						onChange={set('excerpt')}
						className={`${fieldClass} resize-y`}
						placeholder='Resumen breve que aparece en la lista del blog'
					/>
				</div>
				<div className='md:col-span-2'>
					<span className={labelClass}>Imagen de portada</span>
					{form.image ? (
						<div className='relative aspect-[16/8] overflow-hidden border border-border bg-muted max-w-2xl'>
							<Image
								src={form.image}
								alt='Portada'
								className='h-full w-full'
								fittingType='fill'
							/>
							<button
								type='button'
								onClick={() => setForm((f) => ({ ...f, image: '' }))}
								className='absolute top-3 right-3 bg-foreground/80 text-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] hover:bg-foreground'
							>
								Quitar
							</button>
						</div>
					) : (
						<label className='flex items-center justify-center gap-2 border border-dashed border-border px-5 py-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer'>
							{uploading ? (
								<>
									<Loader2 className='h-4 w-4 animate-spin' /> Subiendo imagen…
								</>
							) : (
								<>
									<Upload className='h-4 w-4' /> Subir imagen de portada
								</>
							)}
							<input
								type='file'
								accept='image/*'
								onChange={handleFile}
								className='hidden'
								disabled={uploading}
							/>
						</label>
					)}
				</div>
				<div className='md:col-span-2 flex flex-wrap gap-8'>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							checked={form.published}
							onChange={(e) =>
								setForm((f) => ({ ...f, published: e.target.checked }))
							}
							className='h-4 w-4 accent-[hsl(var(--primary))]'
						/>
						<span className='text-sm'>Publicada (visible en la web)</span>
					</label>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							checked={form.featured}
							onChange={(e) =>
								setForm((f) => ({ ...f, featured: e.target.checked }))
							}
							className='h-4 w-4 accent-[hsl(var(--primary))]'
						/>
						<span className='text-sm'>Destacada (portada del blog)</span>
					</label>
				</div>
				<div className='md:col-span-2'>
					<span className={labelClass}>Contenido del artículo</span>
					<SectionsEditor
						value={form.sections}
						onChange={(sections) => setForm((f) => ({ ...f, sections }))}
					/>
				</div>
			</div>

			{error && <p className='mt-5 text-sm text-destructive'>{error}</p>}

			<div className='mt-7 flex flex-col sm:flex-row gap-3'>
				<button
					type='submit'
					disabled={saving || uploading}
					className='inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 min-h-[52px]'
				>
					{saving ? (
						<>
							<Loader2 className='h-4 w-4 animate-spin' /> Guardando…
						</>
					) : (
						<>
							<Save className='h-4 w-4' /> Guardar entrada
						</>
					)}
				</button>
				<button
					type='button'
					onClick={onCancel}
					className='inline-flex items-center justify-center border border-border px-7 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground hover:bg-secondary transition-colors min-h-[52px]'
				>
					Cancelar
				</button>
			</div>
		</form>
	)
}
