import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import background from "/F03_burger-background.jpg";
import Logo from "../../reusable-ui/Logo";

const LoginPage = () => {
  return (
    <LoginPageStryled>
      <div className="background-image">
        <div className="content">
          <Logo />
          <LoginForm />
        </div>
      </div>
    </LoginPageStryled>
  );
};

export default LoginPage;

const LoginPageStryled = styled.div`
  position: relative;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${background});
    background-color: rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    z-index: -1;
  }
  .content {
    display: grid;
    place-items: center;
  }
`;
