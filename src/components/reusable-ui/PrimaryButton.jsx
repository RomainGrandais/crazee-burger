import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({
  label,
  width,
  height,
  color = theme.colors.primary,
}) {
  return (
    <PrimaryButtonStyled width={width} height={height} color={color}>
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
    background-color: ${(props) => props.color};
    font-weight: ${theme.weights.bold};
    border-radius: ${theme.borderRadius.round};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.color};
  }
  button:hover {
    cursor: pointer;
  }
  button:active {
    color: ${(props) => props.color};
    background-color: ${theme.colors.background_white};
  }
`;
