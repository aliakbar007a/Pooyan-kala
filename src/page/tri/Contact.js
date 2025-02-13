import { useNavigate } from "react-router-dom"
import React, { Fragment } from "react"
export const Contact= ()=>{
    let navigate= useNavigate()
    return <React.Fragment>
        <div>
        this is Contact page
    </div>
    {/* <button onClick={()=>{navigate('/')}} >go to home page</button>,
    <button onClick={()=>{navigate('/Contact')}} >go to contact page</button> */}
    </React.Fragment>
}