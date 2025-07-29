import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Clock, Shield, CheckCircle, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trámites de Motocicletas | Racing Motos Loja',
  description: 'Gestión completa de trámites para motocicletas en Loja, Ecuador. Matriculación, transferencias, licencias y más.',
  keywords: 'trámites motocicletas, matriculación motos, transferencia motos, Racing Motos Loja, licencia moto Ecuador',
}

export default function TramitesPage() {
  const tramites = [
    {
      titulo: "Matriculación",
      descripcion: "Primera matriculación de motocicletas nuevas",
      tiempo: "2-3 días",
      precio: "$45",
      documentos: ["Factura original", "Certificado de origen", "Cédula del propietario", "Papeleta de votación"]
    },
    {
      titulo: "Transferencia de Dominio",
      descripcion: "Cambio de propietario de motocicletas usadas",
      tiempo: "1-2 días",
      precio: "$35",
      documentos: ["Matrícula original", "Cédulas vendedor/comprador", "Contrato compraventa", "Certificado de no adeudar"]
    },
    {
      titulo: "Duplicado de Matrícula",
      descripcion: "Reposición por pérdida o deterioro",
      tiempo: "1 día",
      precio: "$25",
      documentos: ["Denuncia por pérdida", "Cédula del propietario", "Papeleta de votación", "Certificado de no adeudar"]
    },
    {
      titulo: "Licencia Tipo A",
      descripción: "Licencia para conducir motocicletas",
      tiempo: "1 día",
      precio: "$30",
      documentos: ["Cédula de identidad", "Certificado médico", "Curso de manejo", "Examen teórico-práctico"]
    }
  ]

  const ventajas = [
    {
      icono: Clock,
      titulo: "Proceso Rápido",
      descripcion: "Gestionamos todos tus trámites en el menor tiempo posible"
    },
    {
      icono: Shield,
      titulo: "100% Legal",
      descripcion: "Todos los trámites con respaldo legal y documentación oficial"
    },
    {
      icono: FileText,
      titulo: "Asesoría Completa",
      descripcion: "Te guiamos en cada paso del proceso"
    },
    {
      icono: Car,
      titulo: "Servicio Integral",
      descripcion: "Desde la compra hasta la matriculación completa"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-racing-blue to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trámites Vehiculares Completos
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Gestionamos todos los trámites de tu motocicleta de forma rápida y segura en Loja, Ecuador.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-racing-yellow text-racing-blue hover:bg-racing-yellow/90">
                  Iniciar Trámite
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-racing-blue">
                  Ver Requisitos
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/tramitesmotos1.jpeg"
                  alt="Trámites de motocicletas Racing Motos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trámites Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos gestión completa de todos los trámites vehiculares que necesitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tramites.map((tramite, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-racing-blue text-lg">{tramite.titulo}</CardTitle>
                  <CardDescription className="text-sm">{tramite.descripcion}</CardDescription>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="secondary">{tramite.precio}</Badge>
                    <Badge variant="outline">{tramite.tiempo}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <h4 className="font-semibold mb-2 text-gray-900 text-sm">Documentos:</h4>
                  <ul className="space-y-1">
                    {tramite.documentos.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos expertos en trámites vehiculares con años de experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventajas.map((ventaja, index) => {
              const IconComponent = ventaja.icono
              return (
                <div key={index} className="text-center">
                  <div className="bg-racing-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-racing-blue" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{ventaja.titulo}</h3>
                  <p className="text-gray-600 text-sm">{ventaja.descripcion}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso Simple</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En solo 3 pasos tienes todos tus trámites listos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-racing-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trae tus Documentos</h3>
              <p className="text-gray-600 text-sm">
                Acércate con los documentos requeridos según el trámite que necesites
              </p>
            </div>
            <div className="text-center">
              <div className="bg-racing-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Nosotros Gestionamos</h3>
              <p className="text-gray-600 text-sm">
                Nos encargamos de todo el proceso en las entidades correspondientes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-racing-blue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recibe tus Documentos</h3>
              <p className="text-gray-600 text-sm">
                Te entregamos todos los documentos listos y legalizados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-racing-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tus trámites?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos y te asesoramos sin compromiso
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-racing-yellow text-racing-blue hover:bg-racing-yellow/90">
              Consultar por WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-racing-blue">
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

