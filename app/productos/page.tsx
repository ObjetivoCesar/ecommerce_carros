import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const productos = [
  {
    id: "granito-tiger-skin",
    nombre: "Granito Tiger Skin",
    imagen: "/images/granito-tiger-skin.jpeg",
    precio: 85,
    descripcion: "Granito con vetas doradas y negras, perfecto para cocinas elegantes",
    href: "/productos/granito-tiger-skin",
  },
  {
    id: "granito-vayolet",
    nombre: "Granito Vayolet",
    imagen: "/images/granito-vayolet.webp",
    precio: 78,
    descripcion: "Granito con tonos violáceos únicos, ideal para espacios modernos",
    href: "/productos/granito-vayolet",
  },
  {
    id: "granito-black-impala",
    nombre: "Granito Black Impala",
    imagen: "/images/granito-black-impala.jpg",
    precio: 72,
    descripcion: "Granito negro clásico con puntos brillantes, elegancia atemporal",
    href: "/productos/granito-black-impala",
  },
  {
    id: "discos-diamantados",
    nombre: "Discos Diamantados",
    imagen: "/images/discos-diamantados.webp",
    precio: 45,
    descripcion: "Herramientas profesionales para corte de piedra natural",
    href: "/productos/discos-diamantados",
  },
  {
    id: "brocas-diamantadas",
    nombre: "Brocas Diamantadas",
    imagen: "/images/brocas-diamantadas.webp",
    precio: 25,
    descripcion: "Brocas especializadas para perforación en materiales duros",
    href: "/productos/brocas-diamantadas",
  },
  {
    id: "fachaletas-piedra",
    nombre: "Fachaletas de Piedra",
    imagen: "/images/fachaletas-de-piedra.jpeg",
    precio: 35,
    descripcion: "Revestimientos decorativos para paredes exteriores e interiores",
    href: "/productos/fachaletas-piedra",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-marmolinas-blue mb-4">Nuestros Productos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre nuestra amplia gama de materiales de alta calidad para transformar tus espacios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <Image src={producto.imagen || "/placeholder.svg"} alt={producto.nombre} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-marmolinas-blue">{producto.nombre}</CardTitle>
              <CardDescription>{producto.descripcion}</CardDescription>
              <div className="text-2xl font-bold text-marmolinas-blue">
                ${producto.precio}
                <span className="text-sm font-normal text-gray-600 ml-1">por m²</span>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={producto.href}>Ver Detalles</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
