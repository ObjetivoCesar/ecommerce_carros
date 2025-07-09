'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeroSection } from '@/components/hero-section';

// Servicios principales
const servicios = [
  { id: "granito", titulo: "Granito Importado", icono: "/images/granito-tiger-skin.jpeg", descripcion: "Gran variedad de colores y acabados para cocinas y baños." },
  { id: "cuarzo", titulo: "Cuarzo Premium", icono: "/images/granito-vayolet.webp", descripcion: "Superficies resistentes y modernas para tu hogar." },
  { id: "marmol", titulo: "Mármol Nacional", icono: "/images/hero-portada-marmolina.jpg", descripcion: "Elegancia natural para pisos y paredes." },
  { id: "herramientas", titulo: "Herramientas Profesionales", icono: "/images/discos-diamantados.webp", descripcion: "Discos, brocas y accesorios para instalación y corte." },
  { id: "fachaletas", titulo: "Fachaletas Decorativas", icono: "/images/fachaletas-de-piedra.jpeg", descripcion: "Revestimientos de piedra para interiores y exteriores." },
]

// Ofertas destacadas
const ofertas = [
  { id: 1, nombre: "Granito Tiger Skin", imagen: "/images/granito-tiger-skin.jpeg", precio: 85, descripcion: "Granito importado, ideal para cocinas." },
  { id: 2, nombre: "Broca Diamantada 25mm", imagen: "/images/brocas-diamantadas.webp", precio: 22, descripcion: "Broca profesional para piedra natural." },
  { id: 3, nombre: "Disco Diamantado 7''", imagen: "/images/discos-diamantados.webp", precio: 35, descripcion: "Corte preciso y rápido en granito y mármol." },
  { id: 4, nombre: "Fachaleta de Piedra", imagen: "/images/fachaletas-de-piedra.jpeg", precio: 30, descripcion: "Revestimiento decorativo para muros." },
]

// Categorías de productos
const categorias1 = [
  { id: 1, nombre: "Granitos", imagen: "/images/granito-black-impala.jpg", descripcion: "Granitos nacionales e importados." },
  { id: 2, nombre: "Cuarzos", imagen: "/images/granito-vayolet.webp", descripcion: "Cuarzos de alta resistencia." },
  { id: 3, nombre: "Herramientas", imagen: "/images/discos-diamantados.webp", descripcion: "Discos, brocas y más." },
  { id: 4, nombre: "Fachaletas", imagen: "/images/fachaletas-de-piedra.jpeg", descripcion: "Revestimientos de piedra." },
]
const categorias2 = [
  { id: 1, nombre: "Resinas y Adhesivos", imagen: "/images/hero-portada-marmolina.jpg", descripcion: "Materiales para instalación y reparación." },
  { id: 2, nombre: "Accesorios de Instalación", imagen: "/images/brocas-diamantadas.webp", descripcion: "Todo para un acabado profesional." },
]

const heroPinteres = [
  '/images/cocinalujo_Pinteres.webp',
  '/images/encimera_Pinteres.webp',
  '/images/cocina_Pinteres.webp',
  '/images/lavamanos_Pinteres.webp',
  '/images/meson_Pinteres.webp',
  '/images/grifococina_Pinteres.webp',
];

export default function ServicesPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroPinteres.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Autoplay para el carrusel de ofertas
  const ofertasApiRef = useRef<CarouselApi | null>(null)
  useEffect(() => {
    const interval = setInterval(() => {
      if (ofertasApiRef.current) {
        ofertasApiRef.current.scrollNext()
      }
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-white">
      <HeroSection
        imagen={heroPinteres[heroIndex]}
        titulo={<>Transforma tus espacios con Granito y Marmolinas</>}
        subtitulo={<>Calidad, elegancia y garantía para tu hogar o negocio</>}
        botonTexto="Cotiza Ahora"
        botonHref="#contacto"
        overlayClassName="bg-black/40"
      />

      {/* Justo después del HeroSection, agrega la imagen fija sin overlay ni texto */}
      <section className="relative w-full h-[40vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/imagen fija.webp')" }} />

      {/* CARDS DE SERVICIOS */}
      <section className="w-full py-8 bg-gray-50">
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="flex flex-col items-center w-40 md:w-56">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-marmolinas-blue bg-white mb-3 shadow">
                <Image src={servicio.icono} alt={servicio.titulo} width={112} height={112} className="object-cover w-full h-full" />
              </div>
              <span className="text-marmolinas-blue font-bold text-lg text-center mb-1">{servicio.titulo}</span>
              <span className="text-gray-600 text-center text-sm">{servicio.descripcion}</span>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTAS */}
      <section className="w-full py-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-marmolinas-blue">Ofertas</h2>
            <div className="text-sm text-gray-500">Aprovecha las ofertas por tiempo limitado</div>
          </div>
          <Carousel setApi={api => { if (api) ofertasApiRef.current = api }}>
            <CarouselContent>
              {ofertas.map((oferta) => (
                <CarouselItem key={oferta.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
                  <Card className="overflow-hidden">
                    <div className="relative w-full h-40">
                      <Image src={oferta.imagen} alt={oferta.nombre} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-marmolinas-blue text-base md:text-lg">{oferta.nombre}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">{oferta.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-marmolinas-yellow font-bold text-xl">${oferta.precio}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* REMODELA TU COCINA */}
      <section className="w-full py-8 bg-marmolinas-blue">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">Remodela tu cocina</h2>
            <p className="text-lg text-marmolinas-yellow mb-6">Solicita asesoría y cotiza tu proyecto con los mejores materiales en granito, cuarzo y mármol.</p>
            <Button asChild className="bg-marmolinas-yellow text-marmolinas-blue font-bold px-6 py-2">
              <a href="#contacto">Cotizar mi cocina</a>
            </Button>
          </div>
          <div className="flex-1 min-w-[220px] max-w-md">
            <Image src="/images/hero-2-marmolinas.jpg" alt="Remodela tu cocina" width={400} height={250} className="rounded-lg shadow-lg object-cover w-full h-auto" />
          </div>
        </div>
      </section>

      {/* CATEGORÍAS DE PRODUCTOS 1 */}
      <section className="w-full py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-marmolinas-blue mb-4">Nuestros Productos</h2>
          <Carousel>
            <CarouselContent>
              {categorias1.map((cat) => (
                <CarouselItem key={cat.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
                  <Card className="overflow-hidden">
                    <div className="relative w-full h-40">
                      <Image src={cat.imagen} alt={cat.nombre} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-marmolinas-blue text-base md:text-lg">{cat.nombre}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">{cat.descripcion}</CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CATEGORÍAS DE PRODUCTOS 2 */}
      <section className="w-full py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-marmolinas-blue mb-4">Más Categorías</h2>
          <Carousel>
            <CarouselContent>
              {categorias2.map((cat) => (
                <CarouselItem key={cat.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
                  <Card className="overflow-hidden">
                    <div className="relative w-full h-40">
                      <Image src={cat.imagen} alt={cat.nombre} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-marmolinas-blue text-base md:text-lg">{cat.nombre}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">{cat.descripcion}</CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  )
}
