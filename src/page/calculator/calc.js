// import { useNavigate } from "react-router-dom"
// import React, { Fragment } from "react"
import "./calc.css"
import { useState } from "react"; 

const calcHandler = (prop)=>{
   setCalc(prop)
}
export const Calc= ()=>{
     
    return(
    <div className="calc_content">
        <form>
            <div className="calc_screen">
                <h1></h1>
            </div>
            <div className="calc_btn_content">
                <input id="bg_red" type="button" value="clear" onClick={()=>{calcHandler('clear')}}/>
                <input type="button" value="p" onClick={()=>{calcHandler('p')}}/>
                <input type="button" value="%" onClick={()=>{calcHandler('%')}}/>
                <input type="button" value="/" onClick={()=>{calcHandler('/')}}/>
                <input type="button" value="7" onClick={()=>{calcHandler('7')}}/>
                <input type="button" value="8" onClick={()=>{calcHandler('8')}}/>
                <input type="button" value="9" onClick={()=>{calcHandler('9')}}/>
                <input type="button" value="*" onClick={()=>{calcHandler('*')}}/>
                <input type="button" value="4" onClick={()=>{calcHandler('4')}}/>
                <input type="button" value="5" onClick={()=>{calcHandler('5')}}/>
                <input type="button" value="6" onClick={()=>{calcHandler('6')}}/>
                <input type="button" value="-" onClick={()=>{calcHandler('-')}}/>
                <input type="button" value="1" onClick={()=>{calcHandler('1')}}/>
                <input type="button" value="2" onClick={()=>{calcHandler('2')}}/>
                <input type="button" value="3" onClick={()=>{calcHandler('3')}}/>
                <input type="button" value="+" onClick={()=>{calcHandler('+')}} />
                <input type="button" value="0" onClick={()=>{calcHandler('0')}}/>
                <input type="button" value="." onClick={()=>{calcHandler('.')}}/>
                <input id="bg_purple" type="button" value="=" onClick={()=>{calcHandler('=')}} />
            </div>
        </form>
     </div>
    )
}