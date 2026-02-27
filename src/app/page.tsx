import { About } from "@/components/layout/about"
import { Header } from "@/components/layout/header"
import { Home } from "@/components/layout/home"

export const Page = () => {
  return (
    <div>
      <Header/>
      <main className="container mx-auto max-w-7xl min-h-screen snap-x snap-mandatory mt-15 md:mt-0 mb-8 px-4">
        <Home/>
        <About/>
      </main>
    </div>
  )
}

export default Page