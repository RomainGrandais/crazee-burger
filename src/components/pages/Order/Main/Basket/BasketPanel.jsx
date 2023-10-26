import React from "react";
import styled from "styled-components";

export default function BasketPanel() {
  return (
    <BasketPanelStyled>
      <div>basket</div>
    </BasketPanelStyled>
  );
}

const BasketPanelStyled = styled.div`
  width: 25%;
  background-color: green;
`;
