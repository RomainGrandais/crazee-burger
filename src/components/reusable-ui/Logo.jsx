import React from "react";
import styled from "styled-components";
import burger from "/F03_logo-orange.png";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <div className="logo">
        <h1>CRAZEE</h1>
        <img src={burger} alt="Logo burger" />
        <h1>BURGER</h1>
      </div>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
    padding-bottom: 20px;
    gap: ${theme.spacing.xs};
    font-size: ${theme.fonts.P6};
    color: ${theme.colors.primary_burger};
  }
  .logo img {
    width: 15%;
    height: 15%;
  }
`;
