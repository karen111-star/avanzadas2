import React from "react";
import "./Piratoba.css";
import comidaImg from "./assets/comida.jpg";
import disneyImg from "./assets/disney.jpg";
import operadoresImg from "./assets/operadores.jpg";


function Piratoba() {
  const secciones = [
    {
      id: 1,
      titulo: "Descubre Deliciosas Comidas",
      descripcion:
        "Con casi 400 opciones, desde gourmet hasta para llevar, encontrarás restaurantes para satisfacer todos los gustos.",
      boton: "Explorar Restaurantes",
      imagen: comidaImg,
    },
    {
      id: 2,
      titulo: "Comienza tu Aventura con Disney+",
      descripcion:
        "Antes de disfrutar de los favoritos de Disney en los Parques, compártelos juntos en casa.",
      boton: "Explora Disney+",
      imagen: disneyImg,
    },
    {
      id: 3,
      titulo: "Operadores Turísticos",
      descripcion:
        "Los siguientes operadores turísticos pueden ayudarte con la reservación de paquetes, planes de comidas y transporte de Walt Disney World Resort, y mucho más.",
      boton: "Ver Detalles",
      imagen: operadoresImg
    },
  ];

  return (
    <main className="contenedor">
      {secciones.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.imagen} alt={item.titulo} className="card-img" />
          <h3>{item.titulo}</h3>
          <p>{item.descripcion}</p>
          <button>{item.boton}</button>
        </div>
      ))}
    </main>
  );
}

export default Piratoba;

