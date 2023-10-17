import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "./TextInput";

const LoginForm = () => {
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${prenom}`);
    setPrenom("");
  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <LoginFormStyled>
      <div className="content">
        <h1>bienvenue chez nous !</h1>
        <br />
        <div className="bar"></div>
        <br />
        <h2>Connectez-vous</h2>
        <form type="submit" onSubmit={handleSubmit}>
          <TextInput
            prenom={prenom}
            handleChange={handleChange}
            placeholder={"Entrez votre prenom"}
            Icon={<BsPersonCircle className="icon" />}
          />
          <div className="button-with-icon">
            <button type="submit">
              <span>Accéder à mon espace</span>
            </button>
          </div>
        </form>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;

const LoginFormStyled = styled.div`
  position: relative;

  form {
    display: flex;
    flex-direction: column;
  }
  h1,
  h2 {
    color: ${theme.colors.background_white};
  }

  h1 {
    font-size: ${theme.fonts.P4};
  }
  h2 {
    font-size: ${theme.fonts.P3};
  }

  .bar {
    width: 400px;
    border: 1px solid ${theme.colors.primary};
  }

  form {
    gap: 12px;
    margin-top: 12px;
  }

  .button-with-icon {
    display: flex;
    justify-content: center;
    button {
      padding: 18px 24px;
      gap: 12px;
      color: ${theme.colors.background_white};
      background-color: ${theme.colors.primary};
      font-weight: ${theme.weights.bold};
      border-radius: ${theme.borderRadius.round};
      width: 400px;
      height: 53px;
      border: 1px solid ${theme.colors.primary};
    }
    button:active {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.background_white};
    }
  }
`;
