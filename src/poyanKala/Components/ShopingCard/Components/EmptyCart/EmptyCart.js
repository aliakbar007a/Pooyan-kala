import { Fragment } from 'react'
import './EmptyCart.css'
import { Link } from 'react-router-dom'

export const EmptyCart = ()=>{
    return(
        <Fragment>
            <div className='emptynote'>
            <p >سبد خرید شما خالی است </p>
        </div>
        <button className='backtoshop'>
           <Link to="/">
           بازگشت به فروشگاه
           </Link>
        </button>
        </Fragment>
    )
}