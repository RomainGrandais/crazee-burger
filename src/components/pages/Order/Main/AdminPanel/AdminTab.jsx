import React, { useContext, useState } from "react";
import styled from "styled-components";
import AdminButton from "./AdminButton";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import AdminContext from "../../../../../context/AdminContext";

export default function AdminTab() {
  const infos = useContext(AdminContext);

  const handleClickDown = () => {
    infos.setIsDown(!infos.isDown);
  };

  const handleClickAddProduct = () => {
    infos.setAddProduct(true);
    infos.setModifProduct(false);
    infos.setIsDown(false);
  };

  const handleClickModifProduct = () => {
    infos.setAddProduct(false);
    infos.setModifProduct(true);
    infos.setIsDown(false);
  };
  return (
    <AdminTabStyled>
      <div className="up" onClick={handleClickDown}>
        <AdminButton
          icons={infos.isDown ? <FiChevronUp /> : <FiChevronDown />}
          label={""}
          isSelected={infos.isDown}
        />
      </div>
      <div className="addProcudct" onClick={handleClickAddProduct}>
        <AdminButton
          icons={<AiOutlinePlus />}
          label={"Ajouter un produit"}
          isSelected={infos.isAddProduct}
        />
      </div>
      <div className="modifProduct" onClick={handleClickModifProduct}>
        <AdminButton
          icons={<MdModeEditOutline />}
          label={"Modifier un produit"}
          isSelected={infos.isModifProduct}
        />
      </div>
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  position: relative;
  left: 5%;
`;
