import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

interface HeaderType{
    children?: ReactNode
    text: string;
}

export const Header = ({text,children}: HeaderType) => {
    
    const navigate = useNavigate()
    const logout =()=>{
        localStorage.removeItem("@ClintAgender:token");
        navigate("/")
    }

    return (
        <header>
            <div className="header-side">
                {children}
                <button className="header-button" onClick={logout}><ArrowLeftCircle/>{text}</button>
            </div>
        </header>
    )
}