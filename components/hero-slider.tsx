'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeroSliderProps {
  slides: {
    image: string;
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
    buttonText?: string;
    buttonHref?: string;
    buttonVariant?: 'default' | 'outline' | 'ghost' | 'link';
  }[];
  interval?: number;
  overlayClassName?: string;
  heightClassName?: string;
  className?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  fade?: boolean;
}

export function HeroSlider({
  slides,
  interval = 6000,
  overlayClassName = 'bg-gradient-to-r from-black/70 via-black/40 to-transparent',
  heightClassName = 'min-h-screen',
  className,
  showIndicators = true,
  showArrows = true,
  autoPlay = true,
  fade = true,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Efecto para el autoplay
  useEffect(() => {
    if (!autoPlay || isHovered) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, autoPlay, isHovered]);

  // Función para ir a una diapositiva específica
  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Resetear la animación después de la transición
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Navegación
  const goToNext = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const goToPrev = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Manejar teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const current = slides[currentSlide];

  return (
    <section 
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        heightClassName,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
    >
      {/* Imagen de fondo con transición */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={cn(
              'absolute inset-0 w-full h-full transition-opacity duration-1000',
              index === currentSlide ? 'opacity-100' : 'opacity-0',
              fade && 'transition-opacity duration-1000 ease-in-out'
            )}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt={typeof slide.title === 'string' ? slide.title : 'Hero Slide'}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
              quality={100}
              sizes="100vw"
            />
            <div className={`absolute inset-0 ${overlayClassName}`} />
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-left text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            {current.title}
          </h1>
          
          {current.subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium leading-relaxed drop-shadow-lg">
              {current.subtitle}
            </p>
          )}
          
          {current.buttonText && current.buttonHref && (
            <Button 
              asChild 
              size="lg" 
              variant={current.buttonVariant || 'default'}
              className={cn(
                'font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105',
                current.buttonVariant === 'outline' 
                  ? 'border-white text-white hover:bg-white/10' 
                  : 'bg-[#fa6807] hover:bg-[#fa6807]/90 text-white'
              )}
            >
              <Link href={current.buttonHref}>
                {current.buttonText}
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Flechas de navegación */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-200"
            aria-label="Diapositiva anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              goToNext();
            }}
            className="absolute right-4 md:right-8 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-200"
            aria-label="Siguiente diapositiva"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                index === currentSlide 
                  ? 'bg-white scale-125 w-8' 
                  : 'bg-white/50 hover:bg-white/75 w-3'
              )}
              aria-label={`Ir a la diapositiva ${index + 1}`}
              aria-current={index === currentSlide ? 'step' : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
