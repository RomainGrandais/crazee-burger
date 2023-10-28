import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketEmpty() {
  return (
    <BasketEmptyStyled>
      <span className="emptyBasket">VOTRE COMMANDE EST VIDE</span>
    </BasketEmptyStyled>
  );
}

const BasketEmptyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  box-shadow: ${theme.shadows.basket};
  background-color: ${theme.colors.background_white};
  .emptyBasket {
    font-weight: ${theme.weights.regular};

    font-size: ${theme.fonts.P3};
  }
`;
