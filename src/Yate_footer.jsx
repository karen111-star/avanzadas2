import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Yate_footer.css'

function Yate_footer() {
  const footerData = {
    links: [
      "Ayuda y Servicios para Huéspedes",
      "Mapa del Sitio",
      "Términos de Uso",
      "Avisos Legales",
      "Política de Privacidad",
      "No Vender Mi Información",
      "Política de Privacidad En Línea para Niños",
      "Sus Derechos de Privacidad en California",
      "Anuncios Basados en Interés",
    ],
    company: "© Disney, Todos los Derechos reservados",
    business: "Disney Vacations, LLC",
    address: "PO Box 10250 Lake Buena Vista, FL 32830-0250 | 81-2564985",
    email: "ContactUs@DisneyVacationsLLC.com",
    phone: "+1 (407) 827-7157",
    disclaimer:
      "Se aplicarán cargos por llamadas internacionales cuando llames a Disney desde fuera de los Estados Unidos",
  };

  return (
    <footer className="footer">
      <nav className="footer-links">
        {footerData.links.map((link, index) => (
          <a key={index} href="#">
            {link}
          </a>
        ))}
      </nav>

      <div className="footer-info">
        <p>{footerData.company}</p>
        <p>{footerData.business}</p>
        <p>{footerData.address}</p>
        <p>{footerData.email}</p>
        <p>{footerData.phone}</p>
        <small>{footerData.disclaimer}</small>
      </div>
    </footer>
  );
}

export default Yate_footer