import { useEffect, useState } from 'react'

import './Ps5Product.css'
import ps5Img from '../../imgs/gggg.jpg'
import leftIcon from '../../imgs/left-icon.svg'
import rightIcon from '../../imgs/right-icon.svg'
import { Link } from 'react-router-dom'

export const Ps5Product = ()=>{
    const [url , setUrl] = useState('http://localhost:3000/ps5Arry')
    const [ps5 , setPs5] = useState([])
    useEffect(()=>{
  
      fetch(url)
          .then(res => res.json())
          .then(data => setPs5(data))
          
  },[url])
 
  const clickH =()=>{
    console.log(ps5);
  }
    return(
        <div className="product-console">
       
        <h3 className="console-productName"> کنسول بازی</h3><hr />
            {/* <button onClick={clickH}>click</button> */}
            <div className="list-of-product">
            {/* <button className="pre-item2">
                <img src={leftIcon} alt=""/>
            </button> */}
            <ul className="ps5console">  
                {
                    ps5 && ps5.map((ps5)=>{
                        return(
                            <Link to='/ps5' key={ps5.id}>
                            <li  className='last-item-product2'>
                                <img src={ps5Img} className='ps5img'/>
                                <span className='namojod1'>ناموجود</span>
                                <p className='laptop-note12'>{ps5.capshen}</p>
                                <p className='price-laptop12'>{ps5.price}</p>
                            </li>
                            </Link>
                        )
                    })
                }
                </ul>
                {/* <button className="next-item2">
                <img src={rightIcon} alt=""/>
            </button> */}

            </div>
           
        </div> 
        
      
       
    )
}
