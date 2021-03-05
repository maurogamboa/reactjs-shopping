import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import UserButton from "./navigation/UserButton";
import { useSelector } from "react-redux";
import { UserAuthenticationState } from "../store/types/userAuth";

const { Header, Content, Footer } = Layout;

export default function Home() {
  const store = useSelector<UserAuthenticationState, UserAuthenticationState>(
    (state) => state,
  );

  return (
  <Layout className="layout">
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Sell</Menu.Item>
      <Menu.Item key="2">Buy</Menu.Item>
      <Menu.Item key="3">Contact</Menu.Item>
      {/* <Menu.SubMenu style={{float: 'right'}} key="SubMenu" icon={<UserOutlined />} title="Mauro Gamboa">
        <Menu.Item key="user:1">My sales</Menu.Item>
        <Menu.Item key="user:2">My shopping</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="user:3">Logout</Menu.Item>
      </Menu.SubMenu> */}
      <div style={{float: 'right'}}>
        <UserButton username={store.currentUser?.fullname}/>
      </div>
      
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content">
      Content
    </div>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}