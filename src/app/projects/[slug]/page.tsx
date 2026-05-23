import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
	return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Metadata {
	const cs = getCaseStudy(params.slug);
	if (!cs) return {};
	return { title: cs.title, description: cs.tagline };
}

export default function CaseStudyPage({
	params,
}: {
	params: { slug: string };
}) {
	const cs = getCaseStudy(params.slug);
	if (!cs) notFound();

	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10 max-w-[715px] mx-auto">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<Link
					href="/projects"
					className="text-sm text-muted-foreground hover:underline"
				>
					← Back to projects
				</Link>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<header className="space-y-3">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
						{cs.title}
					</h1>
					<p className="text-muted-foreground">{cs.tagline}</p>
					<div className="flex flex-wrap gap-1">
						{cs.stack.map((tag) => (
							<Badge
								key={tag}
								variant="secondary"
								className="px-2 py-0 text-[10px]"
							>
								{tag}
							</Badge>
						))}
					</div>
					<div className="flex flex-wrap gap-4 pt-1">
						{cs.links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-medium text-primary hover:underline"
							>
								{link.label} ↗
							</Link>
						))}
					</div>
				</header>
			</BlurFade>

			{cs.image && (
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border">
						<Image
							src={cs.image}
							alt={cs.title}
							fill
							sizes="(max-width: 715px) 100vw, 715px"
							className="object-cover object-top"
							priority
						/>
					</div>
				</BlurFade>
			)}

			{cs.sections.map((section, i) => (
				<BlurFade key={section.heading} delay={BLUR_FADE_DELAY * (3 + i)}>
					<section className="space-y-2">
						<h2 className="text-xl font-bold">{section.heading}</h2>
						{section.paragraphs?.map((p, idx) => (
							<p
								key={idx}
								className="text-sm leading-relaxed text-muted-foreground"
							>
								{p}
							</p>
						))}
						{section.bullets && (
							<ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
								{section.bullets.map((b, idx) => (
									<li key={idx}>{b}</li>
								))}
							</ul>
						)}
					</section>
				</BlurFade>
			))}
		</main>
	);
}
