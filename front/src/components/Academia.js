import video from '../images/video.gif'
import '../styles/academia.css'

const Academia=()=>{
    return(
        <div className='academia'>
        <div className="tenis-container">
        <div className="tenis-text">
          Tennis - Tennis - Tennis - Tennis - Tennis - Tennis - Tennis - Tennis - Tennis - Tennis - Tennis - Tennis - Tennis
        </div>
      </div>
      <div className="video">
           <img src={video} id='academia'/>
      </div>
      <div className="imgText" id='galeria'>
            <div className='divTitle'>
            <p className='textTitle'>
                El Tenis es como el ajedrez, debes ver lo que ocurre y hacer ajustes
            </p>
            </div>
            <div className='divText'>
                <p className='imagesText'> 
                Bienvenido a nuestra academia de tenis. Nuestro enfoque único en clases personalizadas te brinda la oportunidad de recibir una atención individualizada de nuestro profesor experto. Ya seas un principiante o un jugador experimentado, nuestras clases personalizadas están diseñadas para ayudarte a mejorar tu técnica, tácticas y habilidades en el tenis.
                </p>
            </div>
        </div>
      </div>
    )
}
export default Academia