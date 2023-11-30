import { z } from "zod";

export const FormContacSchema = z.object({
    name: z.string().min(1).max(45,"maximo de caracteres é 45"),
    email: z.string().min(1).email("Insira email válido"),
    cellphone: z.string().min(1).regex(/(\(?\d{2}\)?\s)?(\d{8,9})/, "Insira um telefone válido")
})

export type TypeFormContact = z.infer<typeof FormContacSchema>