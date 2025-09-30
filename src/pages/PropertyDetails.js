import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Pour récupérer l'id et rediriger
import logements from "../data/logements.json"; // Données des logements
import Carousel from "../components/Carousel"; // Carrousel d’images
import Dropdown from "../components/Dropdown"; // Composant réutilisable pour les sections pliables
import Rating from "../components/Rating"; // Affichage des étoiles
import "../style/PropertyDetails.scss"; // Styles de cette page

function PropertyDetails() {
  const { id } = useParams();            // ID du logement depuis l’URL
  const navigate = useNavigate();        // Pour rediriger si logement non trouvé

  const logement = logements.find((item) => item.id === id); // Cherche le logement correspondant

  const descRef = useRef(null);          // Référence pour mesurer la hauteur de la description
  const equipRef = useRef(null);         // Référence pour mesurer la hauteur des équipements
  const [maxHeight, setMaxHeight] = useState(0); // Hauteur max entre les deux dropdowns

  // Gère l'état d'ouverture des deux dropdowns
  const [openedDropdowns, setOpenedDropdowns] = useState({
    description: false,
    equipements: false,
  });

  // Redirige vers la page 404 si l’ID n’est pas trouvé dans les données
  useEffect(() => {
    if (!logement) {
      navigate("/404", { replace: true });
    }
  }, [logement, navigate]);

  // Met à jour la hauteur quand les deux dropdowns sont ouverts
  useEffect(() => {
    if (openedDropdowns.description && openedDropdowns.equipements) {
      const descHeight = descRef.current?.offsetHeight || 0;
      const equipHeight = equipRef.current?.offsetHeight || 0;
      setMaxHeight(Math.max(descHeight, equipHeight));
    } else {
      setMaxHeight(0); // Réinitialise si un seul est ouvert
    }
  }, [openedDropdowns]);

  if (!logement) return null; // Évite de continuer si logement introuvable (pour éviter erreurs JS)

  const [firstName, lastName] = logement.host.name.split(" "); // Sépare prénom/nom de l’hôte

  return (
    <div className="logement-page">
      {/* Carousel d’images */}
      <Carousel pictures={logement.pictures} />

      {/* En-tête du logement : titre, localisation, tags, hôte */}
      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-host">
          <div className="host-info">
            <p>{firstName}<br />{lastName}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
          <Rating rating={logement.rating} /> {/* Affichage des étoiles */}
        </div>
      </div>

      {/* Dropdowns synchronisés */}
      <div className="logement-dropdowns">
        <Dropdown
          title="Description"
          className="dropdown-property"
          isOpen={openedDropdowns.description}
          onToggle={() =>
            setOpenedDropdowns((prev) => ({
              ...prev,
              description: !prev.description,
            }))
          }
        >
          <div
            ref={descRef}
            style={
              openedDropdowns.description && openedDropdowns.equipements
                ? { minHeight: `${maxHeight}px` }
                : {}
            }
          >
            <p>{logement.description}</p>
          </div>
        </Dropdown>

        <Dropdown
          title="Équipements"
          className="dropdown-property"
          isOpen={openedDropdowns.equipements}
          onToggle={() =>
            setOpenedDropdowns((prev) => ({
              ...prev,
              equipements: !prev.equipements,
            }))
          }
        >
          <div
            ref={equipRef}
            style={
              openedDropdowns.description && openedDropdowns.equipements
                ? { minHeight: `${maxHeight}px` }
                : {}
            }
          >
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default PropertyDetails;
