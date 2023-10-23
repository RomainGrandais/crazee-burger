import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";
import AdminContext from "../../../../../context/AdminContext";
import AddProductContext from "../../../../../context/AddProductContext";

export default function Card({ image, price, title, index }) {
  const infos = useContext(AdminContext);
  const infosMenu = useContext(AddProductContext);

  const handleClick = () => {
    const menuCopy = [...infosMenu.menu];

    infosMenu.setMenu(menuCopy.filter((menuCopy) => menuCopy.id !== index));
    console.log(menuCopy);
  };

  return (
    <CardStyled image={image} isActive={infos.isActive}>
      <div className="test">
        <span className="croix" onClick={handleClick}>
          x
        </span>
      </div>
      <div className="img"></div>
      <div className="infotext">
        <div className="title-span">
          <h1>
            <span>{title}</span>
          </h1>
        </div>
        <div className="bottom-info">
          <h2>{formatPrice(price)}</h2>
          <div className="add-button">
            <PrimaryButton label={"Ajouter"} width={"95px"} height={"38px"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 0px ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.md};
  gap: 15px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: ${theme.colors.white};

  .test {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0px 0px 0px;

    .croix {
      display: ${(props) => (props.isActive ? "flex" : "none")};
      justify-content: center;
      align-items: flex-end;
      color: white;
      background-color: ${theme.colors.primary};
      width: 20px;
      height: 20px;
      border-radius: 15px;
    }
    .croix:hover {
      background-color: red;
      cursor: pointer;
    }
  }

  .img {
    width: 200px;
    height: 145px;
    content: "";
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .infotext {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 110px;
    gap: 10px;
    padding: 0px ${theme.spacing.xxs} ${theme.spacing.xxs} ${theme.spacing.xxs};

    .title-span span {
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      display: block;
      overflow: hidden;
    }
    h1 {
      font-size: ${theme.fonts.P5};
      display: block;
    }

    .bottom-info {
      display: flex;
      flex-direction: row;
      height: 100%;

      h2 {
        display: flex;
        align-items: center;

        font-family: "Open Sans", sans-serif;
        padding-right: ${theme.spacing.xl};
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.regular};
        color: ${theme.colors.primary};
      }
      .add-button {
        display: flex;
        width: 100%;
        justify-content: end;
        align-items: center;
      }
    }
  }
`;
