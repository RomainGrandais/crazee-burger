import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketPanel() {
  return (
    <BasketPanelStyled>
      <div className="total">
        <span className="text">Total</span>
        <span className="price">0,00$</span>
      </div>
      <div className="basket">
        <span className="emptyBasket">VOTRE COMMANDE EST VIDE</span>
      </div>
      <div className="footer">CODE ❤️ AVEC ET REACT</div>
    </BasketPanelStyled>
  );
}

const BasketPanelStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  font-family: "Amatic SC", sans-serif;

  .total {
    display: flex;
    justify-content: space-between;
    padding: 0px ${theme.spacing.sm} 0px ${theme.spacing.sm};
    align-items: center;
    height: 10%;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    .text {
      font-weight: ${theme.weights.bold};
    }
    .price {
      font-weight: ${theme.weights.regular};
    }
  }

  .basket {
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
  }

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
