'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { MapPin, MessageSquareText } from 'lucide-react';
import { HeroSlider } from '@/components/hero-slider';

// Hero slides - Contenido del slider
const heroSlides = [
  {
    image: '/images/Hero2.jpg',
    title: (
      <>
        Las Mejores <span className="bg-white/30 backdrop-blur-sm rounded-lg px-2 py-0.5 font-extrabold text-racing-blue shadow-md">Motocicletas</span> en{' '}
        <span className="bg-white/30 backdrop-blur-sm rounded-lg px-2 py-0.5 font-extrabold text-racing-blue shadow-md">Loja</span>
      </>
    ),
    subtitle: 'Tu concesionario de confianza en Racing Motos',
    buttonText: 'Ver Motos',
    buttonHref: '/productos',
    buttonVariant: 'default',
  },
  {
    image: '/images/Hero3.jpg',
    title: 'Financiamiento Especial',
    subtitle: 'Hasta 36 meses de plazo y tasas preferenciales',
    buttonText: 'Solicitar Financiamiento',
    buttonHref: '/servicios/financiamiento',
    buttonVariant: 'outline',
  },
  {
    image: '/images/Hero4.jpg',
    title: 'Mantenimiento Profesional',
    subtitle: 'Servicio técnico especializado para tu moto',
    buttonText: 'Agendar Cita',
    buttonHref: '/servicios/mantenimiento',
    buttonVariant: 'default',
  },
  {
    image: '/images/Hero5.jpg',
    title: 'Repuestos Originales',
    subtitle: 'Garantía y calidad para tu vehículo',
    buttonText: 'Ver Repuestos',
    buttonHref: '/productos/repuestos',
    buttonVariant: 'outline',
  },
];

// Promociones
const promociones = [
  { id: 1, titulo: 'Motos Deportivas en Oferta', descripcion: 'Aprovecha 15% de descuento en motos deportivas', imagen: '/images/motos_grupo1.jpg', href: '/productos/motos-deportivas' },
  { id: 2, titulo: 'Financiamiento 0% Interés', descripcion: 'Financia tu moto sin intereses por 12 meses', imagen: '/images/financiamiento_motos1.jpg', href: '/servicios/financiamiento' },
  { id: 3, titulo: 'Mantenimiento Gratuito', descripcion: 'Primer mantenimiento gratis con la compra', imagen: '/images/Taller_motos1.jpg', href: '/servicios/mantenimiento' },
  { id: 4, titulo: 'Motos de Trabajo', descripcion: 'Motos ideales para trabajo y transporte', imagen: '/images/motos_grupo2.jpg', href: '/productos/motos-trabajo' },
  { id: 5, titulo: 'Trámites Incluidos', descripcion: 'Matriculación y trámites sin costo adicional', imagen: '/images/Accesorios_Motos1.jpg', href: '/servicios/tramites' },
  { id: 6, titulo: 'Motos Usadas Certificadas', descripcion: 'Motos usadas con garantía y revisión técnica', imagen: '/images/motos_grupo3.jpg', href: '/productos/motos-usadas' },
];

// Blog
const blog = [
  {
    id: 1,
    titulo: '¿Dónde comprar un vehículo con garantía en Loja?',
    resumen: 'Descubre por qué Racing Motos es tu mejor opción para comprar motocicletas con garantía completa.',
    imagen: '/images/motos_grupo1.jpg',
    slug: 'donde-comprar-vehiculo-garantia-loja',
  },
  {
    id: 2,
    titulo: 'Mejores motos para trabajo en Ecuador 2024',
    resumen: 'Guía completa de las motocicletas más eficientes para trabajo y transporte en Ecuador.',
    imagen: '/images/Motodetrabajo1.jpg',
    slug: 'mejores-motos-trabajo-ecuador-2024',
  },
  {
    id: 3,
    titulo: 'Financiamiento de motocicletas: todo lo que debes saber',
    resumen: 'Conoce las opciones de crédito y financiamiento disponibles para tu nueva motocicleta.',
    imagen: '/images/financiamiento_motos2.jpg',
    slug: 'financiamiento-motocicletas-guia-completa',
  },
];

// Showrooms
const showrooms = [
  { 
    id: 1, 
    sucursal: 'Sucursal Centro', 
    empresa: 'Racing Motos', 
    direccion: 'Av. Universitaria y Lourdes, Loja', 
    imagen: '/images/Fotos Hero/showroom1.jpg', 
    maps: 'https://goo.gl/maps/...', 
    cotiza: '#contacto' 
  },
  { 
    id: 2, 
    sucursal: 'Sucursal Norte', 
    empresa: 'Racing Motos', 
    direccion: 'Av. Emiliano Ortega y 8 de Diciembre, Loja', 
    imagen: '/images/Fotos Hero/showroom2.jpg', 
    maps: '#', 
    cotiza: '#contacto' 
  },
  { 
    id: 3, 
    sucursal: 'Taller de Servicio', 
    empresa: 'Racing Motos', 
    direccion: 'Sector La Tebaida, Loja', 
    imagen: '/images/Fotos Hero/showroom3.jpg', 
    maps: '#', 
    cotiza: '#contacto' 
  },
];

// Imágenes de alta calidad para el hero (solo imágenes hero)
const heroPinteres = [
  '/images/Hero2.jpg',
  '/images/Hero3.jpg',
  '/images/Hero4.jpg',
  '/images/Hero5.jpg'
];

export default function HomePage() {
  // Hero slider autoplay
  const [heroIndex, setHeroIndex] = useState(0);
  const heroApiRef = useRef<CarouselApi | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
      if (heroApiRef.current) heroApiRef.current.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Autoplay para el carrusel de promociones
  const promoApiRef = useRef<CarouselApi | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (promoApiRef.current) {
        promoApiRef.current.scrollNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Slider con transiciones suaves */}
      <HeroSlider
        slides={heroSlides}
        interval={6000}
        overlayClassName="bg-gradient-to-r from-black/70 via-black/40 to-transparent"
        heightClassName="min-h-screen"
        showIndicators={true}
        showArrows={true}
        autoPlay={true}
        fade={true}
        className="shadow-2xl"
      />
      {/* PARALLAX/IMAGEN FIJA */}
      <section className="relative w-full h-[40vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/Imagen_de_fondo1.jpg')" }} />

      {/* QUIÉNES SOMOS */}
      <section className="w-full py-20 md:py-32 text-white" style={{ backgroundColor: '#040404' }}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 md:px-16">
          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center items-start px-2 md:px-8">
            <h2 className="text-5xl md:text-6xl font-bold text-racing-yellow mb-8 leading-tight">
              QUIÉNES<br/>SOMOS
            </h2>
            <p className="text-lg text-gray-100 mb-10 max-w-2xl leading-relaxed">
              <span className="block mb-4">Racing Motos es una empresa familiar con más de 15 años de experiencia en el sector motociclístico de Loja, Ecuador. Nos especializamos en la venta de motocicletas nuevas y usadas, servicios de mantenimiento, financiamiento y gestión de trámites vehiculares.</span>
              <span className="block">Somos distribuidores autorizados de las mejores marcas de motocicletas, ofreciendo productos de calidad con garantía y el mejor servicio postventa de la región.</span>
            </p>
            <Button asChild className="bg-racing-yellow hover:bg-racing-yellow/90 text-racing-blue font-bold px-10 py-4 rounded-full text-base shadow-lg transition-colors duration-200">
              <Link href="/servicios" className="hover:text-racing-blue/90">Ver más</Link>
            </Button>
          </div>
          
          {/* Video e Imagen */}
          <div className="flex-1 flex justify-center items-center w-full max-w-2xl relative">
            {/* Imagen decorativa */}
            <div className="absolute left-[-40px] bottom-[-40px] w-[200px] h-[160px] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10 hidden md:block">
              <Image 
                src="/images/vertical 1.jpg" 
                alt="Ambiente de Racing Motos" 
                width={200}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Video */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] hover:shadow-racing-yellow/20 z-0">
              <iframe
                src="https://www.youtube.com/embed/Gm5A3Ir9qv0"
                title="Conoce más sobre Racing Motos"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      {/* PROMOCIONES */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent className="">
          {promociones.map((promo) => (
                <CarouselItem key={promo.id} className="basis-full md:basis-1/4 px-2 flex justify-center">
                  <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col min-w-[260px] max-w-[350px] mx-auto">
                    <div className="relative w-full h-56 md:h-64">
                      <span className="absolute top-3 left-3 bg-marmolinas-yellow text-marmolinas-blue text-xs font-bold px-3 py-1 rounded-full shadow z-10">Oferta</span>
                      <Image src={promo.imagen} alt={promo.titulo} fill className="object-cover rounded-t-2xl" />
              </div>
                    <CardHeader className="flex-1 flex flex-col justify-between py-4">
                      <CardTitle className="text-marmolinas-blue text-xl text-center leading-tight mb-1">{promo.titulo}</CardTitle>
                      <CardDescription className="text-gray-600 text-base text-center mb-2">{promo.descripcion}</CardDescription>
              </CardHeader>
                    <CardContent className="pt-0 pb-6 flex flex-col items-center">
                      <Button asChild className="bg-marmolinas-blue text-white w-3/4 rounded-full text-base py-3 shadow-lg hover:scale-105 transition-transform">
                  <Link href={promo.href}>Ver Oferta</Link>
                </Button>
              </CardContent>
            </Card>
                </CarouselItem>
          ))}
            </CarouselContent>
            {/* Sin flechas, solo autoplay */}
          </Carousel>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS CON TABS */}
      <section
        className="w-full relative flex items-center justify-center"
        style={{ minHeight: '600px', height: '600px' }}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/imagen_de_fondo_2.jpg"
            alt="Fondo Nuestros Servicios"
            className="w-full h-full object-cover object-center"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg pt-8 md:pt-0">Nuestros Servicios</h2>
          <Tabs defaultValue="venta" className="w-full">
            <TabsList className="flex justify-center md:justify-center gap-2 md:gap-4 mb-8 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg p-1 md:p-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-racing-blue scrollbar-track-transparent md:overflow-x-visible md:whitespace-normal">
              <TabsTrigger value="venta" className="text-white data-[state=active]:bg-racing-yellow data-[state=active]:text-racing-blue px-4 md:px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-colors min-w-[140px] flex justify-center items-center text-center">Mantenimiento</TabsTrigger>
              <TabsTrigger value="pulido" className="text-white data-[state=active]:bg-racing-yellow data-[state=active]:text-racing-blue px-4 md:px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-colors min-w-[140px] flex justify-center items-center text-center">Financiamiento</TabsTrigger>
              <TabsTrigger value="resina" className="text-white data-[state=active]:bg-racing-yellow data-[state=active]:text-racing-blue px-4 md:px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-colors min-w-[140px] flex justify-center items-center text-center">Trámites</TabsTrigger>
            </TabsList>
            <TabsContent value="venta">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {["/images/Taller_motos1.jpg","/images/Taller_motos2.jpg","/images/Taller_motos3.jpg"].map((src, i) => (
                  <Dialog key={src+"-venta"}>
                    <DialogTrigger asChild>
                      <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                        <Image 
                          src={src} 
                          alt={`Mantenimiento ${i+1}`} 
                          width={400} 
                          height={250} 
                          className="object-cover w-full h-32 sm:h-40 md:h-48 transition-transform hover:scale-105" 
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                      <Image 
                        src={src} 
                        alt={`Mantenimiento ${i+1}`} 
                        width={800} 
                        height={500} 
                        className="object-contain w-full h-full rounded-xl" 
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pulido">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {["/images/financiamiento_motos1.jpg","/images/financiamiento_motos2.jpg","/images/financiamiento_motos3.jpg"].map((src, i) => (
                  <Dialog key={src+"-pulido"}>
                    <DialogTrigger asChild>
                      <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                        <Image 
                          src={src} 
                          alt={`Financiamiento ${i+1}`} 
                          width={400} 
                          height={250} 
                          className="object-cover w-full h-32 sm:h-40 md:h-48 transition-transform hover:scale-105" 
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                      <Image 
                        src={src} 
                        alt={`Financiamiento ${i+1}`} 
                        width={800} 
                        height={500} 
                        className="object-contain w-full h-full rounded-xl" 
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="resina">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {["/images/tramitesmotos1.jpeg","/images/tramitesmotos2.webp","/images/tramitesmotos3.jpeg"].map((src, i) => (
                  <Dialog key={src+"-resina"}>
                    <DialogTrigger asChild>
                      <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                        <Image 
                          src={src} 
                          alt={`Trámite ${i+1}`} 
                          width={400} 
                          height={250} 
                          className="object-cover w-full h-32 sm:h-40 md:h-48 transition-transform hover:scale-105" 
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                      <Image 
                        src={src} 
                        alt={`Trámite ${i+1}`} 
                        width={800} 
                        height={500} 
                        className="object-contain w-full h-full rounded-xl" 
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* BLOG SLIDE SOLO EN MÓVIL */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Blog</h2>
          <div className="block md:hidden">
            <Carousel opts={{ align: 'center', loop: true }}>
              <CarouselContent>
                {blog.map((art) => (
                  <CarouselItem key={art.id} className="basis-full px-2 flex justify-center">
                    <Card className="overflow-hidden flex flex-col h-full max-h-[430px] w-full bg-white shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-64">
                        <Image src={art.imagen} alt={art.titulo} fill className="object-cover" />
                      </div>
                      <CardHeader className="flex-1 flex flex-col justify-between py-4 px-4">
                        <CardTitle className="text-gray-900 text-lg font-semibold text-center leading-tight mb-2">{art.titulo}</CardTitle>
                        <CardDescription className="text-gray-700 text-sm text-center mb-4">{art.resumen}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 px-4 pb-4">
                        <Button asChild className="bg-[#fa6704] hover:bg-[#e65c00] text-white w-full rounded-full text-sm py-2 transition-colors">
                          <Link href={`/blog/${art.slug}`}>Leer más</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {blog.map((art) => (
              <Card key={art.id} className="overflow-hidden flex flex-col h-full max-h-[450px] bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="relative w-full h-64">
                  <Image src={art.imagen} alt={art.titulo} fill className="object-cover" />
                </div>
                <CardHeader className="flex-1 flex flex-col justify-between py-4 px-4">
                  <CardTitle className="text-gray-900 text-lg font-semibold text-center leading-tight mb-2">{art.titulo}</CardTitle>
                  <CardDescription className="text-gray-700 text-sm text-center mb-4">{art.resumen}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 px-4 pb-4">
                  <Button asChild className="bg-[#fa6704] hover:bg-[#e65c00] text-white w-full rounded-full text-sm py-2 transition-colors">
                    <Link href={`/blog/${art.slug}`}>Leer más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM SLIDE SOLO EN MÓVIL */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">SHOWROOMS</h2>
          <p className="text-center text-gray-700 text-lg mb-8">Encuentra tu espacio ideal</p>
          <div className="block md:hidden">
            <Carousel opts={{ align: 'center', loop: true }}>
              <CarouselContent>
                {showrooms.map((show) => (
                  <CarouselItem key={show.id} className="basis-full px-2 flex justify-center">
                    <div className="relative rounded-xl overflow-hidden shadow-xl flex flex-col justify-between min-h-[500px] w-full max-w-xs mx-auto transition-all duration-300 hover:shadow-2xl hover:shadow-[#fa6704]/20" style={{ aspectRatio: '3/5' }}>
                      <Image src={show.imagen} alt={show.sucursal} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute top-6 left-0 w-full px-6">
                        <h3 className="text-white text-2xl font-bold drop-shadow-md text-left">
                          {show.empresa} <span className="font-light">{show.sucursal}</span>
                        </h3>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full px-6 pb-6 flex flex-col items-center">
                        <div className="flex items-center mb-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-white text-xl mr-2">📍</span>
                          <span className="text-white text-base font-medium">{show.direccion}</span>
                        </div>
                        <div className="flex gap-3 w-full">
                          <Button asChild className="bg-white hover:bg-gray-100 text-gray-900 font-bold flex-1 rounded-full border border-gray-200" size="sm">
                            <Link href={show.maps} target="_blank" className="flex items-center justify-center gap-1">
                              <MapPin className="w-4 h-4" /> Mapa
                            </Link>
                          </Button>
                          <Button asChild className="bg-[#fa6704] hover:bg-[#e65c00] text-white font-bold flex-1 rounded-full" size="sm">
                            <Link href={show.cotiza} className="flex items-center justify-center gap-1">
                              <MessageSquareText className="w-4 h-4" /> Cotiza
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showrooms.map((show) => (
              <div key={show.id} className="relative rounded-xl overflow-hidden shadow-xl flex flex-col justify-between min-h-[500px] max-w-xs mx-auto transition-all duration-300 hover:shadow-2xl hover:shadow-[#fa6704]/20" style={{ aspectRatio: '3/5' }}>
                <Image src={show.imagen} alt={show.sucursal} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-6 left-0 w-full px-6">
                  <h3 className="text-white text-2xl font-bold drop-shadow-md text-left">
                    {show.empresa} <span className="font-light">{show.sucursal}</span>
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-6 pb-6 flex flex-col items-center">
                  <div className="flex items-center mb-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-xl mr-2">📍</span>
                    <span className="text-white text-base font-medium">{show.direccion}</span>
                  </div>
                  <div className="flex gap-3 w-full">
                    <Button asChild className="bg-white hover:bg-gray-100 text-gray-900 font-bold flex-1 rounded-full border border-gray-200" size="sm">
                      <Link href={show.maps} target="_blank" className="flex items-center justify-center gap-1">
                        <MapPin className="w-4 h-4" /> Mapa
                      </Link>
                    </Button>
                    <Button asChild className="bg-[#fa6704] hover:bg-[#e65c00] text-white font-bold flex-1 rounded-full" size="sm">
                      <Link href={show.cotiza} className="flex items-center justify-center gap-1">
                        <MessageSquareText className="w-4 h-4" /> Cotiza
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
