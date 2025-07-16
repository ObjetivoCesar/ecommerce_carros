"use client";

import React, { useState } from "react";

const articulos = [
  {
    titulo: "¿Cómo elegir el mejor granito para tu cocina?",
    descripcion: "Consejos prácticos para seleccionar el granito ideal según tu estilo y necesidades.",
    imagen: "/images/encimera_Pinteres.webp",
    slug: "granito-para-tu-cocina",
    categoria: "Granito",
    leidos: 120,
  },
  {
    titulo: "Ventajas del cuarzo premium en superficies modernas",
    descripcion: "Descubre por qué el cuarzo es tendencia en diseño de interiores y remodelaciones.",
    imagen: "/images/cocinalujo_Pinteres.webp",
    slug: "ventajas-cuarzo-premium",
    categoria: "Cuarzo",
    leidos: 95,
  },
  {
    titulo: "Fachaletas decorativas: transforma tus espacios",
    descripcion: "Ideas y tips para renovar ambientes con fachaletas de piedra natural.",
    imagen: "/images/fachaletas-de-piedra.jpeg",
    slug: "fachaletas-decorativas",
    categoria: "Decoración",
    leidos: 150,
  },
  {
    titulo: "Tendencias en baños de mármol para 2024",
    descripcion: "Explora los estilos y colores de mármol que serán tendencia en baños modernos este año.",
    imagen: "/images/lavamanos_Pinteres.webp",
    slug: "tendencias-banos-marmol-2024",
    categoria: "Mármol",
    leidos: 80,
  },
  {
    titulo: "Cómo mantener tus superficies de piedra como nuevas",
    descripcion: "Guía práctica para limpiar y proteger granito, cuarzo y mármol en el hogar.",
    imagen: "/images/hero-marmolinas.jpg",
    slug: "mantener-superficies-piedra",
    categoria: "Mantenimiento",
    leidos: 110,
  },
  {
    titulo: "Inspiración: cocinas de lujo con piedra natural",
    descripcion: "Galería de cocinas espectaculares que combinan funcionalidad y elegancia con piedra natural.",
    imagen: "/images/cocina_Pinteres.webp",
    slug: "cocinas-lujo-piedra-natural",
    categoria: "Inspiración",
    leidos: 60,
  },
  {
    titulo: "Errores comunes al instalar fachaletas y cómo evitarlos",
    descripcion: "Aprende qué no hacer al instalar fachaletas y consigue un acabado profesional.",
    imagen: "/images/imagen fija.webp",
    slug: "errores-fachaletas",
    categoria: "Decoración",
    leidos: 90,
  },
];

const categorias = ["Todos", "Granito", "Cuarzo", "Decoración"];

export default function BlogPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const articulosFiltrados = articulos.filter((art) => {
    const coincideCategoria = categoria === "Todos" || art.categoria === categoria;
    const coincideBusqueda =
      art.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      art.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const masLeidos = [...articulos].sort((a, b) => b.leidos - a.leidos).slice(0, 2);

  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Blog de Marmolinas Granillos</h1>
      <h2 className="text-xl text-gray-700 mb-8">Novedades, consejos y tendencias en mármol y granito</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Principal */}
        <section className="flex-1">
          {/* Buscador y categorías */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <div className="flex gap-2 overflow-x-auto">
              {categorias.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${categoria === cat ? "bg-blue-900 text-white border-blue-900" : "bg-white text-blue-900 border-blue-200"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* Artículos */}
          <div className="grid gap-8 md:grid-cols-2">
            {articulosFiltrados.length === 0 ? (
              <p className="text-gray-500">No se encontraron artículos.</p>
            ) : (
              articulosFiltrados.map(art => (
                <div key={art.slug} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-blue-50 flex flex-col">
                  <img src={art.imagen} alt={art.titulo} className="rounded-t-lg h-48 w-full object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <span className="text-xs text-blue-700 font-semibold mb-1">{art.categoria}</span>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{art.titulo}</h3>
                    <p className="text-gray-700 mb-4 flex-1">{art.descripcion}</p>
                    <a href={`/blog/${art.slug}`} className="text-blue-700 font-semibold hover:underline mt-auto">Leer artículo</a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
        {/* Más leídos */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-blue-50 rounded-lg p-4 mb-8">
            <h4 className="text-lg font-bold text-blue-900 mb-4">Más leídos</h4>
            <ul className="space-y-3">
              {masLeidos.map(art => (
                <li key={art.slug}>
                  <a href={`/blog/${art.slug}`} className="text-blue-700 hover:underline font-medium">
                    {art.titulo}
                  </a>
                  <span className="block text-xs text-gray-500">{art.leidos} lecturas</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
} 