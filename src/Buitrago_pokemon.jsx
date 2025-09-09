import React from "react";
import "./Buitrago_pokemon.css";

function Buitrago_pokemon() {
  return (
    <div className="app">
      <img src="" alt="Pokémon GO" className="logo" />

      <h2 className="title">Get Up and GO!</h2>
      <p className="subtitle">Download Today</p>

      <div className="store-buttons">
        <a
          href="https://apps.apple.com/app/pokemon-go/id1094591345"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="store-badge"
          />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="store-badge"
          />
        </a>

        <a
          href="https://galaxystore.samsung.com/detail/com.nianticlabs.pokemongo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/344/samsung-galaxy-store.png"
            alt="Available on Galaxy Store"
            className="store-badge galaxy"
          />
        </a>
      </div>
    </div>
  );
}

export default Buitrago_pokemon;
