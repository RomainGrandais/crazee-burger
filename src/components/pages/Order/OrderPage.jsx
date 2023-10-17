import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavBar from "./NavBar";

export default function OrderPage() {
  const params = useParams();

  return (
    <OrderPageStyled>
      <div className="background"></div>
      <div className="order-content">
        <NavBar username={params.username} />
        <div className="main"></div>
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
    padding: 25px 56px 25px 56px;
  }

  .main {
    background-color: ${theme.colors.background_white};
    border-radius: 0px 0px ${theme.borderRadius.extraRound}
      ${theme.borderRadius.extraRound};
    box-shadow: 0px ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xs}
      rgba(0, 0, 0, 0.2) inset;
    height: 625px;
  }
`;
