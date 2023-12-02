import {Route, Routes} from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { DashBoardPage } from "../pages/DashBoard"
import { ContactProvider } from "../providers/ContactContext"
import { ProtectedRouter } from "./protectedRouter"
import { Autoloading } from "./autoLogin"
import { RegisterPage } from "../pages/Register"

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route element={<Autoloading/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
            <Route element={<ProtectedRouter/>}>
                <Route  path="/dashboard" element={<ContactProvider>< DashBoardPage/></ContactProvider>}/>
            </Route>   
        </Routes>
    )
}