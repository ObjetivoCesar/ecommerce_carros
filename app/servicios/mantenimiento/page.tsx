'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HeroSection } from '@/components/hero-section'
import { MobileCarousel } from '@/components/mobile-carousel'
import { 
  Wrench, 
  Settings, 
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  Zap,
  ZapOff,
  Users,
  FileText,
  Star,
  Home as HomeIcon,
  Shield,
  CheckCircle,
  Phone
} from 'lucide-react'

type Servicio = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  popular: boolean;
  incluye: string[];
  icon: React.ReactNode;
  bgImage: string;
};

type ServiciosPorTipo = {
  [key: string]: Servicio[];
};

export default function MantenimientoPage() {
  const [activeTab, setActiveTab] = useState('preventivo')

  const servicios: ServiciosPorTipo = {
    preventivo: [
      {
        id: 1,
        titulo: "Mantenimiento Básico",
        descripcion: "Servicio esencial para mantener tu moto en óptimas condiciones",
        precio: 35,
        popular: true,
        incluye: [
          "Cambio de aceite y filtro",
          "Ajuste y lubricación de cadena",
          "Revisión de frenos",
          "Revisión de luces y sistema eléctrico"
        ],
        icon: <Wrench className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila.jpg'
      },
      {
        id: 2,
        titulo: "Mantenimiento Intermedio",
        descripcion: "Revisión completa para un rendimiento óptimo",
        precio: 60,
        popular: false,
        incluye: [
          "Todo lo del servicio básico",
          "Ajuste de válvulas",
          "Limpieza de carburador/inyectores",
          "Revisión de suspensión"
        ],
        icon: <Settings className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila1.jpg'
      },
      {
        id: 3,
        titulo: "Mantenimiento Premium",
        descripcion: "Servicio completo para vehículos de alto rendimiento",
        precio: 90,
        popular: false,
        incluye: [
          "Todo lo del servicio intermedio",
          "Diagnóstico computarizado",
          "Limpieza de sistema de combustible",
          "Informe detallado del estado"
        ],
        icon: <Zap className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila2.jpg'
      }
    ],
    correctivo: [
      {
        id: 4,
        titulo: "Diagnóstico General",
        descripcion: "Identificación de fallas en tu vehículo",
        precio: 25,
        popular: false,
        incluye: [
          "Escaneo computarizado",
          "Prueba de compresión",
          "Revisión de sistemas",
          "Presupuesto detallado"
        ],
        icon: <AlertTriangle className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila3.jpg'
      },
      {
        id: 5,
        titulo: "Reparación de Motor",
        descripcion: "Solución a problemas mecánicos del motor",
        precio: 120,
        popular: true,
        incluye: [
          "Desarme y diagnóstico",
          "Cambio de piezas dañadas",
          "Pruebas de funcionamiento",
          "Garantía de 3 meses"
        ],
        icon: <Wrench className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila.jpg'
      },
      {
        id: 6,
        titulo: "Sistema Eléctrico",
        descripcion: "Reparación de fallas eléctricas",
        precio: 45,
        popular: false,
        incluye: [
          "Prueba de carga y arranque",
          "Revisión de cableado",
          "Reparación de cortocircuitos",
          "Prueba final"
        ],
        icon: <Zap className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila1.jpg'
      }
    ],
    otros: [
      {
        id: 7,
        titulo: "Lavado Premium",
        descripcion: "Limpieza profunda y detallada",
        precio: 25,
        popular: false,
        incluye: [
          "Lavado exterior e interior",
          "Aspirado completo",
          "Limpieza de cadena",
          "Encerado y pulido"
        ],
        icon: <Users className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila2.jpg'
      },
      {
        id: 8,
        titulo: "Revisión Pre-Compra",
        descripcion: "Verificación de estado para compra segura",
        precio: 40,
        popular: true,
        incluye: [
          "Inspección mecánica",
          "Prueba de manejo",
          "Verificación de documentos",
          "Informe detallado"
        ],
        icon: <FileText className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/autos/carros_en_fila3.jpg'
      }
    ]
  }

  const renderCard = (servicio: Servicio) => (
    <Card key={servicio.id} className="h-full group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image 
          src={servicio.bgImage} 
          alt={servicio.titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          quality={80}
          sizes="(max-width: 768px) 85vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white mb-1">{servicio.titulo}</h3>
            <p className="text-gray-200 text-sm line-clamp-2">{servicio.descripcion}</p>
            {servicio.popular && (
              <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F57B20] text-white">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Incluye:</h4>
          <ul className="space-y-1 text-sm text-white">
            {servicio.incluye.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-[#F57B20] mt-0.5 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-white">${servicio.precio}</span>
          <Button className="bg-[#F57B20] hover:bg-[#D96518] text-white">
            <Wrench className="w-4 h-4 mr-2" />
            Solicitar
          </Button>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        imagen="/images/Interior de la empresa/consecionario_interno.jpg"
        titulo="Servicio Técnico Especializado"
        subtitulo="Mantenimiento profesional para tu vehículo con técnicos certificados y repuestos originales en Loja, Ecuador."
        overlayClassName="bg-black/60"
      >
        <div className="w-full md:w-auto mt-8">
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[#F57B20] hover:bg-[#D96518] text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Wrench className="mr-2 h-5 w-5" />
              Solicitar Cita
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </HeroSection>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios de Mantenimiento</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos servicios completos para mantener tu vehículo en óptimas condiciones. 
              Selecciona el tipo de servicio que necesitas y encuentra el paquete que mejor se adapte a ti.
            </p>
          </div>

          <Tabs 
            defaultValue="preventivo" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1 rounded-lg">
                <TabsTrigger 
                  value="preventivo" 
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'preventivo' ? 'bg-white shadow-sm text-[#F57B20]' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Wrench className="w-4 h-4 mr-2" />
                  Preventivo
                </TabsTrigger>
                <TabsTrigger 
                  value="correctivo" 
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'correctivo' ? 'bg-white shadow-sm text-[#F57B20]' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Correctivo
                </TabsTrigger>
                <TabsTrigger 
                  value="otros" 
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'otros' ? 'bg-white shadow-sm text-[#F57B20]' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Otros Servicios
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Versión móvil - Carrusel */}
            <div className="md:hidden px-4 mb-8">
              <MobileCarousel>
                {servicios[activeTab as keyof typeof servicios].map(servicio => (
                  <div key={`mobile-${servicio.id}`} className="h-full">
                    {renderCard(servicio)}
                  </div>
                ))}
              </MobileCarousel>
            </div>

            {/* Versión escritorio - Grid normal */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {servicios[activeTab as keyof typeof servicios].map(servicio => renderCard(servicio))}
            </div>
          </Tabs>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contáctanos para servicios personalizados o si tienes alguna pregunta sobre nuestros servicios de mantenimiento.
            </p>
            <Button size="lg" className="bg-[#F57B20] hover:bg-[#D96518] text-white font-semibold">
              <Wrench className="mr-2 h-5 w-5" />
              Contáctanos Ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}