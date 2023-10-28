import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTotal from "./BasketTotal";
import BasketEmpty from "./BasketEmpty";

export default function BasketPanel() {
  return (
    <BasketPanelStyled>
      <BasketTotal total={"0.00$"} />
      <BasketEmpty />
      <div className="footer">CODE ❤️ AVEC ET REACT</div>
    </BasketPanelStyled>
  );
}

const BasketPanelStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  font-family: "Amatic SC", sans-serif;

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    background-color: ${theme.colors.background_dark};
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.white};
    border-radius: 0px 0px 0px ${theme.borderRadius.extraRound};
  }
`;
