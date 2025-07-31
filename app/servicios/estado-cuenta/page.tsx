'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HeroSection } from '@/components/hero-section'
import { MobileCarousel } from '@/components/mobile-carousel'
import { 
  FileText,
  FileSearch,
  Download,
  Clock,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  CreditCard,
  DollarSign,
  History,
  Bell
} from 'lucide-react'

type EstadoCuenta = {
  id: number;
  titulo: string;
  descripcion: string;
  estado: 'al-dia' | 'pendiente' | 'vencido';
  fechaVencimiento: string;
  monto: number;
  acciones: string[];
  icon: React.ReactNode;
  bgImage: string;
};

type EstadosCuentaPorTipo = {
  [key: string]: EstadoCuenta[];
};

export default function EstadoCuentaPage() {
  const [activeTab, setActiveTab] = useState('activos')

  const estadosCuenta: EstadosCuentaPorTipo = {
    activos: [
      {
        id: 1,
        titulo: "Crédito Vehicular #12345",
        descripcion: "Financiamiento para moto deportiva XYZ 2024",
        estado: 'al-dia',
        fechaVencimiento: "15/08/2024",
        monto: 185.50,
        acciones: [
          "Descargar estado de cuenta",
          "Ver historial de pagos",
          "Programar pago automático",
          "Contactar a un asesor"
        ],
        icon: <FileText className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/Financiamiento/compra_carros.jpg'
      },
      {
        id: 2,
        titulo: "Tarjeta de Crédito Oro",
        descripcion: "Último estado de cuenta generado",
        estado: 'al-dia',
        fechaVencimiento: "05/08/2024",
        monto: 245.75,
        acciones: [
          "Descargar estado de cuenta",
          "Ver transacciones",
          "Pagar ahora",
          "Solicitar aumento de línea"
        ],
        icon: <CreditCard className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/Financiamiento/compra_carros2.jpg'
      },
      {
        id: 3,
        titulo: "Crédito de Consumo #78901",
        descripcion: "Préstamo personal para accesorios",
        estado: 'al-dia',
        fechaVencimiento: "22/08/2024",
        monto: 120.00,
        acciones: [
          "Descargar estado de cuenta",
          "Ver calendario de pagos",
          "Pagar ahora",
          "Consultar saldo a favor"
        ],
        icon: <DollarSign className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/Financiamiento/compra_carros3.jpg'
      }
    ],
    historial: [
      {
        id: 4,
        titulo: "Crédito Vehicular #12345",
        descripcion: "Estado de cuenta junio 2024",
        estado: 'al-dia',
        fechaVencimiento: "15/07/2024",
        monto: 185.50,
        acciones: [
          "Descargar estado de cuenta",
          "Ver comprobante de pago",
          "Reportar un problema"
        ],
        icon: <FileText className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/Financiamiento/cotiza1.jpg'
      },
      {
        id: 5,
        titulo: "Tarjeta de Crédito Oro",
        descripcion: "Estado de cuenta mayo 2024",
        estado: 'al-dia',
        fechaVencimiento: "05/06/2024",
        monto: 198.30,
        acciones: [
          "Descargar estado de cuenta",
          "Ver transacciones",
          "Solicitar certificado"
        ],
        icon: <CreditCard className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/Financiamiento/cotiza2.jpg'
      },
      {
        id: 6,
        titulo: "Crédito Vehicular #12345",
        descripcion: "Estado de cuenta mayo 2024",
        estado: 'vencido',
        fechaVencimiento: "15/06/2024",
        monto: 185.50,
        acciones: [
          "Descargar estado de cuenta",
          "Ver recargos",
          "Pagar ahora"
        ],
        icon: <FileText className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/Financiamiento/cotiza3.jpg'
      }
    ]
  }

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'al-dia':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
            Al día
          </span>
        )
      case 'pendiente':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3.5 h-3.5 mr-1" />
            Pendiente
          </span>
        )
      case 'vencido':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertTriangle className="w-3.5 h-3.5 mr-1" />
            Vencido
          </span>
        )
      default:
        return null
    }
  }

  const renderCard = (cuenta: EstadoCuenta) => (
    <Card key={cuenta.id} className="h-full group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image 
          src={cuenta.bgImage} 
          alt={cuenta.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          quality={80}
          sizes="(max-width: 768px) 85vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-white mb-1">{cuenta.titulo}</h3>
              {getEstadoBadge(cuenta.estado)}
            </div>
            <p className="text-white text-sm line-clamp-2">{cuenta.descripcion}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-white">Vencimiento</p>
            <p className="font-semibold text-white">{cuenta.fechaVencimiento}</p>
          </div>
          <div>
            <p className="text-sm text-white">Monto</p>
            <p className="font-semibold text-white">${cuenta.monto.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-2">Acciones disponibles:</h4>
          <ul className="space-y-2 text-sm text-white">
            {cuenta.acciones.map((accion, i) => (
              <li key={i} className="flex items-center">
                <ArrowRight className="w-4 h-4 text-[#F57B20] mr-2" />
                <span className="hover:text-[#F57B20] cursor-pointer">{accion}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button className="w-full bg-[#F57B20] hover:bg-[#D96518] text-white">
          <Download className="w-4 h-4 mr-2" />
          Ver Detalles Completos
        </Button>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        imagen="/images/Financiamiento/financiamiento_carros.jpg"
        titulo="Tus Estados de Cuenta"
        subtitulo={
          <div className="space-y-2">
            <p>• Consulta el estado de tus créditos y tarjetas</p>
            <p>• Realiza pagos en línea de forma segura</p>
            <p>• Descarga tus comprobantes de pago</p>
            <p>• Revisa tu historial de transacciones</p>
          </div>
        }
        overlayClassName="bg-black/60"
      >
        <div className="w-full md:w-auto mt-8">
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[#F57B20] hover:bg-[#D96518] text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Ingresar a Mi Cuenta
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
            >
              <Phone className="mr-2 h-5 w-5" />
              Soporte 24/7
            </Button>
          </div>
        </div>
      </HeroSection>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consulta tus Estados de Cuenta</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revisa el estado actual de tus créditos, tarjetas y productos financieros. 
              Realiza pagos, descarga comprobantes y mantén un control total de tus finanzas.
            </p>
          </div>

          <Tabs 
            defaultValue="activos" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1 rounded-lg">
                <TabsTrigger 
                  value="activos" 
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'activos' ? 'bg-white shadow-sm text-[#F57B20]' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Estados Activos
                </TabsTrigger>
                <TabsTrigger 
                  value="historial" 
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'historial' ? 'bg-white shadow-sm text-[#F57B20]' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <History className="w-4 h-4 mr-2" />
                  Historial
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Versión móvil - Carrusel */}
            <div className="md:hidden px-4 mb-8">
              <MobileCarousel>
                {estadosCuenta[activeTab as keyof typeof estadosCuenta].map(cuenta => (
                  <div key={`mobile-${cuenta.id}`} className="h-full px-2">
                    {renderCard(cuenta)}
                  </div>
                ))}
              </MobileCarousel>
            </div>

            {/* Versión escritorio - Grid normal */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {estadosCuenta[activeTab as keyof typeof estadosCuenta].map(renderCard)}
            </div>
          </Tabs>

          <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <div className="h-full relative">
                  <Image
                    className="h-full w-full object-cover"
                    src="/images/Financiamiento/te_compro.jpg"
                    alt="Soporte financiero personalizado"
                    width={600}
                    height={400}
                    priority
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#F57B20] font-semibold mb-1">Soporte Personalizado</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ayuda con tus estados de cuenta?</h3>
                <p className="text-gray-600 mb-6">
                  Nuestro equipo de asesores financieros está listo para ayudarte con cualquier consulta sobre tus créditos, 
                  pagos o estados de cuenta. Contáctanos a través de los siguientes canales:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Línea de atención telefónica</h4>
                      <p className="text-gray-600">(07) 2589-6341 - Opción 2</p>
                      <p className="text-sm text-gray-500">Lunes a viernes de 8:30 AM a 6:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Bell className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Notificaciones por WhatsApp</h4>
                      <p className="text-gray-600">+593 98 765 4321</p>
                      <p className="text-sm text-gray-500">Recibe alertas y notificaciones importantes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <FileSearch className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Oficinas de atención</h4>
                      <p className="text-gray-600">Av. Pío Jaramillo y Juan de Salinas, Loja</p>
                      <p className="text-sm text-gray-500">Lunes a viernes de 9:00 AM a 5:00 PM</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button variant="outline" className="border-[#F57B20] text-[#F57B20] hover:bg-[#F57B20]/10">
                    Ver Todas las Opciones de Contacto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">¿Quieres recibir tus estados de cuenta por correo electrónico?</h3>
              <p className="text-lg mb-6 opacity-90">
                Suscríbete a nuestro servicio de envío electrónico y recibe tus estados de cuenta 
                directamente en tu bandeja de entrada, de forma segura y respetuosa con el medio ambiente.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Ingresa tu correo electrónico"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F57B20]"
                  />
                </div>
                <Button 
                  className="bg-[#F57B20] hover:bg-[#D96518] text-white whitespace-nowrap"
                >
                  Suscribirme Ahora
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-80">
                Podrás cancelar tu suscripción en cualquier momento. Respetamos tu privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
