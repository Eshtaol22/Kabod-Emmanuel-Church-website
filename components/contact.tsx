import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+251 22 111 2233",
    href: "tel:+251221112233",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@kabodamanuel.org",
    href: "mailto:info@kabodamanuel.org",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Adama, In front of General Hospital",
    href: "https://maps.google.com/?q=Adama+General+Hospital,Ethiopia",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon-Fri: 9AM-5PM",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you have questions, need prayer, or want to learn more about our church, 
            we&apos;re here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.label} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="border-border bg-card overflow-hidden">
            <CardContent className="p-0 h-full min-h-[300px]">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4041234567891!2d39.2690532!3d8.5401234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f2c3d26b9f3%3A0x123456789abcdef!2sAdama%20General%20Hospital!5e0!3m2!1sen!2set!4v1706000000000!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Church Location - Adama, In front of General Hospital"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
