import React from "react";
import { Button, Form } from "antd";

const LoginButton = () => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </Form.Item>
  );
};

export default LoginButton;
