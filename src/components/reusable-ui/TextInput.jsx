import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const TextInput = React.forwardRef(
  (
    {
      value,
      handleChange,
      Icon,
      width = "600px",
      height = "2px",
      ...extraProps
    },
    ref
  ) => {
    return (
      <TextInputStyled width={width} height={height}>
        <div className="icon">{Icon}</div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          ref={ref}
          {...extraProps}
        />
      </TextInputStyled>
    );
  }
);

export default TextInput;

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
