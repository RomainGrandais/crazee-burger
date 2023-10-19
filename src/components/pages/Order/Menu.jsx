import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";

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
  padding: 20px 0px 0px 0px;
  overflow: scroll;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
  .grid {
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
