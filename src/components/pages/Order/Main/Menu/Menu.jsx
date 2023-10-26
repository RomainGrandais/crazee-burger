import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Cards/Card";
import { theme } from "../../../../../theme";
import AddProductContext from "../../../../../context/AddProductContext";
import commingSoon from "/public/images/coming-soon.png";
import AdminContext from "../../../../../context/AdminContext";

export default function Menu() {
  const infos = useContext(AdminContext);
  const infosMenu = useContext(AddProductContext);

  const handleClick = async (idCard) => {
    const selectedProcduct = infosMenu.menu.find(
      (product) => product.id === idCard
    );
    await infos.setProductSelected(selectedProcduct);
    await infos.setAddProduct(false);
    await infos.setModifProduct(true);
    await infos.setIsDown(false);
    infos.titleEditBox.current.focus();
  };

  return (
    <MenuStyled>
      <div className="menu">
        <div className="grid">
          {[...infosMenu.menu].map((item, index) => (
            <Card
              image={item.imageSource ? item.imageSource : commingSoon}
              price={item.price ? item.price : "0,00€"}
              title={item.title}
              index={item.id}
              onClick={() => handleClick(item.id)}
              isSelected={item.id === infos.productSelected.id}
            />
          ))}
        </div>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: ${theme.spacing.md} 0px ${theme.spacing.md} 0px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  .grid {
    display: grid;
    grid-gap: ${theme.spacing.lg} ${theme.spacing.xl};
    grid-template-columns: repeat(4, 1fr);
  }
`;
