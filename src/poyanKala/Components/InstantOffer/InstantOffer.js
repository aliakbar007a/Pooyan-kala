import { useEffect, useState } from 'react'
import './InstantOffer.css'

import laptopImg from '../../imgs/hhhh.png'
import ps5img from '../../imgs/gggg.jpg'
import leftIcon from '../../imgs/left-icon.svg'
import rightIcon from '../../imgs/right-icon.svg'
import { Link } from 'react-router-dom'

export const InstantOffer = ()=>{
    const prolahzehii =[
        laptopImg,
        ps5img
    ]
    const prolahzehiiNote =[
        'لپ تاب 15.6 اینچی ایسوس مدل vivoboock F1504VA-i3 1315U 8GB 512SSD UHD',
        'سونی  پلی استیشن 5 اسلیم استاندارد  ps5 slim standard اروپا 2016'
    ]
    const indexImg = 0
    // useEffect(()=>{
    //     setInterval(()=>{
    //         if(indexImg){
    //             indexImg--
    //             laptopLahzah.setAttribute('src',prolahzehii[indexImg])
    //             laptopNote.innerHTML = prolahzehiiNote[indexImg]
    //             // laptopLink.setAttribute('href',prolahzehiiLink[indexImg])
    //         }else{
    //             indexImg++
    //             laptopLahzah.setAttribute('src',prolahzehii[indexImg])
    //             laptopNote.innerHTML = prolahzehiiNote[indexImg]
    //             // laptopLink.setAttribute('href',prolahzehiiLink[indexImg])
        
    //         }
    //     },5000)
    // },indexImg)
    const [src , setSrc]= useState(laptopImg)
    const [link , setLink] = useState('/laptop')
    const [indexx , setIndexx] = useState(0)
    const [note , setNote ]=useState('لپ تاب 15.6 اینچی ایسوس مدل vivoboock F1504VA-i3 1315U 8GB 512SSD UHD')
    useEffect(()=>{
        
        setInterval(()=>{
          
           if(indexx){
            setSrc(laptopImg)
            setIndexx(0)
            setNote('لپ تاب 15.6 اینچی ایسوس مدل vivoboock F1504VA-i3 1315U 8GB 512SSD UHD')
            setLink('/laptop')
           }else{
            setSrc(ps5img)
            setIndexx(1)
            setNote('سونی  پلی استیشن 5 اسلیم استاندارد  ps5 slim standard اروپا 2016')
            setLink('/ps5')
           }
        },5000)
  
    },[indexx])
    return(
       
        <div className="listProduct">
            <h4 className="listProductName">پیشنهاد های لحظه ای برای شما</h4><hr className="hrr"/>
            <ul className="ulOwl">
               <div className="owl-item">
                <li className="">
                    <Link to={link} className="laptoplink">
                    <img src={src} className="laptop" alt="laptop"/>
                    
                    <p className="laptop-note">
                        {note}
                        </p>
                        </Link>
                    {/* <span className="price-laptop">تومان 0</span> */}
                </li>
               </div>
            </ul>
        </div>
        
    )
}
