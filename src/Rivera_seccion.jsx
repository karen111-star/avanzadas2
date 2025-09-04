import React from 'react';
import './App.css';

const navData = {
  logo: '/https://pokemongo.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsite_assets%2FLogo-Outline.png&w=96&q=75', // cambia esta ruta por la correcta si estás usando imágenes locales
  links: [
    'Festival de GO',
    'Noticias',
    'Temporadas',
    'Eventos',
    'Comunidad',
    'Clasificación',
    'Tienda'
  ],
  loginText: 'Iniciar sesión',
  promo: {
    icon: '/https://pokemongo.com/_next/image?url=%2Fmedia%2Ficons%2Flogin-reward-chest.png&w=48&q=75', // cambia esta ruta por la correcta
    text: '¡15 % de descuento en la primera compra en la tienda en línea de cualquier objeto de 9,99 USD como mínimo!'
  }
};

function Rivera_seccion() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={navData.logo} alt="Logo Pokémon GO" className="logo" />
          <ul className="nav-links">
            {navData.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <button className="login-button">{navData.loginText}</button>
      </nav>

      <div className="promo-bar">
        <img src={navData.promo.icon} alt="Promoción" className="promo-icon" />
        <span>{navData.promo.text}</span>
      </div>
    </div>
  );
}

export default Rivera_seccion;