import React, { useState } from "react";

const LoginForm = () => {
  const [prenom, setPrenom] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Bonjour ${prenom}`);
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
