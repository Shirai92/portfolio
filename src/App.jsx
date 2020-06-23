import React from "react";
import "./App.css";
import Routes from "./routes";
import Nav from "./components/nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

function App() {
  const { Content } = Layout;
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Router>
          <Nav />

          <Content
            style={{
              marginLeft: "250px",
              marginRight: "250px",
              backgroundColor: "#F0F2F5",
            }}
          >
            <Routes></Routes>
          </Content>
        </Router>
      </Layout>
    </>
  );
}

export default App;
