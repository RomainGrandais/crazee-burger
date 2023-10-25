import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import AdminContext from "../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../enums/product";

export default function OrderPage() {
  const params = useParams();
  const [isActive, setIsActive] = useState(false);
  const [isDown, setIsDown] = useState(true);
  const [isAddProduct, setAddProduct] = useState(true);
  const [isModifProduct, setModifProduct] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const adminContextValue = {
    isActive,
    setIsActive,
    isDown,
    setIsDown,
    isAddProduct,
    setAddProduct,
    isModifProduct,
    setModifProduct,
    isEmpty,
    setIsEmpty,
    productSelected,
    setProductSelected,
  };

  return (
    <OrderPageStyled>
      <div className="background"></div>
      <div className="order-content">
        <AdminContext.Provider value={adminContextValue}>
          <NavBar username={params.username} />
          <Main />
        </AdminContext.Provider>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  position: relative;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.primary};
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    z-index: -1;
  }

  .order-content {
    height: 95vh;
    padding: 15px 56px 15px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
