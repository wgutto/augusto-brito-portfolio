"use client"

import { ArrowUpRight } from "lucide-react"
import { ReactNode } from "react"

type Props = {
    icon: ReactNode
    title: string
    message: string
}

export const InfosContactItem = ({ icon, title, message }: Props) => {
    return (
        <div className="w-full flex items-center justify-between p-2 rounded-md cursor-pointer border bg-card shadow-md transition-all duration-300 hover:border-neutral-600">
            <div className="flex gap-4">
                <div className="flex items-center bg-muted-foreground text-white p-2 rounded-md dark:text-white dark:bg-neutral-950">{icon}</div>
                <div>
                    <h1 className="text-md font-semibold">{title}</h1>
                    <p className="text-sm text-muted-foreground">{message}</p>
                </div>
            </div>

            <div>
                <ArrowUpRight className="text-muted-foreground size-5"/>
            </div>
        </div>
    )
}
