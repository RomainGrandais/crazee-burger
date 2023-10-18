import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyled>
      <div className="child-left">
        <h2>
          Hey, <span className="username">{username}</span>
        </h2>
        <Link to={"/"}>
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="icon">
        <BsPersonCircle />
      </div>
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.sm};

  h2 {
    display: inline;
    color: ${theme.colors.greyBlue};
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P0};
    text-align: right;
  }

  .username {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
  }

  .child-left {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    .description {
      small:hover {
        text-decoration: underline;
        color: ${theme.colors.greyDark};
      }
      small {
        font-size: ${theme.fonts.XXS};
        color: ${theme.colors.greyBlue};
        font-weight: ${theme.weights.medium};
        text-decoration: none;
        position: relative;
        bottom: 2px;
      }
    }
  }

  .icon {
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
  }
`;
