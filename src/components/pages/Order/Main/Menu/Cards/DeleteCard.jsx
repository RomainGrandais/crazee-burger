import React, { useContext } from "react";
import styled from "styled-components";
import AddProductContext from "../../../../../../context/AddProductContext";
import { theme } from "../../../../../../theme";
import AdminContext from "../../../../../../context/AdminContext";

export default function DeleteCard({ index }) {
  const infosMenu = useContext(AddProductContext);
  const infos = useContext(AdminContext);

  const handleClickDelete = () => {
    const menuCopy = [...infosMenu.menu];

    infosMenu.setMenu(menuCopy.filter((menuCopy) => menuCopy.id !== index));
    if (infosMenu.menu.length == 1) {
      infos.setIsEmpty(true);
    }
  };
  return (
    <DeleteCardStyled isActive={infos.isActive}>
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
`;
