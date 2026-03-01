"use client"

import { ReactNode } from "react"

type Props = {
    icon: ReactNode
    title: string,
    message?: string
    info?: string
    link?: ReactNode
}

export const InfosContactItem = ({icon, title, message, info, link}: Props) => {
    return (
        <div className="w-full flex items-center p-2 gap-2 rounded-md cursor-pointer border hover:shadow-none md:p-4 dark:bg-white/10 shadow-lg dark:hover:bg-white/5">
            {icon}
            <div className="border-l-2 pl-2">
                <h1 className="text-md font-semibold">{title}</h1>
                <p className="text-sm text-muted-foreground">{message}</p>
                <p className="text-sm font-semibold text-blue-600">{info}</p>
                {link}
            </div>
        </div>
    )
}