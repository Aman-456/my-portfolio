import type { Metadata } from "next";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;
const RESUME_FILE = DATA.resumeUrl;

export const metadata: Metadata = {
	title: "Resume",
	description: `Resume / CV of ${DATA.name} — full-stack developer building fast, scalable apps with React, Next.js, and TypeScript.`,
	alternates: {
		canonical: "/resume",
	},
	openGraph: {
		title: `Resume — ${DATA.name}`,
		description: `Resume / CV of ${DATA.name}.`,
	},
	twitter: {
		title: `Resume — ${DATA.name}`,
		description: `Resume / CV of ${DATA.name}.`,
	},
};

export default function ResumePage() {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-8 max-w-4xl mx-auto">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="space-y-1">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Resume
						</h1>
						<p className="text-sm text-muted-foreground">
							{DATA.name} — Full-Stack Developer
						</p>
					</div>
					<div className="flex gap-2">
						<a
							href={RESUME_FILE}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
						>
							Open in new tab ↗
						</a>
						<a
							href={RESUME_FILE}
							download
							className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
						>
							Download PDF
						</a>
					</div>
				</div>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div className="overflow-hidden rounded-lg border bg-muted/30">
					<object
						data={RESUME_FILE}
						type="application/pdf"
						aria-label={`${DATA.name} resume`}
						className="h-[80vh] w-full"
					>
						{/* Mobile browsers often can't render PDFs inline — offer a download. */}
						<div className="flex flex-col items-center justify-center gap-3 p-12 text-center">
							<p className="text-sm text-muted-foreground">
								Your browser can&apos;t display the PDF here.
							</p>
							<a
								href={RESUME_FILE}
								download
								className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
							>
								Download PDF
							</a>
						</div>
					</object>
				</div>
			</BlurFade>
		</main>
	);
}
