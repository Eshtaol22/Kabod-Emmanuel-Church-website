import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Ministries } from "@/components/ministries"
import { Schedule } from "@/components/schedule"
import { Events } from "@/components/events"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Ministries />
      <Schedule />
      <Events />
      <Contact />
      <Footer />
    </main>
  )
}
