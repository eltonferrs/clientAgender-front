import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../../Input" 
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react" 
import { IClient } from "../../../providers/@types"
import { ClientContext } from "../../../providers/ClientContext"
import { FormEditClientSchema, TypeFormClientEdit } from "./FormEditClientSchema"


interface IClientType {
    client: IClient;
    handleModal:(type:string)=> void;
}

export const ClientEdit = ({client, handleModal}:IClientType) =>{
    const {updateClient} = useContext(ClientContext)
    const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeFormClientEdit>(
        {resolver: zodResolver(FormEditClientSchema)}
    )
    const submit :SubmitHandler<TypeFormClientEdit> = (formValue) =>{
        
        const {id} = client
        const {email, cellphone,name} = formValue
        const updatevalue = {cellphone,name}
        if(client.email == email){
            updateClient({id,...updatevalue})
            handleModal("Close")
            reset()    
        }else{
            updateClient({id,...formValue})
            handleModal("Close")
            reset()
        }
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <h2>Deseja atualizar seus dados?</h2>
            <Input type="text" placeholder="digite o nome" 
            {...register('name')} errors={errors.name} defaultValue={client.name} />
            <Input  type="email" placeholder="digite o email" 
            {...register('email')} errors={errors.email} defaultValue={client.email} />
            <Input  type="text" placeholder="digite o celular" 
            {...register('cellphone')} errors={errors.cellphone} defaultValue={client.cellphone} />
            <button type="submit">Atualizar</button>
            <button type="button" className="type-button-2" onClick={()=>handleModal("Close")}>cancelar</button>
        </form>
    )
}