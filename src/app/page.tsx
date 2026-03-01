import { About } from "@/components/layout/about"
import { Contact } from "@/components/layout/contact"
import { Header } from "@/components/layout/header"
import { Home } from "@/components/layout/home"
import { Projects } from "@/components/layout/projects"
import { Skills } from "@/components/layout/skills"
import { BackgroundBeams } from "@/components/ui/background-beams"

export const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <Header/>
      <main className="w-full snap-y snap-mandatory">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}

export default Page