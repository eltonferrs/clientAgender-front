import { Input } from "../Input"
import { useForm, SubmitHandler } from "react-hook-form"
import { TypeLoginFormValue, loginSchema } from "./loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ClientContext } from "../../providers/ClientContext"


export const LoginBox = () =>{
    const { loginClient } = useContext(ClientContext)
    const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeLoginFormValue>(
        {resolver: zodResolver(loginSchema)}
    )

    const submit: SubmitHandler<TypeLoginFormValue> = (formValue) =>{
        loginClient(formValue)
        reset()
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <Input  type="text" placeholder="digite email" 
                {...register('email')} errors={errors.email} />
                <Input type="password" placeholder="digite password" 
                {...register('password')} errors={errors.password} />
                <button type="submit">ze</button>
            </form>
        </div>
    )
}