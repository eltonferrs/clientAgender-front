import { IContact } from "../../providers/@types"

interface IcardContactType {
    contact: IContact;
    handleModal:(type:string)=> void;
    setcontact:(contact:IContact)=> void;
}

export const CardContact = ({contact,handleModal,setcontact}: IcardContactType) =>{
    return (
        <li>
            <div>
                <h3>{contact.name}</h3>
                <p>{contact.cellphone}</p>
            </div>
            <button onClick={()=>(handleModal("Edit"),setcontact(contact))}>Editar</button>
            <button onClick={()=>(handleModal("Delete"),setcontact(contact))}>Deletar</button>
        </li>
    )
}