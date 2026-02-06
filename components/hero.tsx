import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-primary-foreground/30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-primary-foreground/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary-foreground/20" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-4">
          Welcome to
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
          <span className="block whitespace-nowrap">Kabod Emmanuel Adama Church</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          A place of worship, faith, and community. Join us as we grow together in God&apos;s love and grace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-base"
          >
            <Link href="#schedule">Service Times</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
