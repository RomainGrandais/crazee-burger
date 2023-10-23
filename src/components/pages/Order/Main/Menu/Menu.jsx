import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { theme } from "../../../../../theme";
import AddProductContext from "../../../../../context/AddProductContext";
import commingSoon from "/public/images/coming-soon.png";

export default function Menu() {
  const infos = useContext(AddProductContext);
  return (
    <MenuStyled>
      <div className="menu">
        <div className="grid">
          {[...infos.menu].map((item, index) => (
            <Card
              image={item.imageSource ? item.imageSource : commingSoon}
              price={item.price}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: ${theme.spacing.md} 0px ${theme.spacing.md} 0px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  .grid {
    display: grid;
    grid-gap: ${theme.spacing.lg} ${theme.spacing.xl};
    grid-template-columns: repeat(4, 1fr);
  }
`;
