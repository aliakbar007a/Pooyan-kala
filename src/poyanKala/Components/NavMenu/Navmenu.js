import { useEffect, useState } from 'react'
import { LapDropList } from '../DropDown/LapDropDown/LapDropDown'
import { PcDropDown } from '../DropDown/PcDropDown/PcDropDown'
import './Navmenu.css'

export const Navmenu = ()=>{
    const [isFixed , setIsFixed] = useState(false)
        const handeleScroll = ()=>{

            if(window.scrollY > 125){
                setIsFixed(true)
                
                // document.querySelector('.nav-menu').classList= ('pos-fix')
                // logo.style.height = "50px"
                // console.log('scroll');
                
            }else{
                setIsFixed(false)
                // document.querySelector('.pos-fix').classList = ('nav-meno')
                // navElem.classList.remove('txt-white')
                // logo.style.height = "84px"
                // console.log('scrollegerth');
            }
        }
    
    
    useEffect(()=>{
        window.addEventListener('scroll',handeleScroll);
        return ()=>{
            window.removeEventListener('scroll',handeleScroll)
        }
    },[])
    return(
        // <div className={isFixed?'nav-menu fixed' : 'nav-menu'} >
        <div className='nav-top'>
            
        
            <ul className={isFixed?'uldrop fixed' : 'uldrop'}>
                <li>کامپیوتر
                   
                    <PcDropDown/> 
                </li>
                <li>لپ تاب
                  <LapDropList/> 
                </li>
                <li>ماشین های اداری</li>
                <li>موبایل و تبلت</li>
                <li>کنسول بازی</li>
                <li>تجهیزات شبکه</li>
                <li>وبلاگ</li>
            </ul>
        
        </div>
    )
}
// 