import { Header } from "@/components/layout/header"
import { Home } from "@/components/layout/home"

export const Page = () => {
  return (
    <div>
      <Header/>
      <main className="container mx-auto max-w-6xl min-h-full flex items-center mt-25">
        <Home/>
      </main>
    </div>
  )
}

export default Page