"use client"

import { GithubIcon } from "../icons/github-icon"
import { InstagramIcon } from "../icons/instagram-icon"
import TextType from "../ui/text-type"
import ProfileCard from "../ProfileCard"

export const Home = () => {
    return (
        <div className="grid grid-cols-2 items-center justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-xl border-muted-foreground border-l-3 pl-2">Olá, me chamo Augusto Brito</h1>

                    <div className="text-4xl font-bold">
                        <p>Sou desenvolvedor Full-Stack especializado em aplicações web</p>
                        <TextType
                            text={["modernas.", "rápidas.", "intuitivas.", "elegantes."]}
                            typingSpeed={70}
                            pauseDuration={2400}
                            showCursor
                            cursorCharacter="|"
                            cursorBlinkDuration={0.2}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-5">
                    <p className="font-semibold text-xl text-muted-foreground leading-9">Atuo do front ao back-end utilizando TypeScript, React, Next.js e Node.js, desenvolvendo soluções escaláveis com foco em arquitetura, performance e experiência do usuário. Tenho experiência com bancos SQL e NoSQL e deploy em ambientes modernos de cloud.</p>

                    <div className="flex border-t-2 gap-4 pt-4">
                        <GithubIcon className="w-6 text-muted-foreground cursor-pointer transition-all duration-300 hover:scale-105" />
                        <InstagramIcon className="w-6 text-muted-foreground cursor-pointer transition-all duration-300 hover:scale-105" />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end transition-all duration-400 hover:scale-101">
                <ProfileCard
                    name="Javi A. Torres"
                    title="Software Engineer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/photos/foto-home-2.jpeg"
                    showUserInfo={false}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                    behindGlowColor="rgba(125, 190, 255, 0.67)"
                    behindGlowEnabled
                    innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                />
            </div>
        </div>
    )
}