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
  const [isDown, setIsDown] = useState(true);
  const [isAddProduct, setAddProduct] = useState(true);
  const [isModifProduct, setModifProduct] = useState(false);

  const handleClickDown = () => {
    setIsDown(!isDown);
  };

  const handleClickAddProduct = () => {
    setAddProduct(true);
    setModifProduct(false);
  };

  const handleClickModifProduct = () => {
    setAddProduct(false);
    setModifProduct(true);
  };

  return (
    <AdminPannelStyled>
      <div className="nav-admin">
        <div className="up" onClick={handleClickDown}>
          {isDown ? (
            <AdminButton
              icons={<FiChevronUp />}
              label={""}
              isSelected={isDown}
            />
          ) : (
            <AdminButton
              icons={<FiChevronDown />}
              label={""}
              isSelected={isDown}
            />
          )}
        </div>
        <div className="addProcudct" onClick={handleClickAddProduct}>
          <AdminButton
            icons={<AiOutlinePlus />}
            label={"Ajouter un produit"}
            isSelected={isAddProduct}
          />
        </div>
        <div className="modifProduct" onClick={handleClickModifProduct}>
          <AdminButton
            icons={<MdModeEditOutline />}
            label={"Modifier un produit"}
            isSelected={isModifProduct}
          />
        </div>
      </div>
      {!isDown && <AdminContent AddProduct={isAddProduct} />}
    </AdminPannelStyled>
  );
}

const AdminPannelStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
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
