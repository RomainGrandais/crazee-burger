import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketTotal({ total }) {
  return (
    <BasketTotalStyled>
      <span className="text">Total</span>
      <span className="price">{total}</span>
    </BasketTotalStyled>
  );
}

const BasketTotalStyled = styled.div`
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
`;
