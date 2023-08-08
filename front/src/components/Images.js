// import '../styles/images.css'
// import image1 from '../images/image1.svg'
// import image2 from '../images/image2.svg'
// import image3 from '../images/image3.svg'
// import image4 from '../images/image4.svg'
// import image5 from '../images/image5.svg'
// import image6 from '../images/image6.svg'
// import image7 from '../images/image7.svg'
// import image8 from '../images/image8.svg'
// import logoImg from '../images/logoImg.svg'

// const Images=()=>{
//     return(
//         <>
        
//         <div className='imagesGrid'>
//             <div className='row'>
//             <img src={image1}/>
//             <img src={image2}/>
//             <img src={image3}/>
//             <img src={image4}/>
//             </div>
//             <div className='row'>
//             <img src={image5}/>
//             <img src={image6}/>
//             <img src={image7}/>
//             <img src={image8}/>
//             </div>
//             <div className='buttonImages'>
//                 <button>Ver mas</button>
//             </div>
//         </div>
//         <div className='logoImg'>
//             <img src={logoImg}/>
//         </div>
//         </>
//     )
// }

// export default Images

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../styles/images.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/image3.svg';
import image4 from '../images/image4.svg';
import image5 from '../images/image5.svg';
import image6 from '../images/image6.svg';
import image7 from '../images/image7.svg';
import image8 from '../images/image8.svg';
import logoImg from '../images/logoImg.svg';

const Images = () => {
  return (
    <div className='imagesContainer'>
      <div className='imagesGrid'>
        <div className='row'>
          <img src={image1} alt='Image 1' />
          <img src={image2} alt='Image 2' />
          <img src={image3} alt='Image 3' />
          <img src={image4} alt='Image 4' />
        </div>
        <div className='row'>
          <img src={image5} alt='Image 5' />
          <img src={image6} alt='Image 6' />
          <img src={image7} alt='Image 7' />
          <img src={image8} alt='Image 8' />
        </div>
        <div className='buttonImages'>
          <button>Ver mas</button>
        </div>
      </div>

      <div className='bannerContainer'>
        <Carousel showThumbs={false} autoPlay infiniteLoop className='bannerImages'>
          <div>
            <img src={image1} alt='Image 1' />
          </div>
          <div>
            <img src={image2} alt='Image 2' />
          </div>
          <div>
            <img src={image3} alt='Image 3' />
          </div>
          <div>
            <img src={image4} alt='Image 4' />
          </div>
          <div>
            <img src={image5} alt='Image 5' />
          </div>
          <div>
            <img src={image6} alt='Image 6' />
          </div>
          <div>
            <img src={image7} alt='Image 7' />
          </div>
          <div>
            <img src={image8} alt='Image 8' />
          </div>
        </Carousel>
      </div>

      <div className='logoImg'>
        <img src={logoImg} alt='Logo' />
      </div>
    </div>
  );
};

export default Images;
