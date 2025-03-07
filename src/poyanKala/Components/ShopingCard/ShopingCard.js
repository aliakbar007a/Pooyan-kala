import { createContext, Fragment, useContext, useEffect, useState } from 'react'
import { Navmenu } from '../NavMenu/Navmenu'
import { EmptyCart } from './Components/EmptyCart/EmptyCart'
import './ShopingCard.css'
import CartPage from './Components/CartPage/CartPage'
import { Footer } from '../../Footer/Footer'
import { shopingCardContext } from '../../../App'

// export const shopingCardContext = createContext()

export const ShopingCard = ()=>{
    const [cartItems, setCartItems] = useState( [] );
    const [empty , setEmpty] = useState(null)
    const {productInBox , setProductInBox} = useContext(shopingCardContext)
    
    useEffect(() => {
       const dataCart = localStorage.getItem("cartItems")
       const parsedCart = JSON.parse(dataCart)
       console.log(parsedCart);
       setCartItems(parsedCart)
     }, [])
     useEffect(()=>{
        setProductInBox(cartItems.length)
        console.log(cartItems.length  );
     },[cartItems])
     useEffect(()=>{
        if(cartItems.length > 0){
            setEmpty(true)
        }else{
            setEmpty(false)
        }
     }, [cartItems])
    
    return (
         
       
            <div className='bodyshoping'>

            <Navmenu/>
           {
            (empty) ? (<CartPage/>) : (<EmptyCart/>)
           }
           <Footer/> 
        </div>
      
        
       
    )
}