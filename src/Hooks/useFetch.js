import { useEffect , useState } from "react";

export const UseFetch = (url)=>{
    const [data , setData]  = useState(null)
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(null)

    useEffect(()=>{
        const fechData = async()=>{
            setIsLoading(true)

            try{
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const json = res.json()
                setIsLoading(false)
                setData(json)
                setError(null)
            }catch(err){
                setIsLoading(false)
                setError(err.massage)
            }
        }
        fechData()
    },[url])
    return{data , isLoading , error}
}