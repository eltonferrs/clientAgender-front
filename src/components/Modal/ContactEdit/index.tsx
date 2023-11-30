import { useForm, SubmitHandler } from "react-hook-form"
import { TypeFormContact, FormContacSchema} from "../../FormContact/formContactSchema"
import {Input} from "../../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ContactContext } from "../../../providers/ContactContext"
import { IContact } from "../../../providers/@types"

interface IContactType {
    contact: IContact;
    handleModal:(type:string)=> void;
}

export const ContactEdit = ({contact,handleModal}:IContactType) =>{
    const {updateContact} = useContext(ContactContext)
    const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeFormContact>(
        {resolver: zodResolver(FormContacSchema)}
    )
    const submit :SubmitHandler<TypeFormContact> = (formValue) =>{
        const {id,registered} = contact
        updateContact({id,registered,...formValue})
        reset()
        handleModal("Edit")
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input type="text" placeholder="digite o nome" 
            {...register('name')} errors={errors.name} defaultValue={contact.name}/>
            <Input  type="email" placeholder="digite o email" 
            {...register('email')} errors={errors.email} defaultValue={contact.email}/>
            <Input  type="text" placeholder="digite o celular" 
            {...register('cellphone')} errors={errors.cellphone} defaultValue={contact.cellphone}/>
            <button type="submit">ze</button>
        </form>
    )
}