import React, { useContext } from "react";
import styled, { css } from "styled-components";
import AddProductContext from "../../../../../../context/AddProductContext";
import { theme } from "../../../../../../theme";
import AdminContext from "../../../../../../context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function DeleteCard({ index, isSelected }) {
  const infosMenu = useContext(AddProductContext);
  const infos = useContext(AdminContext);

  const handleClickDelete = (event) => {
    event.stopPropagation();
    const menuCopy = [...infosMenu.menu];
    const menuBasketCopy = [...infos.basketMenu];

    infosMenu.setMenu(menuCopy.filter((menuCopy) => menuCopy.id !== index));
    infos.setBasketMenu(
      menuBasketCopy.filter((menuBasketCopy) => menuBasketCopy.id !== index)
    );
    if (infosMenu.menu.length == 1) {
      infos.setIsEmpty(true);
    }
    if (index == infos.productSelected.id) {
      infos.setProductSelected(EMPTY_PRODUCT);
    }
  };
  return (
    <DeleteCardStyled isActive={infos.isActive} isSelected={isSelected}>
      <span className="croix" onClick={handleClickDelete}>
        x
      </span>
    </DeleteCardStyled>
  );
}

const DeleteCardStyled = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0px 0px 0px;
  z-index: 0;
  .croix {
    display: ${(props) => (props.isActive ? "flex" : "none")};
    justify-content: center;
    align-items: flex-end;
    color: white;
    background-color: ${theme.colors.primary};
    width: 20px;
    height: 20px;
    border-radius: 15px;
    z-index: 0;
  }
  .croix:hover {
    background-color: red;
    cursor: pointer;
  }

  ${(props) => props.isSelected && props.isActive && deleteSelectedStyle}
`;

const deleteSelectedStyle = css`
  .croix {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  .croix:active {
    background-color: ${theme.colors.white};
  }
`;
