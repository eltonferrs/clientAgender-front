import { LoginBox } from "../../components/Login"
import { StyleLoginPage } from "./style"

export const HomePage = () => {
    return(
        <StyleLoginPage>
            <h2>Client Agender</h2>
            <h3>sua agenda online para acessar quando e onde quiser</h3>
            <LoginBox/>
        </StyleLoginPage>
    )
}