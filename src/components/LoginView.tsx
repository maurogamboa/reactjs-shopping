import React from "react";
import { Layout, Row, Card } from 'antd';
import LoginForm from "./LoginForm";

const { Content } = Layout;

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const backgroundStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundImage: 'radial-gradient(rgb(24 144 255 / 65%), #096dd9)'
};

export default function LoginView() {
  return (
      <Row justify="center" align="middle" style={backgroundStyle}>
        <Card title="Welcome!">
          <LoginForm />
        </Card>
      </Row>
  )
}