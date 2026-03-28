import Link from "next/link"
import { ReactNode } from "react"
type Props = {
    link: string
    logo: ReactNode
    nameLink: string
}

export const SocialButton = ({ link, logo, nameLink }: Props) => {
    return (
        <Link 
        href={link}
        className="flex gap-2 items-center bg-neutral-200 px-4 py-1 rounded-md border border-neutral-300/30 transition-colors duration-300 hover:bg-neutral-300 hover:border-neutral-400/30 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:border-neutral-800"
        >
            {logo}
            <p className="text-[12px] text-muted-foreground">{nameLink}</p>
        </Link>
    )
}