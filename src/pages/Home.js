import React from 'react';
import logements from '../data/logements.json';
import PropertyCard from '../components/PropertyCard';
import Banner from '../components/Banner';
import homeBanner from '../assets/home-banner.png';
import '../style/Home.scss';


function Home(){
 return (
    <main>
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      <section className="cards-wrapper">
        <div className="cards-container">
          {logements.map((logement) => (
            <PropertyCard
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </section>
    </main> 
  );
}

export default Home;







