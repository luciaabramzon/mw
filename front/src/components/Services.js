import eImg from '../images/eImg.svg'
import '../styles/services.css'
import imgEdades from '../images/imgEdades.svg'
import clasesImg from '../images/clases.svg'
const Services=()=>{
    return(
        <>
        <div className="eIntegral" id='servicios'>
        <div className="eText">
            <h5>Entrenamiento integral</h5>
            <ul>
                <li>Tecnica de Golpe</li>
                <p>Aprende la forma correcta y la mecánica adecuada para cada golpe, desde el revés y el drive hasta el servicio y el globo.</p>
                <li>Tacticas de juego</li>
                <p>Descubre estrategias inteligentes para leer el juego, mejorar tu posicionamiento en la cancha y tomar decisiones estratégicas ganadoras.</p>
                <li>Acondicionamiento fisico</li>
                <p>Trabajamos en tu resistencia, agilidad y fuerza para que estés en la mejor forma física en cada partido.</p>
            </ul>
        </div>
        <div className="eImg">
        <img src={eImg}/>
        </div>
        </div>
        <div className='edades'>
            <div className='edadesText'>
                <h5>Todas las edades y niveles</h5>
                <p>Nuestra academia acoge a estudiantes de todas las edades y niveles. Desde niños que dan sus primeros pasos en el tenis hasta adultos que desean perfeccionar su juego, todos son bienvenidos en nuestra comunidad de tenis.</p>
            </div>
            <div className='edadesImg'>
            <img src={imgEdades}/>
            </div>
        </div>
        <div className='clases'>
            <div className='clasesText'>
                <h5>Clases individuales o en grupos</h5>
                <p>Ofrecemos clases tanto individuales como en grupos. Si prefieres aprender a tu propio ritmo o compartir la experiencia con un amigo o familiar, estaremos encantados de adaptarnos a tus preferencias.</p>
            </div>
            <div className='clasesImg'>
            <img src={clasesImg}/>
            </div>
        </div>
        </>
    )
}
export default Services