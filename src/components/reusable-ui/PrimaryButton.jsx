import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, width, height }) {
  return (
    <PrimaryButtonStyled width={width} height={height}>
      <button type="submit">
        <span>{label}</span>
      </button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 24px;
    gap: 12px;
    color: ${theme.colors.background_white};
    background-color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
    border-radius: ${theme.borderRadius.round};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: 1px solid ${theme.colors.primary};
  }
  button:active {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background_white};
  }
`;
