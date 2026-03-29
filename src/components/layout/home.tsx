"use client"

import Image from "next/image"
import TextType from "../ui/text-type"
import RevealZoom from "../ui/reveal-zoom"
import { SocialButton } from "./social-button"
import { XIconSVG } from "../svgs/x-icon"
import { socialLink } from "@/data/constants"
import { LinkedinIconSVG } from "../svgs/linkedin-icon"
import { GithubIconSVG } from "../svgs/github-icon"
import { InstagramIconSVG } from "../svgs/instagram-icon"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center snap-start px-4 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]"
        >
            <RevealZoom>
                <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-15 md:mt-0">
                    <div className="flex flex-col items-center gap-2 order-2 md:order-1">
                        <div className="flex flex-col text-center md:text-start">
                            <h1 className="font-semibold text-md md:text-lg border-muted-foreground">
                                Olá, eu sou
                                <TextType
                                    text={[
                                        " Augusto Brito",
                                        " Software Engineer",
                                        " Full-Stack Developer",
                                    ]}
                                    typingSpeed={150}
                                    pauseDuration={3000}
                                    cursorCharacter="|"
                                    className="text-xl font-bold text-blue-600"
                                />
                            </h1>
                            <div className="text-2xl text-center md:text-start md:text-3xl xl:text-4xl font-semibold leading-tight">
                                Focado na criação de sistemas performáticos, escaláveis e bem
                                arquitetados.
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-lg text-center md:text-left text-muted-foreground leading-relaxed">
                                Atuo do front ao back-end utilizando TypeScript, React, Next.js e
                                Node.js, desenvolvendo soluções escaláveis com foco em arquitetura,
                                performance e experiência do usuário. Tenho experiência com bancos
                                SQL e NoSQL e deploy em ambientes modernos de cloud.
                            </p>

                            <div className="flex flex-col border-t-2 gap-6 pt-4">
                                <Link href={"https://github.com/wgutto?tab=repositories"} target="_blank" className="flex">
                                    <div className="text-sm flex items-center gap-2 px-2 py-2 rounded-md text-white cursor-pointer bg-blue-600 hover:bg-blue-700">
                                        <span>Ver projetos</span>
                                        <ExternalLink className="size-4" />
                                    </div>
                                </Link>
                                <div className="flex flex-wrap gap-2">
                                    <SocialButton link={socialLink.linkedin} logo={<LinkedinIconSVG className="size-3 text-muted-foreground" />} nameLink="LinkedIn" />
                                    <SocialButton link={socialLink.github} logo={<GithubIconSVG className="size-3 text-muted-foreground" />} nameLink="Github" />
                                    <SocialButton link={socialLink.twitter} logo={<XIconSVG className="size-3 text-muted-foreground" />} nameLink="X" />
                                    <SocialButton link={socialLink.instagram} logo={<InstagramIconSVG className="size-3 text-muted-foreground" />} nameLink="Instagram" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 md:justify-end order-1 md:order-2">
                        <div className="relative w-40 md:w-60 lg:w-70 xl:w-80 aspect-square rounded-full overflow-hidden border-2">
                            <Image
                                src={"/photos/foto-home-2.jpeg"}
                                alt="Foto Augusto Brito"
                                fill
                                className="object-cover transition-all duration-1000 hover:scale-105"
                            />
                        </div>

                        <div className="flex gap-2 items-center bg-neutral-200 dark:bg-neutral-900 px-2 py-1 rounded-md">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
                            <p className="text-[12px] text-muted-foreground font-semibold">Disponível para oportunidades</p>
                        </div>
                    </div>
                </div>
            </RevealZoom>
        </section>
    )
}
