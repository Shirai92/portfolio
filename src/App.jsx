import React from "react";
import "./App.css";
import Routes from "./routes";
import Nav from "./components/nav";
import RightSideBar from "./components/rightSideBar";
import LeftSideBar from "./components/leftSideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  position: sticky;
  top: 0;
  padding-left: 250px;
  padding-right: 250px;
  background-color: #241e19;
  font-weight: bold;
`;
const StyledMainLayout = styled(Layout)`
  min-height: 100vh;
  background-color: #241e19;
`;

const StyledContent = styled(Layout.Content)`
  background-color: #241e19;
`;

const StyledLeftSider = styled(Layout.Sider)`
  color: white;
  background-color: #241e19;
  p {
    font-size: 20px;
    transform: rotate(270deg);
    margin-top: 40vh;
  }
`;

const StyledRightSider = styled(Layout.Sider)`
  color: white;
  background-color: #241e19;
`;

function App() {
  return (
    <>
      <StyledMainLayout>
        <Router>
          <StyledHeader>
            <Nav />
          </StyledHeader>
          <Layout>
            <StyledLeftSider><LeftSideBar/></StyledLeftSider>
            <StyledContent>
              <Routes />
            </StyledContent>
            <StyledRightSider><RightSideBar/></StyledRightSider>
          </Layout>
        </Router>
      </StyledMainLayout>
    </>
  );
}

export default App;
