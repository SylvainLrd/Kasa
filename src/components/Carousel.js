import React, { useState } from "react";
import "../style/Carousel.scss";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      
      {pictures.length > 1 && (
        <>
          <img src={arrowLeft} alt="Précédent" className="arrow arrow-left" onClick={prevSlide} />
          <img src={arrowRight} alt="Suivant" className="arrow arrow-right" onClick={nextSlide} />
          <div className="counter">{currentIndex + 1} / {pictures.length}</div>
        </>
      )}
    </div>
  );
}

export default Carousel;
