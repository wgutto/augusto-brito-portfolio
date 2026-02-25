import { Header } from "@/components/layout/header"
import { Home } from "@/components/layout/home"

export const Page = () => {
  return (
    <div>
      <Header/>
      <main className="container mx-auto max-w-6xl min-h-screen snap-x snap-mandatory">
        <Home/>
      </main>
    </div>
  )
}

export default Page