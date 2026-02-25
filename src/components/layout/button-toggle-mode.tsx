"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export const ButtonToggleMode = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer ml-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                <Sun className="size-4.5 scale-100 transition-all dark:scale-0" />
                <Moon className="absolute size-4.5 scale-0 transition-all dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    )
}
