import Link from "next/link"

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#ministries", label: "Ministries" },
  { href: "#schedule", label: "Service Times" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Church Info */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Kabod Emmanuel Adama Church</h3>
            <p className="text-background/70 leading-relaxed mb-4">
              A place of worship, faith, and community. Growing together in God&apos;s love.
            </p>
            <p className="text-background/60 text-sm">
              Adama, In front of General Hospital
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Times</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <span className="text-background">Sunday Service:</span> 9:00 AM
              </li>
              <li>
                <span className="text-background">Midweek Prayer:</span> Wed 6:00 PM
              </li>
              <li>
                <span className="text-background">Youth Fellowship:</span> Fri 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Kabod Emmanuel Adama Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
