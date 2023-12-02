import { useForm, SubmitHandler } from "react-hook-form"
import { TypeFormClient, FormClientSchema } from "./formClientSchema"
import {Input} from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ClientContext } from "../../providers/ClientContext"

export const FormClient = () =>{
    const {createClient} = useContext(ClientContext)
    const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeFormClient>(
        {resolver: zodResolver(FormClientSchema)}
    )
    const submit :SubmitHandler<TypeFormClient> = (formValue) =>{
        createClient(formValue)
        reset()
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input type="text" placeholder="Digite seu nome" 
            {...register('name')} errors={errors.name} />
            <Input  type="email" placeholder="Digite seu email" 
            {...register('email')} errors={errors.email} />
            <Input  type="text" placeholder="Digite seu celular" 
            {...register('cellphone')} errors={errors.cellphone} />
            <Input  type="password" placeholder="Digite seu password" 
            {...register('password')} errors={errors.password} />
            <Input  type="password" placeholder="Confirme seu password" 
            {...register('confirm')} errors={errors.confirm} />
            <button className="type-button-2" type="submit">Cadastrar</button>
        </form>
    )
}