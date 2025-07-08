import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;

const SidebarMenu = () => (
	<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
		<Menu.Item key="1" icon={<HomeOutlined />}>
			<Link to="/">Home</Link>
		</Menu.Item>
		<Menu.Item key="2" icon={<YoutubeOutlined />}>
			<Link to="/youtube-download">YouTube Download</Link>
		</Menu.Item>
	</Menu>
);

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Layout style={{ minHeight: "100vh" }}>
		<Sider>
			<div
				style={{ height: 32, margin: 16, background: "rgba(255,255,255,0.2)" }}
			/>
			<SidebarMenu />
		</Sider>
		<Layout>
			<Content style={{ margin: "16px" }}>{children}</Content>
		</Layout>
	</Layout>
);

export default AppLayout;
