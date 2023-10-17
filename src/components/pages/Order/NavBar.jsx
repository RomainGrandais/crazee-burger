import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../../reusable-ui/Logo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function NavBar({ username }) {
  const navigate = useNavigate();

  const handleClickHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <NavBarStyled>
      <a href="">
        <Logo />
      </a>
      <div className="navbar-content">
        <div className="child-left">
          <h2>
            Hey, <span>{username}</span>
          </h2>
          <a href="" onClick={handleClickHome}>
            Se déconnecter
          </a>
        </div>
        <div className="icon">
          <BsPersonCircle />
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  padding: 0px 70px 0px ${theme.spacing.md};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    display: inline;
    color: ${theme.colors.greyBlue};
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P0};
    text-align: right;
  }

  span {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
  }

  .navbar-content {
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing.sm};
  }

  .child-left {
    display: flex;
    flex-direction: column;
  }

  a {
    background: transparent;
    border: none;
    text-align: right;
    font-size: ${theme.fonts.XXS};
    color: ${theme.colors.greyBlue};
    border: none;
    text-decoration: none;
    font-weight: ${theme.weights.regular};
    padding-bottom: 1px;
  }

  .child-left a:hover {
    border-bottom: 1px solid ${theme.colors.greyBlue};
  }

  .icon {
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
  }
`;
