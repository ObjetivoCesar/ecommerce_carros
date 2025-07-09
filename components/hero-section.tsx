import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import React from 'react';

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
}

export function HeroSection({
  imagen,
  titulo,
  subtitulo,
  botonTexto,
  botonHref,
  botonColorClass = 'bg-marmolinas-yellow text-marmolinas-blue hover:bg-marmolinas-yellow/90',
  overlayClassName = 'bg-black/40',
  heightClassName = 'h-[60vh] min-h-[400px] max-h-[600px]',
  children,
}: HeroSectionProps) {
  return (
    <section className={`relative w-full ${heightClassName} flex items-center justify-center overflow-hidden`}>
      <Image src={imagen} alt={typeof titulo === 'string' ? titulo : 'Hero'} fill className="object-cover" priority />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow">{titulo}</h1>
        {subtitulo && <p className="text-xl md:text-2xl mb-8 font-semibold drop-shadow">{subtitulo}</p>}
        {botonTexto && botonHref && (
          <Button asChild size="lg" className={`${botonColorClass} font-semibold text-lg px-8 py-3`}>
            <Link href={botonHref}>{botonTexto}</Link>
          </Button>
        )}
        {children}
      </div>
    </section>
  );
} 