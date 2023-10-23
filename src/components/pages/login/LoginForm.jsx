import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
            value={prenom}
            handleChange={handleChange}
            Icon={<BsPersonCircle className="icon" />}
            width="352px"
            height="18px"
            placeholder={"Entrez votre prenom"}
          />
          <PrimaryButton
            label={"Accéder à mon espace"}
            width="400px"
            height="53px"
          />
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
`;
