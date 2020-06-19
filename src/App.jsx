import React from "react";
import "./App.css";
import Routes from "./routes";
import Nav from "./components/nav";
import { BrowserRouter as Router } from "react-router-dom";
import Foter from "./components/footer";
import { Layout } from "antd";

function App() {
  const { Content } = Layout;
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Router>
          <Nav />
          <Routes />
        </Router>
        <Content />
        <Foter />
      </Layout>
    </>
  );
}

export default App;
