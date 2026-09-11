import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { base44 } from '@/api/base44Client'
import { Plus, Pencil, Trash2, Loader2, ExternalLink } from 'lucide-react'
import BlogPostForm from '@/components/admin/BlogPostForm'

const btnClass =
	'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] px-4 py-2.5 border transition-colors'

// Admin panel — create, edit and delete blog entries.
export default function AdminBlog() {
	const [entries, setEntries] = useState(null)
	const [editing, setEditing] = useState(undefined) // undefined = list, null = new, record = edit

	const load = () => base44.entities.BlogPost.list('-date').then(setEntries)

	useEffect(() => {
		load().catch(() => setEntries([]))
	}, [])

	const handleDelete = async (id) => {
		if (
			!window.confirm(
				'¿Eliminar esta entrada del blog? Esta acción no se puede deshacer.',
			)
		)
			return
		try {
			await base44.entities.BlogPost.delete(id)
			load()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className='min-h-screen bg-background section-pad py-10 md:py-14'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-wrap items-end justify-between gap-4 pb-6 border-b border-border'>
					<div>
						<span className='mono-label-accent'>
							EDX.ADMIN / Panel de contenido
						</span>
						<h1 className='mt-2 heading-display text-2xl md:text-3xl'>
							Gestión del blog
						</h1>
					</div>
					<div className='flex items-center gap-3'>
						<Link
							to='/blog'
							className={`${btnClass} border-border text-muted-foreground hover:text-foreground`}
						>
							<ExternalLink className='h-3.5 w-3.5' /> Ver blog
						</Link>
						{editing === undefined && (
							<button
								onClick={() => setEditing(null)}
								className={`${btnClass} border-primary bg-primary text-primary-foreground hover:bg-primary/90`}
							>
								<Plus className='h-4 w-4' /> Nueva entrada
							</button>
						)}
					</div>
				</div>

				{editing !== undefined ? (
					<div className='mt-8'>
						<BlogPostForm
							initial={editing}
							onSaved={() => {
								setEditing(undefined)
								load()
							}}
							onCancel={() => setEditing(undefined)}
						/>
					</div>
				) : !entries ? (
					<div className='flex items-center justify-center py-32'>
						<Loader2 className='h-6 w-6 animate-spin text-primary' />
					</div>
				) : entries.length === 0 ? (
					<div className='mt-8 border border-dashed border-border p-16 text-center'>
						<p className='text-muted-foreground'>
							Todavía no hay entradas. Crea la primera con «Nueva entrada».
						</p>
					</div>
				) : (
					<div className='mt-8 border border-border divide-y divide-border'>
						{entries.map((p) => (
							<div
								key={p.id}
								className='flex flex-wrap items-center justify-between gap-4 p-5 bg-card'
							>
								<div className='min-w-0'>
									<div className='flex items-center gap-3 flex-wrap'>
										<span className='font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground'>
											{p.category} · {p.date || 's/f'} · {p.readTime || ''}
										</span>
										{p.featured && (
											<span className='font-mono text-[9px] uppercase tracking-[0.14em] bg-primary/10 text-primary px-2 py-0.5'>
												Destacada
											</span>
										)}
										{!p.published && (
											<span className='font-mono text-[9px] uppercase tracking-[0.14em] bg-muted text-muted-foreground px-2 py-0.5'>
												Borrador
											</span>
										)}
									</div>
									<h2 className='mt-1.5 font-heading font-semibold text-foreground truncate'>
										{p.title}
									</h2>
									<span className='font-mono text-[11px] text-muted-foreground'>
										/blog/{p.slug}
									</span>
								</div>
								<div className='flex items-center gap-2 shrink-0'>
									<button
										onClick={() => setEditing(p)}
										className='inline-flex items-center gap-1.5 border border-border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground hover:border-primary hover:text-primary transition-colors'
									>
										<Pencil className='h-3.5 w-3.5' /> Editar
									</button>
									<button
										onClick={() => handleDelete(p.id)}
										className='inline-flex items-center gap-1.5 border border-border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground hover:border-destructive hover:text-destructive transition-colors'
									>
										<Trash2 className='h-3.5 w-3.5' /> Eliminar
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
