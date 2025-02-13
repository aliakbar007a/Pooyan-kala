import { useEffect, useState } from 'react'

import './AnvaeImg.css'
import console from '../../imgs/anvae-console.jpg' 
import scaner from '../../imgs/anvae-scaner.jpg' 
import laptop from '../../imgs/anvae-laptop.jpg' 
import pc from '../../imgs/anvae-pc.jpg' 



export const AnvaeImg = ()=>{
 return(
    <div className="imgA">
            <img src={pc} alt="" className="anvaePCimg"/>
            <img src={laptop} alt="" className="anvaeLaptopimg"/>
            <img src={scaner} alt="" className="anvaeScanerimg"/>
            <img src={console} alt="" className="anvaeConsoleimg"/>
           </div>
            
 )   

}