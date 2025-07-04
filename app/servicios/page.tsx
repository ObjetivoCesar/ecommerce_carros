import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const servicios = [
  {
    id: "venta-instalacion",
    titulo: "Venta e Instalación",
    subtitulo: "Cuarzo, Granito y Mármol",
    imagen: "/images/hero-marmolinas.jpg",
    descripcion:
      "Servicio completo de venta e instalación de materiales de piedra natural y artificial con garantía de calidad.",
    href: "/servicios/venta-instalacion",
  },
  {
    id: "pulido-restauracion",
    titulo: "Pulido y Restauración",
    subtitulo: "Superficies de Piedra",
    imagen: "/images/hero-2-marmolinas.jpg",
    descripcion:
      "Restauramos el brillo original de tus superficies de granito, mármol y cuarzo con técnicas profesionales.",
    href: "/servicios/pulido-restauracion",
  },
  {
    id: "resina-fibra",
    titulo: "Resina Poliéster",
    subtitulo: "y Fibra de Vidrio",
    imagen: "/images/hero-portada-marmolina.jpg",
    descripcion: "Venta de materiales especializados para reparación y fabricación de piezas de piedra artificial.",
    href: "/servicios/resina-fibra",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-marmolinas-blue mb-4">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ofrecemos servicios especializados en piedra natural con la más alta calidad y profesionalismo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio) => (
          <Card key={servicio.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <Image src={servicio.imagen || "/placeholder.svg"} alt={servicio.titulo} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-marmolinas-blue">{servicio.titulo}</CardTitle>
              <CardDescription className="text-lg font-medium text-marmolinas-blue/80">
                {servicio.subtitulo}
              </CardDescription>
              <CardDescription>{servicio.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={servicio.href}>Ver Más Detalles</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
