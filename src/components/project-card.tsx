import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { caseStudySlugForProject } from "@/data/case-studies";

interface Props {
	title: string;
	href?: string;
	description: string;
	dates: string;
	tags: readonly string[];
	image?: string;
	links?: readonly {
		icon: React.ReactNode;
		type: string;
		href: string;
	}[];
	className?: string;
}

export function ProjectCard({
	title,
	href,
	description,
	dates,
	tags,
	image,
	links,
	className,
}: Props) {
	const caseStudy = caseStudySlugForProject(title);
	return (
		<Card
			className={
				"flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
			}
		>
			<Link
				href={href || "#"}
				className={cn("block cursor-pointer", className)}
			>
				{image && (
					<Image
						src={image}
						alt={title}
						width={500}
						height={300}
						className="h-40 w-full overflow-hidden object-cover object-top"
					/>
				)}
			</Link>
			<CardHeader className="px-3">
				<div className="space-y-1">
					<CardTitle className="mt-2 text-base">{title}</CardTitle>
					{/* <time className="font-sans text-xs">{dates}</time> */}
					<Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
						{description}
					</Markdown>
				</div>
			</CardHeader>
			<CardContent className="mt-auto flex flex-col px-3 py-1">
				{tags && tags.length > 0 && (
					<div className="mt-2 flex flex-wrap gap-1">
						{tags?.map((tag) => (
							<Badge
								className="px-1 py-0 text-[10px]"
								variant="secondary"
								key={tag}
							>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="flex flex-col items-start gap-2 px-3 pb-3">
				{caseStudy && (
					<Link
						href={`/projects/${caseStudy}`}
						className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
					>
						Read case study →
					</Link>
				)}
				{links && links.length > 0 && (
					<div className="flex flex-row flex-wrap items-start gap-1">
						{links?.map((link, idx) => (
							<Link
								href={link?.href}
								key={idx}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
									{link.icon}
									{link.type}
								</Badge>
							</Link>
						))}
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
