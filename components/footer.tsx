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
              <div className="w-10 h-10 bg-marmolinas-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MG</span>
              </div>
              <span className="font-bold text-lg">Marmolinas Granillos</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Especialistas en venta e instalación de cuarzo, granito y mármol. Desde Loja para todo Ecuador.
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
                <Link href="#contacto" className="text-gray-300 hover:text-marmolinas-yellow transition-colors">
                  Contacto
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
                <MapPin className="h-5 w-5 text-marmolinas-yellow mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Av. Emiliano Ortega 195-05 entre Imbabura y Colón, Loja, Ecuador
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-marmolinas-yellow" />
                <span className="text-gray-300 text-sm">+593 98 622 3966</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-marmolinas-yellow" />
                <span className="text-gray-300 text-sm">info@marmolinasgranillos.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-marmolinas-yellow transition-colors">
              ©cesarreyesjaramillo.com
            </a> 2024 Marmolinas Granillos Importadores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
