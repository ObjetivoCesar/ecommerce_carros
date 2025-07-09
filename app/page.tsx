'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Star, Phone, MapPin, Mail } from 'lucide-react';
import { HeroSection } from '@/components/hero-section';

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
];

// Ambientes/productos destacados
const ambientes = [
  { id: 1, titulo: 'Cocinas de Granito', imagen: '/images/hero-portada-marmolina.jpg', href: '/productos/granito-tiger-skin' },
  { id: 2, titulo: 'Baños Modernos', imagen: '/images/granito-vayolet.webp', href: '/productos/granito-vayolet' },
  { id: 3, titulo: 'Fachaletas Decorativas', imagen: '/images/fachaletas-de-piedra.jpeg', href: '/productos/fachaletas-piedra' },
];

// Catálogos
const catalogos = [
  { id: 1, titulo: 'Catálogo General', imagen: '/images/hero-2-marmolinas.jpg', disponible: false },
  { id: 2, titulo: 'Catálogo de Fachaletas', imagen: '/images/fachaletas-de-piedra.jpeg', disponible: false },
  { id: 3, titulo: 'Catálogo de Cuarzos', imagen: '/images/granito-vayolet.webp', disponible: false },
];

// Experiencias/proyectos
const experiencias = [
  { id: 1, imagen: '/images/granito-black-impala.jpg', titulo: 'Cocina Black Impala' },
  { id: 2, titulo: 'Barra Tiger Skin', imagen: '/images/granito-tiger-skin.jpeg' },
  { id: 3, titulo: 'Baño Vayolet', imagen: '/images/granito-vayolet.webp' },
];

// Blog
const blog = [
  { id: 1, titulo: 'Cómo elegir el mejor granito', resumen: 'Consejos para seleccionar el granito ideal para tu proyecto.', imagen: '/images/granito-tiger-skin.jpeg' },
  { id: 2, titulo: 'Tendencias en cocinas modernas', resumen: 'Descubre los estilos más actuales en cocinas.', imagen: '/images/hero-portada-marmolina.jpg' },
  { id: 3, titulo: 'Ventajas del cuarzo', resumen: 'Por qué el cuarzo es una excelente opción.', imagen: '/images/granito-vayolet.webp' },
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

  return (
    <div className="min-h-screen w-full bg-white">
      {/* HERO SLIDER con imágenes Pinteres */}
      <HeroSection
        imagen={heroPinteres[heroIndex]}
        titulo={heroSlides[0].titulo}
        subtitulo={heroSlides[0].subtitulo}
        botonTexto={heroSlides[0].cta}
        botonHref={heroSlides[0].href}
      />
      {/* PARALLAX/IMAGEN FIJA */}
      <section className="relative w-full h-[40vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/imagen fija.webp')" }} />

      {/* QUIÉNES SOMOS Y PROMOCIONES */}
      <section className="w-full py-20 bg-[#f7f7f7]">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center items-start md:items-start">
            <h2 className="text-5xl md:text-6xl font-bold text-marmolinas-blue mb-6 leading-tight">QUIÉNES<br/>SOMOS</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">Marmolinas Granillos es una empresa familiar con legado y visión, especializada en la venta e instalación de granito, cuarzo y mármol. Brindamos productos de primera categoría a precios competitivos, cumpliendo siempre las expectativas de nuestros clientes.<br/><br/>Somos importadores y distribuidores directos de piedra natural y decorativa en Ecuador.</p>
            <Button asChild className="bg-marmolinas-yellow text-marmolinas-blue font-bold px-8 py-3 rounded-full text-base shadow-lg">
              <Link href="/servicios">Ver más</Link>
            </Button>
          </div>
          {/* Imágenes */}
          <div className="flex-1 flex justify-center items-center relative min-h-[350px]">
            <div className="relative w-[340px] h-[340px] rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/hero-portada-marmolina.jpg" alt="Ambiente Marmolinas" fill className="object-cover" />
            </div>
            <div className="absolute left-[-40px] bottom-[-40px] w-[180px] h-[140px] rounded-xl overflow-hidden shadow-lg border-4 border-white hidden md:block">
              <Image src="/images/fachaletas-de-piedra.jpeg" alt="Ambiente Decorativo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* PROMOCIONES */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {promociones.map((promo) => (
            <Card key={promo.id} className="overflow-hidden">
              <div className="relative w-full h-40">
                <Image src={promo.imagen} alt={promo.titulo} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-marmolinas-blue text-lg text-center">{promo.titulo}</CardTitle>
                <CardDescription className="text-gray-600 text-sm text-center">{promo.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-marmolinas-blue text-white w-full rounded-full">
                  <Link href={promo.href}>Ver Oferta</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CARDS DE AMBIENTES/PRODUCTOS DESTACADOS */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {ambientes.map((amb) => (
            <Card key={amb.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-64">
                <Image src={amb.imagen} alt={amb.titulo} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-marmolinas-blue text-xl">{amb.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-marmolinas-yellow text-marmolinas-blue w-full font-bold">
                  <Link href={amb.href}>Ver más</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CATÁLOGOS */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-8 text-center">Catálogos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogos.map((cat) => (
              <Card key={cat.id} className="overflow-hidden flex flex-col items-center">
                <div className="relative w-full h-48">
                  <Image src={cat.imagen} alt={cat.titulo} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-marmolinas-blue text-lg text-center">{cat.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="w-full flex justify-center">
                  <Button disabled={!cat.disponible} className="bg-marmolinas-yellow text-marmolinas-blue font-bold px-6 py-2">
                    {cat.disponible ? 'Descargar' : 'Próximamente'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS/PROYECTOS */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-8 text-center">Experiencias</h2>
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {experiencias.map((exp, idx) => (
                <CarouselItem key={exp.id} className="basis-1/1 md:basis-1/2 lg:basis-1/3 px-2">
                  <Card className="overflow-hidden">
                    <div className="relative w-full h-64">
                      <Image src={exp.imagen} alt={exp.titulo} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-marmolinas-blue text-lg">{exp.titulo}</CardTitle>
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

      {/* VIDEO INFORMATIVO */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue text-center mb-8 max-w-2xl mx-auto">
            ¿Por qué contratar una empresa con experiencia es el mejor paso para vivir en un hogar sin problemas toda la vida?
          </h2>
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
            <iframe
              src="https://www.youtube.com/embed/iobKB3_st6g"
              title="Por qué Marmolinas Granillos"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-8 text-center">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blog.slice(0, 3).map((art) => (
              <Card key={art.id} className="overflow-hidden h-80 flex flex-col">
                <div className="relative w-full h-48">
                  <Image src={art.imagen} alt={art.titulo} fill className="object-cover" />
                </div>
                <CardHeader className="flex-1 flex flex-col justify-between">
                  <CardTitle className="text-marmolinas-blue text-lg text-center">{art.titulo}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm text-center">{art.resumen}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-marmolinas-blue text-white w-full rounded-full">
                    <Link href="#">Leer más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOMS */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-marmolinas-blue mb-8 text-center">SHOWROOMS</h2>
          <p className="text-center text-gray-600 mb-8">Encuentra tu espacio ideal</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showrooms.map((show) => (
              <div key={show.id} className="relative rounded-xl overflow-hidden shadow-lg flex flex-col justify-between min-h-[500px] max-w-xs mx-auto" style={{ aspectRatio: '3/5' }}>
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
