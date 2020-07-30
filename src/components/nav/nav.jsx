import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";

const Test = styled(Menu)`
  &.ant-menu {
    background-color: #241e19;
  }

  .ant-menu-item {
    float: right;
    background-color: transparent;

    a {
      color: white;
    }

    :hover {
      a {
        color: red;
      }
    }
  }

  .ant-menu-submenu {
    background-color: transparent;
    height: 78px;
  }

  &.ant-menu.ant-menu-dark {
    .ant-menu-item-selected {
      background-color: green;
      a {
        color: red;
      }
    }
  }
`;

const Test2 = styled(Menu.SubMenu)`
  float: right;
  .ant-menu-submenu-title {
    color: white;
  }

  &.ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      color: green;
    }
  }
`;

const Nav = () => {
  return (
    <Test mode={"horizontal"} theme="dark">
      <Menu.Item>
        <Link to="/">
          <p>Home</p>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/panelAdmin">
          <p>Panel Admin</p>
        </Link>
      </Menu.Item>

      <Test2 key="sub2" title="Projects">
        <Menu.Item key={"1"}>
          <Link to="/project1">Project1</Link>
        </Menu.Item>

        <Menu.Item key={"2"}>
          <Link to="/project3">Project3</Link>
        </Menu.Item>

        <Menu.Item key={"3"}>
          <Link to="/project4">Project4</Link>
        </Menu.Item>
      </Test2>

      <Menu.Item>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </Menu.Item>
    </Test>
  );
};
export default Nav;
