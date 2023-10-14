import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [prenom, setPrenom] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <Link to={`/order/${prenom}`}>
          <button type="submit">Accéder à votre espace</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
