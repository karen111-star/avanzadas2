// src/App.jsx
import './Caicedo.css'

function Caicedo_encabezado() {
  return (
    <div>
      {/* Barra superior */}
      <div className="top-bar">
        MLS Season Pass. Donde se vive la Leagues Cup. LIGA MX vs. MLS: ve toda la acción 
        con 50% de descuento en el plan de temporada.{" "}
        <a href="#" className="info-link">Más información &gt;</a>
      </div>

      {/* Contenedor principal */}
      <div className="main-section">
        <h1 className="title">iPhone</h1>
        <h2 className="subtitle">Diseñado para conquistarte.</h2>
      </div>
    </div>
  )
}

export default Caicedo_encabezado;
