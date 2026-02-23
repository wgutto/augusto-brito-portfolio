import Image from "next/image"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { ButtonToggleMode } from "./button-toggle-mode"

export const Header = () => {
    return (
        <header className="w-full flex justify-between items-center p-4">

            <img src="/logo/logo.png" alt="Logo Augusto Brito" className="w-30 h-30 rounded-full" />

            <div className="flex items-center gap-1">
                <Tabs>
                    <TabsList variant="line">
                        <TabsTrigger value="overview" className="text-md cursor-pointer">Sobre</TabsTrigger>
                        <TabsTrigger value="analytics" className="text-md cursor-pointer">Habilidades</TabsTrigger>
                        <TabsTrigger value="reports" className="text-md cursor-pointer">Contato</TabsTrigger>
                    </TabsList>
                </Tabs>
                <ButtonToggleMode />
            </div>
        </header>
    )
}