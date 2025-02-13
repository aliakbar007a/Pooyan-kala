import { useEffect, useState } from "react";
import { UseFetch } from "../../Hooks/useFetch";
import { Link } from "react-router-dom";

export const Home= ()=>{
    // const {data : articles , isLoading , error} = UseFetch('http://localhost:3000/pages')
    const [url , setUrl] = useState('http://localhost:3000/pages')
    const [datas , setDatas] = useState([])
    useEffect(()=>{
        fetch(url)
            .then(res  => res.json())
            .then(data => setDatas(data) )
    console.log(datas);
    },[url])
   
    return (<div>
        <h2>this is Home page</h2>
        {/* {isLoading && <div>loading ...</div>},
        {error && <p> {error} </p>}, */}
        {
        datas &&
        datas.map((articl)=>{
            return <div key={articl.id}>
                <h3>{articl.title}</h3>
                <p>{articl.capshen}</p>
                <Link to={`articles/${articl.id}`}>read more ...</Link >
                </div>
         })
    }

    </div>
    )
}