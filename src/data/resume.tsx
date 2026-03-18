import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderGit2, Search } from "lucide-react";

export const TAGS = {
	REACT: "React",
	NEXT: "Next.js",
	TYPESCRIPT: "TypeScript",
	JAVASCRIPT: "JavaScript",
	NODE: "Node.js",
	EXPRESS: "Express",
	MONGODB: "MongoDB",
	TAILWIND: "TailwindCSS",
	SHADCN: "Shadcn UI",
	MUI: "MUI",
	BOOTSTRAP: "Bootstrap",
	FIREBASE: "Firebase",
	WEB3: "Web3",
	FULLSTACK: "Full Stack",
	MERN: "MERN",
	ANTD: "AntD",
	SCSS: "SCSS",
	FRONTEND: "Frontend",
	GOOGLE_AUTH: "Google Auth",
	FRAMER_MOTION: "Framer Motion",
	CANVAS: "HTML5 Canvas",
	CSS: "CSS",
} as const;

export const DATA = {
	name: "AMAN",
	initials: "AM",
	url: "https://amanullah.netlify.app",
	location: "Islamabad, Pakistan",
	locationLink: "https://www.google.com/maps/place/Pakistan",
	description:
		"Full-Stack Developer specializing in React, Next.js, Web3 integrations, and AI-driven apps.",
	summary:
		"I have a [background](/#education) in computer science and over 2.5 years of experience building web applications with React, Next.js, and TypeScript. I contributed to [CarAdvisers](https://www.caradvisers.com/) by optimizing its core architecture and admin panel for better performance and maintainability. I’ve worked on [projects](/#projects) in marketplaces, agency platforms, and Web3 integrations (Ethereum, Polygon, Solana) using wallets like WalletConnect and Phantom. My [experience](/#work) also includes Node.js, Express, and Firebase for real-time backend services. I plan to explore AI and LLM integrations in Next.js for future projects.",
	avatarUrl: "/me.jpg",

	skills: [
		"React",
		"Next.js",
		"Javaccript",
		"Typescript",
		"Tailwind",
		"Mui",
		"Node.js",
		"Express",
		"Firebase",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/projects", icon: FolderGit2, label: "Projects" },
		// { href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "amanu4519@gmail.com",
		tel: "+92 3045461456",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/Aman-456",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/amanullah01/",
				icon: Icons.linkedin,

				navbar: true,
			},
			// X: {
			//   name: "X",
			//   url: "https://dub.sh/dillion-twitter",
			//   icon: Icons.x,

			//   navbar: true,
			// },
			// Youtube: {
			//   name: "Youtube",
			//   url: "https://dub.sh/dillion-youtube",
			//   icon: Icons.youtube,
			//   navbar: true,
			// },
			whatsapp: {
				name: "Send Message",
				url: "https://wa.me/923045461456?text=Hi%20there!%20I%20want%20to%20connect.",
				icon: Icons.message,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "amanu4519@gmail.com",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "Car Advisers",
			href: "https://caradvisers.com/",
			badges: ["core team member", "onsite"],
			location: "Islamabad, Pakistan",
			title: "Full Stack Developer",
			logoUrl: "/exprience/caradvisers.png",
			start: "Dec 2024",
			end: "Present",
			description:
				"Developed a comprehensive automotive marketplace platform similar to PakWheels with multi-product capabilities. Built features for buying/selling cars, bikes, and auto parts, integrated admin dashboards, inspection systems, auction sheets, and specialized sections for armoured and electric vehicles. Implemented user profiles, dealer profiles, workshop profiles with public/private route management and data encryption for secure transactions.",
		},

		{
			company: "Crickmoney",
			badges: ["lead developer", "remote"],
			href: "https://www.crickmoney.com/",
			location: "Remote",
			title: "Full Stack Developer",
			logoUrl: "/exprience/crickmoney.png",
			start: "Jul 2024",
			end: "Dec 2024",
			description:
				"Developed and deployed a gaming platform using Next.js with integrated payment gateways including JazzCash and EasyPaisa. Built a token-based system where users purchase tokens to access WebGL games. Managed full-stack development and deployment while collaborating with Unity game developers to create seamless gaming experiences.",
		},
		{
			company: "Aztechzone",
			badges: ["sole MERN developer", "remote"],
			href: "https://www.aztechzone.com/",
			location: "Remote",
			title: "Full Stack Developer",
			logoUrl: "/exprience/aztechzone.png",
			start: "Aug 2023",
			end: "Nov 2023",
			description:
				"Built a complete MERN stack solution including company website frontend and comprehensive admin dashboard. Developed CRUD functionality for blog management, game information, team member profiles, testimonials, and contact form handling. Implemented seamless data fetching and display across client-facing and administrative interfaces.",
		},

		{
			company: "Intelgency",
			badges: ["Senior MERN developer", "onsite"],
			href: "https://www.intelgency.com/",
			location: "Islamabad, Pakistan",
			title: "Full Stack Developer",
			logoUrl: "/exprience/intelgency.jfif",
			start: "Nov 2023",
			end: "Nov 2024",
			description:
				"Transitioned from team member to full-stack lead developer specializing in Web3 technologies. Led development of multiple blockchain projects including CroFunds.me (crowdfunding platform), Mystery Madness (multi-chain gaming on Solana and Ethereum), and Spoflex (sports events platform). Implemented wallet connections, token transactions, contest systems, and marketplace functionality using Next.js and Tailwind CSS.",
		},

		{
			company: "Intelgency",
			badges: ["react specialist", "onsite"],
			href: "https://www.intelgency.com/",
			location: "Islamabad, Pakistan",
			title: "Front End Developer",
			logoUrl: "/exprience/intelgency.jfif",
			start: "April 2022",
			end: "Feb 2023",
			description:
				"Started as React developer working on multiple projects as team member. Developed frontend solutions using React, focusing on user interface development and component architecture. Gained experience in collaborative development and modern frontend frameworks.",
		},
		{
			company: "T4tutorials",
			href: "https://t4tutorials.com",
			badges: ["intern", "onsite"],
			location: "Rawalpindi, Pakistan",
			title: "Front End Developer",
			logoUrl: "",
			start: "Aug 2020",
			end: "Jan 2021",
			description:
				"Completed internship focused on learning frontend development fundamentals. Gained hands-on experience with HTML, CSS, JavaScript, and modern web development practices. Built foundational skills in responsive design and user interface development.",
		},
	],
	education: [
		{
			school: "PMAS AAUR",
			href: "https://www.uaar.edu.pk/index.php",
			degree: "Bachelor's Degree of Computer Science (BCS)",
			logoUrl: "/education/PMAS.png",
			start: "2018",
			end: "2022",
		},
		{
			school: "ICB",
			href: "https://uwaterloo.ca",
			degree: "Pre-Engineering",
			logoUrl: "/education/HEC.gif",
			start: "2016",
			end: "2018",
		},
	],
	projects: [
		{
			title: "Car Advisers",
			href: "https://caradvisers.com/",
			dates: "Dec 2024 - Present",
			active: true,
			description:
				"Comprehensive automotive marketplace platform similar to PakWheels with multi-product capabilities for cars, bikes, and auto parts. Includes admin dashboards, auction systems, inspection features, and encrypted dealer/user route management for secure transactions.",
			technologies: [
				TAGS.NEXT,
				TAGS.TYPESCRIPT,
				TAGS.NODE,
				TAGS.EXPRESS,
				TAGS.MONGODB,
				TAGS.TAILWIND,
				TAGS.SHADCN,
			],
			links: [
				{
					type: "Website",
					href: "https://caradvisers.com/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/caradvisers.png",
			video: "",
		},
		{
			title: "Street Food",
			href: "https://streetfoodmarkets.co/",
			dates: "June 2023 - Nov 2023",
			active: true,
			description:
				"Multi-vendor food marketplace app with vendor dashboards, product listings, order management, and payment integration. Features real-time updates and smooth customer/vendor workflows.",
			technologies: [
				TAGS.REACT,
				TAGS.MUI,
				TAGS.EXPRESS,
				TAGS.MONGODB,
				TAGS.NODE,
				TAGS.FULLSTACK,
			],
			links: [
				{
					type: "Website",
					href: "https://streetfoodmarkets.co/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/streetfoods.png",
			video: "",
		},
		{
			title: "Aztechzone",
			href: "https://aztechzone.com/",
			dates: "Aug 2023 - Nov 2023",
			active: true,
			description:
				"MERN stack company website with an extensive admin dashboard for managing blogs, team profiles, and client-facing content.",
			technologies: [
				TAGS.REACT,
				TAGS.MUI,
				TAGS.BOOTSTRAP,
				TAGS.EXPRESS,
				TAGS.MONGODB,
				TAGS.FULLSTACK,
			],
			links: [
				{
					type: "Website",
					href: "https://aztechzone.com/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/aztechzone.png",
			video: "",
		},
		{
			title: "Cricmoney",
			href: "https://www.crickmoney.com/",
			dates: "Jul 2024 - Dec 2024",
			active: true,
			description:
				"A gaming platform where users purchase tokens to play WebGL-based games. Integrated payment gateways (JazzCash, EasyPaisa) and built full-stack solution with Next.js.",
			technologies: [
				TAGS.NEXT,
				TAGS.REACT,
				TAGS.TAILWIND,
				TAGS.MONGODB,
				TAGS.FULLSTACK,
			],
			links: [
				{
					type: "Website",
					href: "https://www.crickmoney.com/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/crickmoney.png",
			video: "",
		},
		{
			title: "Mystery Madness",
			href: "https://mysterymadness.co/",
			dates: "2023",
			active: true,
			description:
				"Web3 quiz DApp integrating Solana and Ethereum chains. Includes wallet connections, token transactions, and dynamic gameplay features.",
			technologies: [
				TAGS.NEXT,
				TAGS.TAILWIND,
				TAGS.FIREBASE,
				TAGS.WEB3,
				TAGS.FULLSTACK,
			],
			links: [
				{
					type: "Website",
					href: "https://mysterymadness.co/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/mysterymadness.png",
			video: "",
		},
		{
			title: "Spoflex",
			href: "https://www.spoflex.com/",
			dates: "2023",
			active: true,
			description:
				"Sports forum platform with event management, community discussions, and real-time updates. Built with MERN stack and custom UI components.",
			technologies: [TAGS.MERN, TAGS.REACT, TAGS.ANTD, TAGS.BOOTSTRAP, TAGS.FULLSTACK],
			links: [
				{
					type: "Website",
					href: "https://www.spoflex.com/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/spoflex.png",
			video: "",
		},
		{
			title: "CrofundsMe",
			href: "https://crofundsme.netlify.app/",
			dates: "2023",
			active: false,
			description:
				"Frontend of a crowdfunding platform built using React and AntD with clean UI and project showcase features.",
			technologies: [TAGS.REACT, TAGS.ANTD, TAGS.SCSS, TAGS.FRONTEND],
			links: [
				{
					type: "Website",
					href: "https://crofundsme.netlify.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/crofundsme.png",
			video: "",
		},
		{
			title: "The Daily Thoughts",
			href: "https://the-daily-thoughts.vercel.app",
			dates: "2025",
			active: true,
			description:
				"A comprehensive blog platform with role-based access control. Admins have full CRUD capabilities for blogs and can manage sub-admins. Sub-admins can manage their own content, while normal users can view and comment on posts. Features an integrated comment management system. Built with Next.js, MongoDB, Google Auth, and TailwindCSS.",
			technologies: [
				TAGS.NEXT,
				TAGS.MONGODB,
				TAGS.GOOGLE_AUTH,
				TAGS.TAILWIND,
				TAGS.FULLSTACK,
			],
			links: [
				{
					type: "Website",
					href: "https://the-daily-thoughts.vercel.app",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/dailythoughts.png",
			video: "",
		},

		{
			title: "Direct Portal",
			href: "",
			dates: "2023",
			active: false,
			description:
				"Project management software for internal use. Includes task tracking, milestones, and multi-role access.",
			technologies: [TAGS.REACT, TAGS.MUI, TAGS.EXPRESS, TAGS.MONGODB, TAGS.FULLSTACK],
			image: "/projects/directportal.png",
			video: "",
			links: [],
		},
		{
			title: "Game Dev Portfolio",
			href: "https://usama-gamify.netlify.app",
			dates: "2025",
			active: true,
			description:
				"A Game Developer's Portfolio website with smooth animations and interactive elements. Built with React and Framer Motion.",
			technologies: [TAGS.REACT, TAGS.FRAMER_MOTION],
			links: [
				{
					type: "Website",
					href: "https://usama-gamify.netlify.app",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/gamify.png",
			video: "",
		},
		{
			title: "JS Game",
			href: "https://jsgametest.netlify.app/",
			dates: "2023",
			active: true,
			description:
				"2D JavaScript game prototype / tech test featuring sprite-based characters, enemies, projectiles, and environmental elements. Built as a practice project to explore core game development concepts like asset loading, rendering, animations, and basic interactions using vanilla JavaScript.",
			technologies: [
				TAGS.JAVASCRIPT,
				TAGS.CANVAS,
				TAGS.CSS,
			],
			links: [
				{
					type: "Website",
					href: "https://jsgametest.netlify.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/js-game.png",
			video: "",
		},
		{
			title: "Hilink Travel App",
			href: "https://travelapp-alpha.vercel.app/",
			dates: "",
			active: true,
			description:
				"Modern landing page for Hilink, a mobile adventure travel app designed for hikers, campers, and nature enthusiasts. ",
			technologies: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
			links: [
				{
					type: "Website",
					href: "https://travelapp-alpha.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/hilink-travel.png",
			video: "",
		},
	],
	hackathons: [
		{
			title: "Hack Western 5",
			dates: "November 23rd - 25th, 2018",
			location: "London, Ontario",
			description:
				"Developed a mobile application which delivered bedtime stories to children using augmented reality.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [],
		},

		{
			title: "HackDavis",
			dates: "January 20th - 21st, 2018",
			location: "Davis, California",
			description:
				"Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
			win: "Best Data Hack",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/my6footprint",
				},
				{
					title: "ML",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/my6footprint-machine-learning",
				},
				{
					title: "iOS",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/CarbonWallet",
				},
				{
					title: "Server",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/wallet6-server",
				},
			],
		},
		{
			title: "ETH Waterloo",
			dates: "October 13th - 15th, 2017",
			location: "Waterloo, Ontario",
			description:
				"Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
			links: [
				{
					title: "Organization",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ethdocnet",
				},
			],
		},
	],
} as const;
