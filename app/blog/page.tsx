"use client";

import React, { useState } from "react";

const articulos = [
  {
    titulo: "Guía para Comprar tu Primer Auto Usado",
    descripcion: "¿Pensando en comprar tu primer auto? Te guiamos en el proceso para que tomes la mejor decisión.",
    imagen: "/images/Imagenes para artículos/articulo_auto.jpg",
    slug: "guia-comprar-primer-auto-usado",
    categoria: "Consejos",
    leidos: 245,
  },
  {
    titulo: "Las Mejores Camionetas para el Trabajo y la Aventura",
    descripcion: "Descubre las camionetas más resistentes y versátiles del mercado, ideales para cualquier terreno.",
    imagen: "/images/Imagenes para artículos/articulo_camionetas.jpg",
    slug: "mejores-camionetas-trabajo-aventura",
    categoria: "Consejos",
    leidos: 189,
  },
  {
    titulo: "Jeep: El Espíritu de la Aventura Todoterreno",
    descripcion: "Explora la historia y los modelos más icónicos de Jeep, el rey del 4x4.",
    imagen: "/images/Imagenes para artículos/articulo_jeep.jpg",
    slug: "jeep-espiritu-aventura-todoterreno",
    categoria: "Consejos",
    leidos: 156,
  },
  {
    titulo: "¿Necesitas una Plataforma Elevadora? Guía de Compra",
    descripcion: "Todo lo que necesitas saber antes de comprar o alquilar una plataforma elevadora para tus proyectos.",
    imagen: "/images/Imagenes para artículos/articulo_plataformas.jpg",
    slug: "guia-compra-plataforma-elevadora",
    categoria: "Maquinaria",
    leidos: 203,
  },
  {
    titulo: "Tractores: La Herramienta Esencial para el Campo",
    descripcion: "Conoce los tipos de tractores y cómo elegir el más adecuado para tus necesidades agrícolas.",
    imagen: "/images/Imagenes para artículos/articulo_tractores.jpg",
    slug: "tractores-herramienta-esencial-campo",
    categoria: "Maquinaria",
    leidos: 120,
  },
];

const categorias = ["Todos", "Consejos", "Maquinaria"];

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
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#f9f9f9] py-16 md:py-20 mb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">Blog</h1>
          <p className="text-lg text-gray-700 max-w-2xl">Consejos, noticias y tendencias en el mundo de los vehículos</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
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
                  className={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${categoria === cat ? "bg-[#fa6807] text-white border-[#fa6807]" : "bg-white text-[#1a1a1a] border-gray-200"}`}
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
                <div key={art.slug} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
                  <img src={art.imagen} alt={art.titulo} className="rounded-t-lg h-48 w-full object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <span className="text-xs text-[#fa6807] font-semibold mb-1">{art.categoria}</span>
                    <h3 className="text-xl font-bold text-black mb-2">{art.titulo}</h3>
                    <p className="text-gray-800 mb-4 flex-1">{art.descripcion}</p>
                    <a href={`/blog/${art.slug}`} className="text-[#fa6807] font-semibold hover:underline mt-auto inline-flex items-center">
                      Leer artículo
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
        {/* Más leídos */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white rounded-lg p-5 mb-8 border border-gray-100">
            <h4 className="text-lg font-bold text-black mb-4 pb-2 border-b border-gray-200">Más leídos</h4>
            <ul className="space-y-4">
              {masLeidos.map(art => (
                <li key={art.slug} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <a href={`/blog/${art.slug}`} className="text-[#1a1a1a] hover:text-[#fa6807] font-medium transition-colors">
                    {art.titulo}
                  </a>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">{art.leidos} lecturas</span>
                    <span className="text-xs px-2 py-1 bg-[#fa6807] bg-opacity-10 text-[#fa6807] rounded-full">{art.categoria}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      </div>
    </main>
  );
}