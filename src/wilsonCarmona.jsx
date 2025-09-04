import React, { useState } from "react";
import "./wilsonCarmona.css";

// lista imágenes carrusel Team Go Rocket
import arlo from "./img/arlo.webp"; // ✅ si está en src/assets
import cliff from "./img/clift.webp"; // ✅ si está en src/assets
import sierra from "./img/sierra.webp"; // ✅ si está en src/assets

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
                src={images[currentIndex]}
                alt="slider"
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
        </div>
    </div>
  );
}

export default TeamRocketGo;