import React, { useContext } from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../../theme";
import ModifProductNotSelect from "./ModifProductNotSelect";
import AdminContext from "../../../../../../../context/AdminContext";
export default function ModifProductForm() {
  const { productSelected } = useContext(AdminContext);

  return (
    <ModifProductFormStyled>
      <ModifProductNotSelect />
    </ModifProductFormStyled>
  );
}

const ModifProductFormStyled = styled.div`
  display: flex;
  height: 100%;
`;
