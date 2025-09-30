import React from 'react';
import '../style/Banner.scss';

function Banner({ image, text, className = "" }) {
  return (
    <section className={`banner ${className}`}>
      <div className="banner-overlay">
        <img src={image} alt="Bannière" className="banner-image" />
        {text && <h1 className="banner-text">
           Chez vous, <span className="mobile-break">partout et ailleurs</span>
          </h1>}
      </div>
    </section>
  );
}

export default Banner;