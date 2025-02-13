import React from 'react';
import './BuyLapTopPage.css'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export const BuyLapTopPage = ()=>{
    const [laptopItems]  = useState([
            {
                id: 2,
                name: " لپ تاب 15.6 اینچی ایسوس مدل vivoboock F1504VA-i3 1315U 8GB 512SSD UHD",
                price: 2000000,
                quantity: 1,
               }
        ])
        
        const [isSendArry , setIsSendArry] = useState(false)
         const navigate = useNavigate();
        const addToCart = ()=>{
            setIsSendArry(true)
            const existingCart =  JSON.parse(localStorage.getItem("cartItems")) || [];

            // if(!Array.isArray(existingCart)){
            //     console.error("not mojoood")
            //     localStorage.setItem("cartItems" , JSON.stringify([]));
            //     return;
            // }
            
            const updateCart = [...existingCart , ...laptopItems]
            console.log(updateCart);
            
            localStorage.setItem("cartItems" , JSON.stringify(updateCart)) ; 
            alert(` با موققیت در سبد ذخیره شد`)
            navigate("/shopingcard" , {state : {laptopItems } })
        }

    return(
        <React.Fragment>
               <div className="spaninfops5t0">
               <span className="shenast0"> شناسه محصول: 1234</span>
               <span className="dasteht0"> دسته: پلی استیشن- کنسول بازی </span>
               <p className="pricet0">تومان 1000000</p>
               <button className="addtocartt0" onClick={()=>{addToCart()}}> افزودن به سبد خرید </button> 
              </div>
             
                
               </React.Fragment>
    )
}