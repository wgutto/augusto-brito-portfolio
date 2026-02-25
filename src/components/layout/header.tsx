import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { ButtonToggleMode } from "./button-toggle-mode"
import { MonitorCog } from "lucide-react"

export const Header = () => {
    return (
        <header className="max-w-6xl mx-auto flex justify-between items-center mt-6">
            <div className="flex items-center gap-2 rounded-md">
                <MonitorCog className="size-10"/>
                <div className="flex flex-col">
                    <p className="text-2xl font-bold">Augusto Brito</p>
                    <p className="text-sm font-semibold">Desenvolvedor de Software</p>
                </div>
            </div>

            <div className="flex items-center bg-black/5 py-2 px-4 rounded-md dark:bg-white/5">
                <Tabs className="border-r-2">
                    <TabsList variant="line">
                        <TabsTrigger value="sobre" className="cursor-pointer">Sobre</TabsTrigger>
                        <TabsTrigger value="habilidades" className="cursor-pointer">Habilidades</TabsTrigger>
                        <TabsTrigger value="projetos" className="cursor-pointer">Projetos</TabsTrigger>
                        <TabsTrigger value="contato" className="cursor-pointer">Contato</TabsTrigger>
                    </TabsList>
                </Tabs>
                <ButtonToggleMode />
            </div>
        </header>
    )
}