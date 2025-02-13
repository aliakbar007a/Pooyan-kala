import { useState ,useEffect } from 'react'
import './InfoLapTopPage.css'

export const InfoLapTopPage = ()=>{
    const [url , setUrl] = useState('http://localhost:3000/lapTopInfo')
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[data , url])
    return(
        <div className="infoLaptop">
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
    )
}