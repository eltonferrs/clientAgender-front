import { Input } from "../Input"
import { useForm, SubmitHandler } from "react-hook-form"
import { TypeLoginFormValue, loginSchema } from "./loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ClientContext } from "../../providers/ClientContext"
import { useNavigate } from "react-router-dom"


export const LoginBox = () =>{
    const { loginClient } = useContext(ClientContext)
    const navigate = useNavigate()
    const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeLoginFormValue>(
        {resolver: zodResolver(loginSchema)}
    )

    const submit: SubmitHandler<TypeLoginFormValue> = (formValue) =>{
        loginClient(formValue)
        reset()
    }
    return(
        <div className="LoginBox">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <Input  type="text" placeholder="digite email" 
                {...register('email')} errors={errors.email} />
                <Input type="password" placeholder="digite password" 
                {...register('password')} errors={errors.password} />
                <button type="submit">Login</button>
                <p>Ou</p>
                <p>crie uma conta agora mesmo</p>
            </form>
                <button className="type-button-2" onClick={()=>navigate("/register")}>Cadastro</button>
        </div>
    )
}