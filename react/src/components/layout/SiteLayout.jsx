import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import TechnicalStatus from './TechnicalStatus'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function SiteLayout() {
	return (
		<div className='min-h-screen flex flex-col bg-background'>
			<Navbar />
			<RevealOnScroll />
			<main className='flex-1 pt-16 md:pt-20 pb-7'>
				<Outlet />
			</main>
			<Footer />
			<TechnicalStatus />
		</div>
	)
}
