import logo from '../images/logo.png'
import brand from '../images/brand.svg'
import { Icon } from 'semantic-ui-react'
import '../styles/footer.css'
const Footer=()=>{
    return(
       
            <div className="footer">
            <div className="logoFooter">
            <img src={logo}/>
            <p className='footerTitle'>Martin Williams</p>
            </div>
            <div className='brand'>
            <img src={brand}/>
            </div>
            <div className='socialNetwork'>
            <Icon className='footerIcon' name='instagram'/>
            <Icon className='footerIcon'  name='whatsapp'/>
            <Icon className='footerIcon'  name='linkedin'/>
            </div>
            </div>
        
    )

}
export default Footer