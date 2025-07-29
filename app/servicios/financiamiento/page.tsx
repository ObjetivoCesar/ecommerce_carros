import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CreditCard, Calculator, FileText, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financiamiento de Motocicletas | Racing Motos Loja',
  description: 'Financia tu motocicleta con las mejores tasas y condiciones en Loja, Ecuador. Crédito directo, sin intermediarios.',
  keywords: 'financiamiento motocicletas, crédito para motos, Racing Motos Loja, préstamo motos Ecuador',
}

export default function FinanciamientoPage() {
  const planes = [
    {
      titulo: "Plan Básico",
      descripcion: "Ideal para motos de trabajo y transporte",
      entrada: "20%",
      plazo: "24 meses",
      tasa: "12% anual",
      beneficios: ["Sin garante", "Aprobación rápida", "Cuotas fijas", "Seguro incluido"]
    },
    {
      titulo: "Plan Premium",
      descripcion: "Para motos deportivas y de alta gama",
      entrada: "30%",
      plazo: "36 meses",
      tasa: "10% anual",
      beneficios: ["Tasa preferencial", "Mayor plazo", "Seguro todo riesgo", "Mantenimiento gratis"]
    },
    {
      titulo: "Plan Joven",
      descripcion: "Especial para menores de 30 años",
      entrada: "15%",
      plazo: "18 meses",
      tasa: "8% anual",
      beneficios: ["Tasa especial", "Menos requisitos", "Proceso ágil", "Descuentos adicionales"]
    }
  ]

  const requisitos = [
    "Cédula de identidad",
    "Papeleta de votación",
    "Certificado laboral o RUC",
    "Rol de pagos (3 últimos)",
    "Planilla de servicios básicos",
    "Referencias comerciales"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-racing-blue to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financia tu Moto de Ensueño
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Obtén tu motocicleta con las mejores condiciones de financiamiento en Loja. Tasas preferenciales y proceso rápido.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-racing-yellow text-racing-blue hover:bg-racing-yellow/90">
                  Simular Crédito
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-racing-blue">
                  Ver Requisitos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/financiamiento-hero.jpg"
                alt="Financiamiento de motocicletas Racing Motos"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planes de Financiamiento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades y presupuesto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {planes.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative">
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-racing-yellow text-racing-blue">
                    Más Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-racing-blue">{plan.titulo}</CardTitle>
                  <CardDescription>{plan.descripcion}</CardDescription>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-racing-blue">{plan.entrada}</p>
                      <p className="text-sm text-gray-500">Entrada</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-racing-blue">{plan.plazo}</p>
                      <p className="text-sm text-gray-500">Plazo</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-racing-blue">{plan.tasa}</p>
                      <p className="text-sm text-gray-500">Tasa</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-gray-900">Beneficios:</h4>
                  <ul className="space-y-2">
                    {plan.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-racing-blue hover:bg-racing-blue/90">
                    Solicitar Este Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Requisitos Simples</h2>
              <p className="text-lg text-gray-600 mb-8">
                Proceso de aprobación rápido con requisitos mínimos para que obtengas tu moto lo antes posible.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {requisitos.map((requisito, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-racing-blue" />
                    <span className="text-sm">{requisito}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/documentos-credito.jpg"
                alt="Requisitos para financiamiento"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Características Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-racing-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-racing-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Crédito Directo</h3>
              <p className="text-gray-600 text-sm">Sin intermediarios, proceso directo con nosotros</p>
            </div>
            <div className="text-center">
              <div className="bg-racing-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-racing-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Simulador Online</h3>
              <p className="text-gray-600 text-sm">Calcula tu cuota antes de solicitar</p>
            </div>
            <div className="text-center">
              <div className="bg-racing-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-racing-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Aprobación Rápida</h3>
              <p className="text-gray-600 text-sm">Respuesta en 24 horas hábiles</p>
            </div>
            <div className="text-center">
              <div className="bg-racing-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-racing-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pocos Requisitos</h3>
              <p className="text-gray-600 text-sm">Documentación mínima necesaria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-racing-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para financiar tu moto?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos y obtén una pre-aprobación en minutos
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-racing-yellow text-racing-blue hover:bg-racing-yellow/90">
              Solicitar Crédito
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-racing-blue">
              Simular Cuota
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

