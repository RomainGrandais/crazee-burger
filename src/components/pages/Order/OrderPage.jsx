import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";

export default function OrderPage() {
  const params = useParams();

  return (
    <OrderPageStyled>
      <div className="background"></div>
      <div className="order-content">
        <NavBar username={params.username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  position: relative;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.primary};
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    z-index: -1;
  }

  .order-content {
    height: 95vh;
    padding: 15px 56px 15px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
