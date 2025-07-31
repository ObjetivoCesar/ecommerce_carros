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
  title: "UsadosLoja.com - Tu Concesionario de Vehículos Usados en Loja",
  description:
    "Encuentra los mejores vehículos usados en Loja, Ecuador. Autos, camionetas, camiones y maquinaria pesada con garantía y financiamiento.",
  keywords: "vehículos usados, autos usados, camionetas usadas, camiones usados, maquinaria pesada, Loja, Ecuador, concesionario, financiamiento, garantía",
  generator: 'v0.dev',
  openGraph: {
    title: "UsadosLoja.com - Tu Concesionario de Vehículos Usados en Loja",
    description:
      "Encuentra los mejores vehículos usados en Loja, Ecuador. Autos, camionetas, camiones y maquinaria pesada con garantía y financiamiento.",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UsadosLoja.com - Vehículos Usados',
      },
    ],
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.usadosloja.com', // Reemplaza con tu URL real
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Asegurarse de que las variables de fuentes estén disponibles globalmente
  const fontVariables = `${sans.variable} ${heading.variable} ${condensed.variable}`
  return (
    <html 
      lang="es" 
      className={`${sans.variable} ${heading.variable} ${condensed.variable}`}
      suppressHydrationWarning
    >
      <body className={`min-h-screen bg-background antialiased ${sans.className}`}>
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
