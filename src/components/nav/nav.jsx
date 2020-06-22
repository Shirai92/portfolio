import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { Layout } from "antd";

const Nav = () => {
  const { Header } = Layout; 
  return (
    <Header
      style={{
        position: "sticky",
        top: "0",
        paddingLeft: '250px',
        paddingRight: '250px'
      }}
    >
      <Menu mode={"horizontal"} theme={"dark"}>
        <Menu.Item style={{ float: "right" }}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item style={{ float: "right" }}>
          <Link to="/about">About</Link>
        </Menu.Item>

        <Menu.SubMenu key="sub2" style={{ float: "right" }} title={"Projects"}>
          <Menu.Item key={"1"} >
            <Link to="/project1">Project1</Link>
          </Menu.Item>

          <Menu.Item key={"2"}>
            <Link to="/project2">Project2</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item style={{ float: "right" }}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default Nav;
