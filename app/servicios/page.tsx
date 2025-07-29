'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { HeroSection } from '@/components/hero-section';

// Servicios principales
const servicios = [
  { id: "mantenimiento", titulo: "Mantenimiento Especializado", icono: "/images/Taller_motos1.jpg", descripcion: "Servicio técnico especializado para todas las marcas de motocicletas." },
  { id: "financiamiento", titulo: "Financiamiento Flexible", icono: "/images/financiamiento_motos1.jpg", descripcion: "Planes de financiamiento adaptados a tu presupuesto y necesidades." },
  { id: "tramites", titulo: "Gestión de Trámites", icono: "/images/tramitesmotos2.webp", descripcion: "Matriculación, transferencias y todos los trámites vehiculares." },
  { id: "garantia", titulo: "Garantía Extendida", icono: "/images/motos_grupo1.jpg", descripcion: "Protección completa para tu inversión con garantía extendida." },
  { id: "repuestos", titulo: "Repuestos Originales", icono: "/images/Accesorios_Motos1.jpg", descripcion: "Repuestos originales y accesorios para todas las marcas." },
]

// Ofertas destacadas
const ofertas = [
  { id: 1, nombre: "Mantenimiento Básico", imagen: "/images/Taller_motos1.jpg", precio: 30, descripcion: "Cambio de aceite, filtros y ajustes generales." },
  { id: 2, nombre: "Mantenimiento Premium", imagen: "/images/Taller_motos2.jpg", precio: 45, descripcion: "Servicio completo de mantenimiento preventivo." },
  { id: 3, nombre: "Financiamiento 0%", imagen: "/images/financiamiento_motos1.jpg", precio: 0, descripcion: "Financia tu moto sin intereses por 12 meses." },
  { id: 4, nombre: "Yamaha Crypton 110", imagen: "/images/motos_grupo2.jpg", precio: 3200, descripcion: "Potencia y durabilidad para uso intensivo." },
]

// Categorías de productos
const categorias1 = [
  { id: 1, nombre: "Motos Deportivas", imagen: "/images/motos_grupo1.jpg", descripcion: "Motocicletas deportivas de alta gama." },
  { id: 2, nombre: "Motos de Trabajo", imagen: "/images/motos_grupo2.jpg", descripcion: "Ideales para delivery y transporte." },
  { id: 3, nombre: "Repuestos", imagen: "/images/Accesorios_Motos2.jpg", descripcion: "Repuestos originales y accesorios." },
  { id: 4, nombre: "Servicios", imagen: "/images/Taller_motos3.jpg", descripcion: "Mantenimiento y servicios técnicos." },
]
const categorias2 = [
  { id: 1, nombre: "Financiamiento", imagen: "/images/financiamiento_motos2.jpg", descripcion: "Planes de crédito flexibles y accesibles." },
  { id: 2, nombre: "Seguros y Garantías", imagen: "/images/motos_grupo3.jpg", descripcion: "Protección completa para tu motocicleta." },
]

const heroPinteres = [
  '/images/motos_grupo1.jpg',
  '/images/motos_grupo2.jpg',
  '/images/financiamiento_motos1.jpg',
  '/images/Taller_motos1.jpg',
  '/images/tramitesmotos3.jpeg',
  '/images/Accesorios_Motos1.jpg',
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
        titulo={<>Las Mejores Motocicletas en Loja</>}
        subtitulo={<>Calidad, garantía y el mejor servicio postventa de la región</>}
        botonTexto="Ver Motos"
        botonHref="/productos"
        overlayClassName="bg-black/40"
      />

      {/* Justo después del HeroSection, agrega la imagen fija sin overlay ni texto */}
      <section className="relative w-full h-[40vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/Hero5.jpg')" }} />

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
