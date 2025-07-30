import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  imagen: string;
  titulo: React.ReactNode;
  subtitulo?: React.ReactNode;
  botonTexto?: string;
  botonHref?: string;
  botonColorClass?: string;
  overlayClassName?: string;
  heightClassName?: string;
  children?: React.ReactNode;
  className?: string;
}

export function HeroSection({
  imagen,
  titulo,
  subtitulo,
  botonTexto,
  botonHref,
  botonColorClass = 'bg-[#fa6807] hover:bg-[#fa6807]/90',
  overlayClassName = 'bg-gradient-to-r from-black/70 via-black/40 to-transparent',
  heightClassName = 'min-h-screen',
  children,
  className,
}: HeroSectionProps) {
  return (
    <section 
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        heightClassName,
        className
      )}
    >
      <div className="absolute inset-0">
        <Image 
          src={imagen} 
          alt={typeof titulo === 'string' ? titulo : 'Hero'} 
          fill 
          className="object-cover" 
          priority 
          quality={100}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      
      <div className="relative z-10 text-left text-white px-4 max-w-6xl w-full mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            {titulo}
          </h1>
          
          {subtitulo && (
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium leading-relaxed drop-shadow-lg">
              {subtitulo}
            </p>
          )}
          
          {botonTexto && botonHref && (
            <Button 
              asChild 
              size="lg" 
              className={`${botonColorClass} font-semibold text-lg px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105`}
            >
              <Link href={botonHref}>
                {botonTexto}
              </Link>
            </Button>
          )}
        </div>
        
        {children}
      </div>
    </section>
  );
}