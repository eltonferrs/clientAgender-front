import { useForm, SubmitHandler } from "react-hook-form"
import { TypeFormContact, FormContacSchema} from "./formContactSchema"
import {Input} from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext"

export const Formcontact = () =>{
    const {createContact} = useContext(ContactContext)
    const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeFormContact>(
        {resolver: zodResolver(FormContacSchema)}
    )
    const submit :SubmitHandler<TypeFormContact> = (formValue) =>{
        createContact(formValue)
        reset()
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <h2>Adicione um Novo Contato</h2>
            <Input type="text" placeholder="digite o nome" 
            {...register('name')} errors={errors.name} />
            <Input  type="email" placeholder="digite o email" 
            {...register('email')} errors={errors.email} />
            <Input  type="text" placeholder="digite o celular" 
            {...register('cellphone')} errors={errors.cellphone} />
            <button type="submit">Adicionar</button>
        </form>
    )
}