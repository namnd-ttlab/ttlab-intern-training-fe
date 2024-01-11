import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <Layout  style={{ height: "100%" }}>
      <Header style={{ background: "white" }}>header</Header>
      <Layout>
        <Sider style={{ background: "white" }}>left sidebar</Sider>
        <Content  style={{ padding: '24px 24px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
