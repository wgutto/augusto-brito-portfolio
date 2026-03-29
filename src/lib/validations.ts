import { z } from "zod"

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Nome deve ter pelo menos 2 caracteres")
        .max(100, "Nome deve ter no máximo 100 caracteres"),
    email: z.string("Email é obrigatório").email("Email inválido"),
    message: z
        .string()
        .min(10, "Mensagem deve ter pelo menos 10 caracteres")
        .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
