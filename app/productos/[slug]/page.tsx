"use client"

import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart } from "lucide-react"

const productos = {
  "granito-tiger-skin": {
    id: "granito-tiger-skin",
    nombre: "Granito Tiger Skin",
    imagen: "/images/granito-tiger-skin.jpeg",
    precio: 85,
    formato: "Losa 320x160cm",
    espesor: "2cm / 3cm",
    acabado: "Pulido brillante",
    descripcion:
      "El granito Tiger Skin es una piedra natural excepcional que combina elegancia y durabilidad. Sus vetas doradas y negras crean un patrón único que aporta sofisticación a cualquier espacio. Ideal para encimeras de cocina, barras y superficies de alto tráfico.",
  },
  "granito-vayolet": {
    id: "granito-vayolet",
    nombre: "Granito Vayolet",
    imagen: "/images/granito-vayolet.webp",
    precio: 78,
    formato: "Losa 320x160cm",
    espesor: "2cm / 3cm",
    acabado: "Pulido brillante",
    descripcion:
      "El granito Vayolet destaca por sus tonos violáceos únicos que aportan personalidad y modernidad a los espacios. Su resistencia y belleza lo convierten en la elección perfecta para proyectos contemporáneos que buscan diferenciarse.",
  },
  "granito-black-impala": {
    id: "granito-black-impala",
    nombre: "Granito Black Impala",
    imagen: "/images/granito-black-impala.jpg",
    precio: 72,
    formato: "Losa 320x160cm",
    espesor: "2cm / 3cm",
    acabado: "Pulido brillante",
    descripcion:
      "El granito Black Impala es sinónimo de elegancia atemporal. Su color negro profundo con puntos brillantes plateados crea un efecto visual impresionante. Perfecto para cocinas modernas y espacios que requieren un toque de lujo.",
  },
  "discos-diamantados": {
    id: "discos-diamantados",
    nombre: "Discos Diamantados",
    imagen: "/images/discos-diamantados.webp",
    precio: 45,
    formato: "Varios diámetros",
    espesor: "2.2mm - 3.2mm",
    acabado: "Segmentado/Continuo",
    descripcion:
      "Discos diamantados profesionales diseñados específicamente para el corte de piedra natural. Fabricados con diamantes industriales de alta calidad que garantizan cortes precisos y larga duración en granito, mármol y cuarzo.",
  },
  "brocas-diamantadas": {
    id: "brocas-diamantadas",
    nombre: "Brocas Diamantadas",
    imagen: "/images/brocas-diamantadas.webp",
    precio: 25,
    formato: "Diámetros 6-50mm",
    espesor: "Longitud variable",
    acabado: "Punta diamantada",
    descripcion:
      "Brocas diamantadas especializadas para perforación en materiales duros como granito, mármol, cuarzo y cerámica. Ideales para instalación de grifería, desagües y accesorios en superficies de piedra natural.",
  },
  "fachaletas-piedra": {
    id: "fachaletas-piedra",
    nombre: "Fachaletas de Piedra",
    imagen: "/images/fachaletas-de-piedra.jpeg",
    precio: 35,
    formato: "60x15cm",
    espesor: "1.5cm - 2cm",
    acabado: "Natural/Rústico",
    descripcion:
      "Fachaletas de piedra natural para revestimiento de paredes exteriores e interiores. Aportan textura y calidez a los espacios, siendo ideales para crear ambientes acogedores y con personalidad única.",
  },
}

export default function ProductPage() {
  const params = useParams()
  const slug = (Array.isArray(params.slug) ? params.slug[0] : params.slug) as string
  const producto = productos[slug as keyof typeof productos]
  const { dispatch } = useCart()
  const { toast } = useToast()

  if (!producto) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-marmolinas-blue mb-4">Producto no encontrado</h1>
        <Link href="/productos">
          <Button>Ver todos los productos</Button>
        </Link>
      </div>
    )
  }

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
      },
    })

    toast({
      title: "Producto agregado",
      description: `${producto.nombre} ha sido agregado al carrito`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 mb-8">
        <Link href="/" className="text-marmolinas-blue hover:underline">
          Inicio
        </Link>
        <span className="text-gray-400">/</span>
        <Link href="/productos" className="text-marmolinas-blue hover:underline">
          Productos
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">{producto.nombre}</span>
      </div>

      <Button asChild variant="outline" className="mb-6 bg-transparent">
        <Link href="/productos">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a productos
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src={producto.imagen || "/placeholder.svg"} alt={producto.nombre} fill className="object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-marmolinas-blue mb-2">{producto.nombre}</h1>
            <p className="text-3xl font-bold text-marmolinas-blue">
              ${producto.precio}
              <span className="text-lg font-normal text-gray-600 ml-2">por m²</span>
            </p>
          </div>

          {/* Attributes */}
          <Card>
            <CardHeader>
              <CardTitle>Especificaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Formato:</span>
                <Badge variant="secondary">{producto.formato}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Espesor:</span>
                <Badge variant="secondary">{producto.espesor}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Acabado:</span>
                <Badge variant="secondary">{producto.acabado}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-marmolinas-blue mb-3">Descripción</h3>
            <p className="text-gray-600 leading-relaxed">{producto.descripcion}</p>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <Button
              onClick={addToCart}
              size="lg"
              className="w-full bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Añadir al Carrito
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
              <a
                href={`https://wa.me/593986223966?text=Hola,%20me%20interesa%20el%20producto%20${encodeURIComponent(producto.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ Instalación profesional incluida</p>
                <p>✓ Garantía de calidad</p>
                <p>✓ Envío a todo Ecuador</p>
                <p>✓ Asesoramiento técnico gratuito</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
