import { useEffect } from 'react'
import './Pishkhan.css'
import { Link } from "react-router-dom"
import { Login } from '../Login/Login'
import { SingUp } from '../SingUp/SingUp'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

export const Pishkhan = ()=>{
   
    return(
        
    
        <div className="pishkhan" id={'pishkhan'}>
         <button> <Link to="/login">ورود به پیشخوان</Link></button>
         <p >کاربر جدید هستید؟ </p>
         <Link to="/singup">ثبت نام</Link>
          </div>
        
    )
}

{/* <Router>
<Routes>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router> */}
