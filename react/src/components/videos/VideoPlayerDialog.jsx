import React, { useEffect } from 'react'
import { X } from 'lucide-react'

// In-site video player. The YouTube iframe is mounted only when a video is
// selected and unmounted on close, so nothing heavy loads upfront.
export default function VideoPlayerDialog({ video, onClose }) {
	useEffect(() => {
		if (!video) return undefined
		const prev = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		const onKey = (e) => {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', onKey)
		return () => {
			document.body.style.overflow = prev
			window.removeEventListener('keydown', onKey)
		}
	}, [video, onClose])

	if (!video) return null

	return (
		<div
			className='fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8'
			role='dialog'
			aria-modal='true'
			aria-label={video.title}
		>
			<div
				className='absolute inset-0 bg-foreground/80 backdrop-blur-sm'
				onClick={onClose}
			/>
			<div className='relative w-full max-w-4xl border border-border bg-card shadow-2xl'>
				<div className='flex items-start justify-between gap-4 px-5 md:px-6 py-4 border-b border-border'>
					<div className='min-w-0'>
						<span className='mono-label-accent'>
							{video.code} · {video.category}
						</span>
						<h2 className='mt-1.5 heading-display text-base md:text-lg text-balance truncate'>
							{video.title}
						</h2>
					</div>
					<button
						type='button'
						onClick={onClose}
						className='p-2 -m-2 text-muted-foreground hover:text-foreground shrink-0'
						aria-label='Cerrar vídeo'
					>
						<X className='h-5 w-5' />
					</button>
				</div>
				<div className='aspect-video bg-black'>
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
						title={video.title}
						className='h-full w-full'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					/>
				</div>
				<div className='px-5 md:px-6 py-4 border-t border-border'>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						{video.description}
					</p>
				</div>
			</div>
		</div>
	)
}
