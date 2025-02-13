import React, { useContext, useEffect, useState } from 'react';
import './CartPage.css'
// import { BuyContext } from '../../../Ps5Page/Components/BuyPs5Page/BuyPs5Page';

import { useLocation } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState( [] );
  const [discountCode, setDiscountCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(0); // قیمت کل اولیه
  const [discountApplied, setDiscountApplied] = useState(false);
  
  useEffect(() => {
    const dataCart = localStorage.getItem("cartItems")
    const parsedCart = JSON.parse(dataCart)
    console.log(parsedCart);
    setCartItems(parsedCart)
    console.log(cartItems);
  }, [])
  // useEffect(()=>{
  //   console.log(cartItems);
    
  // }, [cartItems])
    // const data = localStorage.getItem("cartItem")
    // if(data){
    //   const parsedCart = JSON.parse(data)
    //   setCartItems(parsedCart)
    //   console.log( 'parsedCart' , parsedCart);
    // }
    // if (data) {
      // () => {
      //   const storedCart = localStorage.getItem("cartItems")
      //   return storedCart ? JSON.parse(storedCart) :
    // }
        // const storedCart = localStorage.getItem("cartItems");
    // setCartItems(JSON.parse(storedCart))
    // const parsedCart = JSON.parse(storedCart);
    // setCartItems(parsedCart)
    // // setCartItems(JSON.stringify(storedCart))
    // console.log(cartItems);
    //  console.log( localStorage.getItem("cartItems"));

    // if(storedCart){


  //   const [ps5Items]  = useState([
  //     { 
  //        id: 1,
  //         name: "سونی  پلی استیشن 5 اسلیم استاندارد  ps5 slim standard اروپا 2016",
  //         price: 1000000,
  //         quantity: 1,
  //      }])
  // const [ppp , setPpp] = useState([])
  // localStorage.setItem("ooo" , JSON.stringify(ps5Items))
  // const x = localStorage.getItem("ooo")
  // console.log(localStorage.getItem("ooo"));
  // setPpp(x)
  // console.log(ppp);
  // const y =  JSON.parse(x)
  // console.log(y);
  // setPpp(y)
  // console.log(ppp);



      //  try {
      //     const storedCart = localStorage.getItem("cartItems");
      //     setCartItems(storedCart)
      //     console.log("setcartitem befor pars:" , cartItems);
          
      //    if(storedCart){
      //     const parsedCart = JSON.parse(storedCart)
      //     if(Array.isArray(parsedCart)){
      //       console.log(parsedCart);
            
      //       setCartItems(parsedCart);   
           
      //       console.log(cartItems);

      //     }else{
      //       setCartItems([]);
      //     }
      //    }


          
      //   } catch (error){
      //     setCartItems([])
      //     console.log(error);
      //   }    
  
      
      
      

  

  



  // اعمال کد تخفیف
  const applyDiscount = () => {
    if (discountApplied) {
      alert('کد تخفیف قبلا اعمال شده!')
    } else {
      if (discountCode === 'DISCOUNT10') {
        const discountAmount = totalPrice * 0.1; // 10 درصد تخفیف
        setTotalPrice(totalPrice - discountAmount);
        setDiscountApplied(true);
      } else {
        alert("کد تخفیف معتبر نیست");
      }
    };
  }

  // حذف آیتم از سبد خرید
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    if (updatedCart.length === 0) {
      setTotalPrice(0);
    }


  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total)

    if (total < 0) {

      setTotalPrice(0)
    }

  }, [cartItems])


  const changeHandlerQuanity = (number, id) => {
    const updatecart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: number }
      }
      return item
    })
    setCartItems(updatecart)
    localStorage.setItem("cartItems", JSON.stringify(updatecart))


  }
  return (
    <div>
    
          <div className='containerCartPage'>
            <div className='headcartpage'>
              <ul>
                <li>مجموع</li>
                <li>تعداد</li>
                <li>قیمت</li>
                <li>محصول</li>
                <li>حذف</li>
              </ul>
            </div>
            <div className='midlecartpage'>
             
              {
               cartItems.map((item) => 
                  <ul key={item.id}>
                    <li> {item.price * item.quantity}تومان</li>
                    <li><input className='numberInput' type="number" value={item.quantity} onChange={(e) => { changeHandlerQuanity(Number(e.target.value), item.id) }} /> </li>
                    <li>{item.price} تومان</li>
                    <li className='itemname'>{item.name}</li>
                    <li><button onClick={() => removeItem(item.id)}>حذف</button></li>
                  </ul>
                )
              }
            </div> 
           
            <div className='discountcart'>
              <div>
              <input type="text" placeholder='کد تخفیف' onChange={(e) => setDiscountCode(e.target.value)} />
              <button onClick={applyDiscount} className="dodiscount"> اعمال کد تخفیف</button>
              <p> جمع سبد خرید : {totalPrice} تومان</p>
              </div>
              <div>
              <button onClick={() => { alert("سبد خرید بروز شد") }} className="updatecartpage"> به روزرسانی سبد خرید</button>

              </div>
            </div>

          </div>


        
    </div>
  );

};

export default CartPage;