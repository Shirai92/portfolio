import React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const IconsWrapper = styled.div`
  font-size: 50px;
  a {
    color: white;
  }
`;

const RightSidebar = () => {
  return (
    <IconsWrapper>
      <a href="https://www.instagram.com/shirai92/">
        <InstagramOutlined />
      </a>
      <a href="https://www.facebook.com/Shiraii">
        <FacebookOutlined />
      </a>
      <a href="https://github.com/Shirai92">
        <GithubOutlined />
      </a>
      <a href="https://www.linkedin.com/in/mateusz-skowyra-2b0008188/">
        <LinkedinOutlined />
      </a>
    </IconsWrapper>
  );
};
export default RightSidebar;
