
import './Header.css'
import searchLogo from '../imgs/search icon Red.png'
import buyIcon from '../imgs/bay icon red.png'
import { Pishkhan } from '../Components/Pishkhan/Pishkhan'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

export const Header = ()=>{
    const suggestions = ["laptop", "لپ تاپ", "ps5","پلی استیشن 5", "سونی  پلی استیشن 5 اسلیم استاندارد  ps5 slim standard اروپا 2016","لپ تاب 15.6 اینچی ایسوس مدل vivoboock F1504VA-i3 1315U 8GB 512SSD UHD"]
    const [searchingInputValue , setSearchingInputValue] = useState('')
    const [result , setResult] = useState([])
    const [show , setShow] = useState(false)
    const [istrue , setIstrue] = useState(false)
    const shoooo=()=>{
        setShow(!show)
    }
   
    useEffect(()=>{
        if(searchingInputValue){
        console.log(suggestions);
        setIstrue(true)
        }else{
        setIstrue(false)
        }

        const filterWordSearch =  suggestions.filter((word)=>{
        return word.toLowerCase().includes(searchingInputValue)})
        setResult(filterWordSearch)
        console.log(filterWordSearch);
        console.log(result);
        
        // wordsGnrator(result)
        
    },[searchingInputValue])

    const select = (word)=>{
        setIstrue(false)
        setSearchingInputValue(word)
       
    }
    return(
        <div className="orgDiv">
        <div className="nameSite">
            <h1 className="poyanKala">پویان کالا</h1>
        </div>
        <div className={istrue?'searchBox activeli':'searchBox'}>
            <input value={searchingInputValue} onChange={(e) => setSearchingInputValue(e.target.value.toLowerCase())} type="text" placeholder="جست و جو در محصولات" className="input"/>
             <img src={searchLogo} className="seracIcon"/> 
            
            <div className="autocom-box">
                {/* {customListItem && customListItem} */}
                <ul>
                {
                    result && result.map((word)=>{
                        return(
                            <li key={word.id} onClick={()=>select(word)}>{word}</li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
        <div className="left-nav">
            <div className="sabtnam">
                <button className='login' onClick={shoooo}> |  ورود/ ثبت نام</button>
                {show && <Pishkhan/>}
            </div>
            <div className="bayBox">
                <Link to='/shopingcard'>
                <img src={buyIcon} alt="" className="buyIcon"/>
                <span className="buy-note">سبد خرید</span>
                </Link>
            </div>
        </div>
    </div>
  
    )
}