import React from 'react'
import ProjectsClient from './projects'
import { DATA } from '@/data/resume'
import { Metadata } from 'next'
import BlurFade from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
	title: `All Projects - ${DATA.name}`,
	description: `Showcasing my work and achievements.`,
	keywords: ["Projects", "All Projects", "Projects List", "Projects Showcase", "Projects Portfolio"],
	openGraph: {
		title: `All Projects - ${DATA.name}`,
		description: `Showcasing my work and achievements.`,
		images: [
			{
				url: DATA.avatarUrl,
				width: 800,
				height: 600,
				alt: `All Projects - ${DATA.name}`,
			},
		],
	},
	twitter: {
		title: `All Projects - ${DATA.name}`,
		description: `Showcasing my work and achievements.`,
		images: [
			{
				url: DATA.avatarUrl,
				width: 800,
				height: 600,
				alt: `All Projects - ${DATA.name}`,
			},
		],
	},
}

const BLUR_FADE_DELAY = 0.04;

const Page = () => {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<section id="projects">
				<div className="space-y-12 w-full">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2 w-full max-w-2xl mx-auto">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
									All Projects
								</h2>
							</div>
						</div>
					</BlurFade>

					<ProjectsClient />
				</div>
			</section>
		</main>
	)
}

export default Page