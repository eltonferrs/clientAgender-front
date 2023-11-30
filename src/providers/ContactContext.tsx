import { createContext, useState } from "react"
import { api } from "../services/api"
import { ClientProviderProps, IContact, IContactContext, ICreateContact } from "./@types"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


export const ContactContext = createContext({} as IContactContext)

export const ContactProvider = ({children}:ClientProviderProps) => {
  const navigate = useNavigate()
  const [contacts, setContacts] =useState([])
  const getContacts = async () => {
         try {
            await api.get("/contact")
            .then(response => { setContacts(response.data) })
          } catch (error) {
              localStorage.removeItem("@ClintAgender:token");
              navigate('/')
              console.log(error)
              toast.error("Erro ao carregar contatos")
          } 
  }
    
  const createContact = async (order:ICreateContact) =>{
        try {
          await api.post('/contact', order)
          getContacts()
          toast.success("Novo contato criado")
      } catch (error) {
          toast.error("Erro no login")
      }      
  }

  const updateContact =async ({id,...rest}:IContact) => {
    try {
      await api.patch(`/contact/${id}`,{...rest})
      getContacts()
      toast.success("contato atualizado")
    } catch (error) {
      console.log(error)
      toast.error("Erro ao atualizar")
    }    
  }

  const deleteContact =async (id:string) => {
    try {
      await api.delete(`/contact/${id}`)
      getContacts()
      toast.success("contato deletado")
    } catch (error) {
      console.log(error)
      toast.error("Erro ao deletar")
    }    
  }

  return (
    <ContactContext.Provider value={{getContacts, contacts, createContact, updateContact, deleteContact}}>
        {children}
    </ContactContext.Provider>
  )
}