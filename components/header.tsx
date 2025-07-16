"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { CartWidget } from "./cart-widget"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { state } = useCart()

  const whatsappUrl = "https://wa.me/593986223966"

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo-marmolinas.jpg"
                alt="Marmolinas Granillos Importadores"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="font-bold text-marmolinas-blue hidden sm:block">Marmolinas Granillos</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-marmolinas-blue transition-colors">
                Inicio
              </Link>
              <div className="relative group">
                <Link href="/servicios" className="text-gray-700 hover:text-marmolinas-blue transition-colors flex items-center">
                  Servicios
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Link>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-gray-100 pt-2"
                  onMouseEnter={undefined} onMouseLeave={undefined}>
                  <Link href="/servicios/venta-instalacion" className="block px-4 py-3 text-marmolinas-blue hover:bg-marmolinas-yellow hover:text-marmolinas-blue transition-colors">Venta e Instalación</Link>
                  <Link href="/servicios/pulido-restauracion" className="block px-4 py-3 text-marmolinas-blue hover:bg-marmolinas-yellow hover:text-marmolinas-blue transition-colors">Pulido y Restauración</Link>
                  <Link href="/servicios/resina-fibra" className="block px-4 py-3 text-marmolinas-blue hover:bg-marmolinas-yellow hover:text-marmolinas-blue transition-colors">Resina y Fibra de Vidrio</Link>
                </div>
              </div>
              <Link href="/productos" className="text-gray-700 hover:text-marmolinas-blue transition-colors">
                Productos
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-marmolinas-blue transition-colors">
                Blog
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart className="h-5 w-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-marmolinas-yellow text-marmolinas-blue text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {state.items.reduce((sum, item) => sum + item.cantidad, 0)}
                  </span>
                )}
              </Button>

              <Button
                asChild
                className="bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90 font-semibold"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Cotiza
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-marmolinas-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <div>
                  <button
                    className="w-full text-left text-gray-700 hover:text-marmolinas-blue transition-colors py-2 flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                    type="button"
                  >
                    Servicios
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isMenuOpen && (
                    <div className="pl-4 flex flex-col space-y-1">
                      <Link href="/servicios/venta-instalacion" className="block py-2 text-marmolinas-blue hover:bg-marmolinas-yellow hover:text-marmolinas-blue rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Venta e Instalación</Link>
                      <Link href="/servicios/pulido-restauracion" className="block py-2 text-marmolinas-blue hover:bg-marmolinas-yellow hover:text-marmolinas-blue rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Pulido y Restauración</Link>
                      <Link href="/servicios/resina-fibra" className="block py-2 text-marmolinas-blue hover:bg-marmolinas-yellow hover:text-marmolinas-blue rounded transition-colors" onClick={() => setIsMenuOpen(false)}>Resina y Fibra de Vidrio</Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/productos"
                  className="text-gray-700 hover:text-marmolinas-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-marmolinas-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cart Widget */}
      <CartWidget isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
