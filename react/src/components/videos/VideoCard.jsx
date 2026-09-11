import React from 'react'
import { Play, MapPin, Hash } from 'lucide-react'
import { Image } from '@/components/ui/image'

// Gallery card — thumbnail only; the YouTube player is created on demand.
export default function VideoCard({ video, index, onPlay }) {
	return (
		<button
			type='button'
			onClick={() => onPlay(video)}
			className='group text-left border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors tech-lift rise-in'
			style={{ animationDelay: `${index * 60}ms` }}
			aria-label={`Reproducir: ${video.title}`}
		>
			<div className='relative aspect-video overflow-hidden bg-muted'>
				<Image
					src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
					alt={video.title}
					className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
					loading='lazy'
				/>
				<div className='absolute inset-0 bg-foreground/20 group-hover:bg-foreground/5 transition-colors' />
				<span className='absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background bg-foreground/70 px-2 py-1'>
					{video.category}
				</span>
				{video.duration && (
					<span className='absolute bottom-3 right-3 font-mono text-[10px] text-background bg-foreground/70 px-2 py-1'>
						{video.duration}
					</span>
				)}
				<span className='absolute inset-0 flex items-center justify-center'>
					<span className='flex items-center justify-center h-14 w-14 rounded-full bg-background/90 border border-primary/60 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105'>
						<Play className='h-5 w-5 translate-x-0.5 fill-current' />
					</span>
				</span>
			</div>
			<div className='p-5'>
				<span className='mono-label'>{video.code} · DEMO</span>
				<h3 className='mt-2 heading-display text-lg text-balance group-hover:text-primary transition-colors'>
					{video.title}
				</h3>
				<p className='mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3'>
					{video.description}
				</p>
				{(video.location || video.projectCode) && (
					<div className='mt-4 flex flex-wrap items-center gap-4 font-mono text-[11px] text-foreground/70'>
						{video.location && (
							<span className='inline-flex items-center gap-1.5'>
								<MapPin className='h-3.5 w-3.5 text-primary' /> {video.location}
							</span>
						)}
						{video.projectCode && (
							<span className='inline-flex items-center gap-1.5'>
								<Hash className='h-3.5 w-3.5 text-primary' />{' '}
								{video.projectCode}
							</span>
						)}
					</div>
				)}
			</div>
		</button>
	)
}
