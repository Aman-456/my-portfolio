import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = `Projects — ${DATA.name}`;
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
				<div style={{ fontSize: 30, color: "#a1a1aa" }}>{DATA.name}</div>
				<div style={{ fontSize: 76, fontWeight: 700, marginTop: 12 }}>
					Projects
				</div>
				<div
					style={{
						fontSize: 28,
						color: "#a1a1aa",
						marginTop: 24,
						maxWidth: 1000,
						lineHeight: 1.4,
					}}
				>
					Case studies and shipped products — from Web3 platforms to full-stack
					apps.
				</div>
			</div>
		),
		{ ...size },
	);
}
