import { ReactIconSVG } from "../icons/react-icon"
import { TypeScriptIconSVG } from "../icons/typescript-icon"
import { NextJsIconSVG } from "../icons/nextjs-icon"
import { TailwindIconSVG } from "../icons/tailwind-icon"
import { ProjectItem } from "./project-item"

export const Projects = () => {
    return (
        <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center snap-start px-4 py-20 overflow-hidden dark:bg-linear-to-t dark:from-black dark:to-[#020617]">
            <h1 className="text-2xl md:text-3xl font-bold">Projetos</h1>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <ProjectItem
                    image="/mockups/mockup-netus-pizzaria.png"
                    title="Net'us Pizzaria"
                    description="Plataforma de pedidos online para pizzaria com carrinho, escolha de tamanhos e integração direta com WhatsApp para envio automático do pedido ao lojista."
                    linkDemo="https://project-netus-pizzaria.vercel.app/"
                    icons={[
                        {icon: TypeScriptIconSVG, name: "TypeScript"},
                        {icon: NextJsIconSVG, name: "NextJs"},
                        {icon: ReactIconSVG, name: "React"},
                        {icon: TailwindIconSVG, name: "TailwindCSS"}
                    ]}
                />
                <ProjectItem
                    image="/mockups/mockup-calculadora-imc.png"
                    title="Calculadora de IMC"
                    description="Aplicação web responsiva para cálculo do Índice de Massa Corporal (IMC), com validação de formulários em tempo real, interface intuitiva e suporte a tema claro e escuro."
                    linkDemo="https://projeto-calculadora-de-imc-pearl.vercel.app/"
                    icons={[
                        {icon: TypeScriptIconSVG, name: "TypeScript"},
                        {icon: NextJsIconSVG, name: "NextJs"},
                        {icon: ReactIconSVG, name: "React"},
                        {icon: TailwindIconSVG, name: "TailwindCSS"}
                    ]}
                />
            </div>
        </section>
    )
}