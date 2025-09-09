import './Nicolas.css';


function Nicolas() {
  const objetoinc = {
    enlace: "https://locate.apple.com/co/es/",
    enlace2: "https://www.apple.com/choose-country-region/",
    enlace3: "https://www.apple.com/legal/privacy/es-la/",
    enlace4: "https://www.apple.com/legal/",
    enlace5: "https://www.apple.com/co/sitemap/",
    parrafo: "Copyright © 2025 Apple Inc. Todos los derechos reservados.",
    parrafo1: "Política de privacidad",
    parrafo2: "Aviso legal",
    parrafo3: "Mapa del sitio"
  };

  return (
    <footer className="ac-footer">
      {/* Distribuidor */}
      <div className="footer-top">
        <div className="footer-distributor">
          <a href={objetoinc.enlace}>Busca un distribuidor</a> cerca de ti.
        </div>
      </div>

      <hr className="footer-separator" />

      {/* Enlaces legales, copyright y país */}
      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href={objetoinc.enlace3}>{objetoinc.parrafo1}</a></li>
          <li><a href={objetoinc.enlace4}>{objetoinc.parrafo2}</a></li>
          <li><a href={objetoinc.enlace5}>{objetoinc.parrafo3}</a></li>
        </ul>

        <div className="footer-copy">{objetoinc.parrafo}</div>

        <div className="footer-country">
          <a href={objetoinc.enlace2}>Colombia</a>
        </div>
      </div>
    </footer>
  );
}

export default Nicolas
