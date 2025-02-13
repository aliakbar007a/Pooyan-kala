import { useState } from 'react';
import './NewMovie.css'


export const NewMovie =(props)=>{
    const [newName , setNewName] = useState('')
    const [newDate , setNewDate] = useState('')
    
    const addNewMovie=(e)=>{
        e.preventDefault()
        const nameMovie = {
            title: newName,
            date: newDate,
            id: Math.floor(Math.random()*1000)
        }
        props.addListMovie(nameMovie)
        setNewDate('')
        setNewName('')
    }
    return(
       <form className='newmovie'>
        <label>
            <span>name Movie :</span>
            <input type="text" onChange={(e)=>{setNewName(e.target.value)}} value={newName}/>
        </label>
        <label>
            <span>date Movie :</span>
            <input type="date" onChange={(e)=>setNewDate(e.target.value)} value={newDate}/>
        </label>
        <button className='btn' onClick={addNewMovie}>
            submit
        </button>
       </form>
    )
} 