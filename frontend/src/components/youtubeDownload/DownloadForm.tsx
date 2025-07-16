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
		// todo: this does not quite work
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		document.body.appendChild(a);
		a.click();
		a.remove();
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
