import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminButton({ icons, label, isSelected }) {
  return (
    <AdminButtonStyled isSelected={isSelected}>
      {icons}
      {label}
    </AdminButtonStyled>
  );
}

const AdminButtonStyled = styled.button`
  font-size: ${theme.fonts.P0};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 22px 0px 22px;
  height: 100%;
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;
  background-color: ${(props) =>
    props.isSelected ? theme.colors.background_dark : theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  gap: 13px;
  font-family: "Open Sans", sans-serif;
  font-weight: ${theme.weights.regular};
  color: ${(props) =>
    props.isSelected ? theme.colors.white : theme.colors.greyDark};
  border: solid 1px
    ${(props) =>
      props.isSelected ? theme.colors.background_dark : theme.colors.greyLight};

  &:hover {
    cursor: pointer;
  }
`;
