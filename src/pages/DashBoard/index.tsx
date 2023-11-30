import {useContext, useEffect, useState} from "react"
import { ContactContext } from "../../providers/ContactContext"
import { CardContact } from "../../components/cardcontact"
import { Formcontact } from "../../components/FormContact"
import Modal from "react-modal"
import { ContactEdit } from "../../components/Modal/ContactEdit"
import { IContact } from "../../providers/@types"
import { ContactDelete } from "../../components/Modal/ContactDelete"

Modal.setAppElement("#root")
export const DashBoardPage = () => {
    const [modalOn, setModalOn] = useState(false)
    const [typemodal, setTypeModal] = useState("")
    const contactTest:IContact = { id: "string",email: "string",name: "string",cellphone: "string",registered: "string"}
    const [contact, setcontact] = useState(contactTest)
    const {getContacts, contacts} = useContext(ContactContext)
    useEffect(()=>{
        getContacts()
    },[])
    const handleModal=(param:string) =>{
        setTypeModal(param)
        setModalOn(!(modalOn))
    }
    return(
        <div>
            <h2>Estou na Dashboard</h2>
            <div>
                <h3>contatos de fulano</h3>
                <Formcontact/>
            </div>
            <ul>{contacts.map(contact => <CardContact setcontact={setcontact} handleModal={handleModal} key={contact.id} contact={contact}/>)}</ul>

            <Modal isOpen={modalOn} onRequestClose={()=>handleModal("Close")}>
                {typemodal== "Edit"? <ContactEdit handleModal={handleModal} contact={contact}/>: <ContactDelete handleModal={()=>handleModal("Close")} contactId={contact.id}/>}
            </Modal>
        </div>
    )
}