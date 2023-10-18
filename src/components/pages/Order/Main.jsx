import React from "react";
import { theme } from "../../../theme";
import styled from "styled-components";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket"></div>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.background_white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  box-shadow: 0px ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xs}
    rgba(0, 0, 0, 0.2) inset;
  height: 85vh;
`;
