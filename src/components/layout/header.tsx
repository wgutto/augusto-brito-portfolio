import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { ButtonToggleMode } from "./button-toggle-mode"

export const Header = () => {
    return (
        <header className="fixed top-5 left-0 w-full z-50">
            {/* <div className="flex gap-2 text-xl font-bold">
                    <p>Augusto Brito |</p>
                    <p className="text-blue-600">Dev.</p>
            </div> */}

            <div className="flex items-center justify-center">
                <div className="flex bg-black/10 py-2 px-4 rounded-md dark:bg-zinc-900/70">
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
            </div>
        </header>
    )
}