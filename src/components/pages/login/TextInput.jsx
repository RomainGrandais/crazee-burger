import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function TextInput({
  prenom,
  handleChange,
  Icon,
  ...extraProps
}) {
  return (
    <TextInputStyled>
      {Icon}
      <input
        type="text"
        value={prenom}
        onChange={handleChange}
        {...extraProps}
      />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  gap: 12px;

  input {
    border: none;
    background-color: ${theme.colors.background_white};
    width: 100%;
  }

  .icon {
    font-size: ${theme.fonts.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }
  &::placeholder {
    background: ${theme.colors.background_white};
    color: ${theme.colors.greyLight};
  }
`;
