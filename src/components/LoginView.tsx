import React from "react";
import { Row, Card } from 'antd';
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserAuthenticationState } from "../store/types/userAuth";

const backgroundStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundImage: 'radial-gradient(rgb(24 144 255 / 65%), #096dd9)'
};

export default function LoginView() {
  const store = useSelector<UserAuthenticationState, UserAuthenticationState>(
    (state) => state,
  );

  if(store.currentUser) {
    return  <Redirect to="/" />
  }
  return (
      <Row justify="center" align="middle" style={backgroundStyle}>
        <Card title="Welcome!">
          <LoginForm />
        </Card>
      </Row>
  )
}