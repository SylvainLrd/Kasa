import React, { useRef, useState, useEffect } from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutBanner from "../assets/about-banner.png";
import "../style/About.scss"; // Styles de cette page 

function About() {
  const fiabRef = useRef(null);
  const respRef = useRef(null);
  const servRef = useRef(null);
  const securRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const fiabHeight = fiabRef.current?.offsetHeight || 0;
    const respHeight = respRef.current?.offsetHeight || 0;
    const servHeight = servRef.current?.offsetHeight || 0;
    const securHeight = securRef.current?.offsetHeight || 0;

    const max = Math.max(fiabHeight, respHeight, servHeight, securHeight);
    setMaxHeight(max);
  }, []);

  return (
    <div className="about-page">
      {/* ✅ Ajout de la bannière ici */}
      <Banner image={aboutBanner} className="about-banner"/>

      <div className="dropdowns-about">
        <Dropdown title="Fiabilité" className="dropdown-about">
          <div ref={fiabRef} style={{ minHeight: `${maxHeight}px` }}>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
        </Dropdown>

        <Dropdown title="Respect" className="dropdown-about">
          <div ref={respRef} style={{ minHeight: `${maxHeight}px` }}>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </Dropdown>

        <Dropdown title="Service" className="dropdown-about">
          <div ref={servRef} style={{ minHeight: `${maxHeight}px` }}>
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
          </div>
        </Dropdown>

        <Dropdown title="Sécurité" className="dropdown-about">
          <div ref={securRef} style={{ minHeight: `${maxHeight}px` }}>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default About;
