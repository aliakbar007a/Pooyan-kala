import './Login.css'
import { Link } from "react-router-dom"

export const Login = ()=>{
    return(
        <div className='body'>
            <h1 className='tt'><span className='poyan'>پویان</span> کالا</h1>
            <div className='loginPage'>
                <div className='headerLog'>
                <h2 className='vorod'>ورود</h2>
                <hr className='hr'/>
                </div>
                <div className='bodyLog'>
                <h3 className='phone'> :شماره موبایل</h3>
                <input className='inputNumber' placeholder='09123456789' />
                <button className='btn'> ورود با کد یکبار مصرف</button>
                </div>
                <div className='foterLog'>
                <p >کاربر جدید هستید؟ </p>
                <Link to="/singup">ثبت نام</Link>
                <Link to="/" className='backToPage'>برگشت به صفحه اصلی</Link>
                </div>
            </div>
        </div>
    )
}