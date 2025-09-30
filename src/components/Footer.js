import React from 'react';
import '../style/Footer.scss';
import logoWhite from '../assets/logo footer.png'; // adapte le nom si besoin

function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;