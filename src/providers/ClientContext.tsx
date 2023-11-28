import { createContext, useState } from "react"
import { api } from "../services/api"
import { ClientProviderProps, IClientContext, ILoginData } from "./@types"
import {useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const ClientContext = createContext({} as IClientContext)

export const ClientProvider = ({children}:ClientProviderProps) => {
    
    const navigate = useNavigate()
    const loginClient =async (order:ILoginData) => {
        try {
            const {data} = await api.post('/clients/login', order)
            api.defaults.headers.common.Authorization = `Bearer ${data.token}`
            localStorage.setItem("@ClintAgender:token",data.token)
            toast.success("Logado com sucesso")
            navigate("dashboard")
        } catch (error) {
            toast.error("Erro no login")
        }      
    }
    
    const getContacts = async () => {
         try {
                await api.get("/contact")
             .then(response => {
              console.log(response)
             })
             
          } catch (error) {
              console.log(error)
          } 
      }

      return (
        <ClientContext.Provider value={{getContacts, loginClient}}>
            {children}
        </ClientContext.Provider>
      )
 }