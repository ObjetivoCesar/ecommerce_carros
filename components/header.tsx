"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useCart } from "@/lib/cart-context"
import { CartWidget } from "./cart-widget"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { state } = useCart()

  const whatsappUrl = "https://wa.me/593986223966"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md shadow-lg' 
            : 'bg-[#040404]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center h-full py-2">
              <div className="relative h-full w-[160px] md:w-[180px] flex items-center">
                <Image
                  src="/images/logo.jpg"
                  alt="Racing Motos Loja"
                  fill
                  sizes="(max-width: 768px) 160px, 180px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-[#fa6704] transition-colors">
                Inicio
              </Link>
              <div className="relative group">
                <Link href="/servicios" className="text-white hover:text-[#fa6704] transition-colors flex items-center">
                  Servicios
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Link>
                <div className="absolute left-0 mt-2 w-56 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50 border border-gray-800 pt-2"
                  onMouseEnter={undefined} onMouseLeave={undefined}>
                  <Link href="/servicios/mantenimiento" className="block px-4 py-3 text-white hover:bg-[#fa6704] hover:text-white transition-colors">Mantenimiento</Link>
                  <Link href="/servicios/financiamiento" className="block px-4 py-3 text-white hover:bg-[#fa6704] hover:text-white transition-colors">Financiamiento</Link>
                  <Link href="/servicios/estado-cuenta" className="block px-4 py-3 text-white hover:bg-[#fa6704] hover:text-white transition-colors">Estado de Cuenta</Link>
                </div>
              </div>
              <Link href="/productos" className="text-white hover:text-[#fa6704] transition-colors">
                Patio de Motos
              </Link>
              <Link href="/blog" className="text-white hover:text-[#fa6704] transition-colors">
                Blog
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCartOpen(true)} 
                className="relative text-white hover:bg-white/10"
              >
                <ShoppingCart className="h-5 w-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#fa6704] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {state.items.reduce((sum, item) => sum + item.cantidad, 0)}
                  </span>
                )}
              </Button>

              <Button
                asChild
                className="bg-[#fa6704] hover:bg-[#e65c00] text-white font-semibold transition-colors"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Cotiza
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-white hover:bg-white/10" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-white hover:text-[#fa6704] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <div>
                  <button
                    className="w-full text-left text-white hover:text-[#fa6704] transition-colors py-2 flex items-center justify-between"
                    type="button"
                  >
                    Servicios
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="pl-4 flex flex-col space-y-1 mt-1">
                    <Link href="/servicios/mantenimiento" className="block py-2 text-gray-300 hover:text-white hover:bg-[#fa6704]/20 rounded transition-colors px-2" onClick={() => setIsMenuOpen(false)}>Mantenimiento</Link>
                    <Link href="/servicios/financiamiento" className="block py-2 text-gray-300 hover:text-white hover:bg-[#fa6704]/20 rounded transition-colors px-2" onClick={() => setIsMenuOpen(false)}>Financiamiento</Link>
                    <Link href="/servicios/estado-cuenta" className="block py-2 text-gray-300 hover:text-white hover:bg-[#fa6704]/20 rounded transition-colors px-2" onClick={() => setIsMenuOpen(false)}>Estado de Cuenta</Link>
                  </div>
                </div>
                <Link
                  href="/productos"
                  className="text-white hover:text-[#fa6704] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Patio de Motos
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-[#fa6704] transition-colors py-2"
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
