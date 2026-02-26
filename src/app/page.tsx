import { Header } from "@/components/layout/header"
import { Home } from "@/components/layout/home"
import { BackgroundBeams } from "@/components/ui/background-beams"

export const Page = () => {
  return (
    <div>
      <Header/>
      <main className="container mx-auto max-w-7xl min-h-screen snap-x snap-mandatory mt-8 px-4">
        <Home/>
      </main>
      <BackgroundBeams className="pointer-events-none"/>
    </div>
  )
}

export default Page