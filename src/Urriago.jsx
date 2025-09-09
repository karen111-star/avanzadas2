// Importamos el archivo de estilos de la aplicación
import "./Urriago.css";

// Objeto que contiene toda la información que queremos mostrar en la sección
// Esto hace que el contenido sea fácil de modificar y mantener en un solo lugar.
const sectionData = {
  tituloPrincipal: "Dirígete Rumbo a la Magia", // Título grande de la sección
  subtitulo: "Diseña tus Vacaciones Soñadas",   // Subtítulo
  descripcion:
    "Hospédate en la magia y diviértete a tu manera con un paquete de vacaciones personalizado de Disney que se adapte a tu estilo y presupuesto.", // Texto descriptivo
  botonTexto: "Comienza a Planificar",          // Texto del botón
  imagen: "/disney.jpg" // Ruta de la imagen que está en la carpeta "public"
};

// Componente principal de la aplicación
 function Urriago() {
  return (
    // Sección principal con una clase para darle estilo desde App.css
    <section className="disney-section">
      
      {/* Título principal (H1) */}
      <h1 className="titulo">{sectionData.tituloPrincipal}</h1>

      {/* Contenedor que agrupa el texto y la imagen */}
      <div className="contenido">

        {/* Bloque de texto (subtítulo, descripción y botón) */}
        <div className="texto">
          <h2>{sectionData.subtitulo}</h2>  {/* Subtítulo */}
          <p>{sectionData.descripcion}</p> {/* Párrafo descriptivo */}
          <button>{sectionData.botonTexto}</button> {/* Botón de acción */}
        </div>

        {/* Bloque de imagen */}
        <div className="imagen">
          {/* Usamos la propiedad imagen del objeto sectionData */}
          <img src={sectionData.imagen} alt="Familia en Disney" />
        </div>
      </div>
    </section>
  );
}


export default Urriago
