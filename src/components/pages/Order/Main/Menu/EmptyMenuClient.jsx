import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <h1>VICTIME DE NOTRE SUCCES ! :D</h1>
      <h2>DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION</h2>
      <h2>A TRES VITE !</h2>{" "}
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1,
  h2 {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }

  h1 {
    font-weight: ${theme.weights.bold};
  }

  h2 {
    font-weight: ${theme.weights.regular};
  }
`;
