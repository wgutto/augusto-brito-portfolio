"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"

export const FormContact = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    function onSubmit(data: ContactFormData) {
        console.log("Form submitted:", data)
        // TODO: Implementar envio do email
    }

    return (
        <Card className="w-full shadow-md">
            <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>Me envie uma mensagem para conversarmos melhor.</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-contact" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-name">Nome</FieldLabel>
                                    <Input
                                        {...field}
                                        id="contact-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Digite seu nome"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                                    <Input
                                        {...field}
                                        id="contact-email"
                                        type="email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="seu.email@example.com"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-subject">Assunto</FieldLabel>
                                    <Input
                                        {...field}
                                        id="contact-subject"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Qual é o assunto?"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="contact-message">Mensagem</FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="contact-message"
                                            placeholder="Digite uma mensagem"
                                            rows={6}
                                            className="min-h-24"
                                            aria-invalid={fieldState.invalid}
                                            maxLength={1000}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/1000 caracteres
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="w-full flex justify-end">
                <Button
                    type="submit"
                    form="form-contact"
                    className="px-4 py-2 rounded-lg text-white text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-102 bg-blue-600 hover:bg-blue-700"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
            </CardFooter>
        </Card>
    )
}
