import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminButton from "./AdminButton";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminPannel() {
  return (
    <AdminPannelStyled>
      <AdminButton icons={<FiChevronUp />} label={""} />
      <AdminButton icons={<AiOutlinePlus />} label={"Ajouter un produit"} />
      <AdminButton
        icons={<MdModeEditOutline />}
        label={"Modifier un produit"}
      />
    </AdminPannelStyled>
  );
}

const AdminPannelStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 44px;
  z-index: 1;
  padding-left: 70px;
`;
