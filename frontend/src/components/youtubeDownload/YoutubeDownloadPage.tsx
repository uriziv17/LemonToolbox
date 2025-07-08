import React from "react";
import DownloadForm from "./DownloadForm";
import { Divider, Typography } from "antd";

export default function YoutubeDownloadPage() {
	return (
		<div
		// style={{
		// 	display: "flex",
		// 	justifyContent: "top",
		// 	flexDirection: "column",
		// 	alignItems: "center",
		// }}
		>
			<Typography.Title style={{ direction: "rtl" }}>
				הורדת שירים מ-YouTube
			</Typography.Title>
			<Typography.Paragraph>
				Enter the YouTube video URL below to download the video.
			</Typography.Paragraph>
			<DownloadForm />
		</div>
	);
}
