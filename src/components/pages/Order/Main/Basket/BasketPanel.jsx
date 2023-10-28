import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTotal from "./BasketTotal";
import BasketEmpty from "./BasketEmpty";
import AdminContext from "../../../../../context/AdminContext";
import BasketList from "./BasketList";

export default function BasketPanel() {
  const { basketMenu } = useContext(AdminContext);

  return (
    <BasketPanelStyled>
      <BasketTotal total={"0.00$"} />
      {basketMenu.length == 0 ? <BasketEmpty /> : <BasketList />}
      <div className="footer">CODE ❤️ AVEC ET REACT</div>
    </BasketPanelStyled>
  );
}

const BasketPanelStyled = styled.div`
  box-sizing: border-box;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Amatic SC", sans-serif;

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    min-height: 10%;
    background-color: ${theme.colors.background_dark};
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.white};
    border-radius: 0px 0px 0px ${theme.borderRadius.extraRound};
  }
`;
