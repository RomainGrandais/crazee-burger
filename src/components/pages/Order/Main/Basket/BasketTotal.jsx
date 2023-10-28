import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../context/AdminContext";
import { formatPrice } from "../../../../utils/maths";

export default function BasketTotal() {
  const { basketMenu } = useContext(AdminContext);
  const total = basketMenu.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <BasketTotalStyled>
      <span className="text">Total</span>
      <span className="price">{formatPrice(total)}</span>
    </BasketTotalStyled>
  );
}

const BasketTotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px ${theme.spacing.sm} 0px ${theme.spacing.sm};
  align-items: center;
  height: 10%;
  min-height: 10%;
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
