import { useEffect } from 'react'
import { useState } from 'react'
import './MiddleBar.css'

export const MiddleBar = ()=>{
    const [url1 , setUrl1] = useState ('http://localhost:3000/howBuyUl');
    const [url2 , setUrl2] = useState ('http://localhost:3000/servicesUl');
    const [url3 , setUrl3] = useState ('http://localhost:3000/ourShopUl');
    const [list1 , setList1] = useState([])
    const [list2 , setList2] = useState([]);
    const [list3 , setList3] = useState([]);
    useEffect(()=>{
        fetch(url1)
            .then(res  => res.json())
            .then(data => setList1(data))
        fetch(url2)
            .then(res  => res.json())
            .then(data => setList2(data))
        fetch(url3)
            .then(res  => res.json())
            .then(data => setList3(data))
    },[url1 , url2 , url3])
    return(
        <div className="footer-mid">
               
                    <nav className="nav-menu1">
                        <div className="owd">راهنمای خرید
                        <div>
                            <ul className="howBuyul">
                                {list1 && list1.map((note)=>{
                                    return(
                                        <li key={note.id} className="footerLi">
                                            {note.note}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        </div>
                    </nav>
                    <nav className="nav-menu2">
                        <div className="owd">خدمات مشتریان </div>
                        <div>
                            <ul className="howBuyul">
                            {list2 && list2.map((note)=>{
                                    return(
                                        <li key={note.id} className="footerLi">
                                            {note.note}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </nav>
                    <nav className="nav-menu3">
                        <div className="owd"> فروشگاه ما </div>
                        <div>
                            <ul className="howBuyul">
                            {list3 && list3.map((note)=>{
                                    return(
                                        <li key={note.id} className="footerLi">
                                            {note.note}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        
                    </nav>
                </div>
                
    )
}