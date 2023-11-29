import { ReactNode } from "react";
// import { TypeLoginFormValue } from "../components/Login/loginSchema";

export interface IClient {
    id: string;
    email: string;
    name: string;
    password: string;
    cellphone: string;
    started: string;
}

export interface IContact {
    id: string;
    email: string;
    name: string;
    cellphone: string;
    registered: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface ClientProviderProps {
    children: ReactNode
}

export interface IClientContext {
    loading:boolean;
    loginClient: (order: ILoginData) => Promise<void>
}

export interface IContactContext {
    getContacts: () => Promise<void>;
}