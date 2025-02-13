import { useParams } from "react-router-dom"
export const Profile = ()=>{
    const {name, id} = useParams()
    return(
        <div>
            this page is for {name} and with id {id} , {name} say Hello
        </div>
    )
}