import React from "react";
import "./Borda.css";

//objeto 
const data = {
  titulo: "Items for Your Adventure",
  descripcion:
    "Spin Photo Discs at PokéStops and Gyms to receive items that will help you on your Pokémon GO journey, including Poké Balls, Berries, Evolution items, and more.",
  imagen: "https://i.blogs.es/52f17d/pokemongo-comunidad/1366_2000.webp"
};

export default function Borda() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${data.imagen})` }}
    >
      <h1>{data.titulo}</h1>
      <p>{data.descripcion}</p>
    </div>
  );
}
