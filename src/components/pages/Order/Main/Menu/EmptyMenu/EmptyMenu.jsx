import React, { useContext } from "react";
import AdminContext from "../../../../../../context/AdminContext";
import styled from "styled-components";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

export default function EmptyMenu() {
  const infos = useContext(AdminContext);

  return (
    <EmptyMenuStyled>
      {infos.isActive ? <EmptyMenuAdmin /> : <EmptyMenuClient />}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
