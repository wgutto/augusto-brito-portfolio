"use client"

import Image from "next/image"
import { GithubIcon } from "../icons/github-icon"
import { InstagramIcon } from "../icons/instagram-icon"
import TextType from "../ui/text-type"
import { XIcon } from "lucide-react"
import { BackgroundBeams } from "../ui/background-beams"

export const Home = () => {
    return (
        <section id="home" className="min-h-screen scroll-mt-20 snap-start flex flex-col justify-center gap-8 md:flex-row md:items-center">
            <div className="min-h-full flex flex-col items-center gap-6 order-2 md:order-1">
                <div className="flex flex-col text-center md:text-start">
                    <h1 className="font-semibold text-lg md:text-lg xl:text-xl border-muted-foreground">Olá, eu sou
                        <TextType
                            text={[" Augusto Brito", " Software Engineer", " Full-Stack Developer"]}
                            typingSpeed={120}
                            pauseDuration={3000}
                            cursorCharacter="|"
                            cursorBlinkDuration={0.3}
                            className="text-xl md:text-2xl xl:text-3xl font-bold text-blue-600"
                        />

                    </h1>

                    <div className="text-3xl text-center md:text-start md:text-4xl xl:text-5xl font-bold leading-tight">
                        Focado na criação de sistemas performáticos, escaláveis e bem arquitetados.
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-semibold text-lg md:text-xl text-justify text-muted-foreground leading-relaxed">Atuo do front ao back-end utilizando TypeScript, React, Next.js e Node.js, desenvolvendo soluções escaláveis com foco em arquitetura, performance e experiência do usuário. Tenho experiência com bancos SQL e NoSQL e deploy em ambientes modernos de cloud.</p>

                    <div className="flex justify-end border-t-2 gap-2 pt-4">
                        <div className="p-2 rounded-full text-black border cursor-pointer transition-all duration-500 hover:scale-106 hover:bg-zinc-900 hover:text-white dark:text-white  hover:border-zinc-900">
                            <GithubIcon className="w-5" />
                        </div>

                        <div className="p-2 rounded-full text-black border cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-[#E1306C] hover:text-white dark:text-white hover:border-[#E1306C]">
                            <InstagramIcon className="w-5" />
                        </div>

                        <div className="p-2 rounded-full text-black border cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-black hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white">
                            <XIcon className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-40 md:w-60 lg:w-80 xl:w-90 aspect-square rounded-full overflow-hidden shadow-md shadow-blue-600">
                    <Image
                        src={"/photos/foto-home-2.jpeg"}
                        alt="Foto Augusto Brito"
                        fill
                        className="object-cover transition-all duration-1000 hover:scale-105"
                    />
                </div>
            </div>

            <BackgroundBeams className="pointer-events-none"/>
        </section>
    )
}