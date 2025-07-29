'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle, 
  CheckCircle2, 
  CreditCard, 
  FileText, 
  FileDown, 
  Users, 
  Clock, 
  Calculator, 
  ShieldCheck, 
  Phone, 
  Percent,
  Zap
} from 'lucide-react'

// Definición de tipos para TypeScript
type Plan = {
  id: number;
  titulo: string;
  descripcion: string;
  entrada: string;
  plazo: string;
  tasa: string;
  popular: boolean;
  beneficios: string[];
  icon: React.ReactNode;
  bgImage: string;
};

type PlanesPorTipo = {
  [key: string]: Plan[];
};

export default function FinanciamientoPage() {
  const [activeTab, setActiveTab] = useState('personales')

  const planes: PlanesPorTipo = {
    personales: [
      {
        id: 1,
        titulo: "Crédito Básico",
        descripcion: "Ideal para tu primera moto o vehículo de trabajo",
        entrada: "20%",
        plazo: "24 meses",
        tasa: "12%",
        popular: true,
        beneficios: [
          "Sin garante",
          "Aprobación en 24h",
          "Cuotas fijas",
          "Seguro incluido"
        ],
        icon: <CreditCard className="h-10 w-10 text-[#fa6704]" />,
        bgImage: '/images/financiamiento_motos1.jpg',
      },
      {
        id: 2,
        titulo: "Crédito Premium",
        descripcion: "Para motos deportivas y de alta gama",
        entrada: "30%",
        plazo: "36 meses",
        tasa: "10%",
        popular: false,
        beneficios: [
          "Tasa preferencial",
          "Hasta 36 meses",
          "Seguro todo riesgo",
          "Mantenimiento incluido"
        ],
        icon: <Zap className="h-10 w-10 text-[#fa6704]" />,
        bgImage: '/images/financiamiento_motos2.jpg',
      },
      {
        id: 3,
        titulo: "Crédito Joven",
        descripcion: "Especial para menores de 30 años",
        entrada: "15%",
        plazo: "18 meses",
        tasa: "8%",
        popular: false,
        beneficios: [
          "Tasa especial",
          "Menos requisitos",
          "Proceso ágil",
          "Descuentos adicionales"
        ],
        icon: <Users className="h-10 w-10 text-[#fa6704]" />,
        bgImage: '/images/financiamiento_motos3.jpg',
      },
      {
        id: 4,
        titulo: "Crédito Empresarial",
        descripcion: "Para flotas de motos de trabajo",
        entrada: "25%",
        plazo: "48 meses",
        tasa: "9%",
        popular: false,
        beneficios: [
          "Hasta 10 unidades",
          "Tasa corporativa",
          "Mantenimiento incluido",
          "Asistencia 24/7"
        ],
        icon: <ShieldCheck className="h-10 w-10 text-[#fa6704]" />,
        bgImage: '/images/financiamiento_motos4.jpg',
      },
    ],
    comerciales: [
      {
        id: 5,
        titulo: "Crédito Taxi Moto",
        descripcion: "Para conductores de plataformas",
        entrada: "15%",
        plazo: "24 meses",
        tasa: "11%",
        popular: true,
        beneficios: [
          "Sin historial crediticio",
          "Aprobación en 48h",
          "Seguro incluido",
          "Capacitación"
        ],
        icon: <Calendar className="h-10 w-10 text-[#fa6704]" />,
        bgImage: '/images/motodetrabajotaxi1.jpg',
      },
      {
        id: 6,
        titulo: "Crédito Delivery",
        descripcion: "Para servicios de entrega",
        entrada: "20%",
        plazo: "18 meses",
        tasa: "10.5%",
        popular: false,
        beneficios: [
          "Sin penalización por pago adelantado",
          "Seguro de robo",
          "Asistencia vial",
          "Descuento en repuestos"
        ],
        icon: <ArrowRight className="h-10 w-10 text-[#fa6704]" />,
        bgImage: '/images/motodetrabajotaxi2.jpg',
      },
    ]
  }

  const requisitos = [
    "Cédula de identidad (copia y original)",
    "Papeleta de votación (copia)",
    "Certificado laboral o RUC (últimos 3 meses)",
    "Rol de pagos o estados de cuenta (3 últimos meses)",
    "Planilla de servicios básicos (luz, agua o teléfono)",
    "Referencias personales y comerciales",
    "Fotografía tamaño carné"
  ]

  const pasos = [
    {
      titulo: "Solicitud",
      descripcion: "Completa el formulario con tus datos personales y financieros"
    },
    {
      titulo: "Evaluación",
      descripcion: "Nuestro equipo revisará tu solicitud en máximo 24 horas"
    },
    {
      titulo: "Aprobación",
      descripcion: "Recibirás la respuesta con los términos de tu crédito"
    },
    {
      titulo: "Desembolso",
      descripcion: "Firma de documentos y entrega de tu moto nueva"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        {/* Imagen de fondo con overlay oscuro */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/financiamiento_motos1.jpg"
            alt="Financiamiento de motocicletas"
            fill
            className="object-cover object-center"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
                Financiamiento para tu Moto
              </h1>
              <p className="text-xl mb-10 text-gray-100 font-medium leading-relaxed max-w-2xl">
                Adquiere la moto de tus sueños con nuestras opciones de financiamiento flexible. 
                Aprobación rápida, tasas competitivas y plazos que se ajustan a tu presupuesto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#fa6704] hover:bg-[#e65c00] text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Crédito
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
                >
                  Simular Cuota
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Planes de Financiamiento</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades y haz realidad tu sueño de tener una moto
            </p>
          </div>

          <Tabs 
            defaultValue="personales" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1 rounded-lg">
                <TabsTrigger 
                  value="personales" 
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'personales' ? 'bg-white shadow-sm text-[#fa6704]' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Uso Personal
                </TabsTrigger>
                <TabsTrigger 
                  value="comerciales" 
                  className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'comerciales' ? 'bg-white shadow-sm text-[#fa6704]' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Uso Comercial
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {planes[activeTab as keyof typeof planes].map((plan) => (
                <Card 
                  key={plan.id} 
                  className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image 
                      src={plan.bgImage} 
                      alt={plan.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        {plan.icon}
                        <h3 className="text-2xl font-bold">{plan.titulo}</h3>
                      </div>
                      <p className="text-gray-200 text-sm">{plan.descripcion}</p>
                    </div>
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-[#fa6704] text-white text-xs font-bold px-3 py-1 rounded-full">
                        MÁS POPULAR
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <p className="text-sm text-gray-500">Entrada</p>
                        <p className="text-xl font-bold text-[#fa6704]">{plan.entrada}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Plazo</p>
                        <p className="text-xl font-bold text-gray-900">{plan.plazo}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tasa Anual</p>
                        <p className="text-xl font-bold text-gray-900">{plan.tasa}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Beneficios:</h4>
                      <ul className="space-y-2">
                        {plan.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-[#fa6704] hover:bg-[#e65c00] text-white font-semibold py-6 text-base">
                      Solicitar este Plan
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Requisitos y Proceso Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Requisitos */}
            <div>
              <div className="inline-block bg-[#fff5e6] text-[#fa6704] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Documentación Necesaria
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Requisitos para Aprovechar Nuestros Planes</h2>
              <p className="text-gray-600 mb-8">
                Preparamos un proceso simple y transparente. Solo necesitas estos documentos para iniciar tu solicitud de financiamiento.
              </p>
              
              <div className="space-y-4">
                {requisitos.map((req, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="bg-[#fa6704]/10 text-[#fa6704] p-2 rounded-full">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-[#fa6704] hover:bg-[#e65c00] text-white font-semibold px-8 py-6">
                  <FileDown className="mr-2 h-5 w-5" />
                  Descargar Lista Completa
                </Button>
              </div>
            </div>
            
            {/* Pasos del Proceso */}
            <div className="bg-gradient-to-br from-[#fff5e6] to-[#ffefe0] p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Financiamiento</h3>
              
              <div className="space-y-6 relative">
                {/* Línea vertical */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#fa6704]/20"></div>
                
                {pasos.map((paso, index) => (
                  <div key={index} className="relative pl-14">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#fa6704] flex items-center justify-center text-white font-bold border-4 border-white shadow-md">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{paso.titulo}</h4>
                    <p className="text-gray-600">{paso.descripcion}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fa6704]/10 text-[#fa6704] p-3 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tiempo de Aprobación</h4>
                    <p className="text-gray-600">Resolución en tan solo 24-48 horas hábiles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#fff5e6] text-[#fa6704] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              ¿Por Qué Elegirnos?
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ventajas de Nuestro Financiamiento</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos las mejores condiciones para que adquieras tu moto de manera rápida y segura
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#ffefe0] text-[#fa6704] rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Crédito Directo</h3>
              <p className="text-gray-600">Sin intermediarios, proceso directo con financiamiento propio</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#ffefe0] text-[#fa6704] rounded-xl flex items-center justify-center mb-4">
                <Calculator className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Simulador Online</h3>
              <p className="text-gray-600">Calcula tu cuota mensual en segundos sin compromiso</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#ffefe0] text-[#fa6704] rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aprobación Rápida</h3>
              <p className="text-gray-600">Respuesta en 24-48 horas hábiles con documentación completa</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#ffefe0] text-[#fa6704] rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguridad Garantizada</h3>
              <p className="text-gray-600">Tus datos están protegidos con los más altos estándares</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para tener tu moto?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Obtén pre-aprobación en minutos y conoce las condiciones exactas de tu crédito
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#fa6704] hover:bg-[#e65c00] text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar Crédito Ahora
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
              >
                <Phone className="h-5 w-5 mr-2" />
                Llamar a un Asesor
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-400 mr-2" />
                <span>Sin costo por pre-aprobación</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-600"></div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-2" />
                <span>Atención de lunes a sábado</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

