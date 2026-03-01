import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { InfosContactItem } from "./infos-contact-item"
import { MdOutlineEmail } from "react-icons/md"
import Link from "next/link"
import { FormContact } from "./form-contact"
import { RevealLeft } from "../ui/reveal-left"
import { RevealRight } from "../ui/reveal-right"

export const Contact = () => {
    return (
        <section id="contact" className="relative min-h-screen flex items-center justify-center snap-start px-4 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]">
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
                <h1 className="text-2xl md:text-3xl font-bold">Contato</h1>
                <div className="w-full flex flex-col items-center gap-8 md:flex-row">

                    <RevealLeft>
                        <div className="w-full flex flex-col gap-4">
                            <InfosContactItem
                                icon={<MdOutlineEmail className="size-6" />}
                                title="Email"
                                message="Envie-me uma mensagem diretamente"
                                info="augusstobrito@gmail.com"
                            />

                            <Link href={"https://wa.me/5588996087187?text=Olá%20Augusto,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."} target="_blank">
                                <InfosContactItem
                                    icon={<FaWhatsapp className="size-6" />}
                                    title="WhatsApp"
                                    message="Entre em contato comigo"
                                />
                            </Link>

                            <Link href={"https://www.instagram.com/wgutto"} target="_blank">
                                <InfosContactItem
                                    icon={<FaInstagram className="size-6" />}
                                    title="Instagram"
                                    message="Acesse meu Instagram"
                                />
                            </Link>

                            <Link href={"https://www.linkedin.com/in/wgutto"} target="_blank">
                                <InfosContactItem
                                    icon={<FaLinkedin className="size-6" />}
                                    title="LinkedIn"
                                    message="Acesse meu LinkedIn"
                                />
                            </Link>
                        </div>
                    </RevealLeft>

                    <RevealRight>
                        <div className="w-full flex justify-end">
                            <FormContact />
                        </div>
                    </RevealRight>
                </div>
            </div>
        </section>
    )
}