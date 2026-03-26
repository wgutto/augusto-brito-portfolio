import { z } from "zod"

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Nome deve ter pelo menos 2 caracteres")
        .max(100, "Nome deve ter no máximo 100 caracteres"),
    email: z.string().email("Email inválido"),
    subject: z
        .string()
        .min(5, "Assunto deve ter pelo menos 5 caracteres")
        .max(150, "Assunto deve ter no máximo 150 caracteres"),
    message: z
        .string()
        .min(10, "Mensagem deve ter pelo menos 10 caracteres")
        .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
