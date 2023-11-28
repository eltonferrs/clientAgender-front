import {useContext, useEffect} from "react"
import { ContactContext } from "../../providers/ContactContext"
// import { api } from "../../services/api"
// import { toast } from "react-toastify"

export const DashBoardPage = () => {
    const {getContacts} = useContext(ContactContext)
    useEffect(()=>{
        getContacts()
        
    },[])
    return(
        <div>
            <h2>Estou na Dashboard</h2>
            <div>
                <h3>contatos de fulano</h3>
            </div>

        </div>
    )
}