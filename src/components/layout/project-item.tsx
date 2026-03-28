import Image from "next/image"
import Link from "next/link"
import { ElementType } from "react"
import { ExternalLink } from "lucide-react"
import { socialLink } from "@/data/constants"
import { SocialButton } from "./social-button"
import { GithubIconSVG } from "../icons/github-icon"

type IconType = {
    icon: ElementType
    name: string
}

type Props = {
    image: string
    title: string
    description: string
    linkDemo: string
    textLinkDemo: string
    icons: IconType[]
}

export const ProjectItem = ({
    image,
    title,
    description,
    linkDemo,
    textLinkDemo,
    icons,
}: Props) => {
    return (
        <div className="border p-4 rounded-md shadow-md bg-card">
            <Image src={image} alt={title} width={600} height={600} />

            <div className="flex flex-col gap-4">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>

                <div className="flex flex-wrap gap-3 border-l-2 pl-2">
                    {icons.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <div key={index} className="flex flex-col items-center gap-1">
                                <Icon className="size-6" />
                                <span className="text-[12px] text-muted-foreground">
                                    {item.name}
                                </span>
                            </div>
                        )
                    })}
                </div>

                <div className="flex items-center justify-between mt-2 border-t-2 pt-4">
                    <Link
                        href={linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex"
                    >
                        <div className="text-sm flex items-center gap-2 p-2 rounded-md text-white cursor-pointer bg-blue-600 hover:bg-blue-700">
                            <span>{textLinkDemo}</span>
                            <ExternalLink className="size-4"/>
                        </div>
                    </Link>

                    <SocialButton link={socialLink.github} logo={<GithubIconSVG className="size-3 text-muted-foreground" />} nameLink="Github" />
                </div>
            </div>
        </div>
    )
}
