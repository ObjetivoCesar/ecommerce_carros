'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { HeroSection } from '@/components/hero-section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Hero slides
const heroSlides = [
  {
    imagen: '/images/hero-portada-marmolina.jpg',
    titulo: 'El Mejor Granito y Cuarzo para tu Proyecto',
    subtitulo: 'Transforma tu espacio con Marmolinas Granillos',
    cta: 'Cotiza Ahora',
    href: '#contacto',
  },
  {
    imagen: '/images/hero-2-marmolinas.jpg',
    titulo: 'Ambientes Modernos y Elegantes',
    subtitulo: 'Materiales de alta calidad para tu hogar o negocio',
    cta: 'Ver Productos',
    href: '/productos',
  },
  {
    imagen: '/images/fachaletas-de-piedra.jpeg',
    titulo: 'Fachaletas Decorativas',
    subtitulo: 'Dale un nuevo look a tus paredes',
    cta: 'Ver Fachaletas',
    href: '/productos/fachaletas-piedra',
  },
];

// Promociones
const promociones = [
  { id: 1, titulo: 'Descuento en Granito Tiger Skin', descripcion: 'Aprovecha 10% de descuento en tu compra', imagen: '/images/granito-tiger-skin.jpeg', href: '/productos/granito-tiger-skin' },
  { id: 2, titulo: 'Brocas Diamantadas en Oferta', descripcion: 'Herramientas profesionales a precio especial', imagen: '/images/brocas-diamantadas.webp', href: '/productos/brocas-diamantadas' },
  { id: 3, titulo: 'Fachaletas Decorativas', descripcion: 'Renueva tus paredes con 15% de descuento', imagen: '/images/fachaletas-de-piedra.jpeg', href: '/productos/fachaletas-piedra' },
  { id: 4, titulo: 'Cuarzo Premium en Promoción', descripcion: 'Cuarzos seleccionados a precio especial', imagen: '/images/granito-vayolet.webp', href: '/productos/granito-vayolet' },
  { id: 5, titulo: 'Discos Diamantados', descripcion: 'Llévate 2 y paga 1 en discos diamantados', imagen: '/images/discos-diamantados.webp', href: '/productos/discos-diamantados' },
  { id: 6, titulo: 'Resinas y Adhesivos', descripcion: '20% de descuento en resinas y adhesivos', imagen: '/images/hero-portada-marmolina.jpg', href: '/productos/resinas-adhesivos' },
];

// Blog
const blog = [
  {
    id: 1,
    titulo: '¿Cómo elegir el mejor granito para tu cocina?',
    resumen: 'Consejos prácticos para seleccionar el granito ideal según tu estilo y necesidades.',
    imagen: '/images/encimera_Pinteres.webp',
    slug: 'granito-para-tu-cocina',
  },
  {
    id: 2,
    titulo: 'Ventajas del cuarzo premium en superficies modernas',
    resumen: 'Descubre por qué el cuarzo es tendencia en diseño de interiores y remodelaciones.',
    imagen: '/images/cocinalujo_Pinteres.webp',
    slug: 'ventajas-cuarzo-premium',
  },
  {
    id: 3,
    titulo: 'Fachaletas decorativas: transforma tus espacios',
    resumen: 'Ideas y tips para renovar ambientes con fachaletas de piedra natural.',
    imagen: '/images/fachaletas-de-piedra.jpeg',
    slug: 'fachaletas-decorativas',
  },
];

// Showrooms
const showrooms = [
  { id: 1, sucursal: 'Sucursal Centro', empresa: 'Marmolinas Granillos', direccion: 'Av. Emiliano Ortega 195-05, Loja', imagen: '/images/hero-portada-marmolina.jpg', maps: 'https://goo.gl/maps/...', cotiza: '#contacto' },
  { id: 2, sucursal: 'Sucursal Sur', empresa: 'Marmolinas Granillos', direccion: 'Av. Loja Sur y Principal, Loja', imagen: '/images/hero-2-marmolinas.jpg', maps: '#', cotiza: '#contacto' },
  { id: 3, sucursal: 'Sucursal Norte', empresa: 'Marmolinas Granillos', direccion: 'Av. Granito y Mármol, Esq. con Piedra, Loja', imagen: '/images/granito-black-impala.jpg', maps: '#', cotiza: '#contacto' },
];

// Imágenes de alta calidad para el hero
const heroPinteres = [
  '/images/cocinalujo_Pinteres.webp',
  '/images/encimera_Pinteres.webp',
  '/images/cocina_Pinteres.webp',
  '/images/lavamanos_Pinteres.webp',
  '/images/meson_Pinteres.webp',
  '/images/grifococina_Pinteres.webp',
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
      {/* HERO SLIDER con imágenes Pinteres */}
      <HeroSection
        imagen={heroPinteres[heroIndex]}
        titulo={<span>El Mejor <span className="bg-white/30 backdrop-blur-sm rounded-lg px-2 py-0.5 font-extrabold text-marmolinas-blue shadow-md">Granito</span> y <span className="bg-white/30 backdrop-blur-sm rounded-lg px-2 py-0.5 font-extrabold text-marmolinas-blue shadow-md">Cuarzo</span> para tu Proyecto</span>}
        subtitulo={heroSlides[0].subtitulo}
        botonTexto={heroSlides[0].cta}
        botonHref={heroSlides[0].href}
      />
      {/* PARALLAX/IMAGEN FIJA */}
      <section className="relative w-full h-[40vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/imagen fija.webp')" }} />

      {/* QUIÉNES SOMOS Y PROMOCIONES */}
      <section className="w-full py-32 min-h-[700px] bg-[#f7f7f7] flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20 px-6 md:px-16">
          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center items-start md:items-start px-2 md:px-8">
            <h2 className="text-5xl md:text-6xl font-bold text-marmolinas-blue mb-8 leading-tight">QUIÉNES<br/>SOMOS</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-xl">Marmolinas Granillos es una empresa familiar con legado y visión, especializada en la venta e instalación de granito, cuarzo y mármol. Brindamos productos de primera categoría a precios competitivos, cumpliendo siempre las expectativas de nuestros clientes.<br/><br/>Somos importadores y distribuidores directos de piedra natural y decorativa en Ecuador.</p>
            <Button asChild className="bg-marmolinas-yellow text-marmolinas-blue font-bold px-10 py-4 rounded-full text-base shadow-lg">
              <Link href="/servicios">Ver más</Link>
            </Button>
          </div>
          {/* Imágenes */}
          <div className="flex-1 flex justify-center items-center relative min-h-[400px] md:min-h-[500px] px-2 md:px-8">
            <div className="relative w-[380px] h-[380px] md:w-[440px] md:h-[440px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/oRhFTFmMUQY"
                title="Forma correcta de aplicar grano o marmolina"
                className="w-full h-full object-cover rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute left-[-40px] bottom-[-40px] w-[200px] h-[160px] rounded-xl overflow-hidden shadow-lg border-4 border-white hidden md:block">
              <Image src="/images/fachaletas-de-piedra.jpeg" alt="Ambiente Decorativo" fill className="object-cover" />
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
            src="/images/cocina_Pinteres.webp"
            alt="Fondo Nuestros Servicios"
            className="w-full h-full object-cover object-center"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg pt-8 md:pt-0">Nuestros Servicios</h2>
          <Tabs defaultValue="venta" className="w-full">
            <TabsList className="flex justify-center md:justify-center gap-2 md:gap-4 mb-8 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg p-1 md:p-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-marmolinas-blue scrollbar-track-transparent md:overflow-x-visible md:whitespace-normal">
              <TabsTrigger value="venta" className="text-white data-[state=active]:bg-marmolinas-yellow data-[state=active]:text-marmolinas-blue px-4 md:px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-colors min-w-[140px] flex justify-center items-center text-center">Instalación</TabsTrigger>
              <TabsTrigger value="pulido" className="text-white data-[state=active]:bg-marmolinas-yellow data-[state=active]:text-marmolinas-blue px-4 md:px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-colors min-w-[140px] flex justify-center items-center text-center">Restauración</TabsTrigger>
              <TabsTrigger value="resina" className="text-white data-[state=active]:bg-marmolinas-yellow data-[state=active]:text-marmolinas-blue px-4 md:px-6 py-2 rounded-full font-semibold text-base md:text-lg transition-colors min-w-[140px] flex justify-center items-center text-center">Resina</TabsTrigger>
            </TabsList>
            <TabsContent value="venta">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {["/images/hero-portada-marmolina.jpg","/images/encimera_Pinteres.webp","/images/meson_Pinteres.webp"].map((src, i) => (
                  <Dialog key={src+"-venta"}>
                    <DialogTrigger asChild>
                      <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                        <Image src={src} alt={`Venta e Instalación ${i+1}`} width={400} height={250} className="object-cover w-full h-32 sm:h-40 md:h-48 transition-transform hover:scale-105" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                      <Image src={src} alt={`Venta e Instalación ${i+1}`} width={800} height={500} className="object-contain w-full h-full rounded-xl" />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pulido">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {["/images/granito-tiger-skin.jpeg","/images/granito-black-impala.jpg","/images/hero-2-marmolinas.jpg"].map((src, i) => (
                  <Dialog key={src+"-pulido"}>
                    <DialogTrigger asChild>
                      <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                        <Image src={src} alt={`Pulido y Restauración ${i+1}`} width={400} height={250} className="object-cover w-full h-32 sm:h-40 md:h-48 transition-transform hover:scale-105" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                      <Image src={src} alt={`Pulido y Restauración ${i+1}`} width={800} height={500} className="object-contain w-full h-full rounded-xl" />
                    </DialogContent>
                  </Dialog>
          ))}
        </div>
            </TabsContent>
            <TabsContent value="resina">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {["/images/discos-diamantados.webp","/images/brocas-diamantadas.webp","/images/hero-portada-marmolina.jpg"].map((src, i) => (
                  <Dialog key={src+"-resina"}>
                    <DialogTrigger asChild>
                      <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
                        <Image src={src} alt={`Resina y Fibra ${i+1}`} width={400} height={250} className="object-cover w-full h-32 sm:h-40 md:h-48 transition-transform hover:scale-105" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                      <Image src={src} alt={`Resina y Fibra ${i+1}`} width={800} height={500} className="object-contain w-full h-full rounded-xl" />
                    </DialogContent>
                  </Dialog>
                ))}
          </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* BLOG SLIDE SOLO EN MÓVIL */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-8 text-center">Blog</h2>
          <div className="block md:hidden">
            <Carousel opts={{ align: 'center', loop: true }}>
              <CarouselContent>
                {blog.map((art) => (
                  <CarouselItem key={art.id} className="basis-full px-2 flex justify-center">
                    <Card className="overflow-hidden flex flex-col h-full max-h-[430px] w-full">
                      <div className="relative w-full h-64">
                        <Image src={art.imagen} alt={art.titulo} fill className="object-cover" />
                      </div>
                      <CardHeader className="flex-1 flex flex-col justify-between py-2">
                        <CardTitle className="text-marmolinas-blue text-base text-center leading-tight mb-1">{art.titulo}</CardTitle>
                        <CardDescription className="text-gray-600 text-xs text-center mb-2">{art.resumen}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button asChild className="bg-marmolinas-blue text-white w-full rounded-full text-sm py-2">
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
              <Card key={art.id} className="overflow-hidden flex flex-col h-full max-h-[430px]">
                <div className="relative w-full h-64">
                  <Image src={art.imagen} alt={art.titulo} fill className="object-cover" />
                </div>
                <CardHeader className="flex-1 flex flex-col justify-between py-2">
                  <CardTitle className="text-marmolinas-blue text-base text-center leading-tight mb-1">{art.titulo}</CardTitle>
                  <CardDescription className="text-gray-600 text-xs text-center mb-2">{art.resumen}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild className="bg-marmolinas-blue text-white w-full rounded-full text-sm py-2">
                    <Link href={`/blog/${art.slug}`}>Leer más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM SLIDE SOLO EN MÓVIL */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-8 text-center">SHOWROOMS</h2>
          <p className="text-center text-gray-600 mb-8">Encuentra tu espacio ideal</p>
          <div className="block md:hidden">
            <Carousel opts={{ align: 'center', loop: true }}>
              <CarouselContent>
                {showrooms.map((show) => (
                  <CarouselItem key={show.id} className="basis-full px-2 flex justify-center">
                    <div className="relative rounded-xl overflow-hidden shadow-lg flex flex-col justify-between min-h-[500px] w-full max-w-xs mx-auto transition-shadow duration-300 hover:shadow-[0_0_0_6px_rgba(0,77,180,0.25),0_10px_20px_rgba(0,0,0,0.10)]" style={{ aspectRatio: '3/5' }}>
                      <Image src={show.imagen} alt={show.sucursal} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute top-6 left-0 w-full px-6">
                        <h3 className="text-white text-2xl font-bold drop-shadow text-left">
                          {show.empresa} <span className="font-light">{show.sucursal}</span>
                        </h3>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full px-6 pb-6 flex flex-col items-center">
                        <div className="flex items-center mb-3">
                          <span className="text-white text-xl mr-2">📍</span>
                          <span className="text-white text-base drop-shadow">{show.direccion}</span>
                        </div>
                        <div className="flex gap-3 w-full">
                          <Button asChild className="bg-gray-300 text-gray-800 font-bold flex-1 rounded-full" size="sm">
                            <Link href={show.maps} target="_blank">Ver mapa</Link>
                          </Button>
                          <Button asChild className="bg-black text-white font-bold flex-1 rounded-full" size="sm">
                            <Link href={show.cotiza}>Cotiza</Link>
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
              <div key={show.id} className="relative rounded-xl overflow-hidden shadow-lg flex flex-col justify-between min-h-[500px] max-w-xs mx-auto transition-shadow duration-300 hover:shadow-[0_0_0_6px_rgba(0,77,180,0.25),0_10px_20px_rgba(0,0,0,0.10)]" style={{ aspectRatio: '3/5' }}>
                <Image src={show.imagen} alt={show.sucursal} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-6 left-0 w-full px-6">
                  <h3 className="text-white text-2xl font-bold drop-shadow text-left">
                    {show.empresa} <span className="font-light">{show.sucursal}</span>
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-6 pb-6 flex flex-col items-center">
                  <div className="flex items-center mb-3">
                    <span className="text-white text-xl mr-2">📍</span>
                    <span className="text-white text-base drop-shadow">{show.direccion}</span>
                  </div>
                  <div className="flex gap-3 w-full">
                    <Button asChild className="bg-gray-300 text-gray-800 font-bold flex-1 rounded-full" size="sm">
                      <Link href={show.maps} target="_blank">Ver mapa</Link>
                    </Button>
                    <Button asChild className="bg-black text-white font-bold flex-1 rounded-full" size="sm">
                      <Link href={show.cotiza}>Cotiza</Link>
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
