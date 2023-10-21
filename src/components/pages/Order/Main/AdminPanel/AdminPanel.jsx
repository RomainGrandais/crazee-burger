import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminButton from "./AdminButton";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import AdminContext from "../../../../../context/AdminContext";
import AdminContent from "./AdminContent";

export default function AdminPannel() {
  const infos = useContext(AdminContext);

  const handleClickDown = () => {
    infos.setIsDown(!infos.isDown);
  };

  const handleClickAddProduct = () => {
    infos.setAddProduct(true);
    infos.setModifProduct(false);
  };

  const handleClickModifProduct = () => {
    infos.setAddProduct(false);
    infos.setModifProduct(true);
  };

  return (
    <AdminPannelStyled>
      <div className="nav-admin">
        <div className="up" onClick={handleClickDown}>
          {infos.isDown ? (
            <AdminButton
              icons={<FiChevronUp />}
              label={""}
              isSelected={infos.isDown}
            />
          ) : (
            <AdminButton
              icons={<FiChevronDown />}
              label={""}
              isSelected={infos.isDown}
            />
          )}
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
      </div>
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

  .nav-admin {
    height: 44px;
    padding-left: 70px;
    display: flex;
    flex-direction: row;
  }
`;
