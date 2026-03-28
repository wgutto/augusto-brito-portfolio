"use client"

import { GlareCard } from "../ui/glare-card"
import Image from "next/image"
import { RevealLeft } from "../ui/reveal-left"
import { RevealRight } from "../ui/reveal-right"
import { stacks } from "@/data/constants"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { StackIcon } from "./stack-icon"

export const About = () => {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen flex flex-col items-center justify-center snap-start px-4 py-20 overflow-hidden md:py-0 dark:bg-linear-to-b dark:from-black dark:to-[#020617]"
        >
            <h1 className="text-2xl md:text-3xl font-bold">Sobre</h1>

            <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col justify-center mt-6 lg:items-center lg:gap-6 lg:flex-row">
                <RevealLeft>
                    <div className="hidden lg:flex shadow-2xl rounded-[48px]">
                        <GlareCard className="relative w-88 h-70 md:w-100 md:h-150">
                            <Image
                                src={"/photos/foto-home.jpeg"}
                                alt="Foto Augusto Brito"
                                fill
                                className="object-cover object-top"
                            />
                        </GlareCard>
                    </div>
                </RevealLeft>
                <RevealRight>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-bold">Augusto Brito</h1>

                            <p className="text-muted-foreground text-lg text-left">Desenvolvedor <span className="text-black font-semibold dark:text-white">Full-Stack</span> apaixonado por construir aplicações web que aliam boa performance a uma experiência de usuário cuidadosa. Tenho 23 anos, estudo Engenharia de Software e sou do Ceará, Brasil.</p>

                            <p className="text-muted-foreground text-lg text-left">Gosto de código bem organizado, de entender o porquê das coisas e de projetos que exijam pensar além do óbvio. Estou sempre aprendendo, atualmente aprofundando em arquitetura de software e boas práticas que fazem a diferença no longo prazo.</p>
                        </div>

                        <div className="flex flex-col border-y-2 py-4 gap-2">
                            <p className="text-muted-foreground font-semibold text-sm">Stack principal</p>

                            <div className="flex gap-4 flex-wrap">
                                {stacks.map((item, index) =>
                                    <StackIcon key={index} stackName={item.stackName} color={item.color} />
                                )}
                            </div>
                        </div>

                        <Link href={"https://github.com/wgutto?tab=repositories"} target="_blank" className="flex">
                            <div className="text-sm flex items-center gap-2 px-2 py-2 rounded-md text-white cursor-pointer bg-blue-600 hover:bg-blue-700">
                                <span>Ver projetos</span>
                                <ExternalLink className="size-4" />
                            </div>
                        </Link>
                    </div>
                </RevealRight>
            </div>
        </section>
    )
}
