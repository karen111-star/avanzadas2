// App.jsx
import react from "react";
import "./Villamarin_terminos_condiciones.css";

function Villamarin_terminos_condiciones() {
  // Objeto con la información
  const data = {
    titulo: "",
    notas: [
      "Apple Intelligence está disponible en versión beta como parte de una actualización de iOS 18 en todos los modelos de iPhone 16, en el iPhone 15 Pro y en el iPhone 15 Pro Max, con Siri y el idioma del dispositivo configurados en el mismo idioma compatible. Los idiomas compatibles incluyen inglés, francés, alemán, italiano, portugués (Brasil), español, japonés, coreano y chino (simplificado). Se irán agregando otros idiomas, como vietnamita, en el transcurso del año. Algunas funcionalidades podrían no estar disponibles en todas las regiones o idiomas.",
      "La funcionalidad Modo Cine está disponible en los modelos de iPhone 13, iPhone 14 y iPhone 15, y en el iPhone 16, iPhone 16 Plus, iPhone 16 Pro y iPhone 16 Pro Max. La funcionalidad Modo Acción está disponible en los modelos de iPhone 13 mini, iPhone 14 y iPhone 14 Plus, iPhone 15 y iPhone 15 Plus, iPhone 16 y iPhone 16 Plus, iPhone 16 Pro y iPhone 16 Pro Max. La funcionalidad Mezcla de Audio está disponible en el iPhone 16, iPhone 16 Plus, iPhone 16 Pro y iPhone 16 Pro Max.",
      "La afirmación sobre la duración de la batería se refiere a los modelos más grandes. La duración de la batería depende de la configuración de la red y de muchos otros factores; los resultados reales pueden ser diferentes. La batería tiene ciclos de carga limitados y eventualmente necesitará ser reemplazada. La duración de la batería y el número de ciclos de carga varían según el uso y la configuración.",
      "Se requiere un plan de datos. 5G está disponible en algunos mercados y a través de operadores específicos. Las velocidades varían según las condiciones del lugar y el operador.",
      "Los accesorios se venden por separado.",
      "El cable de carga USB-C que viene incluido es compatible con los AirPods Pro (2.ª generación) con estuche de carga MagSafe (USB-C).",
      "Los modelos de iPhone 16 son resistentes a las salpicaduras, al agua y al polvo, y fueron probados en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 6 metros).",
      "Calculado usando un método de balance de masa.",
      "La obtención responsable de fibra de madera se define en la Especificación de Fibras de Fuentes Responsables de Apple. Incluimos el bambú como fibra de madera.",
      "Para usar Apple Pay necesitas una tarjeta de un emisor participante. Apple Pay no está disponible en todos los países.",
      "El iPhone 14 y modelos posteriores pueden detectar si sufres un accidente de auto grave y pedir ayuda. Requiere conexión celular o llamadas por Wi-Fi.",
      "Inteligencia Visual está disponible en iOS 18.2 o posterior en el iPhone 16, iPhone 16 Plus, iPhone 16 Pro y iPhone 16 Pro Max; en iOS 18.3 o posterior en el iPhone 16e; y en iOS 18.4 o posterior en el iPhone 16e Plus, iPhone 16 Pro mini e iPhone 15 Pro con Neural Engine para usar Inteligencia Visual.",
      "La duración de la batería depende del uso y la configuración. La batería tiene ciclos de carga limitados y eventualmente necesitará ser reemplazada.",
      "Requiere un iPhone y un Apple Watch con un chip de banda ultraancha de segunda generación. La disponibilidad de la banda ultraancha varía según la región."
    ],
    avisos: [
      "Los modelos de iPhone 14, iPhone 15 y iPhone 16 (números A2650, A2651, A2649, A2632, A2846, A2847, A2848, A2849, A3081, A3082, A3083, A3084 y A3212) que ofrece Apple para EE.UU. y Puerto Rico se activan exclusivamente con una eSIM y no son compatibles con tarjetas SIM físicas. El uso de la eSIM requiere un plan de servicio móvil (que puede incluir restricciones sobre el cambio de proveedor de servicio y roaming, incluso una vez vencido el contrato). No todos los operadores admiten la eSIM. El uso de la eSIM puede estar desactivado en los iPhone comprados a través de algunos operadores. Consulta los detalles con tu operador. Para obtener más información, visita apple.com/co/esim.",
      "Las funcionalidades están sujetas a cambios. Algunas funcionalidades, aplicaciones y servicios podrían no estar disponibles en todas las regiones o idiomas.",
      "Algunas funcionalidades requieren hardware y software específicos. Para obtener más información, consulta la disponibilidad de funcionalidades.",
      "Honor of Kings: World estará disponible más adelante."
    ]
  };

  return (
    <div className="container">
      <h1 className="title">{data.titulo}</h1>
      <ol className="list">
        {data.notas.map((nota, index) => (
          <li key={index} className="list-item">
            {nota}
          </li>
        ))}
      </ol>
      <ol className="title">{data.avisos}</ol>
    </div>
  );
}

export default Villamarin_terminos_condiciones;