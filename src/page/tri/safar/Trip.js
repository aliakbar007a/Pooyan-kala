import { useEffect, useState } from "react"
import "./Trip.css"


export const Trip = ()=>{
    const [trips , setTrips] = useState([])
    const [url , setUrl] = useState('http://localhost:3000/trips')

    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setTrips(data))
},[url])
// console.log(trips);
    return(
        <div>
            <h2>list safar</h2>
            <ul className="listItem">
               {
               trips.map((trip)=>{
                return <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
               })
               } 
            </ul>
            <button onClick={()=>setUrl("http://localhost:3000/trips?loc=Iran")}>safar irani</button>
            <button onClick={()=>setUrl("http://localhost:3000/trips")}>kol safar</button>
        </div>
    )
}