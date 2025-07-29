import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RM</span>
              </div>
              <span className="font-bold text-lg">RACING MOTOS</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Especialistas en venta de motocicletas y repuestos. Concesionario autorizado con las mejores marcas del mercado.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-marmolinas-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-marmolinas-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-marmolinas-yellow transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-marmolinas-yellow transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-marmolinas-yellow transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-300 hover:text-marmolinas-yellow transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-marmolinas-yellow transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/venta-instalacion"
                  className="text-gray-300 hover:text-marmolinas-yellow transition-colors"
                >
                  Venta e Instalación
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/pulido-restauracion"
                  className="text-gray-300 hover:text-marmolinas-yellow transition-colors"
                >
                  Pulido y Restauración
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/resina-fibra"
                  className="text-gray-300 hover:text-marmolinas-yellow transition-colors"
                >
                  Resina y Fibra de Vidrio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Av Cuxibamba y Benjamín Cevallos, Loja, Ecuador
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-300 text-sm">099 273 6139</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-500" />
                <a href="mailto:vicenteortega09@hotmail.com" className="text-gray-300 text-sm hover:text-red-400 transition-colors">
                  vicenteortega09@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              ©cesarreyesjaramillo.com
            </a> 2024 RACING MOTOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
