import React from "react";
import LoginInput from "./loginInput";
import LoginButton from "./loginButton";
import PasswordInput from "./passwordInput";
import { Form } from "antd";
import apiCall from "../../../fakeLogin";

const Project4 = (props) => {
  const onFinish = (values) => {
    apiCall(values.username, values.password)
      .then((response) => {
        props.history.push(response.redirect);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Received values of form: ", values);
  };

  const layout = {
    wrapperCol: {
      span: 5,
      offset: 9,
    },
  };

  return (
    <Form
      {...layout}
      // style={{
      //   width: "300px",
      // }}
      name="normal_login"
      className="login-form"
      size="large"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <LoginInput />
      <PasswordInput />
      <LoginButton />
    </Form>
  );
};
export default Project4;
