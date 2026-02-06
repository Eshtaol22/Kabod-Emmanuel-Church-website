import { CalendarDays, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    date: "Mar 15",
    title: "Easter Celebration Service",
    description: "Join us for a special Easter worship service celebrating the resurrection of Christ.",
    category: "Special Service",
  },
  {
    date: "Mar 22",
    title: "Gospel Outreach",
    description: "Join us as we share the good news of Jesus Christ with non-believers in our community.",
    category: "Evangelism",
  },
  {
    date: "Apr 5",
    title: "Youth Conference 2026",
    description: "Annual youth gathering featuring worship, teaching, and fellowship for young believers.",
    category: "Youth",
  },
]

const announcements = [
  "New members class starts next Sunday after service",
  "Choir practice every Saturday at 3:00 PM",
  "Bible study materials available at the church office",
]

export function Events() {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Events & Announcements
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Stay updated with what&apos;s happening in our church community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Events */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" />
              Upcoming Events
            </h3>
            {events.map((event) => (
              <Card key={event.title} className="group hover:shadow-md transition-shadow border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-primary text-lg font-bold">
                          {event.date.split(" ")[1]}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {event.category}
                      </span>
                      <h4 className="font-serif text-lg text-foreground mt-1 mb-2">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Announcements */}
          <div>
            <h3 className="font-serif text-xl text-foreground mb-4">Announcements</h3>
            <Card className="bg-secondary border-border">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-full bg-primary/80" />
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {announcement}
                      </p>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full mt-6 bg-transparent">
                  <Link href="#contact">View All Updates</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
