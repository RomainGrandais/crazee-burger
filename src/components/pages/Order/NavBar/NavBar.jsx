import React from "react";
import Logo from "../../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../../theme";
import NavBarRightSide from "./NavBarRightSide";

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <div
        onClick={() => window.location.reload(false)}
        style={{ cursor: "pointer" }}
      >
        <Logo />
      </div>
      <NavBarRightSide username={username} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  padding: 0px 70px 0px ${theme.spacing.md};
  height: 12vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
