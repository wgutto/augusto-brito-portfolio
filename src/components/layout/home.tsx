"use client"

import Image from "next/image"
import TextType from "../ui/text-type"
import Link from "next/link"
import RevealZoom from "../ui/reveal-zoom"
import { SOCIAL_LINKS } from "@/data/constants"

export const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center snap-start px-4 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]"
        >
            <RevealZoom>
                <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center gap-2 order-2 md:order-1">
                        <div className="flex flex-col text-center md:text-start">
                            <h1 className="font-semibold text-md md:text-xl xl:text-2xl border-muted-foreground">
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
                                    className="text-lg md:text-2xl xl:text-3xl font-bold text-blue-600"
                                />
                            </h1>
                            <div className="text-2xl text-center md:text-start md:text-4xl xl:text-5xl font-bold leading-tight">
                                Focado na criação de sistemas performáticos, escaláveis e bem
                                arquitetados.
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-lg md:text-xl text-justify text-muted-foreground leading-relaxed">
                                Atuo do front ao back-end utilizando TypeScript, React, Next.js e
                                Node.js, desenvolvendo soluções escaláveis com foco em arquitetura,
                                performance e experiência do usuário. Tenho experiência com bancos
                                SQL e NoSQL e deploy em ambientes modernos de cloud.
                            </p>
                            <div className="flex justify-end border-t-2 gap-2 pt-4">
                                <Link
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <Image
                                        src={
                                            "https://img.shields.io/badge/GitHub-%23181717.svg?logo=github&logoColor=white"
                                        }
                                        alt="Logo GitHub"
                                        width={68}
                                        height={68}
                                    />
                                </Link>
                                <Link
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Image
                                        src={
                                            "https://img.shields.io/badge/LinkedIn-%230A66C2.svg?logo=linkedin&logoColor=white"
                                        }
                                        alt="Logo LinkedIn"
                                        width={60}
                                        height={60}
                                    />
                                </Link>
                                <Link
                                    href={SOCIAL_LINKS.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <Image
                                        src={
                                            "https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white"
                                        }
                                        alt="Logo Instagram"
                                        width={90}
                                        height={90}
                                    />
                                </Link>
                                <Link
                                    href={SOCIAL_LINKS.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter/X"
                                >
                                    <Image
                                        src={
                                            "https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white"
                                        }
                                        alt="Logo X"
                                        width={38}
                                        height={38}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center md:justify-end order-1 md:order-2">
                        <div className="relative w-40 md:w-60 lg:w-70 xl:w-80 aspect-square rounded-full overflow-hidden shadow-md shadow-blue-600">
                            <Image
                                src={"/photos/foto-home-2.jpeg"}
                                alt="Foto Augusto Brito"
                                fill
                                className="object-cover transition-all duration-1000 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </RevealZoom>
        </section>
    )
}
