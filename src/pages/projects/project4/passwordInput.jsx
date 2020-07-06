import React from "react";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

const PasswordInput = () => {
  return (
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
  );
};

export default PasswordInput;
