import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ClientContext } from "../providers/ClientContext"

export const ProtectedRouter = () => {
    const { loading } = useContext(ClientContext)
    if(loading){
        return <div>Carregando...</div>
    }
    return <Outlet/>
}