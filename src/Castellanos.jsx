import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Castellanos.css'

const infoDisney = {
  telefono: "+1 (407) 827-7157",
  textoAsistencia: "Para obtener asistencia con tu visita a Walt Disney World, llama al ",
  pregunta: "¿Compraste tickets para un Parque y necesitas cancelar?",
  instruccion: "Si la compra se hizo en, o antes de 14 días, visita ",
  enlaceTexto: 'visita "Mis Planes"',
  enlaceUrl: "#",
  nota: "Se aplicarán cargos por llamadas internacionales cuando llames a Disney desde fuera de los Estados Unidos. Los Visitantes menores de 18 años de edad deben contar con el permiso de sus padres o tutores para llamar."
};

function Castellanos() {
  return (
    <div className="contenedor">
      <p>
        {infoDisney.textoAsistencia}
        <span className="telefono">{infoDisney.telefono}</span>.
      </p>
      <p className="pregunta">{infoDisney.pregunta}</p>
      <p>
        {infoDisney.instruccion}
        <a href={infoDisney.enlaceUrl}>{infoDisney.enlaceTexto}</a>.
      </p>
      <p className="nota">{infoDisney.nota}</p>
    </div>
  );
}

export default Castellanos;