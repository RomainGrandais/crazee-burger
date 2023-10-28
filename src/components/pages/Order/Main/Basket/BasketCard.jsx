import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../utils/maths";

export default function BasketCard({ image, price, title, quantity, index }) {
  return (
    <BasketCardStyled image={image}>
      <div className="img"></div>
      <div className="text-infos">
        <div className="title-price">
          <h1>
            <span>{title}</span>
          </h1>
          <h2>{formatPrice(price)}</h2>
        </div>
        <div className="quantity">
          <span>x</span>
          <span>{quantity}</span>
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
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.round};

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
    width: 200px;
    height: 70px;
    padding-left: 20px;
    align-items: center;

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
        color: ${theme.colors.primary};
      }
    }
    .quantity {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      span {
        font-weight: ${theme.weights.regular};
        font-size: ${theme.fonts.P0};
        font-family: "Open Sans", sans-serif;
        color: ${theme.colors.primary};
      }
    }
  }
`;
