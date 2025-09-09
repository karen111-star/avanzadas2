import React from "react";
import "./Vega_seccion.css";

const atracciones = [
  {
    titulo: "Test Track presented by General Motors®",
    parque: "EPCOT",
    color: "#0077b6",
    icono: "🚗",
    imagen:
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/409/409/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/attractions/test-track/Test-Track-Interior-ONLY-approved-rendering-1-1x1.jpg?2025-07-08T20:23:34+00:00"
  },
  {
    titulo: "Avatar Flight of Passage",
    parque: "Disney’s Animal Kingdom",
    color: "#009688",
    icono: "🦋",
    imagen:
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/409/409/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/experience/homepage/flight-of-passage-grade-1x1x-pro-1x1.jpg?2024-09-27T21:14:18+00:00"
  },
  {
    titulo: "Disney Villains: Unfairly Ever After – ¡Nuevo!",
    parque: "Disney’s Hollywood Studios",
    color: "#6a1b9a",
    icono: "🧙‍♀️",
    imagen:
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/409/409/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/experience/homepage/attraction/Villains_Maleficent-1x1.jpg?2025-05-16T16:19:48+00:00"
  }
];

function Vega_seccion() {
  return (
    <div className="container">
      {atracciones.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imagen} alt={item.titulo} className="card-img" />
          <div
            className="card-header"
            style={{ backgroundColor: item.color }}
          >
            <span className="icon">{item.icono}</span>
            <div className="header-text">
              <h3>{item.titulo}</h3>
              <p>{item.parque}</p>
            </div>
          </div>

          {/* 🧩 Contenido interno de la tarjeta */}
          <div className="card-content">
            <p>
              Esta es una atracción increíble que no te puedes perder. ¡Ideal
              para toda la familia!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vega_seccion;
