import React from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import AdminPannel from "./AdminPannel/AdminPannel";

export default function Main() {
  return (
    <MainStyled>
      <div className="menu">
        <div className="basket"></div>
        <Menu />
      </div>
      <AdminPannel />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${theme.colors.background_white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  box-shadow: 0px ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xs}
    rgba(0, 0, 0, 0.2) inset;
  height: 85vh;

  .menu {
    display: flex;
    z-index: 0;
  }
`;
