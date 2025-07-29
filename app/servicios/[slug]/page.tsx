import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const servicios = {
  "venta-instalacion": {
    titulo: "Venta e Instalación de Cuarzo, Granito y Mármol",
    subtitulo: "Transformamos tu espacio con materiales de la más alta calidad",
    imagen: "/images/hero-marmolinas.jpg",
    video: "https://www.youtube.com/embed/Gm5A3Ir9qv0",
    beneficios: [
      "Materiales importados de primera calidad",
      "Instalación profesional con garantía",
      "Asesoramiento técnico especializado",
      "Medición y diseño personalizado",
      "Acabados perfectos y duraderos",
      "Servicio post-venta confiable",
    ],
    descripcion:
      "Ofrecemos una amplia gama de materiales de piedra natural y artificial, desde granitos exóticos hasta cuarzos de última generación. Nuestro equipo de expertos se encarga de todo el proceso, desde la selección del material hasta la instalación final.",
  },
  "pulido-restauracion": {
    titulo: "Pulido y Restauración de Superficies",
    subtitulo: "Devolvemos el brillo original a tus superficies de piedra",
    imagen: "/images/hero-2-marmolinas.jpg",
    video: null,
    beneficios: [
      "Eliminación de manchas y rayones",
      "Restauración del brillo original",
      "Sellado protector de larga duración",
      "Técnicas profesionales especializadas",
      "Equipos de última generación",
      "Resultados garantizados",
    ],
    descripcion:
      "Nuestro servicio de pulido y restauración devuelve la vida a superficies deterioradas. Utilizamos técnicas avanzadas y productos especializados para eliminar daños y restaurar el aspecto original de granito, mármol y cuarzo.",
  },
  "resina-fibra": {
    titulo: "Venta de Resina Poliéster y Fibra de Vidrio",
    subtitulo: "Materiales especializados para reparación y fabricación",
    imagen: "/images/hero-portada-marmolina.jpg",
    video: null,
    beneficios: [
      "Resinas de alta calidad industrial",
      "Fibra de vidrio resistente",
      "Catalizadores y acelerantes",
      "Asesoramiento técnico especializado",
      "Productos para uso profesional",
      "Precios competitivos al por mayor",
    ],
    descripcion:
      "Proveemos resina poliéster y fibra de vidrio de grado industrial para reparaciones, fabricación de piezas especiales y proyectos de restauración. Ideales para talleres especializados y proyectos de gran envergadura.",
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const servicio = servicios[params.slug as keyof typeof servicios]

  if (!servicio) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-marmolinas-blue mb-4">Servicio no encontrado</h1>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={servicio.imagen || "/images/hero-portada-marmolina.jpg"}
          alt={servicio.titulo}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{servicio.titulo}</h1>
          <p className="text-xl md:text-2xl mb-8">{servicio.subtitulo}</p>
          <Button asChild size="lg" className="bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90">
            <a href="https://wa.me/593986223966" target="_blank" rel="noopener noreferrer">
              Agendar / Cotizar
            </a>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="text-marmolinas-blue hover:underline">
            Inicio
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/#servicios" className="text-marmolinas-blue hover:underline">
            Servicios
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{servicio.titulo}</span>
        </div>

        <Button asChild variant="outline" className="mb-8 bg-transparent">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </Button>

        {/* Video Section */}
        {servicio.video && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-marmolinas-blue mb-8">¿Cómo lo Hacemos?</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={servicio.video}
                  title={`Proceso de ${servicio.titulo}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-marmolinas-blue mb-6">Beneficios de Nuestro Servicio</h2>
              <div className="space-y-4">
                {servicio.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-marmolinas-blue mb-4">Descripción del Servicio</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{servicio.descripcion}</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-marmolinas-blue mb-8">¿Listo para Empezar?</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Solicita tu Cotización</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo para brindarte una cotización personalizada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input id="nombre" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono / WhatsApp</Label>
                      <Input id="telefono" placeholder="593986223966" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="servicio">Servicio de interés</Label>
                    <Input id="servicio" value={servicio.titulo} readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label htmlFor="mensaje">Describe tu proyecto</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos los detalles de tu proyecto, medidas aproximadas, ubicación, etc."
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90"
                  >
                    Solicitar Cotización
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
