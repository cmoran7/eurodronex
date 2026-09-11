import React from 'react'
import { Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react'

// Repeatable editor for the article's content sections (heading + paragraph).
export default function SectionsEditor({ value, onChange }) {
	const sections = value || []

	const update = (i, field, v) =>
		onChange(sections.map((s, idx) => (idx === i ? { ...s, [field]: v } : s)))

	const move = (i, dir) => {
		const j = i + dir
		if (j < 0 || j >= sections.length) return
		const next = [...sections]
		;[next[i], next[j]] = [next[j], next[i]]
		onChange(next)
	}

	const add = () => onChange([...sections, { h: '', p: '' }])
	const remove = (i) => onChange(sections.filter((_, idx) => idx !== i))

	return (
		<div className='space-y-4'>
			{sections.map((sec, i) => (
				<div key={i} className='border border-border bg-secondary/40 p-4'>
					<div className='flex items-center justify-between mb-3'>
						<span className='font-mono text-[10px] uppercase tracking-[0.18em] text-primary'>
							Sección {String(i + 1).padStart(2, '0')}
						</span>
						<div className='flex items-center gap-1'>
							<button
								type='button'
								onClick={() => move(i, -1)}
								className='p-1.5 text-muted-foreground hover:text-foreground'
								aria-label='Subir sección'
							>
								<ChevronUp className='h-4 w-4' />
							</button>
							<button
								type='button'
								onClick={() => move(i, 1)}
								className='p-1.5 text-muted-foreground hover:text-foreground'
								aria-label='Bajar sección'
							>
								<ChevronDown className='h-4 w-4' />
							</button>
							<button
								type='button'
								onClick={() => remove(i)}
								className='p-1.5 text-muted-foreground hover:text-destructive'
								aria-label='Eliminar sección'
							>
								<Trash2 className='h-4 w-4' />
							</button>
						</div>
					</div>
					<input
						value={sec.h}
						onChange={(e) => update(i, 'h', e.target.value)}
						placeholder='Encabezado de la sección'
						className='w-full bg-background border border-border px-4 py-3 text-sm font-heading font-semibold text-foreground placeholder:text-muted-foreground/60 focus:border-primary min-h-[44px]'
					/>
					<textarea
						value={sec.p}
						onChange={(e) => update(i, 'p', e.target.value)}
						rows={4}
						placeholder='Contenido de la sección'
						className='mt-2 w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary resize-y min-h-[100px]'
					/>
				</div>
			))}
			<button
				type='button'
				onClick={add}
				className='inline-flex items-center gap-2 border border-dashed border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:border-primary hover:text-primary transition-colors'
			>
				<Plus className='h-4 w-4' /> Añadir sección
			</button>
		</div>
	)
}
