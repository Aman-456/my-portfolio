import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { CASE_STUDIES } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = DATA.url.replace(/\/$/, "");
	const now = new Date();

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
		{
			url: `${base}/projects`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${base}/resume`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];

	const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
		url: `${base}/projects/${c.slug}`,
		lastModified: now,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticRoutes, ...caseStudyRoutes];
}
