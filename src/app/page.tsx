import { About } from "@/components/layout/about"
import { Header } from "@/components/layout/header"
import { Home } from "@/components/layout/home"

export const Page = () => {
  return (
    <div>
      <Header/>
      <main className="w-full snap-y snap-mandatory">
        <Home/>
        <About/>
      </main>
    </div>
  )
}

export default Page