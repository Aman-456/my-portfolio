import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = `${DATA.name} — Full-Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "80px",
					backgroundColor: "#09090b",
					color: "#fafafa",
				}}
			>
				<div style={{ fontSize: 84, fontWeight: 700 }}>{DATA.name}</div>
				<div style={{ fontSize: 38, color: "#a1a1aa", marginTop: 12 }}>
					Full-Stack Developer
				</div>
				<div
					style={{
						fontSize: 28,
						color: "#a1a1aa",
						marginTop: 32,
						maxWidth: 960,
						lineHeight: 1.4,
					}}
				>
					{DATA.tagline}
				</div>
			</div>
		),
		{ ...size },
	);
}
