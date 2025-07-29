import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Condensed } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/toaster"

// Configuración de fuentes
const sans = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const heading = localFont({
  src: [
    {
      path: "../public/fonts/Geometos.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
})

const condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-condensed",
  display: "swap",
})

import { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1A1A1A' },
    { media: '(prefers-color-scheme: dark)', color: '#0D0D0D' },
  ],
}

export const metadata: Metadata = {
  title: "Marmolinas Granillos Importadores - Cuarzo, Granito y Mármol en Ecuador",
  description:
    "Especialistas en venta e instalación de cuarzo, granito y mármol nacional e importado. Desde Loja para todo Ecuador. Calidad inigualable al precio ideal.",
  keywords: "cuarzo, granito, mármol, Loja, Ecuador, instalación, venta, importadores",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es" 
      className={`${sans.variable} ${heading.variable} ${condensed.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
          <ChatWidget />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
