import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label }) {
  return (
    <PrimaryButtonStyled>
      <button type="submit">
        <span>{label}</span>
      </button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 18px 24px;
    gap: 12px;
    color: ${theme.colors.background_white};
    background-color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
    border-radius: ${theme.borderRadius.round};
    width: 400px;
    height: 53px;
    border: 1px solid ${theme.colors.primary};
  }
  button:active {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background_white};
  }
`;
