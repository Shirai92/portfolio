import React from "react";

import styled from "styled-components";

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
        augue, suscipit \n <br/>
        a, scelerisque sed, lacinia in, mi. Cras vel lorem.
      </AboutMeText>
    </div>
  );
};
export default Home;
