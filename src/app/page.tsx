import { About } from "@/components/layout/about"
import { Certifications } from "@/components/layout/certifications"
import { Contact } from "@/components/layout/contact"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Home } from "@/components/layout/home"
import { Projects } from "@/components/layout/projects"

export const Page = () => {
  return (
    <div>
      <Header />
      <main className="w-full min-h-screen snap-y snap-mandatory">
        <Home />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Page
