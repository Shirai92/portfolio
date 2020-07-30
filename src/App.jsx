import React from "react";
import "./App.css";
import Routes from "./routes";
import Nav from "./components/nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";

function App() {
  const { Content, Header } = Layout;

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "#241E19",
        }}
      >
        <Router>
          {/* <Sider>Sider</Sider>
          <Sider>Sider2</Sider> */}
          <Header
            style={{
              position: "sticky",
              top: "0",
              paddingLeft: "250px",
              paddingRight: "250px",
              backgroundColor: "#241E19",
            }}
          >
            <Nav />
          </Header>

          <Content
            style={{
              marginLeft: "250px",
              marginRight: "250px",
              backgroundColor: "#241E19",
            }}
          >
            <Routes />
          </Content>
        </Router>
      </Layout>
    </>
  );
}

export default App;
