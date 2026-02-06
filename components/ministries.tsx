import { Church, HandHeart, Users, BookOpen, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ministries = [
  {
    icon: Church,
    title: "Worship Services",
    description: "Experience uplifting worship through prayer, praise, and the Word of God every Sunday.",
  },
  {
    icon: HandHeart,
    title: "Prayer Meetings",
    description: "Join us midweek for powerful times of intercession and spiritual renewal.",
  },
  {
    icon: Users,
    title: "Youth Ministry",
    description: "Empowering the next generation with faith, fellowship, and purpose.",
  },
  {
    icon: BookOpen,
    title: "Sunday School",
    description: "Biblical education for all ages, building a strong foundation in God's Word.",
  },
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Serving our neighbors and spreading hope throughout Adama and beyond.",
  },
]

export function Ministries() {
  return (
    <section id="ministries" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Our Ministries
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Ways to Get Involved
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover the many ways you can connect, grow, and serve within our church family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ministries.map((ministry, index) => (
            <Card
              key={ministry.title}
              className={`group hover:shadow-lg transition-all duration-300 border-border bg-card ${
                index === ministries.length - 1 && ministries.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ministry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{ministry.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{ministry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
