import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminContent({ AddProduct }) {
  return (
    <AdminContentStyled>
      {AddProduct ? "Ajouter un produit" : "Modifier un Produit"}
    </AdminContentStyled>
  );
}

const AdminContentStyled = styled.div`
  box-sizing: border-box;
  height: 250px;
  background-color: ${theme.colors.white};
  border-radius: 0px 0px 15px 15px;
  border: solid 1px ${theme.colors.greyLight};
`;
