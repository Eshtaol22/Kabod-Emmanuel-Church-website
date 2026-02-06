import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
})
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Kabod Emmanuel Adama Church | A Place of Worship, Faith, and Community',
  description: 'Welcome to Kabod Emmanuel Adama Church in Adama, Ethiopia. Located in front of General Hospital. Join us for worship services, prayer meetings, youth ministry, and gospel outreach.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
