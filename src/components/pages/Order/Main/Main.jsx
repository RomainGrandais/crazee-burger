import React, { useContext, useState } from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminContext from "../../../../context/AdminContext";
import AddProductContext from "../../../../context/AddProductContext";

export default function Main() {
  const info = useContext(AdminContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [menu, setMenu] = useState([]);

  const addProductContextValue = {
    image,
    setImage,
    title,
    setTitle,
    price,
    setPrice,
    menu,
    setMenu,
  };

  return (
    <MainStyled>
      {/* <div className="basket">cazvavae</div> */}
      <div className="menu-admin">
        <AddProductContext.Provider value={addProductContextValue}>
          <Menu />
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
