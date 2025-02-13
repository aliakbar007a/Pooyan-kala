import './PcDropDown.css'
import { useEffect, useState } from 'react'

export const PcDropDown=()=>{
    
    const [url , setUrl] = useState('http://localhost:3000/listDropDown')
    const [pcDropList , setPcDropList] = useState([])
    useEffect(()=>{
  
      fetch(url)
          .then(res => res.json())
          .then(data => setPcDropList(data))
          
          
  },[url])
    return(
        <div className="dropdown">
                        <div className="rightdrop">
                        <h6>قطعات کامپیوتر</h6>
                            <ul >
                                {
                                    pcDropList && pcDropList.map((data)=>{
                                        return(
                                            <li key={data.id}>
                                                {data.drop}

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="centerdrop">
                        <h6>قطعات کامپیوتر</h6>
                            <ul>
                                {
                                    pcDropList && pcDropList.map((data)=>{
                                        return(
                                            <li key={data.id}>
                                                {data.drop}

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="leftdrop">
                        <h6>قطعات کامپیوتر</h6>
                            <ul>
                                {
                                    pcDropList && pcDropList.map((data)=>{
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
