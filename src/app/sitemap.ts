import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { CASE_STUDIES } from "@/data/case-studies";

// Stable "last meaningful change" date for the static pages. Bump this when you
// actually edit the home/projects/resume content — NOT on every deploy. Using a
// build-time `new Date()` here makes every URL look freshly changed on each
// deploy, which teaches Google to ignore the lastmod signal.
const SITE_UPDATED = new Date("2026-05-24");

// Derive a stable date from a case study's `dates` string (e.g. "Dec 2024 –
// Feb 2026" → 2026). Falls back to SITE_UPDATED when no year is present.
function caseStudyLastMod(dates: string): Date {
	const years = (dates.match(/\d{4}/g) ?? []).map(Number);
	return years.length ? new Date(`${Math.max(...years)}-01-01`) : SITE_UPDATED;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const base = DATA.url.replace(/\/$/, "");

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: base,
			lastModified: SITE_UPDATED,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${base}/projects`,
			lastModified: SITE_UPDATED,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${base}/resume`,
			lastModified: SITE_UPDATED,
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];

	const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
		url: `${base}/projects/${c.slug}`,
		lastModified: caseStudyLastMod(c.dates),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticRoutes, ...caseStudyRoutes];
}
