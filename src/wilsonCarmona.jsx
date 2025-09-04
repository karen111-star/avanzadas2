import React, { useState } from "react";
import "./wilsonCarmona.css";

// lista imágenes carrusel Team Go Rocket
const arlo = {
  name: 'Arlo',
  imageUrl: 'https://lh3.googleusercontent.com/yYRLGyanbYk_w6CQ1_ssMIucddxlH1FTx1w7JXa9RRTDXqv5UvLCfPbjAWQSkZhS1RADIIupMPJI5NTK4lU-1cBTi8yhi0ZECrg=e365-pa-nu-w1300-rw',
};
const cliff = {
  name: 'Cliff',
  imageUrl: 'https://lh3.googleusercontent.com/sG5i_zZCyTdlQOVe3f7cL3jJZWS85sZQ9SsOQ9Xky0uqH58_RN3MMibl3OQ27E_Gy8nmyZWd1WML0mcvVx6RYMN6i0lck8A1ZA=e365-pa-nu-w2368-rw',
};
const sierra = {
  name: 'Sierra',
  imageUrl: 'https://lh3.googleusercontent.com/23l9zGNqE8v1mJ6Nhz1ZGtaT7VaVwGiqhTFHcvh2xX2gdAwhUgaIgb0wPG-e7BzWJS5SXx9sSmBiH3CLQBZhZgZOcWcUNySdg4g=e365-pa-nu-w2356-rw',
};
const images = [
  arlo,
  cliff,
  sierra,
];

function TeamRocketGo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para pasar a la siguiente imagen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="contenedorTeamGoRocket">
      <div className="contenedorFondoCieloTeamGoRocket"></div>
      <div className="contenedorContenidoTeamGoRocket">
        <div className="informacionTeamGoRocket">
          <div className="cabezeraTeamGoRacketInformacion">
            <div className="logoTeamRocketGo"></div>
            <div className="tituloTeamGoRocket">Team GO Rocket</div>
          </div>
          <div className="TextoTeamGoRocket">
            <p>
              ¡El Team GO Rocket ha invadido el mundo de Pokémon GO! Tanto si
              trabajas en una investigación especial como si simplemente tratas
              de rescatar a los Pokémon oscuros, puedes desafiar al Team GO
              Rocket y frustrar sus planes.
            </p>
          </div>
        </div>
      </div>
       {/* Carrusel */}
       <div className="contenedorGeneralCarrucel">
            <div className="slider-container">
              <img
                src={images[currentIndex].imageUrl}
                alt={images[currentIndex].name}
                className="slider-image"
              />
            </div>
            <div className="container-buttons">
              <button className="slider-button prev" onClick={prevSlide}>
                ❮
              </button>

              <button className="slider-button next" onClick={nextSlide}>
                ❯
              </button>
          </div>
              <div className="image-name">
                {images[currentIndex].name}
              </div>
        </div>
    </div>
  );
}

export default TeamRocketGo;