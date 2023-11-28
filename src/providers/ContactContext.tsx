import { createContext } from "react"
import { api } from "../services/api"
import { ClientProviderProps, IContactContext } from "./@types"
// import {useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const ContactContext = createContext({} as IContactContext)

export const ContactProvider = ({children}:ClientProviderProps) => {
    
    // const navigate = useNavigate()    
    const getContacts = async () => {
         try {
            await api.get("/contact")
            .then(response => { console.log(response) })
          } catch (error) {
              console.log(error)
              toast.error("Erro ao carregar contatos")
          } 
      }

      return (
        <ContactContext.Provider value={{getContacts}}>
            {children}
        </ContactContext.Provider>
      )
 }