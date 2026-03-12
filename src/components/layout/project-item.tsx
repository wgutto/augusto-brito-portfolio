import Image from "next/image"
import Link from "next/link"
import { ElementType } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { SOCIAL_LINKS } from "@/config/constants"

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
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-102 bg-blue-600 hover:bg-blue-700"
          >
            <FaExternalLinkAlt className="size-3" />
            <span>{textLinkDemo}</span>
          </Link>

          <Link
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src={
                "https://img.shields.io/badge/GitHub-%23181717.svg?logo=github&logoColor=white"
              }
              alt="Logo GitHub"
              width={75}
              height={75}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
