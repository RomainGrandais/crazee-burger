import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <form type="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={prenom}
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  );
};

export default LoginForm;
