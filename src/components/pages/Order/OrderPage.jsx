import React from "react";
import { useParams, Link } from "react-router-dom";

export default function OrderPage() {
  const params = useParams();

  return (
    <div>
      <h1>Bonjour {params.username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
