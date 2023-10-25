import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../../utils/maths";
import AdminContext from "../../../../../../context/AdminContext";
import AddProductContext from "../../../../../../context/AddProductContext";
import DeleteCard from "./DeleteCard";

export default function Card({ image, price, title, index, onClick }) {
  const infos = useContext(AdminContext);

  return (
    <CardStyled image={image} isActive={infos.isActive} onClick={onClick}>
      <DeleteCard index={index} />
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
  z-index: 0;
  cursor: pointer;

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
        z-index: 1;
      }
    }
  }
`;