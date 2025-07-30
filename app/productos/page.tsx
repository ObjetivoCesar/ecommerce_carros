'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { HeroSlider } from '@/components/hero-slider';
import { useState, useEffect } from 'react';

const productos = [
  // Motos de Trabajo
  {
    id: "moto-trabajo-1",
    nombre: "Moto de Trabajo 125cc",
    imagen: "/images/Motodetrabajo1.jpg",
    precio: 2500,
    descripcion: "Moto de trabajo 125cc, ideal para reparto y transporte ligero. Bajo consumo y alto rendimiento.",
    href: "/productos/moto-trabajo-1",
    categoria: "motos-trabajo",
  },
  {
    id: "moto-trabajo-2",
    nombre: "Moto de Trabajo 150cc",
    imagen: "/images/motodetrabajo2.jpg",
    precio: 2800,
    descripcion: "Potente moto de 150cc para trabajo pesado. Perfecta para terrenos difíciles.",
    href: "/productos/moto-trabajo-2",
    categoria: "motos-trabajo",
  },
  {
    id: "moto-trabajo-3",
    nombre: "Moto de Trabajo 200cc",
    imagen: "/images/motodetrabajo3.jpg",
    precio: 3200,
    descripcion: "Alto rendimiento para trabajos exigentes. Motor 200cc con gran capacidad de carga.",
    href: "/productos/moto-trabajo-3",
    categoria: "motos-trabajo",
  },
  {
    id: "moto-taxi-1",
    nombre: "Moto Taxi Familiar",
    imagen: "/images/motodetrabajotaxi1.jpg",
    precio: 3500,
    descripcion: "Moto taxi con capacidad para 4 pasajeros. Cómoda y segura para transporte familiar.",
    href: "/productos/moto-taxi-1",
    categoria: "motos-taxi",
  },
  {
    id: "moto-taxi-2",
    nombre: "Moto Taxi Ejecutivo",
    imagen: "/images/motodetrabajotaxi2.jpg",
    precio: 3800,
    descripcion: "Moto taxi ejecutivo con mayor comodidad y espacio. Ideal para servicio de transporte.",
    href: "/productos/moto-taxi-2",
    categoria: "motos-taxi",
  },
  // Productos existentes
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

const slides = [
  {
    image: '/images/Motodetrabajo1.jpg',
    title: 'Escoge tu moto',
    subtitle: 'Y escogela bien, por que te acompañara a todo lado'
  },
  {
    image: '/images/imagen_de_fondo_2.jpg',
    title: 'Escoge tu moto',
    subtitle: 'Y escogela bien, por que te acompañara a todo lado'
  },
  {
    image: '/images/motos_grupo2.jpg',
    title: 'Escoge tu moto',
    subtitle: 'Y escogela bien, por que te acompañara a todo lado'
  }
];

export default function ProductsPage() {
  return (
    <>
      <div className="relative w-full" style={{ height: 'calc(100vh - 80px)' }}>
        <HeroSlider 
          slides={slides}
          interval={5000}
          overlayClassName="bg-black/40"
        />
      </div>
      {/* Sección de imagen fija con logo */}
      <section className="relative w-full h-[40vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/logo_imagenfija.jpg')" }}>        
        <div className="absolute inset-0 bg-black/20" />
      </section>
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="mx-auto mb-8 flex-wrap bg-[#fa6807]/10">
            <TabsTrigger 
              value="todos"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger 
              value="motos-trabajo"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Motos de Trabajo
            </TabsTrigger>
            <TabsTrigger 
              value="motos-taxi"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Motos Taxi
            </TabsTrigger>
            <TabsTrigger 
              value="granitos"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Granitos
            </TabsTrigger>
            <TabsTrigger 
              value="herramientas"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Herramientas
            </TabsTrigger>
            <TabsTrigger 
              value="fachaletas"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Fachaletas
            </TabsTrigger>
          </TabsList>
          {/* Contenido para la pestaña Todos */}
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
                    <Button asChild className="w-full bg-[#fa6807] hover:bg-[#fa6807]/90 text-white">
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
                    <Button asChild className="w-full bg-[#fa6807] hover:bg-[#fa6807]/90 text-white">
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
                    <Button asChild className="w-full bg-[#fa6807] hover:bg-[#fa6807]/90 text-white">
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
                    <Button asChild className="w-full bg-[#fa6807] hover:bg-[#fa6807]/90 text-white">
                      <Link href={producto.href}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="motos-trabajo">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'motos-trabajo').map((producto) => (
                <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image src={producto.imagen || "/placeholder.svg"} alt={producto.nombre} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-marmolinas-blue">{producto.nombre}</CardTitle>
                    <CardDescription>{producto.descripcion}</CardDescription>
                    <div className="text-2xl font-bold text-marmolinas-blue">
                      ${producto.precio.toLocaleString()}
                      <span className="text-sm font-normal text-gray-600 ml-1">c/u</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-[#fa6807] hover:bg-[#fa6807]/90 text-white">
                      <Link href={producto.href}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="motos-taxi">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'motos-taxi').map((producto) => (
                <Card key={producto.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image src={producto.imagen || "/placeholder.svg"} alt={producto.nombre} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-marmolinas-blue">{producto.nombre}</CardTitle>
                    <CardDescription>{producto.descripcion}</CardDescription>
                    <div className="text-2xl font-bold text-marmolinas-blue">
                      ${producto.precio.toLocaleString()}
                      <span className="text-sm font-normal text-gray-600 ml-1">c/u</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-[#fa6807] hover:bg-[#fa6807]/90 text-white">
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
