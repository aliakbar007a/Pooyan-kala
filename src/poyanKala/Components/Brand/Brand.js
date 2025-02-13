import { useEffect, useState } from 'react'

import './Brand.css'
import logoImg from '../../imgs/logoPlaystation.png' 



export const Brand = ()=>{
    const [url , setUrl] = useState('http://localhost:3000/logoPlayStation')
    const [logoPS , setLogoPS] = useState([])
    useEffect(()=>{
  
      fetch(url)
          .then(res => res.json())
          .then(data => setLogoPS(data))
          
  },[url])
 return(
    <div className="logoPlaystation">
    <h3 className="logo-Name"> برند های ویژه</h3><hr />
    <div >
        <ul className="logo">
          {
            logoPS && logoPS.map((logo)=>{
              return(
                <li key={logo.id}  className="logoPsLi">
                  <img src={logoImg} className="logoPsimg"/>
                </li>
              )
            })
          }
        </ul>
    </div>
   </div>
 )
}