import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Input({ prenom, handleChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon}
      <input
        type="text"
        value={prenom}
        onChange={handleChange}
        {...extraProps}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  gap: 12px;

  input {
    border: none;
    background-color: ${theme.colors.background_white};
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
