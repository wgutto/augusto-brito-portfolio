import { ProjectItem } from "./project-item"
import { RevealRight } from "../ui/reveal-right"
import { RevealLeft } from "../ui/reveal-left"
import { projects } from "@/data/constants"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 py-20 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]"
        >
            <h1 className="text-2xl md:text-3xl font-bold">Projetos</h1>

            <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {projects.map((project, index) => {
                    const isLeft = index % 2 === 0
                    const Wrapper = isLeft ? RevealLeft : RevealRight

                    return (
                        <Wrapper key={project.id}>
                            <ProjectItem
                                project={project}
                            />
                        </Wrapper>
                    )
                })}
            </div>
        </section>
    )
}
