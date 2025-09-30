import React from 'react';
import { Link } from 'react-router-dom';
import '../style/PropertyCard.scss';


function PropertyCard({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="property-card">
      <img src={cover} alt={title} />
      <div className="property-card-title">{title}</div>
    </Link>
  );
}

export default PropertyCard;