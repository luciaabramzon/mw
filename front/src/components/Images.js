import '../styles/images.css'
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import image3 from '../images/image3.svg'
import image4 from '../images/image4.svg'
import image5 from '../images/image5.svg'
import image6 from '../images/image6.svg'
import image7 from '../images/image7.svg'
import image8 from '../images/image8.svg'
import logoImg from '../images/logoImg.svg'

const Images=()=>{
    return(
        <>
        
        <div className='imagesGrid'>
            <div className='row'>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            </div>
            <div className='row'>
            <img src={image5}/>
            <img src={image6}/>
            <img src={image7}/>
            <img src={image8}/>
            </div>
            <div className='buttonImages'>
                <button>Ver mas</button>
            </div>
        </div>
        <div className='logoImg'>
            <img src={logoImg}/>
        </div>
        </>
    )
}

export default Images