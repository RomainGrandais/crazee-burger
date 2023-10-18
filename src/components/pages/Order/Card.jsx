import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function Card({ image, price, title }) {
  return (
    <CardStyled image={image}>
      <div className="img"></div>
      <div className="infotext">
        <h1>{title}</h1>
        <div className="bottom-info">
          <h2>{price}</h2>
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
  padding: 0px 20px 10px 20px;
  gap: 15px;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: ${theme.colors.white};

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
    width: 200px;
    height: 110px;
    gap: 10px
    padding: 0px 5px 5px 5px;

    h1 {
      font-size: ${theme.fonts.P5};
      white-space: nowrap;
      text-overflow: e;
      max-width: 100%;
      max-height: 100%;
    }

    .bottom-info {
      display: flex;
      flex-direction: row;
      height: 100%;

      h2 {
        display: flex;
        align-items: center;

        font-family: "Open Sans", sans-serif;
        padding-right: 50px;
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
