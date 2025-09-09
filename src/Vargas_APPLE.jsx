import './Vargas_iphone.css';
import Iphone from './Iphone';

const fondo = {
  imageUrl: 'apple.png'
};

function Vargas_APPLE() {
  return (
    <div className="contenedor">
      <img
        className="portada"
        src={fondo.imageUrl}
        alt={'Foto de ' + fondo.name}
      />
    </div>
  );
}

export default Vargas_APPLE;