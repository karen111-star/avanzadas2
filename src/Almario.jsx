import { useState } from 'react';
import './Almario.css';

function Almario_foother                                                       () {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header fijo con logo, menú y texto */}
      <header className="header">
        <div className="header-content">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
            alt="Apple Logo" 
            className="apple-logo" 
          />
          <nav className="nav-menu">
            <span className="nav-item">Descubrir <span className="arrow">&#x25BC;</span></span>
            <span className="nav-item">iPhone</span>
          </nav>
        </div>
      </header>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Descubrir</h3>
            <ul>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV y Casa</li>
              <li>AirTag</li>
              <li>Apple Wallet</li>
              <li>Apple Pay</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Cuenta</h3>
            <ul>
              <li>Administra tu Cuenta de Apple</li>
              <li>iCloud.com</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Entretenimiento</h3>
            <ul>
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Para la empresa</h3>
            <ul>
              <li>Apple y la empresa</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Para la educación</h3>
            <ul>
              <li>Apple y la educación</li>
              <li>Comprar para la educación escolar</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Valores de Apple</h3>
            <ul>
              <li>Accesibilidad</li>
              <li>Medio ambiente</li>
              <li>Privacidad</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Acerca de Apple</h3>
            <ul>
              <li>Newsroom</li>
              <li>Directivos de Apple</li>
              <li>Oportunidades laborales</li>
              <li>Inversores</li>
              <li>Ética y cumplimiento de políticas</li>
            </ul>
          </div>
        </div>

        <div className="footer-link">
          <a href="#">Busca un distribuidor cerca de ti.</a>
        </div>
      </footer>
    </>
  );
}

export default Almario_foother;
