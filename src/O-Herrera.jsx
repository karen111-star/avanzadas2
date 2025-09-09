import React from "react";
import "./O-Herrera.css";


function O_Herrera() {
  const menu = {
    "Parques y Tickets": [
      "Magic Kingdom Park",
      "EPCOT",
      "Disney's Hollywood Studios",
      "Disney's Animal Kingdom Theme Park",
      "Parques Acuáticos",
      "Horarios de los Parques",
      "Tickets para los Parques",
      "Reservaciones para Parques Temáticos"
    ],
    "Hoteles": [
      "Hoteles",
      "Ofertas Especiales",
      "Lista de operadores turísticos"
    ],
    "Cosas para Hacer": [
      "Realiza reservaciones para restaurantes",
      "Acerca de las Comidas",
      "Todos los Restaurantes",
      "Planes de Comidas",
      "Atracciones",
      "Experiencias con Personajes",
      "Celebraciones y Reuniones Personalizadas",
      "Entretenimiento",
      "Eventos y Excursiones",
      "Enchanting Extras Collection",
      "Tiendas",
      "Spas y Gimnasios",
      "Deportes y Recreación",
      "Fotografía",
      "Disney Springs",
      "Drawn to Life por Cirque du Soleil",
      "Disney's BoardWalk"
    ],
    "Ayuda": [
      "Contáctanos",
      "Centro de Ayuda y Asistencia",
      "Preguntas Frecuentes",
      "Visitantes con Discapacidad",
      "Servicios para Visitantes",
      "Seguridad en los Parques",
      "Reglas sobre la Propiedad",
      "Privacidad y Legalidad",
      "planDisney",
      "Ayuda del Sitio Web"
    ],
    "Obtén Información Sobre": [
      "MyMagic+",
      "My Disney Experience",
      "Mis Familiares y Amigos",
      "Pulseras Disney y Tarjetas"
    ],
    "My Disney Experience": [
      "Mis Planes",
      "Mi Itinerario",
      "Mis Reservaciones y Tickets",
      "Mi Perfil",
      "Mi Lista de Familiares y Amigos",
      "Pulseras Disney y Tarjetas"
    ]
  };

  return (
    <div className="footer-container">
      {Object.entries(menu).map(([section, items]) => (
        <div className="footer-section" key={section}>
          <h3>{section}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default O_Herrera;
