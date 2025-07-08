import React from "react";
import { Layout, Menu, Typography } from "antd";
import { HomeOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import lemonLogo from "./assets/lemon toolbox logo.png";

const { Sider, Content } = Layout;

const SidebarMenu = () => (
	<Menu
		mode="inline"
		defaultSelectedKeys={["1"]}
		style={{
			background: "#ffc215",
			fontWeight: 500,
		}}
		items={[
			{
				key: "1",
				icon: <HomeOutlined />, // default icon color
				label: <Link to="/">Home</Link>,
			},
			{
				key: "2",
				icon: <YoutubeOutlined />, // default icon color
				label: <Link to="/youtube-download">YouTube Download</Link>,
			},
		]}
	/>
);

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Layout style={{ minHeight: "100vh", background: "#000" }}>
		<Sider
			style={{
				background: "#ffc215",
			}}
		>
			<div
				style={{
					height: 64,
					margin: 10,
					display: "flex",
					alignItems: "center",
					justifyContent: "left",
					borderRadius: 8,
				}}
			>
				<img src={lemonLogo} alt="Lemon ToolBox Logo" style={{ height: 40 }} />
			</div>
			<SidebarMenu />
		</Sider>
		<Layout>
			<Content style={{ margin: "16px" }}>{children}</Content>
		</Layout>
	</Layout>
);

export default AppLayout;
