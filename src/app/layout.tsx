import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const title = `${DATA.name} - Full Stack Developer`;

export const metadata: Metadata = {
	metadataBase: new URL(DATA.url),
	title: {
		default: title,
		template: `%s | ${DATA.name}`,
	},
	description: DATA.description,
	openGraph: {
		title: `${title}`,
		description: DATA.description,
		url: DATA.url,
		siteName: `${title}`,
		locale: "en_US",
		type: "website",
		images: DATA.avatarUrl,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: `${title}`,
		card: "summary_large_image",
	},
	verification: {
		google: "MaSBJGB-PAPtXY5-Sy5wE-Nno6tUcOpYNWC40OAbl3Y",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head></head>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased max-w-7xl mx-auto py-12 sm:py-24 px-6",
					fontSans.variable,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
