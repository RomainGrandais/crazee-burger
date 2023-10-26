import React, { useContext } from "react";
import ModifProductForm from "./ModifProductForm";
import ModifProductNotSelect from "./ModifProductNotSelect";
import AdminContext from "../../../../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import styled from "styled-components";

export default function EditPanel() {
  const infos = useContext(AdminContext);
  const hasAlreadyClicked = infos.productSelected !== EMPTY_PRODUCT;
  return (
    <EditPanelStyled>
      {hasAlreadyClicked ? <ModifProductForm /> : <ModifProductNotSelect />}
    </EditPanelStyled>
  );
}

const EditPanelStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
