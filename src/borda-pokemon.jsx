import React from "react";

const data = {
  titulo: "Items for Your Adventure",
  descripcion:
    "Spin Photo Discs at PokéStops and Gyms to receive items that will help you on your Pokémon GO journey, including Poké Balls, Berries, Evolution items, and more.",
  imagen: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2021/12/13/61b7c4acb6169e3ab739458d.webp",
};

export default function Borda_pokemon() {
  return (
<div
  style={{
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${data.imagen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
    overflow: "hidden",  // evitar scroll horizontal
  }}
>
      <h1>{data.titulo}</h1>
      <p>{data.descripcion}</p>
    </div>
  );
}
