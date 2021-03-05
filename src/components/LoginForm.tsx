import React, { Dispatch } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { UserAuthenticationActionTypes, UserAuthenticationState } from "../store/types/userAuth";
import { loginRequestAsync } from "../store/actions";

export default function LoginForm() {
  const store = useSelector<UserAuthenticationState, UserAuthenticationState>(
    (state) => state,
  );
  const dispatch: Dispatch<UserAuthenticationActionTypes> = useDispatch();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    dispatch(loginRequestAsync(values.username, values.password))
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {store.error && (
        <Alert
          message="The username or password is incorrect"
          type="error"
          showIcon
          closable
          style={{ marginBottom: 16 }}
        />
      )}
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgetpassword">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={store.loading}
          style={{ width: "100%" }}
        >
          Log in
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  );
}
