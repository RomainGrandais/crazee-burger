import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import { TbTrashXFilled } from "react-icons/tb";
import AdminContext from "../../../../../context/AdminContext";

export default function BasketCard({
  image,
  price,
  title,
  quantity,
  index,
  onClick,
  isSelected,
}) {
  const infos = useContext(AdminContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = () => {
    const menuBasketCopy = [...infos.basketMenu];
    infos.setBasketMenu(
      menuBasketCopy.filter((menuBasketCopy) => menuBasketCopy.id !== index)
    );
  };

  return (
    <BasketCardStyled
      image={image}
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      isSelected={isSelected}
      isActive={infos.isActive}
    >
      <div className="img"></div>
      <div className="text-infos">
        <div className="title-price">
          <h1>
            <span>{title}</span>
          </h1>
          <h2>{formatPrice(price)}</h2>
        </div>
        <div className="quantity" onClick={handleDelete}>
          {isHovered ? (
            <TbTrashXFilled />
          ) : (
            <span className="number">x{quantity}</span>
          )}
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
  min-height: 85px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;
  padding-left: 5px;
  ${(props) => props.isActive && "cursor: pointer"};

  .img {
    width: 85px;
    height: 70px;
    content: "";
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .text-infos {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    align-items: center;
    gap: 10px;
    .title-price {
      display: flex;
      flex-direction: column;
      gap: 5px;

      width: 120px;
      h1 {
        font-weight: ${theme.weights.bold};
        font-size: ${theme.fonts.P3};
      }
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      }
      h2 {
        font-weight: ${theme.weights.regular};
        font-size: ${theme.fonts.P0};
        font-family: "Open Sans", sans-serif;
        color: ${(props) =>
          props.isSelected && props.isActive
            ? theme.colors.white
            : theme.colors.primary};
      }
    }
    .quantity {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      background-color: ${(props) => props.isHovered && theme.colors.red};
      border-radius: 0px 5px 5px 0px;
      span {
        font-weight: ${theme.weights.regular};
        font-size: ${theme.fonts.P0};
        font-family: "Open Sans", sans-serif;
        color: ${(props) =>
          props.isSelected && props.isActive
            ? theme.colors.white
            : theme.colors.primary};
      }
    }

    .quantity:active {
      color: ${theme.colors.background_white};
    }
  }
  ${(props) => props.isSelected && props.isActive && selectedStyle};
`;

const selectedStyle = css`
  background-color: ${theme.colors.primary};
`;
