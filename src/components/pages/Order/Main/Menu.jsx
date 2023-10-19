import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  return (
    <MenuStyled>
      <div className="menu">
        <div className="grid">
          {[...fakeMenu1, ...fakeMenu2].map((item, index) => (
            <Card
              image={item.imageSource}
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
