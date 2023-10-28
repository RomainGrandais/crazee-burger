import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../../utils/maths";
import AdminContext from "../../../../../../context/AdminContext";
import DeleteCard from "./DeleteCard";
import AddProductContext from "../../../../../../context/AddProductContext";

export default function Card({
  image,
  price,
  title,
  index,
  onClick,
  isSelected,
}) {
  const infos = useContext(AdminContext);
  const { menu } = useContext(AddProductContext);

  const handleClick = (event) => {
    event.stopPropagation();
    const basketMenuCopy = [...infos.basketMenu];
    const productMenu = structuredClone(
      menu.find((product) => product.id == index)
    );

    if (basketMenuCopy.find((product) => product.id == index) == undefined) {
      if (productMenu) {
        productMenu.quantity += 1;
        basketMenuCopy.push(productMenu);
        infos.setBasketMenu(basketMenuCopy);
      }
    } else {
      basketMenuCopy.find((product) => product.id == index).quantity += 1;
      infos.setBasketMenu(basketMenuCopy);
    }
  };

  return (
    <CardStyled
      image={image}
      isActive={infos.isActive}
      onClick={onClick}
      isSelected={isSelected}
    >
      <div className="card">
        <DeleteCard index={index} isSelected={isSelected} />
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
              <PrimaryButton
                label={"Ajouter"}
                width={"95px"}
                height={"38px"}
                className="primary-button"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${(props) => props.isActive && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  width: 240px;
  height: 330px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    padding: 0px ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.md};
    gap: 15px;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
    background-color: ${theme.colors.white};
    z-index: 0;

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
      padding: 0px ${theme.spacing.xxs} ${theme.spacing.xxs}
        ${theme.spacing.xxs};

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
          color: ${(props) =>
            props.isSelected && props.isActive
              ? theme.colors.white
              : theme.colors.primary};
        }
        .add-button {
          display: flex;
          width: 100%;
          justify-content: end;
          align-items: center;
          z-index: 0;
        }
      }
    }
    ${(props) => props.isSelected && props.isActive && selectedStyle}
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orange};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background-color: ${theme.colors.primary};

  .primary-button {
    button {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    button:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    button:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }
`;
