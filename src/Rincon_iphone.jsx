import React from 'react';
import './Rincon.css';

const navData = {
  appleIconLink: '#',
  navLinks: [
    { name: 'Mac', url: '#' },
    { name: 'iPad', url: '#' },
    { name: 'iPhone', url: '#' },
    { name: 'Watch', url: '#' },
    { name: 'AirPods', url: '#' },
    { name: 'TV y Casa', url: '#' },
    { name: 'Entretenimiento', url: '#' },
    { name: 'Soporte', url: '#' },
    { name: 'Dónde Comprar', url: '#' },
  ],
  searchLink: '#',
};

function Rincon_iphone() {
  return (
    <header className="header">
      <a href={navData.appleIconLink} className="apple-icon" aria-label="Apple Home">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M16.365 1.43c0 1.14-.95 2.6-2.1 2.6-1.1 0-2.3-1.3-2.3-2.5 0-1.2 1.05-1.9 2.2-1.9 1.2 0 2.2 1.1 2.2 1.8zM20.5 7.5c-1.1 0-2.3.9-2.8 1.9-.6 1.3-.3 3.3 1.1 4.3.8.6 1.7.9 2.6.9 1.1 0 2.3-.9 2.8-1.9.6-1.3.3-3.3-1.1-4.3-.8-.6-1.7-.9-2.6-.9zm-7.5 0c-3.3 0-6 2.7-6 6 0 3.3 2.7 6 6 6 3.3 0 6-2.7 6-6 0-3.3-2.7-6-6-6z" />
        </svg>
      </a>

      <nav className="nav-links">
        {navData.navLinks.map((link) => (
          <a key={link.name} href={link.url}>
            {link.name}
          </a>
        ))}
      </nav>

      <a href={navData.searchLink} className="search-icon" aria-label="Buscar">
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="8.5" cy="8.5" r="6.5" />
          <line x1="17" y1="17" x2="13.5" y2="13.5" />
        </svg>
      </a>
    </header>
  );
}

export default Rincon_iphone;