import React from "react";
import "../style/Rating.scss";
import starFull from "../assets/star-full.png";
import starEmpty from "../assets/star-empty.png";

function Rating({ rating }) {
  const totalStars = 5;
  const fullStars = parseInt(rating);
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<img key={i} src={starFull} alt="star full" className="star" />);
    } else {
      stars.push(<img key={i} src={starEmpty} alt="star empty" className="star" />);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
