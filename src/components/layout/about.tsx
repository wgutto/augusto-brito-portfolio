"use client"

import { GlareCard } from "../ui/glare-card"
import Image from "next/image"
import { RevealLeft } from "../ui/reveal-left"
import { RevealRight } from "../ui/reveal-right"
import { RevealTop } from "../ui/reveal-top"


export const About = () => {
    return (
        <section id="about" className="w-full min-h-screen snap-start flex flex-col justify-center">
            <RevealTop>
                <h1 className="text-center text-2xl md:3xl font-bold">Sobre</h1>
            </RevealTop>
            <div className="flex flex-col items-center gap-6 mt-8 md:mt-10 md:flex-row md:gap-10">
                <RevealLeft>
                    <div className="flex justify-center">
                        <GlareCard className="relative w-90 h-80 md:w-100 md:h-[600]">
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
                    <div className="flex flex-col text-lg text-justify text-muted-foreground gap-2 leading-relaxed font-semibold md:text-xl">
                        <p>Sou Augusto Brito, desenvolvedor full-stack de 23 anos e estudante de Engenharia de Software, residente no Ceará, Brasil. Atuo no desenvolvimento de aplicações web modernas, com foco em performance, organização de código e uma experiência de usuário bem construída.</p>
                        <p>Estou em constante evolução, buscando aprimorar minhas habilidades técnicas e aprofundar meus conhecimentos em boas práticas e arquitetura de software. Tenho perfil analítico, atenção aos detalhes e interesse em projetos que me desafiem a crescer e gerar impacto por meio da tecnologia.</p>
                    </div>
                </RevealRight>
            </div>
        </section>
    )
}