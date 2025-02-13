import { Link } from 'react-router-dom'
import tavilEx from '../../../imgs/tahvilEX.svg'
import orgkala from '../../../imgs/orginalKala.svg'
import pay from '../../../imgs/pay.svg'
import './InnerBox.css'

 const InnerBox = ()=>{
    return(
        <div className="countainerfooter">
     
        <Link to="#" className="footer">
            <div className="c1" >
                <img src={tavilEx} className='feature-item' />
           <p>تحویل اکسپرسی</p>
            </div>
        </Link>
        <Link to="#" className="footer">
            <div className="c2" >
            <img src={pay} className='feature-item' />
            <p> پرداخت در محل</p>
            </div>
        </Link>
        <Link to="#" className="footer">
            <div className="c3" >
            <img src={orgkala} className='feature-item' />
            <p>ضمانت اصل بودن کالا</p>
            </div>
        </Link>
       {/* <hr className='hbr'/> */}
    </div>
    )
}
export default InnerBox