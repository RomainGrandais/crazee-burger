import React, { useContext } from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../context/AdminContext";
import AddProductContext from "../../../../../context/AddProductContext";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";

export default function EmptyMenuAdmin() {
  const infosMenu = useContext(AddProductContext);
  const infosAdmin = useContext(AdminContext);

  const handleClick = (event) => {
    event.preventDefault();
    infosMenu.setMenu([...fakeMenu2]);
    infosAdmin.setIsEmpty(false);
  };
  return (
    <EmptyMenuAdminStyled>
      <h1>LE MENU EST VIDE ?</h1>
      <h2>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER</h2>
      <div onClick={handleClick}>
        <PrimaryButton label={"Générer de nouveaux produits"} />
      </div>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1,
  h2 {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }

  h1 {
    font-weight: ${theme.weights.bold};
  }

  h2 {
    font-weight: ${theme.weights.regular};
  }
`;
