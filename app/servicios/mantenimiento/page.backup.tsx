'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Wrench, 
  Settings, 
  ShieldCheck,
  MessageSquare,
  AlertTriangle,
  AlertCircle,
  Zap,
  ZapOff,
  Users,
  FileText,
  Star,
  Home as HomeIcon,
  Shield,
  CheckCircle
} from 'lucide-react'

// Importar React para el tipo JSX
import React from 'react';

// Definición de tipos para TypeScript
type Servicio = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  popular: boolean;
  incluye: string[];
  icon: React.ReactNode;
  bgImage: string;
  bgColor: string;
  borderColor: string;
  buttonVariant: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined;
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
        descripcion: "Servicio esencial para mantener tu vehículo en óptimas condiciones",
        precio: 35,
        popular: true,
        incluye: [
          "Cambio de aceite y filtro",
          "Ajuste y lubricación de cadena",
          "Revisión de frenos",
          "Revisión de luces y sistema eléctrico"
        ],
        icon: <Wrench className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/Taller_vehículos1.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-[#F57B20]',
        buttonVariant: 'default'
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
        bgImage: '/images/Taller_vehículos2.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
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
        bgImage: '/images/Taller_vehículos3.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
      },
      {
        id: 9,
        titulo: "Mantenimiento de Transmisión",
        descripcion: "Ajuste y mantenimiento completo del sistema de transmisión",
        precio: 65,
        popular: false,
        incluye: [
          "Ajuste de cadena",
          "Lubricación de transmisión",
          "Revisión de tensor",
          "Alineación de rueda trasera"
        ],
        icon: <Settings className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/10.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
      },
      {
        id: 10,
        titulo: "Mantenimiento de Frenos",
        descripcion: "Revisión y mantenimiento completo del sistema de frenado",
        precio: 55,
        popular: false,
        incluye: [
          "Cambio de pastillas de freno",
          "Purga de líquido de frenos",
          "Ajuste de freno de tambor",
          "Prueba de frenado"
        ],
        icon: <AlertCircle className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/vertical 1.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
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
        bgImage: '/images/Taller_vehículos4.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
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
        bgImage: '/images/1.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-[#F57B20]',
        buttonVariant: 'default'
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
        bgImage: '/images/7.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
      },
      {
        id: 11,
        titulo: "Reparación de Chasis",
        descripcion: "Alineación y reparación estructural del chasis",
        precio: 85,
        popular: false,
        incluye: [
          "Revisión estructural",
          "Alineación de chasis",
          "Soldadura de refuerzo",
          "Prueba de estabilidad"
        ],
        icon: <Wrench className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/vertical 2.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
      },
      {
        id: 12,
        titulo: "Sistema de Escape",
        descripcion: "Reparación y mantenimiento del sistema de escape",
        precio: 75,
        popular: false,
        incluye: [
          "Limpieza de silenciador",
          "Reemplazo de juntas",
          "Ajuste de tuberías",
          "Prueba de emisiones"
        ],
        icon: <ZapOff className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/vertical 3.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
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
        bgImage: '/images/8.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
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
        bgImage: '/images/9.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-[#F57B20]',
        buttonVariant: 'default'
      },
      {
        id: 13,
        titulo: "Personalización Básica",
        descripcion: "Servicios de personalización para tu vehículo",
        precio: 50,
        popular: false,
        incluye: [
          "Instalación de accesorios",
          "Vinilos decorativos",
          "Luces LED adicionales",
          "Asesoría personalizada"
        ],
        icon: <Star className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/vertical 4.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
      },
      {
        id: 14,
        titulo: "Servicio a Domicilio",
        descripcion: "Mantenimiento básico en la comodidad de tu hogar",
        precio: 60,
        popular: false,
        incluye: [
          "Cambio de aceite y filtro",
          "Ajuste de frenos",
          "Revisión básica",
          "Hasta 10km de cobertura"
        ],
        icon: <HomeIcon className="h-10 w-10 text-[#F57B20]" />,
        bgImage: '/images/vertical 5.jpg',
        bgColor: 'bg-black/70',
        borderColor: 'border-gray-200',
        buttonVariant: 'outline'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-md">
                Servicio Técnico Especializado
              </h1>
              <p className="text-xl mb-10 text-gray-100 font-medium leading-relaxed max-w-2xl">
                Mantenimiento profesional para tu vehículo con técnicos certificados y repuestos originales en Loja, Ecuador.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#F57B20] hover:bg-[#D96518] text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Cita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios[activeTab as keyof typeof servicios].map((servicio) => (
              <Card 
                key={servicio.id} 
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={servicio.bgImage} 
                    alt={servicio.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">{servicio.titulo}</h3>
                      <p className="text-gray-200 text-sm line-clamp-2">{servicio.descripcion}</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-lg font-bold text-[#F57B20]">${servicio.precio}</span>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:text-white"
                        >
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </div>
                  {servicio.popular && (
                    <div className="absolute top-3 right-3 bg-[#F57B20] text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-md">
                      POPULAR
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            ¿No encuentras el servicio que necesitas? Contáctanos para una asesoría personalizada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-[#F57B20] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Servicio Rápido</h3>
              <p className="text-gray-600 text-sm">Mantenimiento express en 30 minutos</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F57B20] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Garantía Total</h3>
              <p className="text-gray-600 text-sm">6 meses de garantía en todos nuestros servicios</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F57B20] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Repuestos Originales</h3>
              <p className="text-gray-600 text-sm">Solo utilizamos repuestos originales y de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#040404] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas mantenimiento para tu vehículo?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda tu cita hoy y mantén tu vehículo en perfectas condiciones
          </p>
          <Button size="lg" className="bg-[#F57B20] text-white hover:bg-[#D96518]">
            Contactar por WhatsApp
          </Button>
        </div>
      </section>
    </div>
  )
}