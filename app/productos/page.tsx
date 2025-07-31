'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { HeroSlider } from '@/components/hero-slider';
import { useState, useEffect } from 'react';
import { getAllProducts, getProductsByCategory } from '@/lib/data/products';
// Obtener todos los productos desde el módulo centralizado
const productos = getAllProducts();

const slides = [
  {
    image: '/images/Exterior de la empresa/local_exterior1.jpg',
    title: 'Escoge tu vehículo',
    subtitle: 'Y escogela bien, por que te acompañara a todo lado'
  },
  {
    image: '/images/Exterior de la empresa/local_exterior2.jpg',
    title: 'Escoge tu vehículo',
    subtitle: 'Y escogela bien, por que te acompañara a todo lado'
  },
  {
    image: '/images/Exterior de la empresa/local_exterior3.jpg',
    title: 'Escoge tu vehículo',
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
              value="autos"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Autos
            </TabsTrigger>
            <TabsTrigger 
              value="camionetas"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Camionetas
            </TabsTrigger>
            <TabsTrigger 
              value="camiones"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Camiones
            </TabsTrigger>
            <TabsTrigger 
              value="maquinaria"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Maquinaria Pesada
            </TabsTrigger>
            <TabsTrigger 
              value="otros"
              className="data-[state=active]:bg-[#fa6807] data-[state=active]:text-white"
            >
              Otros
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
                      ${producto.precio.toLocaleString()}
                      <span className="text-sm font-normal text-gray-600 ml-1">{producto.categoria === 'Outlet' ? '¡Oferta!' : 'c/u'}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-[#fa6807] hover:bg-[#fa6807]/90 text-white">
                      <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Autos */}
          <TabsContent value="autos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'Autos').map((producto) => (
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
                      <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Camionetas */}
          <TabsContent value="camionetas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'Camionetas').map((producto) => (
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
                      <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Camiones */}
          <TabsContent value="camiones">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'Camiones').map((producto) => (
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
                      <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Maquinaria Pesada */}
          <TabsContent value="maquinaria">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'Maquinaria').map((producto) => (
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
                      <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Otros */}
          <TabsContent value="otros">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.filter(p => p.categoria === 'Otros').map((producto) => (
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
                      <Link href={`/productos/${producto.id}`}>Ver Detalles</Link>
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