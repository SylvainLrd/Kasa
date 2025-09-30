import React from "react";
import { Link } from "react-router-dom";
import '../style/NotFound.scss';

function NotFound() {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups ! La page que <span className="mobile-break"></span> vous demandez n'existe pas.</p>
      <Link to="/" className="back-home">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;