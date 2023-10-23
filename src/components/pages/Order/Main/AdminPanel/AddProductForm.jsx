import React from "react";
import styled from "styled-components";

export default function AddProductForm() {
  return (
    <AddProductFormStyled>
      <form action="submit"></form>
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.div`
  margin: 30px 0px 0px 70px;
  width: 60%;
  height: 65%;
`;
