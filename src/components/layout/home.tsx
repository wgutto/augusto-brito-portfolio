"use client"

import { GithubIcon } from "../icons/github-icon"
import { InstagramIcon } from "../icons/instagram-icon"
import TextType from "../ui/text-type"
import ProfileCard from "../ProfileCard"
import { XIcon } from "lucide-react"

export const Home = () => {
    return (
        <section className="min-h-screen snap-start grid grid-cols-2 items-center justify-center">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-xl border-muted-foreground">Olá, me chamo <span className="text-blue-600 text-2xl font-bold">Augusto Brito</span></h1>

                    <div className="text-4xl font-bold leading-tight">
                        <p>Sou desenvolvedor Full-Stack especializado em aplicações web</p>
                        <TextType
                            text={["modernas.", "rápidas.", "intuitivas.", "elegantes."]}
                            typingSpeed={120}
                            pauseDuration={3000}
                            cursorCharacter="|"
                            cursorBlinkDuration={0.3}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-5">
                    <p className="font-semibold text-xl text-muted-foreground leading-9">Atuo do front ao back-end utilizando TypeScript, React, Next.js e Node.js, desenvolvendo soluções escaláveis com foco em arquitetura, performance e experiência do usuário. Tenho experiência com bancos SQL e NoSQL e deploy em ambientes modernos de cloud.</p>

                    <div className="flex border-t-2 gap-2 pt-3">
                        <div className="p-2 rounded-full text-white bg-zinc-900 cursor-pointer transition-all duration-300 hover:scale-105">
                            <GithubIcon className="w-5" />
                        </div>

                        <div className="p-2 rounded-full text-white bg-[#E1306C] cursor-pointer transition-all duration-300 hover:scale-105">
                            <InstagramIcon className="w-5" />
                        </div>

                        <div className="p-2 rounded-full text-white bg-black dark:text-black dark:bg-white cursor-pointer transition-all duration-300 hover:scale-105">
                            <XIcon className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end transition-all duration-400 hover:scale-101">
                <ProfileCard
                    name=""
                    title=""
                    handle=""
                    status=""
                    contactText="Contact Me"
                    avatarUrl="/photos/foto-home-2.jpeg"
                    showUserInfo={false}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                    behindGlowEnabled
                />
            </div>
        </section>
    )
}