// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Elmer.css'; 

function Elmer() {
  // Objeto para poner los datos de las las noticias. Cada elemento es una noticia individual.
  const datosNoticias = [
    {
      id: 1, // Identificador único para la noticia
      fecha: 'AUG 29, 2025', // Fecha de publicación de la noticia
      titulo: '¡Disfruta de bonificaciones de intercambio todos los domingos durante Cuentos de Transformación!', // Título de la noticia
      urlImagen: 'https://lh3.googleusercontent.com/mqf6YX8Ic_J4qLaoDiSM1Q43N_mdIotWfZPODwGnDb7GKK9U60XEjm7VdiHjYJdMIKq5y1BgIYRG_z8yvRTgfDe47XdcgdLghrnF2YZWFL8uew', // URL de la imagen principal de la noticia
      textoAlternativo: 'Evento de bonificaciones de intercambio en Pokémon GO', // Texto alternativo para la imagen (accesibilidad)
      urlEnlace: 'https://pokemongo.com/es/post/trade-days-2025', // URL a la noticia completa
    },
    {
      id: 2,
      fecha: 'SEP 01, 2025',
      titulo: 'Presentamos la Incubadora Temporizada en GO Pass Deluxe: ¡Septiembre!',
      urlImagen: 'https://lh3.googleusercontent.com/N_HSK_C8KcH4IIItoNOednYksgVSyRELMQMd5MVsW7aL9JAo3XVm1LMDL7Ne674t8scYxpw3tNtiUuDbqDtPiCtvdDihcSe2SA',
      textoAlternativo: 'Incubadora temporizada de Pokémon GO',
      urlEnlace: 'https://pokemongo.com/es/news/go-pass-september-2025',
    },
    {
      id: 3,
      fecha: 'AUG 28, 2025',
      titulo: '¡Mega Sharpedo irrumpe en Pokémon GO!',
      urlImagen: 'https://lh3.googleusercontent.com/r2ZN8gNHdCZivmwDdpyNl3lSY9Sygon_2AN4UsDR40SPIc8o27GMOb2cLXwDXyOzqItA7sYrlIZ-o_znUi5jhBB-wzVoidMB2U4=e365-pa-nu-w3840',
      textoAlternativo: 'Mega Sharpedo en Pokémon GO',
      urlEnlace: 'https://pokemongo.com/es/news/mega-sharpedo-raid-day-2025',
    },
    {
      id: 4,
      fecha: 'AUG 27, 2025',
      titulo: '¡Celebra la región de Kanto con un evento especial!',
      urlImagen: 'https://lh3.googleusercontent.com/zuH-ueu-JlZDF1Mg0kEjLaPNVhCErI4ijDYtZ5FgV3k1mDg4TV-w7pGJYPWX4BK3UEInEk-2qY56CKXKiaHHLAJrIg1J0AO_iDG98FkZio5Q=w1440-e365',
      textoAlternativo: 'Evento de la región de Kanto en Pokémon GO',
      urlEnlace: 'https://pokemongo.com/es/post/pokemongo-kanto-celebration-2025',
    },
    {
      id: 5,
      fecha: 'AUG 26, 2025',
      titulo: '¡Bienvenidos al Pokémon GO Fest 2025!',
      urlImagen: 'https://lh3.googleusercontent.com/yIYdctLa9eRpZqPeUUU85fL3M4uQnv7EM1k0F82Juhd1WEzzQLNfJtd_jjKkwa3CXyc3OpjQQDN-KIL6ueKFZBi7AuUzfM_YPMB0=e365-pa-nu-w3840',
      textoAlternativo: 'Pokémon GO Fest 2025',
      urlEnlace: 'https://pokemongo.com/seasons/tales-of-transformation',
    },
    
  ];

  // ------------------------------------------------------------
  // Estados y refs para manejar el desplegable de idiomas
  // ------------------------------------------------------------
  const [mostrarIdiomas, setMostrarIdiomas] = useState(false); // controla si la lista de idiomas está visible
  const languageRef = useRef(null); // ref para detectar clicks fuera del desplegable

  // Lista de idiomas que aparecerá en el desplegable
  const listaIdiomas = [
    'Inglés',
    'Francés',
    'Alemán',
    'Italiano',
    'Ruso',
    'Japonés',
    'Español',
    'Chino tradicional',
    'Coreano',
    'Tailandés',
    'Portugués brasileño',
    'Turco',
    'Indonesio'
  ];

  // Cierra el desplegable si el usuario hace click fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setMostrarIdiomas(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="contenedor-app"> {/* Contenedor principal de la aplicación */}


      {/* ==============================
          Sección: Últimas noticias
         ============================== */}
      <section className="seccion-ultimas-noticias">
        <div className="contenedor-noticias">
          <h2 className="titulo-seccion">Últimas Noticias</h2>
          <div className="cuadricula-noticias">
            {datosNoticias.map((itemNoticia, index) => (
              <a 
                href={itemNoticia.urlEnlace} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={itemNoticia.id} 
                className={`tarjeta-noticia ${index < 2 ? 'grande' : 'pequena'}`}
              >
                <div className="contenedor-imagen-noticia">
                  <img 
                    src={itemNoticia.urlImagen} 
                    alt={itemNoticia.textoAlternativo} 
                    className="imagen-noticia" 
                  />
                  <span className="fecha-noticia">{itemNoticia.fecha}</span>
                </div>
                <p className="titulo-noticia">{itemNoticia.titulo}</p>
              </a>
            ))}
          </div>

          <a 
            href="https://pokemongo.com/news/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="enlace-ver-todas-noticias"
          >
            Más Noticias
          </a>
        </div>
      </section>

  
<footer className="footer">
  <div className="footer-content">
    {/* Bloque superior: columnas izquierda (enlaces), centro (redes + idioma), derecha (logos) */}
    <div className="footer-top">
      {/* Izquierda: columnas de enlaces */}
      <div className="footer-left">
        <ul className="col">
          <li><a href="https://pokemongo.com/es/post/" target="_blank" rel="noopener noreferrer">FESTIVAL DE GO</a></li>
          <li><a href="https://pokemongo.com/es/news/" target="_blank" rel="noopener noreferrer">NOTICIAS</a></li>
          <li><a href="https://pokemongo.com/seasons/" target="_blank" rel="noopener noreferrer">TEMPORADAS</a></li>
          <li><a href="https://pokemongo.com/events/" target="_blank" rel="noopener noreferrer">EVENTOS</a></li>
          <li><a href="https://pokemongo.com/community/" target="_blank" rel="noopener noreferrer">COMUNIDAD</a></li>
        </ul>

        <ul className="col">
          <li><a href="https://pokemongo.com/es/leaderboard/" target="_blank" rel="noopener noreferrer">CLASIFICACIÓN</a></li>
          <li><a href="https://store.pokemongolive.com/" target="_blank" rel="noopener noreferrer">TIENDA WEB</a></li>
          <li><a href="https://tickets.nianticlabs.com/events" target="_blank" rel="noopener noreferrer">VENTA DE ENTRADAS PARA EVENTOS</a></li>
          <li><a href="https://rewards.nianticlabs.com/pokemongo/" target="_blank" rel="noopener noreferrer">CANJEO DE CÓDIGOS</a></li>
          <li><a href="https://niantic.helpshift.com/a/pokemon-go/?l=es" target="_blank" rel="noopener noreferrer">AYUDA</a></li>
        </ul>
      </div>

      {/* Centro: redes sociales en círculos + selector de idioma */}
      <div className="footer-center">
        <div className="social-icons">
          {/* Instagram */}
          <a 
            className="social-link" 
            href="https://www.instagram.com/pokemongoapp/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram - Pokémon GO"
          >
            {/* SVG Instagram (simplificado) */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="12" cy="12" r="3.0" fill="currentColor"/>
              <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor"/>
            </svg>
          </a>

          {/* Facebook */}
          <a 
            className="social-link" 
            href="https://www.facebook.com/PokemonGO/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook - Pokémon GO"
          >
            {/* SVG Facebook (simplificado) */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M13.2 8.5h1.8v2.1h-1.8v8h-2.1v-8h-1.4v-1.9h1.4v-1.1c0-1.0.6-2.0 2.1-2.0h1.6v2.0h-.6c-.4 0-.6.2-.6.6v.5z" fill="currentColor"/>
            </svg>
          </a>

          {/* TikTok */}
          <a 
            className="social-link" 
            href="https://www.tiktok.com/@pokemongo" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="TikTok - Pokémon GO"
          >
            {/* SVG TikTok (simplificado) */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path d="M9 3v10.5A4.5 4.5 0 1 0 13.5 18V7h3.5V3h-8z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
          </a>

          {/* YouTube */}
          <a 
            className="social-link" 
            href="https://www.youtube.com/c/PokemonGO" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube - Pokémon GO"
          >
            {/* SVG YouTube (simplificado) */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <rect x="2" y="6" width="20" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              <polygon points="10,9 16,12 10,15" fill="currentColor"/>
            </svg>
          </a>
        </div>

        {/* Selector de idioma con desplegable (controlado por estado) */}
        <div className="language-block" ref={languageRef}>
          <button 
            className="language-btn" 
            aria-label="Seleccionar idioma"
            onClick={() => setMostrarIdiomas(prev => !prev)}
          >
            ESPAÑOL <span className="chev">▾</span>
          </button>

          {/* Lista desplegable de idiomas (se muestra/oculta con estado) */}
          {mostrarIdiomas && (
            <ul className="lista-idiomas" role="menu" aria-label="Lista de idiomas">
              {listaIdiomas.map((idioma, i) => (
                <li key={i} role="menuitem" tabIndex={0} onClick={() => { /* aquí podrías manejar la navegación al idioma */ }}>
                  {idioma}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Derecha: logos vinculados (The Pokémon Company + Niantic) */}
      <div className="footer-right">
        {/* Uso las rutas absolutas de pokemongo para las imágenes; s*/}
        <a href="https://www.pokemon.com/us" target="_blank" rel="noopener noreferrer" className="logo-link">
          <img src="https://pokemongo.com/media/logos/tpc-logo.svg" alt="The Pokémon Company" className="logo-img" />
        </a>
        <a href="https://nianticlabs.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
          <img src="https://pokemongo.com/media/logos/niantic-logo.svg" alt="Niantic" className="logo-img" />
        </a>
      </div>
    </div>

    {/* Banda central con enlaces legales tipo "pill" */}
    <div className="footer-band">
      <a href="#" className="band-link">Términos del servicio <span className="band-arrow">➜</span></a>
      <a href="#" className="band-link">Política de privacidad <span className="band-arrow">➜</span></a>
      <a href="#" className="band-link">Derechos de autor <span className="band-arrow">➜</span></a>
    </div>

    {/* Bloque legal inferior (texto explicativo y copyright) */}
    <div className="footer-legal">
      <p className="footer-playable">
        Se puede jugar a Pokémon GO en inglés, francés, alemán, italiano, ruso, japonés, español, chino tradicional, coreano, tailandés, portugués brasileño, turco e indonesio.
      </p>
      <p className="footer-copy">
        ©2025 Niantic, Inc. ©2025 Pokémon. ©1995–2025 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon y los nombres de Pokémon son marcas comerciales de Nintendo. Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. y en otros países. App Store es una marca de servicio de Apple Inc. Android, Google Play y el logotipo de Google Play son marcas comerciales de Google LLC. Durante el juego, sé consciente de tu entorno y juega de manera segura.
      </p>
    </div>
  </div>
</footer>
</div>
  );
}

export default Elmer;