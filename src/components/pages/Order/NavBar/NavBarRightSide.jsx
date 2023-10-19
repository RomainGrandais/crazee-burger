import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

import Profil from "./Profil";

export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyled>
      {/* <div className="Admin-Button"></div> */}
      <Profil username={username} />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div``;
