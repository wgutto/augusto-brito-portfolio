"use client"

import { GlareCard } from "../ui/glare-card"
import Image from "next/image"
import { RevealLeft } from "../ui/reveal-left"
import { RevealRight } from "../ui/reveal-right"
import { BiLogoTypescript } from "react-icons/bi"


export const About = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center snap-start px-4 overflow-hidden dark:bg-linear-to-b dark:from-black dark:to-[#020617]">
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
                <h1 className="text-2xl md:text-3xl font-bold">Sobre</h1>
                <div className="w-full flex flex-col justify-between gap-4 rounded-md md:flex-row md:gap-6">
                    <RevealLeft>
                        <div className="flex justify-center">
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
                        <div className="min-h-full flex flex-col justify-around items-center">
                            <div className="flex flex-col text-md text-justify text-muted-foreground gap-2 leading-relaxed min-[428]:text-lg font-semibold md:text-xl">
                                <p>Sou Augusto Brito, desenvolvedor full-stack de 23 anos e estudante de Engenharia de Software, residente no Ceará, Brasil. Atuo no desenvolvimento de aplicações web modernas, com foco em performance, organização de código e uma experiência de usuário bem construída.</p>
                                <p>Estou em constante evolução, buscando aprimorar minhas habilidades técnicas e aprofundar meus conhecimentos em boas práticas e arquitetura de software. Tenho perfil analítico, atenção aos detalhes e interesse em projetos que me desafiem a crescer e gerar impacto por meio da tecnologia.</p>
                            </div>


                            <div>
                                <div>
                                    <p>FrontEnd</p>
                                    <BiLogoTypescript className="size-15"/>
                                </div>
                                <div>
                                    <p>BackEnd</p>
                                    <BiLogoTypescript className="size-15"/>
                                </div>
                            </div>
                        </div>
                    </RevealRight>
                </div>
            </div>
        </section>
    )
}