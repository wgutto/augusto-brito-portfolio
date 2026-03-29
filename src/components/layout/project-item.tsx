import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { GithubIconSVG } from "../svgs/github-icon"
import { StackIcon } from "./stack-icon"
import { Project } from "@/types/project"

type Props = {
    project: Project
}

export const ProjectItem = ({ project }: Props) => {
    return (
        <div className="flex flex-col items-center border rounded-md shadow-md bg-card">
            <Image src={project.image} alt={project.title} width={500} height={500} />

            <div className="flex flex-col p-4 gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">{project.title}</h2>

                        <p
                            className="px-2 py-1 rounded-md text-[11px]"
                            style={{ color: project.colorTextStatus, background: project.colorBgStatus }}
                        >{project.textStatus}</p>
                    </div>

                    <p className="text-muted-foreground text-left">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-3 border-y-2 py-4">
                    {project.stacks.map((item, index) =>
                        <StackIcon key={index} stackName={item.stack} color={item.color} />
                    )}
                </div>

                <div className="flex items-center justify-between mt-2">
                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex"
                    >
                        <div className="text-sm flex items-center gap-2 p-2 rounded-md text-white cursor-pointer bg-blue-600 hover:bg-blue-700">
                            <p>Ver projeto</p>
                            <ExternalLink className="size-4" />
                        </div>
                    </Link>

                    <Link
                        href={"https://github.com/wgutto"}
                        target="_blank"
                        className="flex gap-2 items-center bg-neutral-200 p-2 rounded-md border border-neutral-300/30 transition-colors duration-300 hover:bg-neutral-300 hover:border-neutral-400/30 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:border-neutral-800"
                    >
                        <GithubIconSVG className="size-4 text-muted-foreground"/>
                        <p className="text-sm text-muted-foreground">Github</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
