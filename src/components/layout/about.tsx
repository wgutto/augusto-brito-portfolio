"use client"

import { GlareCard } from "../ui/glare-card"
import Image from "next/image"
import { RevealLeft } from "../ui/reveal-left"
import { RevealRight } from "../ui/reveal-right"
import { ReactIconSVG } from "../icons/react-icon"
import { TailwindIconSVG } from "../icons/tailwind-icon"
import { NextJsIconSVG } from "../icons/nextjs-icon"
import { ViteJsIconSVG } from "../icons/vitejs-icon"
import { HTMLIconSVG } from "../icons/html-icon"
import { CSSIconSVG } from "../icons/css-icon"
import { TypeScriptIconSVG } from "../icons/typescript-icon"
import { NodeJsIconSVG } from "../icons/nodejs-icon"
import { ExpressIconSVG } from "../icons/express-icon"
import { PrimaIconSVG } from "../icons/prisma"
import { MySqlIconSVG } from "../icons/mysql-icon"
import { MongoDbIconSVG } from "../icons/mongodb-icon"
import { PostGreSqlSVG } from "../icons/postgresql"

export const About = () => {
    return (
        <section id="about" className="relative w-full min-h-screen flex items-center justify-center snap-start px-4 overflow-hidden dark:bg-linear-to-b dark:from-black dark:to-[#020617]">
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center gap-6">
                <h1 className="text-2xl md:text-3xl font-bold">Sobre</h1>
                <div className="flex w-full flex-col gap-4 rounded-md md:flex-row md:gap-6">
                    <RevealLeft>
                        <div className="hidden md:block">
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
                            <div className="flex flex-col text-md text-justify text-muted-foreground gap-2 leading-relaxed min-[428]:text-lg font-semibold md:text-xl">
                                <p>Sou Augusto Brito, desenvolvedor full-stack de 23 anos e estudante de Engenharia de Software, residente no Ceará, Brasil. Atuo no desenvolvimento de aplicações web modernas, com foco em performance, organização de código e uma experiência de usuário bem construída.</p>
                                <p>Estou em constante evolução, buscando aprimorar minhas habilidades técnicas e aprofundar meus conhecimentos em boas práticas e arquitetura de software. Tenho perfil analítico, atenção aos detalhes e interesse em projetos que me desafiem a crescer e gerar impacto por meio da tecnologia.</p>
                            </div>

                            <h2 className="text-center text-xl font-semibold">Habilidades</h2>

                            <div className="border-l-2 pl-2">
                                <h3 className="font-semibold pb-2">Frontend</h3>
                                <div className="flex items-center gap-2">
                                    <TypeScriptIconSVG className="size-12"/>
                                    <ReactIconSVG className="size-12"/>
                                    <TailwindIconSVG className="size-12"/>
                                    <NextJsIconSVG className="size-12"/>
                                    <ViteJsIconSVG className="size-12"/>
                                    <HTMLIconSVG className="size-12"/>
                                    <CSSIconSVG className="size-12"/>
                                </div>
                            </div>

                            <div className="border-l-2 pl-2">
                                <h3 className="font-semibold pb-2">Backend</h3>
                                <div className="flex items-center gap-2">
                                    <NodeJsIconSVG className="size-12"/>
                                    <ExpressIconSVG className="size-12 text-black dark:text-white"/>
                                    <PrimaIconSVG className="size-12 text-black dark:text-white"/>
                                </div>
                            </div>

                            <div className="border-l-2 pl-2">
                                <h3 className="font-semibold pb-2">Databases</h3>
                                <div className="flex items-center gap-2">
                                    <MySqlIconSVG className="size-12 text-black dark:text-white"/>
                                    <MongoDbIconSVG className="size-12"/>
                                    <PostGreSqlSVG className="size-12"/>
                                </div>
                            </div>


                            {/* <div>
                                <div>
                                    <p>FrontEnd</p>
                                    <BiLogoTypescript className="size-15"/>
                                </div>
                                <div>
                                    <p>BackEnd</p>
                                    <BiLogoTypescript className="size-15"/>
                                </div>
                            </div> */}
                        </div>
                    </RevealRight>
                </div>
            </div>
        </section>
    )
}