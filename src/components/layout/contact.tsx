import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { InfosContactItem } from "./infos-contact-item"
import { MdOutlineEmail } from "react-icons/md"
import Link from "next/link"
import { FormContact } from "./form-contact"
import { RevealLeft } from "../ui/reveal-left"
import { RevealRight } from "../ui/reveal-right"
import { SOCIAL_LINKS } from "@/config/constants"

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 pt-20 pb-15 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]"
    >
      <h1 className="text-2xl md:text-3xl font-bold">Contato</h1>

      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-6 mt-6 md:flex-row">
        <div className="w-full">
          <RevealLeft>
            <div className="flex flex-col gap-4">
              <InfosContactItem
                icon={<MdOutlineEmail className="size-6" />}
                title="Email"
                message="Envie-me uma mensagem diretamente"
                info={SOCIAL_LINKS.email}
              />
              <Link
                href={SOCIAL_LINKS.whatsapp}
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
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InfosContactItem
                  icon={<FaInstagram className="size-6" />}
                  title="Instagram"
                  message="Acesse meu Instagram"
                />
              </Link>
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InfosContactItem
                  icon={<FaLinkedin className="size-6" />}
                  title="LinkedIn"
                  message="Acesse meu LinkedIn"
                />
              </Link>
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
