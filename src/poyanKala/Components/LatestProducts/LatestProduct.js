import { useEffect, useState } from 'react'
import { InstantOffer } from '../InstantOffer/InstantOffer'
import './LatestProduct.css'
import laptopImg from '../../imgs/hhhh.png'
import leftIcon from '../../imgs/left-icon.svg'
import rightIcon from '../../imgs/right-icon.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const LatestProducts = ()=>{
    const [url , setUrl] = useState('http://localhost:3000/laptopArry')
    const [laptops , setLaptops] = useState([])
    useEffect(()=>{
  
      fetch(url)
          .then(res => res.json())
          .then(data => setLaptops(data))
          
  },[url])
  const [isVisible ,setIsVisible] = useState(5);
  
  
//   useEffect(() =>{
//     const handleResize = () =>{
//         if(window.innerWidth >= 1758){
//        setIsVisible(5)
         
            
//         }else if(window.innerWidth >= 1200){
//            setIsVisible(4)
            
//         }else if(window.innerWidth >= 100){
//            setIsVisible(3)
            
//         }else{
//             setIsVisible(2)
//         }
//     }
//   window.addEventListener("resize " , handleResize)
//   handleResize(); //بررسی اولیه
//   console.log(window.innerWidth);
//   return() =>{
//     window.removeEventListener("resize" , handleResize);
//   }
  
//   },[])
 
//   const [width ,setWidth] = useState(window.innerWidth)
//   useEffect(()=>{
//     const handlesize = ()=>{
//         setWidth(window.innerWidth);
//         console.log(width);
        
//     };
//     window.addEventListener('resize' , handlesize)
//     handlesize()
    
//   } , )

// useEffect(()=>{
//     const mediaQuery = window.matchMedia("(max-width:1400px)");
//     const handlesize = (e)=>{
//         setLaptops(e.matchs ? laptops.slice(0 , 3) : laptops)
//     };
//     handlesize(mediaQuery);
//     return ()=> mediaQuery.removeEventListener('change', handlesize)
// },[])
    return(
        <div className="last-product">
        <div className="tite-name">
            <h3 className="last-productName">آخرین محصولات</h3><hr id="hrd" />
            {/* <button onClick={clickH}>click</button> */}
            {/* <button className="pre-item1">
                <img src={leftIcon} alt=""/>
            </button> */}
            <div className="owl-item">
            
             
                {
                // .slice(0,2)
                    laptops && laptops.slice(0 , isVisible).map((laptop)=>{
                        return(
                            <Link key={laptop.id} to="/laptop" className='linktolaptop'>
                            <div  className='laptop-card' >
            
                               <img src={laptopImg} className='laptop-img' />
                               {/* <span className='namojod'>ناموجود</span> */}
                               <p className='laptop-name'>{laptop.capshen}</p>
                               <p className='laptop-price'>{laptop.price}</p>
                           </div>
                           </Link>
                        )
                    })
                }
                 {/* <button className="next-item1">
                <img src={rightIcon} alt=""/>
            </button> */}
            </div>
           
           
        </div> 
        <InstantOffer/>
        </div> 
       
    )
}
