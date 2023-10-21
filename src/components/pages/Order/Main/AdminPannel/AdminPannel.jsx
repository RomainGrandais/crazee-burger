import React from "react";
import styled from "styled-components";

export default function AdminPannel() {
  return <AdminPannelStyled></AdminPannelStyled>;
}

const AdminPannelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;
  z-index: 1;
`;
