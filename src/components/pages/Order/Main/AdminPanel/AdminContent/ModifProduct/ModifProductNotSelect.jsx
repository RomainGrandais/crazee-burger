import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function ModifProductNotSelect() {
  return (
    <ModifProductNotSelectStyled>
      <h1>CLIQUE SUR LE PRODUIT POUR LE MODIFIER</h1>
      <div className="icon">
        <HiCursorClick />
      </div>
    </ModifProductNotSelectStyled>
  );
}

const ModifProductNotSelectStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 70px;
  color: ${theme.colors.greyBlue};
  gap: 9px;

  h1 {
    font-size: ${theme.fonts.P3};
  }
  .icon {
    font-size: ${theme.fonts.P3};
  }
`;
