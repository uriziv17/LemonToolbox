import { Button, Form, Input } from "antd";

export default function DownloadForm() {
	const onFinish = (values: any) => {
		console.log("Success:", values);
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

			<Form.Item>
				<Button type="primary" htmlType="submit" block>
					Download Video
				</Button>
			</Form.Item>
		</Form>
	);
}
