import { z } from "zod";

export const FormClientSchema = z.object({
    name: z.string().min(1,"Insira um nome válido").max(45,"maximo de caracteres é 45"),
    email: z.string().min(1,"Insira email válido").email("Insira email válido"),
    cellphone: z.string().min(1,"Insira um telefone válido").regex(/(\(?\d{2}\)?\s)?(\d{8,9})/, "Insira um telefone válido"),
    password: z.string().regex(/(?=.*[A-Z])/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/(?=.*[a-z])/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/(?=.*\d)/,"A senha deve conter pelo menos um número")
    .min(8,"É nescessário conter pelo menos 8 caracters"),
    confirm: z.string().min(8,"Confirme senha")
}).refine(({password,confirm})=> password === confirm,{message: "As senhas precisam ser iguais", path: ["confirm"]})

export type TypeFormClient = z.infer<typeof FormClientSchema>