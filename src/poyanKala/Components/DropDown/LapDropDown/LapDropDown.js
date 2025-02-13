import './LapDropDown.css'
import { useEffect, useState } from 'react'

export const LapDropList=()=>{
    
    const [url , setUrl] = useState('http://localhost:3000/listDropDown')
    const [LapDropList , setLapDropList] = useState([])
    useEffect(()=>{
  
      fetch(url)
          .then(res => res.json())
          .then(data => setLapDropList(data))
          
          
  },[url])
    return(
        <div className="laptopdropdown">
       
        <div className="rightdroplaptop">
                        <h6>قطعات لپ تاپ</h6>
                            <ul>
                                {
                                    LapDropList && LapDropList.map((data)=>{
                                        return(
                                            <li key={data.id}>
                                                {data.drop}

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="centerdroplap">
                        <h6>قطعات لپ تاپ</h6>
                            <ul>
                                {
                                    LapDropList && LapDropList.map((data)=>{
                                        return(
                                            <li key={data.id}>
                                                {data.drop}

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="leftdroplap">
                        <h6>قطعات لپ تاپ</h6>
                            <ul>
                                {
                                    LapDropList && LapDropList.map((data)=>{
                                        return(
                                            <li key={data.id}>
                                                {data.drop}

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
        </div>
                  
    )
}
