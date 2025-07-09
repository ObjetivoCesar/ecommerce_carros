'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { HeroSection } from '@/components/hero-section';
import { useState, useEffect } from 'react';

const productos = [
  {
    id: "granito-tiger-skin",
    nombre: "Granito Tiger Skin",
    imagen: "/images/granito-tiger-skin.jpeg",
    precio: 85,
    descripcion: "Granito con vetas doradas y negras, perfecto para cocinas elegantes",
    href: "/productos/granito-tiger-skin",
    categoria: "granitos",
  },
  {
    id: "granito-vayolet",
    nombre: "Granito Vayolet",
    imagen: "/images/granito-vayolet.webp",
    precio: 78,
    descripcion: "Granito con tonos violáceos únicos, ideal para espacios modernos",
    href: "/productos/granito-vayolet",
    categoria: "granitos",
  },
  {
    id: "granito-black-impala",
    nombre: "Granito Black Impala",
    imagen: "/images/granito-black-impala.jpg",
    precio: 72,
    descripcion: "Granito negro clásico con puntos brillantes, elegancia atemporal",
    href: "/productos/granito-black-impala",
    categoria: "granitos",
  },
  {
    id: "discos-diamantados",
    nombre: "Discos Diamantados",
    imagen: "/images/discos-diamantados.webp",
    precio: 45,
    descripcion: "Herramientas profesionales para corte de piedra natural",
    href: "/productos/discos-diamantados",
    categoria: "herramientas",
  },
  {
    id: "brocas-diamantadas",
    nombre: "Brocas Diamantadas",
    imagen: "/images/brocas-diamantadas.webp",
    precio: 25,
    descripcion: "Brocas especializadas para perforación en materiales duros",
    href: "/productos/brocas-diamantadas",
    categoria: "herramientas",
  },
  {
    id: "fachaletas-piedra",
    nombre: "Fachaletas de Piedra",
    imagen: "/images/fachaletas-de-piedra.jpeg",
    precio: 35,
    descripcion: "Revestimientos decorativos para paredes exteriores e interiores",
    href: "/productos/fachaletas-piedra",
    categoria: "fachaletas",
  },
]

const heroPinteres = [
  '/images/cocinalujo_Pinteres.webp',
  '/images/encimera_Pinteres.webp',
  '/images/cocina_Pinteres.webp',
  '/images/lavamanos_Pinteres.webp',
  '/images/meson_Pinteres.webp',
  '/images/grifococina_Pinteres.webp',
];

export default function ProductsPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroPinteres.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <HeroSection
        imagen={heroPinteres[heroIndex]}
        titulo={<>Nuestros Productos</>}
        subtitulo={<>Descubre nuestra amplia gama de materiales de alta calidad para transformar tus espacios</>}
        overlayClassName="bg-black/40"
      />
      {/* Imagen fija */}
      <section className="relative w-full h-[40vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/imagen fija.webp')" }} />
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="mx-auto mb-8">
            <style>{`
              [role="tab"][data-state="active"] {
                background-color: #FFD700 !important;
                color: #0052B4 !important;
              }
            `}</style>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="granitos">Granitos</TabsTrigger>
            <TabsTrigger value="herramientas">Herramientas</TabsTrigger>
            <TabsTrigger value="fachaletas">Fachaletas</TabsTrigger>
          </TabsList>
          <TabsContent value="todos">
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
          </TabsContent>
          <TabsContent value="granitos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'granitos').map((producto) => (
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
          </TabsContent>
          <TabsContent value="herramientas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'herramientas').map((producto) => (
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
          </TabsContent>
          <TabsContent value="fachaletas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'fachaletas').map((producto) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
