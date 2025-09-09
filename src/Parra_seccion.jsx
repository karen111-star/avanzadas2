import { useState } from 'react'

import './Parra_seccion.css'


const promo = {
  title: 'Ahorra Hasta un 20% en Habitaciones Durante esta Temporada de Fiestas',
  description: 'Válido en hoteles Resort de Disney selectos, en estadías la mayoría de las noches de domingos a jueves del 12 de octubre al 20 de noviembre de 2025, y la mayoría de las noches del 23 de noviembre al 25 de diciembre de 2025.',
  imageUrl: 'disney.png.jpg', // recuerda ponerlo en la carpeta public
  buttonText: 'Obtén los Detalles de la Oferta',
  link: '#',
    secondaryLinkText: 'Ver todas las ofertas',
  secondaryLinkUrl: '#'
};

 function Parra_seccion() {
  return (
    <div className="promo-card">
      <img 
        src={promo.imageUrl} 
        alt="Promoción Disney" 
        className="promo-image"
      />
      <div className="promo-content">
        <h2>{promo.title}</h2>
        <p>{promo.description}</p>
        <div className="promo-links">
  <a href={promo.link} className="promo-button">
    {promo.buttonText}
  
  </a>
  <br></br>
  <a href={promo.secondaryLinkUrl} className="promo-link">
    {promo.secondaryLinkText}
  </a>
</div>

      </div>
    </div>
  );
}

export default Parra_seccion;