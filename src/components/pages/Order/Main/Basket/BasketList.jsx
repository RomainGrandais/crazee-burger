import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../context/AdminContext";
import BasketCard from "./BasketCard";

export default function BasketList() {
  const { basketMenu } = useContext(AdminContext);
  return (
    <BasketListStyled>
      {[...basketMenu].map((item, index) => (
        <BasketCard
          key={item.id}
          image={item.imageSource ? item.imageSource : commingSoon}
          price={item.price ? item.price : "0,00€"}
          title={item.title}
          quantity={item.quantity}
          index={item.id}
        />
      ))}
    </BasketListStyled>
  );
}

const BasketListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 80%;
  max-height: 80%;
  box-shadow: ${theme.shadows.basket};
  background-color: ${theme.colors.background_white};
  padding: 20px 16px 20px 16px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
