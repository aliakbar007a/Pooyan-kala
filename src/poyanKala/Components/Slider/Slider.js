import './Slider.css'
import Ps5Img from '../../imgs/PS5.webp'
import S23 from '../../imgs/s23BigImg.webp'
import LaptopBig from '../../imgs/bigLaptop.jpg'
import RightItem from '../../imgs/right-item-2.svg'
import LeftItem from '../../imgs/left-item-2.svg'
import { useState } from 'react'

export const Slider = ()=>{
  const [img , setImg] = useState([Ps5Img,S23,LaptopBig])
  const [index , setIndex] = useState(0)
  const p =()=>{
    setIndex(index - 1)
    if(index == 0 ){
      setIndex(img.length - 1)
      
      
      
  }
  }
  const n=()=>{
    setIndex(index + 1)
    if (index == img.length - 1) {
        setIndex(0);
    }
}
    return (
        <div className="container-slider">
        <div className="slider">
          <div className="slider-item active">
            <img src={img[index]} className="img-slider" />
          </div>
          <button type="button" className="prev" onClick={p}><i className="icofont icofont-ui-previous" ></i>
            <img src={LeftItem} alt=""/>
        </button>
          <button type="button" className="next" onClick={n}><i className="icofont icofont-ui-next" ></i>
            <img src={RightItem} alt=""/>
        </button>
        </div>
      </div>
    )
}