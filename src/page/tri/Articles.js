// import { useNavigate } from "react-router-dom"
// import React, { Fragment } from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
export const Articles= ()=>{
   const { id } = useParams()
   const url = 'http://localhost:3000/pages/' + id

   const [note , setNote] = useState([])
   useEffect(()=>{
    fetch(url)
        .then(res => res.json())
        .then(data => setNote(data))
   },[url])
   console.log(note);
    return (
        <div>
        {
            note &&(
                <div>
                    <h1>{note.title}</h1>
                   create by  {note.art}
                    <p>{note.capshen}</p>
                </div>
            )
        }
   </div>
    )
    
}