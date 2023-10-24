import React from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../../theme";
import ModifProductNotSelect from "./ModifProductNotSelect";
export default function ModifProductForm() {
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
