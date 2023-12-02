import { IContact } from "../../providers/@types"
import { Pencil, Trash2, UserRound, Phone, Mail } from "lucide-react";

interface IcardContactType {
    contact: IContact;
    handleModal:(type:string)=> void;
    setcontact:(contact:IContact)=> void;
}

export const CardContact = ({contact,handleModal,setcontact}: IcardContactType) =>{
    return (
        <li className="cardContact">
            <div className="cardContact_data">
                <span><UserRound/>{contact.name}</span>
                <span><Phone/>{contact.cellphone}</span>
                <span><Mail/>{contact.email}</span>
            </div>
            <div className="cardContact_buttonbox">
                <button onClick={()=>(handleModal("Edit"),setcontact(contact))}><Pencil /></button>
                <button onClick={()=>(handleModal("Delete"),setcontact(contact))}><Trash2 /></button>
            </div>
        </li>
    )
}