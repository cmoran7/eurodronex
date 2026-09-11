import React from 'react'
import Hero from '@/components/home/Hero'
import ProblemSolution from '@/components/home/ProblemSolution'
import Manifesto from '@/components/home/Manifesto'
import Pathologies from '@/components/home/Pathologies'
import ServicesPreview from '@/components/home/ServicesPreview'
import Methodology from '@/components/home/Methodology'
import Audiences from '@/components/home/Audiences'
import Credentials from '@/components/home/Credentials'
import HomeFAQ from '@/components/home/HomeFAQ'
import HomeContact from '@/components/home/HomeContact'

export default function Home() {
	return (
		<>
			<Hero />
			<ProblemSolution />
			<Manifesto />
			<Pathologies />
			<ServicesPreview />
			<Methodology />
			<Audiences />
			<Credentials />
			<HomeFAQ />
			<HomeContact />
		</>
	)
}
