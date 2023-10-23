import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  value,
  handleChange,
  Icon,
  width = "600px",
  height = "2px",
  ...extraProps
}) {
  return (
    <TextInputStyled width={width} height={height}>
      <div className="icon">{Icon}</div>
      <input
        type="text"
        value={value}
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
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  input {
    border: none;
    outline: none;
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
