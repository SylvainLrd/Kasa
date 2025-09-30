import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.png';  // chemin vers le logo
import '../style/Header.scss'; // chemin vers le fichier CSS pour le style du header

function Header() {
  return (
    <header className="header">
  <div className="container header-content">
    <NavLink to="/">
      <img src={logo} alt="Logo Kasa" className="header-logo" />
    </NavLink>
    <ul className="nav-list">
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          A propos
        </NavLink>
      </li>
    </ul>
  </div>
</header>
  );
}

export default Header;