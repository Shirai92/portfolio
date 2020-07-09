import React from "react";
import LoginInput from "./loginInput";
import LoginButton from "./loginButton";
import PasswordInput from "./passwordInput";
import { Form } from "antd";
import apiCall from "../../../fakeLogin";
import { useHistory } from "react-router-dom";
import {Modal} from "antd";

const Project4 = (props) => {
  console.log(props)
  const history = useHistory();

  function login() {
    props.setisAutheticated(true);
    window.localStorage.setItem("isAutheticatedIn", "true");
  }

  function errorModal() {
    Modal.error({
      title: 'Wrong Username or Password'
      
    });
  }

  const onFinish = (values) => {
    apiCall(values.username, values.password)
      .then((response) => {
        login();
        history.push(response.redirect);
        console.log(response);
      })
      .catch((error) => {
        errorModal();
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
      onFinishFailed={() => console.log('fail')}
    >
      <LoginInput />
      <PasswordInput />
      <LoginButton />
    </Form>
  );
};
export default Project4;
