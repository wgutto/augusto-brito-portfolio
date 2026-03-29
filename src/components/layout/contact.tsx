import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { InfosContactItem } from "./infos-contact-item"
import { MdOutlineEmail } from "react-icons/md"
import Link from "next/link"
import { FormContact } from "./form-contact"
import { RevealLeft } from "../ui/reveal-left"
import { RevealRight } from "../ui/reveal-right"
import { socialLink } from "@/data/constants"
import { CornerRightDown } from "lucide-react"

export const Contact = () => {
    return (
        <section
            id="contact"
            className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 pt-20 pb-15 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]"
        >
            <h1 className="text-2xl md:text-3xl font-bold">Contato</h1>

            <div className="mt-6 mb-2">
                <h2 className="text-lg font-semibold text-center">Vamos conversar</h2>
                <p className="text-md text-muted-foreground">Aberto a oportunidades, freelas e trocas de ideia.</p>
            </div>
            
            <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col justify-center items-center gap-6 md:flex-row">
                <div className="w-full">
                    <RevealLeft>
                        <div className="my-5 flex items-center gap-2">
                            <p className="text-muted-foreground font-semibold">Prefere falar diretamente? Me encontra por aqui</p>
                            <CornerRightDown className="text-muted-foreground size-4"/>
                        </div>

                        <div className="flex flex-col gap-4 border-b pb-5">
                            <InfosContactItem
                                icon={<MdOutlineEmail className="size-6" />}
                                title="Email"
                                message="augusstobrito@gmail.com"
                            />

                            <Link
                                href={socialLink.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InfosContactItem
                                    icon={<FaWhatsapp className="size-6" />}
                                    title="WhatsApp"
                                    message="Entre em contato comigo"
                                />
                            </Link>

                            <Link
                                href={socialLink.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InfosContactItem
                                    icon={<FaInstagram className="size-6" />}
                                    title="Instagram"
                                    message="Acesse meu pefil"
                                />
                            </Link>
                            <Link
                                href={socialLink.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InfosContactItem
                                    icon={<FaLinkedin className="size-6" />}
                                    title="LinkedIn"
                                    message="Acesse meu pefil"
                                />
                            </Link>
                        </div>
                        <div className="flex gap-2 items-center my-5 p-2 rounded-md border bg-card">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                            <p className="text-sm text-muted-foreground"><span className="text-black font-semibold dark:text-white">Disponível</span> para novas oportunidades</p>
                        </div>
                    </RevealLeft>
                </div>

                <div className="w-full">
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
