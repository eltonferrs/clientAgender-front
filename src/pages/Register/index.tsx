import { FormClient } from "../../components/FormClient"
import { Header } from "../../components/Header"
import { StyleRegisterPage } from "./style"

export const RegisterPage = () => {
    return(
        <StyleRegisterPage>
            <Header text={"Login"}>
                <h2>Client Agender</h2>
            </Header>
            <div className="Register-div">
                <FormClient/>
            </div>
        </StyleRegisterPage>
    )
}