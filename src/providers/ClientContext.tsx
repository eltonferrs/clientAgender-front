import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { ClientProviderProps, IClient, IClientContext, ICreateClient, ILoginData, IUpdateClient } from "./@types"
import {useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const ClientContext = createContext({} as IClientContext)

export const ClientProvider = ({children}:ClientProviderProps) => {
    
    const navigate = useNavigate()
    const [loading, setloading] = useState(true)
    const clientTest:IClient = { id: "string",email: "string",name: "string", password:"string",cellphone: "string", started: "string"}
    const [client, setclient] = useState(clientTest)

    useEffect(()=>{
        const token = localStorage.getItem("@ClintAgender:token")
        if(!token){
            setloading(false)
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setloading(false)
    },[])

    const createClient = async (order:ICreateClient) =>{
        try {
          await api.post('/clients', order)
          toast.success("Registrado com sucesso")
          navigate("/")
        }catch (error:any) {
          console.log(error)
          if(error.response.status == 409){
              toast.error("Email não disponível")
          }
          toast.error("Erro no registro")
        }      
    }

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

    const getClient = async () => {
        try {
           await api.get("/clients/detail")
           .then(response => { setclient(response.data) })
         } catch (error) {
             localStorage.removeItem("@ClintAgender:token");
             navigate('/')
             console.log(error)
             toast.error("Erro ao carregar contatos")
         } 
    }

    const updateClient =async ({id,...rest}:IUpdateClient) => {
        try {
          await api.patch(`/clients/${id}`,{...rest})
          toast.success("Dados atualizado")
        } catch (error:any) {
          console.log(error)
          if(error.response.status == 409){
              toast.error("Email não disponível")
          }
        }    
    }

    return (
      <ClientContext.Provider value={{loginClient, loading, client, getClient, updateClient, createClient }}>
          {children}
      </ClientContext.Provider>
    )
 }