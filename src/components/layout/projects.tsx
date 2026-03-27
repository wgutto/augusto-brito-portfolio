import { ReactIconSVG } from "../icons/react-icon"
import { TypeScriptIconSVG } from "../icons/typescript-icon"
import { NextJsIconSVG } from "../icons/nextjs-icon"
import { TailwindIconSVG } from "../icons/tailwind-icon"
import { ProjectItem } from "./project-item"
import { NodeJsIconSVG } from "../icons/nodejs-icon"
import { ExpressIconSVG } from "../icons/express-icon"
import { PrimaIconSVG } from "../icons/prisma"
import { PostGreSqlSVG } from "../icons/postgresql"
import { RevealRight } from "../ui/reveal-right"
import { RevealLeft } from "../ui/reveal-left"
import { PROJECTS } from "@/data/constants"
import { ElementType } from "react"

const technologyIcons: Record<string, ElementType> = {
    TypeScript: TypeScriptIconSVG,
    NextJs: NextJsIconSVG,
    React: ReactIconSVG,
    TailwindCSS: TailwindIconSVG,
    NodeJs: NodeJsIconSVG,
    Express: ExpressIconSVG,
    Prisma: PrimaIconSVG,
    PostgreSQL: PostGreSqlSVG,
}

export const Projects = () => {
    return (
        <section
            id="projects"
            className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 py-20 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]"
        >
            <h1 className="text-2xl md:text-3xl font-bold">Projetos</h1>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {PROJECTS.map((project, index) => {
                    const isLeft = index % 2 === 0
                    const Wrapper = isLeft ? RevealLeft : RevealRight

                    return (
                        <Wrapper key={project.id}>
                            <ProjectItem
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                linkDemo={project.link}
                                textLinkDemo={project.linkText}
                                icons={project.technologies.map((tech) => ({
                                    icon: technologyIcons[tech],
                                    name: tech,
                                }))}
                            />
                        </Wrapper>
                    )
                })}
            </div>
        </section>
    )
}
