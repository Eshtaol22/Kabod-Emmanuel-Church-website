import { Clock, Calendar, Star } from "lucide-react"

const scheduleItems = [
  {
    icon: Clock,
    day: "Sunday",
    title: "Sunday Worship Service",
    time: "9:00 AM - 12:00 PM",
    description: "Main worship gathering with praise, prayer, and teaching",
  },
  {
    icon: Calendar,
    day: "Wednesday",
    title: "Midweek Prayer Meeting",
    time: "6:00 PM - 8:00 PM",
    description: "Corporate prayer and Bible study",
  },
  {
    icon: Star,
    day: "Friday",
    title: "Youth Fellowship",
    time: "5:00 PM - 7:00 PM",
    description: "Special gathering for young people",
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary-foreground/80 uppercase tracking-[0.2em] text-sm mb-4">
            Service Times
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
            Join Us in Worship
          </h2>
          <p className="text-primary-foreground/90 text-lg leading-relaxed">
            We invite you to be part of our worship services. Come as you are and experience the warmth of our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scheduleItems.map((item) => (
            <div
              key={item.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                  {item.day}
                </span>
              </div>
              <h3 className="font-serif text-xl mb-2">{item.title}</h3>
              <p className="text-2xl font-semibold mb-3">{item.time}</p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
