import { Navigate, Outlet } from "react-router-dom"

export const Autoloading = () => {
    const token = localStorage.getItem("@ClintAgender:token")
    return token ? <Navigate to={"/dashboard"}/>: <Outlet/>
}