import  "./BackToUp.css"

export const  BackToUp = ()=>{
   
    return(
        <button className="backtoup" onClick={()=>{document.documentElement.scrollTop = 0}}>برگشت به بالا</button>

    )
}