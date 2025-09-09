import { useRef } from 'react'
import './Grass.css'

function MyButton(){
  return(
    <button   className='button'>Más información</button>
    
    
  );
}
const i16pro = {
  name: 'iPhone 16 Pro',
  imgUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_medium_2x.png',
  descripcion: 'El iPhone en su máxima expresión.',
  imgUrlintelligence: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large_2x.png',
  intelligence:'Apple Intelligence',
  imgUrlGPU:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_a18_pro__exkx38vklpci_large_2x.png',
  gpu:'Chip A18 Pro con GPU de 6 núcleos',
  imgUrlCtl:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large_2x.png',
  control:'Control de la Cámara',
  imgUrlCamera:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_iphone_16_pro_camera__edtadvfv6hg2_large_2x.png',
  despCamera:["Sistema de cámaras Pro","Nuestra cámara Fusion de 48 MP más avanzada","Cámara teleobjetivo de 5x","Cámara ultra gran angular de 48 MP","Inteligencia Visual te muestra un mundo de información"],
  imgUrlBateria:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png',
  bateria:'Hasta 33 horas de reproducción de video',

};

const i16 = {
  name: 'iPhone 16',
  imgUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_medium_2x.png',
  descripcion: 'Repleto de posibilidades.',
  imgUrlintelligence: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large_2x.png',
  intelligence:'Apple Intelligence',
  imgUrlGPU:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_a18__bpom9lrselte_large_2x.png',
  gpu:'Chip A18 con GPU de 5 núcleos',
  imgUrlCtl:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_camera_button__e83hkgwaefam_large_2x.png',
  control:'Control de la Cámara',
  imgUrlCamera:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_iphone_16_camera__fbzexjpz33iy_large_2x.png',
  despCamera:["Sistema avanzado de dos cámaras","Cámara Fusion de 48 MP","Teleobjetivo de 2x","Cámara ultra gran angular de 12 MP","Inteligencia Visual te muestra un mundo de información"],
  imgUrlBateria:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png',
  bateria:'Hasta 27 horas de reproducción de video',

};

const i16e = {
  name: 'iPhone 16e',
  imgUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16e__cubm3xoy5qaa_large_2x.png',
  descripcion: 'Un nuevo iPhone. Un gran precio.',
  imgUrlintelligence: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large_2x.png',
  intelligence:'Apple Intelligence',
  imgUrlGPU:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_a18__bpom9lrselte_large_2x.png',
  gpu:'Chip A18 con GPU de 4 núcleos',
  imgUrlCtl:'https://cdn-icons-png.flaticon.com/128/271/271207.png',
  control:'',
  imgUrlCamera:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_iphone_16e_camera__czsbuoy3qb8m_large_2x.png',
  despCamera:["Sistema de cámara dos en uno","Cámara Fusion de 48 MP","Teleobjetivo de 2x","-","Inteligencia Visual te muestra un mundo de información"],
  imgUrlBateria:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png',
  bateria:'Hasta 26 horas de reproducción de video',

};

const i15 = {
  name: 'iPhone 15',
  imgUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_15__buwagff0mwwi_small_2x.png',
  descripcion: 'Increíble como siempre.',
  imgUrlintelligence: 'https://cdn-icons-png.flaticon.com/128/271/271207.png',
  intelligence:'',
  imgUrlGPU:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_a16__d1p797ptmg6e_large_2x.png',
  gpu:'Chip A16 Bionic con GPU de 5 núcleos',
  imgUrlCtl:'https://cdn-icons-png.flaticon.com/128/271/271207.png',
  control:'',
  imgUrlCamera:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_iphone_15_camera__gfh1sh7ru0ya_large_2x.png',
  despCamera:["Sistema de dos cámaras","Cámara principal de 48 MP","Teleobjetivo de 2x","Cámara ultra gran angular","-"],
  imgUrlBateria:'https://www.apple.com/v/iphone/home/cb/images/overview/select/product_tile_icon_battery_100__den5pjokk60y_large_2x.png',
  bateria:'Hasta 26 horas de reproducción de video',

};


function Grass_seccion(){

  const scrollRef = useRef(null);

const mover = (cantidad) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: cantidad,
        behavior: "smooth"
      });
    }
  };
  return(
    <>
      <div  className='header'>
        <h1 className='titulo1'>Conoce a la familia.</h1>
        <h3 className='titulo3'>Comparar todos los modelos  &gt;</h3> 
      </div>
      <div className='contenedor'>
        <div  ref={scrollRef} id="scrollArea" className='principal'>
          <li>
            <img className='iphone' src={i16pro.imgUrl} alt="Iphone16pro" />
            <div className='puntos'>
              <p className='colorcafe'></p>
              <p className='colorbeige'></p>
              <p className='colorblanco'></p>
              <p className='colornegro'></p>
            </div>
            <h2 className='titulo2'>{i16pro.name}</h2>
            <p className='descripcion'>{i16pro.descripcion}</p>
            <div className='informacionComprar'>
              <MyButton/>
              <p className='titulo4'>Comprar &gt;</p>
            </div>
            <div className='lineaseparacion'>
              <img className='imgsecundarias' src={i16pro.imgUrlintelligence} alt="intelligence" />
              <p className='subtitulos'>{i16pro.intelligence}</p>
              <img className='imgsecundarias' src={i16pro.imgUrlGPU} alt="GPU" />
              <p className='subtitulos'>{i16pro.gpu}</p>
              <img className='imgsecundarias' src={i16pro.imgUrlCtl} alt="controlCamara" />
              <p className='subtitulos'>{i16pro.control}</p>
              <img className='imgsecundarias' src={i16pro.imgUrlCamera} alt="camara" />
              <ul>
                {i16pro.despCamera.map((item,index) => (
                  <li className='lisubtitulos' key={index}>{item}</li>
                )
                )}
              </ul>
              <img className='imgsecundarias' src={i16pro.imgUrlBateria} alt="Bateria" />
              <p className='subtitulos'>{i16pro.bateria}</p>
            </div>
          </li>

          <li>
            <img className='iphone' src={i16.imgUrl} alt="Iphone16pro" />
            <div className='puntos'>
              <p className='colorceleste'></p>
              <p className='colorverdeoliva'></p>
              <p className='colorrosa'></p>
              <p className='colorblanco'></p>
              <p className='colornegro'></p>
            </div>
            <h2 className='titulo2'>{i16.name}</h2>
            <p className='descripcion'>{i16.descripcion}</p>
            <div className='informacionComprar'>
              <MyButton/>
              <p className='titulo4'>Comprar &gt;</p>
            </div>
            <div className='lineaseparacion'>
              <img className='imgsecundarias' src={i16.imgUrlintelligence} alt="intelligence" />
              <p className='subtitulos'>{i16.intelligence}</p>
              <img className='imgsecundarias' src={i16.imgUrlGPU} alt="GPU" />
              <p className='subtitulos'>{i16.gpu}</p>
              <img className='imgsecundarias' src={i16.imgUrlCtl} alt="controlCamara" />
              <p className='subtitulos'>{i16.control}</p>
              <img className='imgsecundarias' src={i16.imgUrlCamera} alt="camara" />
              <ul>
                {i16.despCamera.map((item,index) => (
                  <li className='lisubtitulos' key={index}>{item}</li>
                )
                )}
              </ul>
              <img className='imgsecundarias' src={i16.imgUrlBateria} alt="Bateria" />
              <p className='subtitulos'>{i16.bateria}</p>
            </div>
          </li>

          <li>
            <img className='iphone' src={i16e.imgUrl} alt="Iphone16pro" />
            <div className='puntos'>
              <p className='colorblanco'></p>
              <p className='colornegro'></p>
            </div>
            <h2 className='titulo2'>{i16e.name}</h2>
            <p className='descripcion'>{i16e.descripcion}</p>
            <div className='informacionComprar'>
              <MyButton/>
              <p className='titulo4'>Comprar &gt;</p>
            </div>
            <div className='lineaseparacion'>
              <img className='imgsecundarias' src={i16e.imgUrlintelligence} alt="intelligence" />
              <p className='subtitulos'>{i16e.intelligence}</p>
              <img className='imgsecundarias' src={i16e.imgUrlGPU} alt="GPU" />
              <p className='subtitulos'>{i16e.gpu}</p>
              <img className='imgcontrol' src={i16e.imgUrlCtl} alt="controlCamara" />
              <p className='subtitulos'>{i16e.control}</p>
              <img className='imgsecundarias' src={i16e.imgUrlCamera} alt="camara" />
              <ul>
                {i16e.despCamera.map((item,index) => (
                  <li className='lisubtitulos' key={index}>{item}</li>
                )
                )}
              </ul>
              <img className='imgsecundarias' src={i16e.imgUrlBateria} alt="Bateria" />
              <p className='subtitulos'>{i16e.bateria}</p>
            </div>
          </li>

          <li>
            <img className='iphone' src={i15.imgUrl} alt="Iphone16pro" />
            <div className='puntos'>
              <p className='colorblanco'></p>
              <p className='colornegro'></p>
            </div>
            <h2 className='titulo2'>{i15.name}</h2>
            <p className='descripcion'>{i15.descripcion}</p>
            <div className='informacionComprar'>
              <MyButton/>
              <p className='titulo4'>Comprar &gt;</p>
            </div>
            <div className='lineaseparacion'>
              <img className='imgcontrol2' src={i15.imgUrlintelligence} alt="intelligence" />
              <p className='subtitulos'>{i15.intelligence}</p>
              <img className='imgsecundarias' src={i15.imgUrlGPU} alt="GPU" />
              <p className='subtitulos'>{i15.gpu}</p>
              <img className='imgcontrol' src={i15.imgUrlCtl} alt="controlCamara" />
              <p className='subtitulos'>{i15.control}</p>
              <img className='imgsecundarias' src={i15.imgUrlCamera} alt="camara" />
              <ul>
                {i15.despCamera.map((item,index) => (
                  <li className='lisubtitulos' key={index}>{item}</li>
                )
                )}
              </ul>
              <img className='imgsecundariasba' src={i15.imgUrlBateria} alt="Bateria" />
              <p className='subtitulos'>{i15.bateria}</p>
            </div>
          </li>
        </div>
        <div className="flechas">
          <button className="flecha" onClick={() => mover(-200)}>&lt;</button>
          <button className="flecha" onClick={() => mover(200)}>&gt;</button>
        </div>

      </div>
    </>
  );
}


export default Grass_seccion
