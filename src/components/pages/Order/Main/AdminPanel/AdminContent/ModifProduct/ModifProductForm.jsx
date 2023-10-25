import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../../theme";
import ModifProductNotSelect from "./ModifProductNotSelect";
import AdminContext from "../../../../../../../context/AdminContext";
import AddProductContext from "../../../../../../../context/AddProductContext";
import { FaHamburger } from "react-icons/fa";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";

export default function ModifProductForm() {
  const { handleEdit } = useContext(AddProductContext);
  const { productSelected, setProductSelected } = useContext(AdminContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  const handleError = (event) => {
    event.target.style.display = "none";
  };

  return (
    <ModifProductFormStyled>
      {/* <ModifProductNotSelect /> */}
      <div className="image-input">
        <label>
          {!productSelected.imageSource ? (
            "Aucune image"
          ) : (
            <img
              src={productSelected.imageSource}
              alt=""
              onError={handleError}
            />
          )}
        </label>
      </div>
      <div className="text-input">
        <TextInput
          value={productSelected.title}
          handleChange={handleChange}
          Icon={<FaHamburger />}
          placeholder={"Nom du produit (ex: Super Burger)"}
          name="title"
        />
        <TextInput
          value={productSelected.imageSource}
          handleChange={handleChange}
          Icon={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
          name="imageSource"
        />
        <TextInput
          value={productSelected.price}
          handleChange={handleChange}
          Icon={<MdOutlineEuroSymbol />}
          placeholder={"Prix"}
          name="price"
        />
        <span>
          Cliquer sur un produit du menu pour le modifier en temps réel
        </span>
      </div>
    </ModifProductFormStyled>
  );
}

const ModifProductFormStyled = styled.div`
  margin: 30px 0px 0px 70px;
  width: 80%;
  height: 65%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;

  .image-input {
    border: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greySemiDark};
    border-radius: 5px;
    width: 215px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
    }
  }
  .text-input {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      font-family: "Open Sans", sans-serif;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.SM};
      font-weight: ${theme.weights.regular};
    }
  }
`;
