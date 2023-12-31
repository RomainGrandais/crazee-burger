import React, { useContext, useRef, useState } from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminContext from "../../../../context/AdminContext";
import AddProductContext from "../../../../context/AddProductContext";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import EmptyMenu from "./Menu/EmptyMenu/EmptyMenu";
import BasketPanel from "./Basket/BasketPanel";

export default function Main() {
  const info = useContext(AdminContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [menu, setMenu] = useState([...fakeMenu2]);
  const [id, setId] = useState(null);

  const handleEdit = (productBeingEdited) => {
    const menuCopy = structuredClone(menu);
    const menuBasketCopy = structuredClone(info.basketMenu);
    const indexOfProductToEdit = menuCopy.findIndex(
      (product) => product.id == productBeingEdited.id
    );
    const indexOfProductBasketToEdit = menuBasketCopy.findIndex(
      (product) => product.id == productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;
    if (!indexOfProductBasketToEdit) {
      const quantity = menuBasketCopy[indexOfProductBasketToEdit].quantity;
      menuBasketCopy[indexOfProductBasketToEdit] = productBeingEdited;
      menuBasketCopy[indexOfProductBasketToEdit].quantity = quantity;
      info.setBasketMenu(menuBasketCopy);
    }
    setMenu(menuCopy);
  };

  const addProductContextValue = {
    image,
    setImage,
    title,
    setTitle,
    price,
    setPrice,
    menu,
    setMenu,
    id,
    setId,
    handleEdit,
  };

  return (
    <MainStyled>
      <BasketPanel />
      <div className="menu-admin">
        <AddProductContext.Provider value={addProductContextValue}>
          {info.isEmpty ? <EmptyMenu /> : <Menu />}
          {info.isActive && <AdminPanel />}
        </AddProductContext.Provider>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${theme.colors.background_white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  height: 85vh;
  box-shadow: ${theme.shadows.strong};
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};

  .menu-admin {
    display: flex;
    z-index: 0;
    width: 100%;
  }
`;
