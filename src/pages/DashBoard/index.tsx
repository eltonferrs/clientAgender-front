import {useContext, useEffect, useState} from "react"
import { ContactContext } from "../../providers/ContactContext"
import { CardContact } from "../../components/Cardcontact"
import { Formcontact } from "../../components/FormContact"
import Modal from "react-modal"
import { ContactEdit } from "../../components/Modal/ContactEdit"
import { IContact } from "../../providers/@types"
import { ContactDelete } from "../../components/Modal/ContactDelete"
import { ClientContext } from "../../providers/ClientContext"
import { ClientEdit } from "../../components/Modal/ClientEdit"
import { Header } from "../../components/Header"
import { StyleDashboardPage } from "./style"
import { Mail, Pencil, Phone, UserRound } from "lucide-react"

Modal.setAppElement("#root")
export const DashBoardPage = () => {
    const [modalOn, setModalOn] = useState(false)
    const [typemodal, setTypeModal] = useState("")
    const contactTest:IContact = { id: "string",email: "string",name: "string",cellphone: "string",registered: "string"}
    const [contact, setcontact] = useState(contactTest)
    const {getContacts, contacts} = useContext(ContactContext)
    const {client, getClient} = useContext(ClientContext)
    useEffect(()=>{
        getContacts()
        getClient()
    },[])
    const handleModal=(param:string) =>{
        setTypeModal(param)
        setModalOn(!(modalOn))
    }
    const setModal = (type:string) =>{
        if(type == "Edit"){
            return ( <ContactEdit handleModal={handleModal} contact={contact}/>)
        }
        else if(type == "Delete"){
            return ( <ContactDelete handleModal={()=>handleModal("Close")} contactId={contact.id}/> )
        }
        else{
            return (<ClientEdit handleModal={()=>handleModal("Close")} client={client}/>)
        }
    }
    return(
        <StyleDashboardPage>
            <Header text={"Sair"}> 
                <h3>ClientAgender</h3>
            </Header>
            <div className="my_Contact">
                <div className="my_Contact_data">
                    <h2>Meu dados</h2>
                    <span><UserRound/>{client.name}</span>
                    <span><Phone/>{client.cellphone}</span>
                    <span><Mail/>{client.email}</span>
                </div>
                <div className="cardContact_buttonbox">
                    <button onClick={()=>handleModal("Close")}><Pencil/></button>
                </div>
            </div>
            <section className="sectiondashboard">
                <div>
                    <Formcontact/>
                </div>
                <ul>{contacts.map(contact => <CardContact setcontact={setcontact} handleModal={handleModal} key={contact.id} contact={contact}/>)}</ul>
            </section>

            <Modal isOpen={modalOn} onRequestClose={()=>handleModal("Close")}
            overlayClassName="modal-overlay" className="modal-content" >
                {setModal(typemodal)}
            </Modal>
        </StyleDashboardPage>
    )
}