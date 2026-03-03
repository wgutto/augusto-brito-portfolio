import Image from "next/image"
import Link from "next/link"
import { ElementType } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

type IconType = {
    icon: ElementType
    name: string
}

type Props = {
    image: string
    title: string
    description: string
    linkDemo: string
    icons: IconType[]
}

export const ProjectItem = ({image, title, description, linkDemo, icons}: Props) => {
    return (
        <div className="border p-4 rounded-md">
            <Image
                src={image}
                alt={title}
                width={600}
                height={600}
            />

            <div className="flex flex-col gap-4">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>

                <div className="flex gap-4 border-l-2 pl-2">
                    {icons.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <div 
                                key={index}
                                className="flex flex-col items-center gap-1"
                            >
                                <Icon className="size-6"/>
                                <span className="text-[12px] text-muted-foreground">{item.name}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="flex items-center justify-between mt-2 border-t-2 pt-4">
                    <Link href={linkDemo} target="_blank" className="flex items-center gap-1 bg-blue-600 py-1 px-2 rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                        <FaExternalLinkAlt className="size-3.5 text-white"/>
                        <span className="font-bold text-sm text-white">Projeto online</span>
                    </Link>

                    <div>
                        Github
                    </div>
                </div>
            </div>
        </div>
    )
}