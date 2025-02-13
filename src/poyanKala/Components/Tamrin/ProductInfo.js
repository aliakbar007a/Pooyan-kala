import React from "react";
import { useState, useEffect } from "react";
 import "./Ps5Page.css";
  const ProductInfo = () => { 
    const [url , setUrl] = useState('http://localhost:3000/ps5Info')
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[data , url])
    
        return(
           <div className="infot0">
           <h6>ویژگی های محصول</h6>
           <ul  className='listitemt0' >
              {
                data && data.map((info)=>{
                    return(
                        <li key={info.id}>
                            {info.info}
                        </li>
                    )
                })
              }
    
           </ul>
              
        </div>
        );
    };
            export default ProductInfo; 
    