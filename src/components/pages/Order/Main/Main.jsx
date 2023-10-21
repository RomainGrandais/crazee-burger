import React, { useContext } from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminContext from "../../../../context/AdminContext";

export default function Main() {
  const info = useContext(AdminContext);

  return (
    <MainStyled>
      {/* <div className="basket">cazvavae</div> */}
      <div className="menu-admin">
        <Menu />
        {info.isActive && <AdminPanel />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${theme.colors.background_white};
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  height: 85vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    box-shadow: ${theme.shadows.strong};
    border-radius: 0px 0px ${theme.borderRadius.extraRound}
      ${theme.borderRadius.extraRound};
  }
  .menu-admin {
    position: relative;
    display: flex;
    z-index: 0;
    width: 100%;
  }
`;
