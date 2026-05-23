// Case studies for select projects. Each `projectTitle` must match a title in
// DATA.projects (src/data/resume.tsx) so project cards can auto-link to them.

export interface CaseStudySection {
	heading: string;
	paragraphs?: string[];
	bullets?: string[];
}

export interface CaseStudy {
	slug: string;
	projectTitle: string;
	title: string;
	tagline: string;
	dates: string;
	image?: string;
	stack: string[];
	links: { label: string; href: string }[];
	sections: CaseStudySection[];
}

export const CASE_STUDIES: CaseStudy[] = [
	{
		slug: "the-daily-canvas",
		projectTitle: "The Daily Canvas",
		title: "The Daily Canvas — Full-stack blog & CMS",
		tagline:
			"A self-contained blog and lightweight CMS with role-based editorial controls, threaded voted comments, a moderation queue, and SEO built in — solo-built on the Next.js App Router and Postgres.",
		dates: "2025",
		image: "/projects/dailythoughts.png",
		stack: [
			"Next.js 16 (App Router)",
			"React 19 (RSC)",
			"TypeScript",
			"Drizzle ORM",
			"Neon Postgres",
			"NextAuth v5",
			"Tailwind CSS 4",
			"Zod",
			"Vercel Blob",
		],
		links: [
			{ label: "Live site", href: "https://the-daily-thoughts.vercel.app" },
			{ label: "Source", href: "https://github.com/Aman-456/The-Daily-Canvas" },
		],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"The Daily Canvas is a full-stack blog and lightweight CMS I built end-to-end as my own product. Beyond publishing articles, it ships an admin dashboard, a two-layer authorization model, threaded comments with voting and moderation, newsletter and contact capture, and first-class SEO.",
					"It runs on the Next.js App Router with React Server Components for reads and server actions for every write, backed by Drizzle ORM on Neon Postgres.",
				],
			},
			{
				heading: "The problem",
				paragraphs: [
					"I wanted a blog that wasn't just a static site, but that also didn't pull in a heavy headless CMS. The goal was a fast, SEO-first publishing platform with real editorial controls — multiple roles, granular permissions, and moderation — that I fully own and can keep extending.",
				],
			},
			{
				heading: "My role",
				paragraphs: [
					"Sole developer — the data model, server actions, authentication and authorization, the admin CMS, the comment and moderation system, and the SEO layer.",
				],
			},
			{
				heading: "Key technical decisions",
				bullets: [
					"Server-actions-first: every mutation goes through a typed server action rather than an API route, keeping data flow colocated and easy to reason about (the repo even enforces this as an engineering rule).",
					"React Server Components for reads, with `unstable_cache` and tag-based invalidation (blogs, comments, stats, users, pages) so writes revalidate precisely instead of over-fetching.",
					"Two-layer authorization: a coarse role (USER / ADMIN) plus a granular permissions JSON (canManageBlogs, canManageComments, canManageUsers, …), centralized behind permission helpers so every page and action checks access the same way.",
					"Soft-delete + 'hidden' flags for comments, so moderating or removing a comment preserves the shape of a thread; reports auto-hide content past a threshold and surface in an admin moderation queue.",
					"SEO treated as a feature: a dynamic sitemap, an RSS feed at /feed.xml, JSON-LD helpers, and an IndexNow ping on publish / update / delete.",
				],
			},
			{
				heading: "Challenges & trade-offs",
				bullets: [
					"Threaded comments that support vote-based ordering and moderation without breaking thread structure — solved with soft-delete + hidden flags instead of hard deletes.",
					"Keeping cache correctness as the number of mutating actions grew, by leaning on explicit cache tags rather than blanket revalidation.",
					"Balancing a flexible permission model against complexity — a role + JSON-flags hybrid stayed expressive without the overhead of a full RBAC schema.",
				],
			},
			{
				heading: "Outcome",
				paragraphs: [
					"A production-deployed blog and CMS with complete editorial workflows — draft autosave, cover-image upload and optimization, moderation, newsletter, and SEO — on a serverless Postgres backend.",
				],
			},
		],
	},
	{
		slug: "car-advisers",
		projectTitle: "Car Advisers",
		title: "Car Advisers — Automotive marketplace platform",
		tagline:
			"A multi-product automotive marketplace (eight product categories) in the spirit of PakWheels — role-based user/dealer/workshop dashboards, auctions, inspections, Bank Alfalah payments, and a separate React admin app, all running across staging and production. Built as a core team member.",
		dates: "Dec 2024 – Feb 2026",
		image: "/projects/caradvisers.png",
		stack: [
			"Next.js",
			"TypeScript",
			"React (admin)",
			"Node.js",
			"Express",
			"MongoDB",
			"Tailwind CSS",
			"shadcn/ui",
			"Bank Alfalah",
		],
		links: [{ label: "Live site", href: "https://caradvisers.com/" }],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"Car Advisers is a comprehensive automotive marketplace — comparable to PakWheels — for buying and selling cars, bikes, and auto parts, with specialized sections for armoured and electric vehicles. I worked on it full-stack as a core team member.",
				],
			},
			{
				heading: "What I built",
				bullets: [
					"Eight product categories on a single marketplace — including cars, bikes, and parts plus inspections and auctions, with specialized armoured / electric-vehicle sections.",
					"Role-specific dashboards for users, dealers, and workshops, each with its own public/private route management.",
					"A separate React admin dashboard with its own backend for managing the whole platform.",
					"Bank Alfalah payment gateway integration, with data encryption around sensitive transactions.",
				],
			},
			{
				heading: "Engineering, infra & SEO",
				bullets: [
					"Ran two environments — staging and production — across both the main app and the admin (client and server).",
					"Refactored existing code and stripped out dead/bad code to improve performance and maintainability.",
					"Owned SEO: built a dynamic sitemap, fixed on-site SEO issues, and improved crawlability.",
				],
			},
			{
				heading: "Challenges & trade-offs",
				bullets: [
					"Inherited a brittle legacy codebase with poorly-built dynamic pages — I had to read and understand it before I could safely change it.",
					"Several previous developers had each pulled in their own UI libraries, leaving the code messy and inconsistent.",
					"The React admin had been built on Redux Saga — heavier machinery than the app actually needed.",
					"My approach: strip out redundant code and extra libraries and port toward the latest shadcn UI, refactoring components incrementally — fit between the feature tasks I was assigned, since time never allowed a full rewrite.",
				],
			},
			{
				heading: "Outcome",
				paragraphs: [
					"A production marketplace spanning multiple vehicle and parts categories, with role-specific experiences for buyers, dealers, and workshops.",
				],
			},
		],
	},
	{
		slug: "cricmoney",
		projectTitle: "Cricmoney",
		title: "Cricmoney — Token-based WebGL gaming platform",
		tagline:
			"A platform where users buy tokens to play WebGL games, with local payment gateways (JazzCash, EasyPaisa). I led full-stack development and deployment, working alongside Unity developers.",
		dates: "Jul 2024 – Dec 2024",
		image: "/projects/crickmoney.png",
		stack: [
			"Next.js",
			"React",
			"Tailwind CSS",
			"MongoDB",
			"JazzCash",
			"EasyPaisa",
			"Unity / WebGL",
		],
		links: [{ label: "Live site", href: "https://www.crickmoney.com/" }],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"Cricmoney is a gaming platform built around a token economy: users purchase tokens that unlock access to WebGL-based games. I led the full-stack build and deployment.",
				],
			},
			{
				heading: "The problem",
				paragraphs: [
					"Players needed a way to buy in and play browser games using payment methods that actually work in Pakistan — JazzCash and EasyPaisa — rather than card-only gateways.",
				],
			},
			{
				heading: "My role",
				paragraphs: [
					"Lead developer — I owned full-stack development and deployment, and coordinated with Unity game developers to embed their WebGL builds into the platform.",
				],
			},
			{
				heading: "What I built",
				bullets: [
					"A token system: users purchase tokens that gate access to the games.",
					"Integrated JazzCash and EasyPaisa payment gateways.",
					"Embedded Unity WebGL games into the Next.js app for a seamless play experience.",
				],
			},
			{
				heading: "Challenges & trade-offs",
				bullets: [
					"The payment integration was the hard part: the gateway's service was unreliable — intermittent API failures, and sometimes multiple responses for a single request.",
					"Support ran through an ad-hoc WhatsApp group, so I built defensively around it — handling duplicate responses and failures — to make payments dependable, which took considerable time.",
				],
			},
			{
				heading: "Outcome",
				paragraphs: [
					"A deployed, paid-token gaming platform bridging a Next.js front end, local payments, and Unity-built WebGL games.",
				],
			},
		],
	},
	{
		slug: "mystery-madness",
		projectTitle: "Mystery Madness",
		title: "Mystery Madness — Multi-chain Web3 quiz DApp",
		tagline:
			"My first solo Web3 project: a multi-chain quiz DApp spanning Solana and Ethereum — with wallet connections, on-chain token transactions, contest gameplay, an admin dashboard, and a live leaderboard.",
		dates: "2023",
		image: "/projects/mysterymadness.png",
		stack: [
			"Next.js",
			"Tailwind CSS",
			"Firebase",
			"Web3",
			"Solana",
			"Ethereum",
			"Phantom / WalletConnect",
		],
		links: [{ label: "Live site", href: "https://mysterymadness.co/" }],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"Mystery Madness is a Web3 quiz DApp that runs across both Solana and Ethereum. It was the first Web3 product I built solo, end-to-end — and the foundation for the multi-chain work I did afterward.",
				],
			},
			{
				heading: "Why it mattered",
				paragraphs: [
					"Moving from Web2 to Web3 meant learning wallet authentication, on-chain token transactions, and multi-chain support from scratch — and shipping all of it on my own.",
				],
			},
			{
				heading: "What I built",
				bullets: [
					"Wallet connections across chains (Phantom for Solana, WalletConnect for Ethereum).",
					"On-chain token transactions tied to gameplay.",
					"Dynamic contest-based quiz gameplay with a Next.js front end and Firebase for off-chain data.",
					"An admin dashboard to create and manage contests and view the user list.",
					"A client-side leaderboard surfacing live player standings.",
				],
			},
			{
				heading: "Build approach & trade-offs",
				bullets: [
					"It began as a 2–3 page site, so I kept the stack lean — Tailwind only, no component library like shadcn.",
					"As the scope grew I built my own reusable components instead of adopting a UI kit — practical because the surface area was still small — leaning on GPT and other tools to move quickly.",
					"For the admin dashboard I made the opposite call: I used a template to ship solid UI/UX fast rather than hand-roll everything.",
				],
			},
			{
				heading: "Challenges",
				bullets: [
					"Supporting two very different chains (Solana vs Ethereum) behind a single UX.",
					"Handling wallet state, signing, and transaction confirmation reliably.",
				],
			},
			{
				heading: "Outcome",
				paragraphs: [
					"Shipped my first solo multi-chain DApp, which led into a run of blockchain projects in the role that followed.",
				],
			},
		],
	},
	{
		slug: "street-food",
		projectTitle: "Street Food",
		title: "Street Food — Multi-vendor food marketplace",
		tagline:
			"A multi-vendor food marketplace with vendor dashboards, product listings, order management, payments, and real-time updates.",
		dates: "Jun 2023 – Nov 2023",
		image: "/projects/streetfoods.png",
		stack: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
		links: [{ label: "Live site", href: "https://streetfoodmarkets.co/" }],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"Street Food is a multi-vendor food marketplace connecting customers with multiple vendors, each managing their own catalog and orders.",
				],
			},
			{
				heading: "What I built",
				bullets: [
					"Vendor dashboards for managing product listings and incoming orders.",
					"Customer ordering flows with payment integration.",
					"Real-time updates for smooth customer and vendor workflows.",
				],
			},
			{
				heading: "Tech",
				paragraphs: [
					"A MERN build — React with Material UI on the front end, Node/Express and MongoDB on the back end.",
				],
			},
			{
				heading: "Challenges & trade-offs",
				bullets: [
					"Serving two very different audiences from one system — vendors managing catalogs and orders, and customers browsing and ordering.",
					"Keeping order state in sync in real time so both sides see updates immediately.",
					"Handling order management and payments cleanly across multiple independent vendors.",
				],
			},
			{
				heading: "Outcome",
				paragraphs: [
					"A working multi-vendor marketplace with end-to-end ordering, vendor management, and live order updates.",
				],
			},
		],
	},
	{
		slug: "aztechzone",
		projectTitle: "Aztechzone",
		title: "Aztechzone — Company site & CMS (solo, dev → deploy)",
		tagline:
			"A complete MERN company website and admin dashboard I built and shipped solo — owning everything from development through deployment.",
		dates: "Aug 2023 – Nov 2023",
		image: "/projects/aztechzone.png",
		stack: [
			"React",
			"Material UI",
			"Bootstrap",
			"Node.js",
			"Express",
			"MongoDB",
		],
		links: [{ label: "Live site", href: "https://aztechzone.com/" }],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"A full MERN-stack company website plus an extensive admin dashboard, which I built end-to-end as the sole developer and took all the way to deployment.",
				],
			},
			{
				heading: "My role",
				paragraphs: [
					"Sole developer — frontend, backend (Node/Express + MongoDB), the admin CMS, and deployment. I shipped it to Hostinger, set up the domain, and routed the DNS — the full lifecycle was mine, from first commit to a live, content-managed site.",
				],
			},
			{
				heading: "What I built",
				bullets: [
					"The public company website frontend.",
					"An admin dashboard with CRUD for blogs, game information, team profiles, testimonials, and contact submissions.",
					"Seamless data fetching and display across client-facing and administrative interfaces.",
				],
			},
			{
				heading: "Challenges & trade-offs",
				bullets: [
					"I built this part-time, alongside another job — usually only 1–3 hours a day.",
					"So the real challenge was time management rather than technical depth: scoping tightly and making steady daily progress to ship a complete site plus admin, solo, within those small windows.",
				],
			},
			{
				heading: "Outcome",
				paragraphs: [
					"A deployed, content-managed company site delivered solo — covering both the public experience and the team's admin tooling.",
				],
			},
		],
	},
	{
		slug: "intraverse",
		projectTitle: "Intraverse",
		title: "Intraverse — Web3 quest & gaming platform (early build)",
		tagline:
			"The earlier version of Intraverse I built solo — a tournament-based, multichain Web3 gaming platform with monthly tournaments, quests, a live leaderboard, a points-multiplier 'Galaxy Pass', wallet connect, and an admin dashboard. It was outsourced to me as my first solo client project; the company has since rebuilt the product, so this reflects my original work.",
		dates: "2023",
		image: "/projects/intraverse.png",
		stack: [
			"React (CRA)",
			"Firebase",
			"Web3 / multichain wallets",
			"react-unity-webgl",
			"Cloud storage (bucket)",
			"Custom CSS & animations",
		],
		links: [
			{
				label: "Live demo (my version)",
				href: "https://development-env.netlify.app/",
			},
		],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"Intraverse is a tournament-based Web3 gaming platform — a new tournament ran every month. This case study covers the earlier version I built solo; the company has since rebuilt the product on a new UI and stack, so what's here reflects my original work.",
				],
			},
			{
				heading: "How it landed on my desk",
				paragraphs: [
					"It reached me as just a leaderboard — essentially the first screen you see — and the owner shared very little detail. I was brought in (outsourced) as an 'experienced dev,' even though this was actually my first solo project.",
					"I assumed it was a one-time job I'd hand back after the first few tournaments. Instead I stayed on and kept shipping — and the previous developer had left the codebase a complete mess, so I reworked it from scratch.",
				],
			},
			{
				heading: "What I built",
				bullets: [
					"Quests and quest-detail flows, a live leaderboard, and a separate referral board.",
					"A 'Galaxy Pass' system with tiered score multipliers (Nebula ×2 up to Black Hole ×5).",
					"Multichain Web3 wallet connect, plus login, signup, and play-as-guest entry.",
					"An admin dashboard.",
					"A monthly cadence: every month I shipped a new feature and reworked existing ones for that month's tournament — on a tight window, with near-daily updates.",
				],
			},
			{
				heading: "The performance win I'm proudest of",
				paragraphs: [
					"The inherited setup bundled the Unity game build inside the project and loaded it with react-unity-webgl, served off Hostinger's bandwidth — so game load times ran into minutes.",
					"I moved the game build out to a cloud storage bucket, and load time dropped from minutes to seconds. It was my first time doing this, so I was learning the approach while shipping it.",
				],
			},
			{
				heading: "Working through Firebase",
				paragraphs: [
					"At that point most logic lived client-side — the admin dashboard had only a handful of functions — so I worked largely through the Firebase client SDK, and built composite indexes to support the compound queries the leaderboards and tournaments needed.",
				],
			},
			{
				heading: "Hand-built UI",
				paragraphs: [
					"Built when AI coding tools were still weak, so the UI craft was entirely hands-on.",
				],
				bullets: [
					"Coded the animated starfield background from scratch — no template or library.",
					"Hand-built the neon card UI and styling manually.",
				],
			},
			{
				heading: "Wearing every hat",
				paragraphs: [
					"Because the engagement was never clearly scoped or communicated up front, I ended up juggling everything solo: client management, project management, deployment, and both the Firebase data layer and the frontend — all against a recurring monthly tournament deadline.",
				],
			},
			{
				heading: "Outcome",
				paragraphs: [
					"I kept the monthly-tournament platform shipping solo across many months. The company later rebuilt the product — but the wins here, like taking game loading from minutes to seconds, the Firebase indexing, and the hand-built neon UI, were my work.",
				],
			},
		],
	},
	{
		slug: "allcoin",
		projectTitle: "AllCoin",
		title: "AllCoin — Web3 challenge-coin platform (ongoing)",
		tagline:
			"Building AllCoin solo for a client — a Web3 challenge-coin community and marketplace platform. I inherited a working but tangled codebase and have been hardening its authorization and architecture while shipping new features. Active project.",
		dates: "2026 – Present",
		image: "/projects/braav.png",
		stack: [
			"Next.js (App Router)",
			"NestJS",
			"TypeScript",
			"PostgreSQL",
			"AWS",
			"TanStack Query",
			"Cursor (AI-assisted)",
		],
		links: [{ label: "Live site", href: "https://allcoin.braav.co/" }],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"AllCoin is a Web3 challenge-coin community and marketplace platform I'm building solo for a client. I work feature by feature: the client brings what they want, I come back with proposals and ideas, and we agree on the approach together.",
					"The product already worked when I joined — but the codebase was tangled and spaghetti-like, so a lot of my work is hardening it while continuing to ship.",
				],
			},
			{
				heading: "Hardening authorization",
				paragraphs: [
					"Admin access was being decided on the client side, and the admin allow-list was duplicated across the client and the server and re-initialized ad hoc across many pages — so changing who counted as an admin meant edits in lots of places, and the checks weren't trustworthy.",
					"I centralized authorization into a single source of truth, fixed the related hooks, and made admin checks consistent across the app instead of being re-written page by page.",
				],
			},
			{
				heading: "Routing & layout refactor",
				paragraphs: [
					"Protected and public routes weren't using the framework's route groups or shared layouts — every protected page re-wrote the same access conditions.",
					"I introduced route groups and a shared layout so the access check lives in one place, instead of being duplicated on each page.",
				],
			},
			{
				heading: "Unifying a fragmented auth state",
				paragraphs: [
					"Login state was spread across several signals — tokens and IDs in local storage, a flag the middleware relied on, and TanStack Query's stale-while-revalidate cache. When any of those fell out of sync, the app behaved inconsistently: the navbar could show 'logged out' while protected routes were still reachable because the query cache was still hydrating.",
					"I'm consolidating this into a single layout/provider that resolves auth from the local flags first and then loads the app — removing the flicker and the mismatched states. (Still in progress.)",
				],
			},
			{
				heading: "Shipping new features",
				paragraphs: [
					"Alongside the refactors I've shipped new features — including a marketplace — using an AI-assisted workflow (Cursor) backed by testing and automation. Several are live, with more in a structured backlog.",
				],
			},
			{
				heading: "Bringing in process",
				paragraphs: [
					"There was no real tracking system. The client first wanted everything in a spreadsheet, which quickly became painful, so I moved us to Notion — a proper backlog and catalog for features and progress.",
				],
			},
			{
				heading: "Status",
				paragraphs: [
					"Active and ongoing: incrementally untangling and hardening an inherited codebase while shipping new product features, on a Next.js + NestJS + PostgreSQL + AWS stack across staging and development environments.",
				],
			},
		],
	},
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return CASE_STUDIES.find((c) => c.slug === slug);
}

export function caseStudySlugForProject(
	projectTitle: string,
): string | undefined {
	return CASE_STUDIES.find((c) => c.projectTitle === projectTitle)?.slug;
}
