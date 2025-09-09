import './App.css'
import React from 'react';
import './EduardoCruz.css'

// --- Global Styles Component ---
// To resolve the file path issue, the CSS is included directly within the component.

// --- SVG Icons as Components ---
//Comentaerio para mandar un PR
const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const WorldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);


// --- Data Structure ---
const navData = {
    logo: {
        src: 'https://assets.stickpng.com/images/61378edc4b96600004f676ee.png', // Using white logo
        alt: 'Walt Disney World Logo',
        href: '#'
    },
    topLeftLink: { text: 'Visita Disney.com', href: 'https://www.disneylatino.com/' },
    topRightLinks: [
        { id: 1, text: 'Ingresar o Crear una Cuenta', href: 'https://disneyworld.disney.go.com/es-co/' },
        { id: 2, type: 'separator' },
        { id: 3, text: 'Colombia (Español)', href: '#', icon: <WorldIcon /> }
    ],
    mainNav: [
        { id: 1, text: 'Tickets y Parques', href: '#' },
        { id: 2, text: 'Hoteles', href: '#' },
        { id: 3, text: 'Cosas para hacer', href: '#' },
        { id: 4, text: 'Ayuda y Reglas', href: '#' },
        { id: 5, text: 'Carrito', href: '#', icon: <CartIcon /> },
        { id: 6, text: 'My Disney Experience', href: '#', icon: <ProfileIcon /> }
    ]
};

// --- Navbar Component ---
const Navbar = () => {
    return (
        <header className="navbar-container">
            {/* Top Navigation */}
            <div className="top-nav">
                <a href={navData.topLeftLink.href} className="nav-link">{navData.topLeftLink.text}</a>
                <div className="top-nav-right">
                    {navData.topRightLinks.map(item => {
                        if (item.type === 'separator') {
                            return <span key={item.id} className="nav-separator">|</span>;
                        }
                        return (
                            <a key={item.id} href={item.href} className="nav-link">
                                {item.text}
                                {item.icon && <span className="icon">{item.icon}</span>}
                            </a>
                        );
                    })}
                     <div className="search-bar">
                        <span className="icon search-icon-container"><SearchIcon /></span>
                        <input type="text" placeholder="buscar en disneyworld.com" className="search-input" />
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav">
                <a href={navData.logo.href}>
                    <img src={navData.logo.src} alt={navData.logo.alt} className="disney-logo" />
                </a>
                <div className="main-nav-links">
                     {navData.mainNav.map(item => (
                        <a key={item.id} href={item.href} className="nav-link main-link">
                            {item.icon && <span className="icon">{item.icon}</span>}
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* The rest of the page content would go here */}
    </div>
  );
}

export default App;

