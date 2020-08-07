import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
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
        color: #ab5354;
      }
    }
  }

  .ant-menu-submenu {
    background-color: transparent;
    height: 78px;
  }

  &.ant-menu.ant-menu-dark {
    .ant-menu-item-selected {
      background-color: transparent;
      a {
        color: #ab5354;
      }
    }
  }
`;

const StyledSubMenu = styled(Menu.SubMenu)`
  float: right;
  .ant-menu-submenu-title {
    color: white;
  }

  &.ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      color: #ab5354;
    }
  }
`;

const Nav = () => {
  return (
    <StyledMenu mode={"horizontal"} theme="dark">
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

      <StyledSubMenu key="sub2" title="Projects">
        <Menu.Item key={"1"}>
          <Link to="/project1">Project1</Link>
        </Menu.Item>

        <Menu.Item key={"2"}>
          <Link to="/project3">Project3</Link>
        </Menu.Item>

        <Menu.Item key={"3"}>
          <Link to="/project4">Project4</Link>
        </Menu.Item>
      </StyledSubMenu>

      <Menu.Item>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </Menu.Item>
    </StyledMenu>
  );
};
export default Nav;
