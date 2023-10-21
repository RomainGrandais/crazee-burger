import React, { useContext, useState } from "react";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import AdminContent from "./AdminContent";
import AdminTab from "./AdminTab";

export default function AdminPannel() {
  const infos = useContext(AdminContext);

  return (
    <AdminPannelStyled>
      <AdminTab />
      {!infos.isDown && <AdminContent AddProduct={infos.isAddProduct} />}
    </AdminPannelStyled>
  );
}

const AdminPannelStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
`;
