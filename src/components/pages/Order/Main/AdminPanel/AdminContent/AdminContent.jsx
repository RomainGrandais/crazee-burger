import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import AddProductForm from "./AddProductForm";
import ModifProductForm from "./ModifProduct/ModifProductForm";

export default function AdminContent({ AddProduct }) {
  return (
    <AdminContentStyled>
      {AddProduct ? <AddProductForm /> : <ModifProductForm />}
    </AdminContentStyled>
  );
}

const AdminContentStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 250px;
  background-color: ${theme.colors.white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  border: solid 1px ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
