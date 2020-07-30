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
const NavTitle = styled.h1`
font-size: 80px;
color: white;
`;
const WelcomeText = styled.p`
font-size: 20px;
color: #ab5354;
`;

const Name = styled.h2`
font-size: 50px;
color: white;
`;

const AboutMeText = styled.p`
font-size: 20px;
color: #ab5354;
`;

const Home = () => {


  return (
    <div>
      <NavTitle>Portoflio</NavTitle>
      <WelcomeText>Hello, I'm</WelcomeText>
      <Name>Mateusz Skowyra</Name>
      <AboutMeText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
        augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
        Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.
        Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit
        interdum, dui ligula ultricies purus, sed posuere libero dui id orci.
        Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel
        tempus metus leo non est. Etiam sit amet lectus quis est congue mollis.
        Phasellus congue lacus eget neque. Phasellus ornare, ante vitae
        consectetuer consequat, purus sapien ultricies dolor, et mollis pede
        metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna
        at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec
        erat.{" "}
      </AboutMeText>
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
    </div>
  );
};
export default Home;
