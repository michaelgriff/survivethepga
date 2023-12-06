import React from "react";
import styled from "styled-components";
import image from "../images/logo.png";

const LogoWrapper = styled.div`
  margin: 20px 0;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 50%;

  @media screen and (max-width: 660px) {
    width: 70%;
  }
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src={image} alt="Logo" />
    </LogoWrapper>
  );
}

export default Logo;
