import React from 'react'
import { Image } from '@/components/ui/image'

// Image with technical annotation overlay — inspection points over the photo.
// points: [{ x, y, label }] — x/y as percentages of the image box.
export default function AnnotatedImage({
	src,
	alt,
	points = [],
	badge,
	caption,
	className,
}) {
	return (
		<figure
			className={`relative border border-border bg-card overflow-hidden ${className || ''}`}
		>
			<div className='relative aspect-[16/10] overflow-hidden bg-muted'>
				<Image
					src={src}
					alt={alt}
					className='h-full w-full'
					fittingType='fill'
				/>
				{points.map((p, i) => (
					<div
						key={i}
						className='absolute point-in'
						style={{
							left: `${p.x}%`,
							top: `${p.y}%`,
							animationDelay: `${0.3 + i * 0.12}s`,
						}}
					>
						<span className='absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-4 w-4 rounded-full bg-background/90 border border-primary'>
							<span className='h-1.5 w-1.5 rounded-full bg-primary' />
						</span>
						{p.label && (
							<span className='absolute left-4 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] bg-foreground/80 text-background px-1.5 py-0.5'>
								{p.label}
							</span>
						)}
					</div>
				))}
				<span className='corner-mark corner-tl absolute top-2 left-2 h-3.5 w-3.5 border-t-2 border-l-2 border-primary' />
				<span className='corner-mark corner-tr absolute top-2 right-2 h-3.5 w-3.5 border-t-2 border-r-2 border-primary' />
				<span className='corner-mark corner-bl absolute bottom-2 left-2 h-3.5 w-3.5 border-b-2 border-l-2 border-primary' />
				<span className='corner-mark corner-br absolute bottom-2 right-2 h-3.5 w-3.5 border-b-2 border-r-2 border-primary' />
			</div>
			{(badge || caption) && (
				<figcaption className='flex items-center justify-between gap-4 px-4 py-2.5 border-t border-border'>
					{badge && <span className='mono-label-accent shrink-0'>{badge}</span>}
					{caption && (
						<span className='text-xs text-muted-foreground text-right'>
							{caption}
						</span>
					)}
				</figcaption>
			)}
		</figure>
	)
}
