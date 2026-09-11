import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll reveal — CSS-driven, zero per-page edits.
 * Marks below-the-fold <section> elements with `reveal-item` and adds
 * `is-visible` as they enter the viewport (see index.css). Sections already
 * visible on load are left untouched, so LCP/SEO are unaffected. Animations
 * run on transform/opacity only (GPU-composited, no layout thrash) and are
 * disabled entirely under `prefers-reduced-motion`.
 */
export default function RevealOnScroll() {
	const location = useLocation()

	useLayoutEffect(() => {
		if (typeof IntersectionObserver === 'undefined') return

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible')
						io.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1, rootMargin: '0px 0px -32px 0px' },
		)

		document.querySelectorAll('main section').forEach((el) => {
			if (el.dataset.reveal) return // already processed
			const aboveFold = el.getBoundingClientRect().top < window.innerHeight
			if (aboveFold) {
				// Marked visible instantly: no section-level transition (protects
				// initial paint / LCP), but descendant micro-animations trigger on load.
				el.dataset.reveal = 'static'
				el.classList.add('is-visible')
			} else {
				el.dataset.reveal = '1'
				el.classList.add('reveal-item')
				io.observe(el)
			}
		})

		return () => io.disconnect()
	}, [location.pathname])

	return null
}
