import { Button, Checkbox, Form, Input } from "antd";

export default async function DownloadForm() {
	const onFinish = async (values: any) => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/youtube/video`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					url: values.youtubeUrl,
					audioOnly: values.audioOnly,
				}),
			}
		);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Failed to download file: ${response.status} ${response.statusText} - ${errorText}`
			);
		}

		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);

		let filename = "your_big_fat_file";
		const disposition = response.headers.get("Content-Disposition");
		if (disposition && disposition.includes("filename=")) {
			filename = disposition
				.split("filename=")[1]
				.split(";")[0]
				.replace(/"/g, "");
		}

		const a = document.createElement("a");
		a.href = url;
		a.setAttribute("download", filename); // ✅ this triggers download instead of navigation
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	};

	return (
		<Form
			name="basic"
			// labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{
				maxWidth: 600,
			}}
			initialValues={{ remember: true }}
			onFinish={onFinish}
		>
			<Form.Item
				label="YouTube URL"
				name="youtubeUrl"
				rules={[
					{
						required: true,
						message: "input the YouTube URL ya ben shel zona!",
					},
				]}
			>
				<Input placeholder="Enter YouTube video URL" />
			</Form.Item>
			<Form.Item name="audioOnly" valuePropName="checked">
				<Checkbox>Download audio only</Checkbox>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" block>
					Download Video
				</Button>
			</Form.Item>
		</Form>
	);
}
