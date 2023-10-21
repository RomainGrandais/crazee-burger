import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminButton({ icons, label }) {
  return (
    <AdminButtonStyled>
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
  border: none;
  height: 100%;
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  gap: 13px;
  font-family: "Open Sans", sans-serif;
  font-weight: ${theme.weights.regular};
  color: ${theme.colors.greySemiDark};
`;
