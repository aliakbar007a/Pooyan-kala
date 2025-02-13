import { Fragment, useEffect, useState } from 'react'
import { Navmenu } from '../NavMenu/Navmenu'
import { EmptyCart } from './Components/EmptyCart/EmptyCart'
import './ShopingCard.css'
import CartPage from './Components/CartPage/CartPage'
import { Footer } from '../../Footer/Footer'

export const ShopingCard = ()=>{
    const [cartItems, setCartItems] = useState( [] );
    const [empty , setEmpty] = useState(null)
    useEffect(() => {
       const dataCart = localStorage.getItem("cartItems")
       const parsedCart = JSON.parse(dataCart)
       console.log(parsedCart);
       setCartItems(parsedCart)
       console.log(cartItems);
     }, [])
     useEffect(()=>{
        if(cartItems.length > 0){
            setEmpty(true)
        }else{
            setEmpty(false)
        }
     }, [cartItems])
    
    return (
        <Fragment>
            <div className='bodyshoping'>
            <Navmenu/>
            
           {
            (empty) ? (
                
                <CartPage/>
            ):(
                <EmptyCart/>
            )
           }
           <Footer/> 
        </div>
      
        </Fragment>
    )
}