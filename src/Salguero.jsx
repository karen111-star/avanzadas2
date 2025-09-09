import "./Salguero.css";


function Salguero() {
  // Objeto con la info dinámica
  const experience = {
    title: "Disney Starlight: Dream the Night Away – ¡Nuevo!",
    park: "Magic Kingdom Park",
    imageUrl:
      "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1920/1080/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/entertainment/starlight/Royals-ll-5x6.jpg",
  };

  return (
    <section className="experience-section">
      {/* Línea decorativa */}
      <hr className="sparkle-line" />

      {/* Título de la sección */}
      <h2 className="section-header">Experiencias Que No Te Puedes Perder</h2>

      {/* Card con imagen de fondo */}
      <div
        className="experience-card"
        style={{ backgroundImage: `url(${experience.imageUrl})` }}
      >
        <div className="experience-label">
          <strong>
            <em>Disney Starlight:</em>
          </strong>{" "}
          Dream the Night Away – ¡Nuevo!
          <div className="experience-park">🏰 {experience.park}</div>
        </div>
      </div>
    </section>
  );
}
export default Salguero