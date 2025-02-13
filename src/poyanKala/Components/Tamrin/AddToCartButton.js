import React from "react"; 
import { createContext, useContext, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
const AddToCartButton = () => {
   
   const [ps5Items]  = useState([
           { 
              id: 1,
               name: "سونی  پلی استیشن 5 اسلیم استاندارد  ps5 slim standard اروپا 2016",
               price: 1000000,
               quantity: 1,
            }])
            // localStorage.setItem("test" , JSON.stringify(ps5Items))
       const [isSendArry , setIsSendArry] = useState(false)
        const navigate = useNavigate();
       const addToCart = ()=>{
           const existingCart =  (JSON.parse(localStorage.getItem("cartItems")) || []);
           const updateCart = [...existingCart , ...ps5Items]
           localStorage.setItem("cartItems" , JSON.stringify(updateCart)) ;
        //    if(!Array.isArray(existingCart)){
        //        console.error("not mojoood")
        //        localStorage.setItem("cartItems" , JSON.stringify([]));
        //        return;
        //    }
         
           
         //   localStorage.setItem("aliakbar" , "sdfg")
         //   console.log("cartItem :" , localStorage.getItem("cartItems"));
         //   console.log(navigator.storage);
           
           
           alert(` با موققیت در سبد ذخیره شد`)
           navigate("/shopingcard" )
       }

     return (
        <React.Fragment>
        <div className="spaninfops5t0">
        <span className="shenast0"> شناسه محصول: 1234</span>
        <span className="dasteht0"> دسته: پلی استیشن- کنسول بازی </span>
        <p className="pricet0">تومان 1000000</p>

        <button className="addtocartt0" onClick={()=>addToCart()}> افزودن به سبد خرید </button> 
        
       </div>
      
         
        </React.Fragment>
        );
         }; export default AddToCartButton; 
         
