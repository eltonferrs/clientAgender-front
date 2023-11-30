import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";

interface IContactType {
    contactId: string;
    handleModal:(type:string)=> void;
}

export const ContactDelete = ({contactId,handleModal}:IContactType) =>{
    const { deleteContact } = useContext(ContactContext)
    const submit = () =>{
        deleteContact(contactId)
        handleModal("Delete")
    }
    return (
        <div>
            <h2>Você Tem certeza que deseja escçuir contato</h2>
            <div>
                <button onClick={submit}>Excluir Contato</button>
                <button onClick={()=>handleModal("Delete")}>cancelar</button>
            </div>
        </div>
    )
}