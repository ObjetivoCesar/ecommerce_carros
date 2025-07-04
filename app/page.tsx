import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, Phone, MapPin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const whatsappUrl = "https://wa.me/593986223966"

  const materiales = [
    {
      id: "tiger-skin",
      nombre: "Granito Tiger Skin",
      imagen: "/images/granito-tiger-skin.jpeg",
      descripcion: "Granito con vetas doradas y negras, perfecto para cocinas elegantes",
      href: "/productos/granito-tiger-skin",
    },
    {
      id: "vayolet",
      nombre: "Granito Vayolet",
      imagen: "/images/granito-vayolet.webp",
      descripcion: "Granito con tonos violáceos únicos, ideal para espacios modernos",
      href: "/productos/granito-vayolet",
    },
    {
      id: "black-impala",
      nombre: "Granito Black Impala",
      imagen: "/images/granito-black-impala.jpg",
      descripcion: "Granito negro clásico con puntos brillantes, elegancia atemporal",
      href: "/productos/granito-black-impala",
    },
    {
      id: "discos-diamantados",
      nombre: "Discos Diamantados",
      imagen: "/images/discos-diamantados.webp",
      descripcion: "Herramientas profesionales para corte de piedra natural",
      href: "/productos/discos-diamantados",
    },
    {
      id: "brocas-diamantadas",
      nombre: "Brocas Diamantadas",
      imagen: "/images/brocas-diamantadas.webp",
      descripcion: "Brocas especializadas para perforación en materiales duros",
      href: "/productos/brocas-diamantadas",
    },
    {
      id: "fachaletas-piedra",
      nombre: "Fachaletas de Piedra",
      imagen: "/images/fachaletas-de-piedra.jpeg",
      descripcion: "Revestimientos decorativos para paredes exteriores e interiores",
      href: "/productos/fachaletas-piedra",
    },
  ]

  const testimonios = [
    {
      nombre: "María González",
      imagen: "/images/maria-gonzalez.webp",
      testimonio:
        "Excelente trabajo en mi cocina. El granito Tiger Skin quedó perfecto y el servicio fue muy profesional.",
      rating: 5,
    },
    {
      nombre: "Carlos Mendoza",
      imagen: "/images/Carlos Mendoza.jpeg",
      testimonio: "Muy satisfecho con la instalación del cuarzo en mi baño. Calidad excepcional y precio justo.",
      rating: 5,
    },
    {
      nombre: "Ana Rodríguez",
      imagen: "/images/Ana Rodríguez.webp",
      testimonio: "El equipo de Marmolinas es muy profesional. Cumplieron con los tiempos y la calidad es excelente.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/hero-portada-marmolina.jpg"
          alt="Cocina con granito de Marmolinas Granillos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            El Mejor Granito Y Cuarzo Para Tu Cocina, Al Precio Ideal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Desde Loja para todo Ecuador</p>
          <Button
            asChild
            size="lg"
            className="bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90 font-semibold text-lg px-8 py-3"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Cotiza por WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-8">Conoce Nuestro Proceso</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/iobKB3_st6g"
                title="Proceso de instalación Marmolinas Granillos"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-6 text-gray-600 text-lg">
              Descubre cómo transformamos espacios con nuestros materiales de alta calidad y técnicas de instalación
              profesional. Cada proyecto es único y está diseñado para superar tus expectativas.
            </p>
          </div>
        </div>
      </section>

      {/* Materials and Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-marmolinas-blue mb-12">
            Nuestros Materiales y Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materiales.map((material) => (
              <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={material.imagen || "/placeholder.svg"}
                    alt={material.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-marmolinas-blue">{material.nombre}</CardTitle>
                  <CardDescription>{material.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={material.href}>Ver Detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-marmolinas-blue mb-12">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={testimonio.imagen || "/placeholder.svg"}
                      alt={testimonio.nombre}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{testimonio.nombre}</CardTitle>
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-marmolinas-yellow text-marmolinas-yellow" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonio.testimonio}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-marmolinas-blue mb-12">Cotiza Ahora</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Solicita tu Cotización</CardTitle>
                <CardDescription>Completa el formulario y nos pondremos en contacto contigo</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input id="nombre" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input id="whatsapp" placeholder="593986223966" />
                  </div>
                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea id="mensaje" placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90"
                  >
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-marmolinas-blue" />
                    <span>Nuestra Ubicación</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Av. Emiliano Ortega 195-05 entre Imbabura y Colón
                    <br />
                    Loja, Ecuador
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d-79.2!3d-4.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDAnMDAuMCJTIDc5wrAxMicwMC4wIlc!5e0!3m2!1ses!2sec!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="flex items-center space-x-3 p-6">
                    <Phone className="h-8 w-8 text-marmolinas-blue" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-gray-600">+593 98 622 3966</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center space-x-3 p-6">
                    <Mail className="h-8 w-8 text-marmolinas-blue" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@marmolinasgranillos.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
