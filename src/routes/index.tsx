import {Route, Routes} from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { DashBoardPage } from "../pages/DashBoard"
import { ContactProvider } from "../providers/ContactContext"

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={< HomePage/>} />
            <Route path="/dashboard" element={<ContactProvider>< DashBoardPage/></ContactProvider>} />   
        </Routes>
    )
}