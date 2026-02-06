import { Heart, BookOpen, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Love",
    description: "We believe in unconditional love as the foundation of our faith and community.",
  },
  {
    icon: BookOpen,
    title: "Faith",
    description: "Grounded in scripture, we seek to grow deeper in our relationship with God.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Together, we support one another through life's journey with fellowship and care.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            A Community Built on Faith
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kabod Emmanuel Adama Church is a vibrant faith community located in the heart of Adama, Ethiopia. 
            Our mission is to share the love of Christ, nurture spiritual growth, and serve our community with 
            compassion and dedication. We welcome everyone seeking to deepen their faith and find belonging.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
