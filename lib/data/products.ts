export interface Producto {
  id: string;
  nombre: string;
  imagen: string;
  precio: number;
  descripcion: string;
  categoria: string;
  formato?: string;
  espesor?: string;
  acabado?: string;
  href?: string;
}

export const productos: { [key: string]: Producto } = {
  // Autos
  "auto-1": {
    id: "auto-1",
    nombre: "Auto Deportivo",
    imagen: "/images/autos/carros_en_fila.jpg",
    precio: 25000,
    descripcion: "Auto deportivo de alta gama, con un diseño aerodinámico y un motor potente.",
    categoria: "Autos"
  },
  "auto-2": {
    id: "auto-2",
    nombre: "Auto Familiar",
    imagen: "/images/autos/carros_en_fila1.jpg",
    precio: 20000,
    descripcion: "Amplio y cómodo auto familiar, ideal para viajes largos y la ciudad.",
    categoria: "Autos"
  },
  "auto-3": {
    id: "auto-3",
    nombre: "Auto Compacto",
    imagen: "/images/autos/carros_en_fila2.jpg",
    precio: 15000,
    descripcion: "Auto compacto y eficiente, perfecto para la ciudad y fácil de estacionar.",
    categoria: "Autos"
  },
  "auto-4": {
    id: "auto-4",
    nombre: "Auto de Lujo",
    imagen: "/images/autos/carros_en_fila3.jpg",
    precio: 50000,
    descripcion: "Lujo y confort en un solo vehículo, con la última tecnología y acabados de primera.",
    categoria: "Autos"
  },

  // Camionetas
  "camioneta-1": {
    id: "camioneta-1",
    nombre: "Camioneta 4x4",
    imagen: "/images/camionetas/camionetas_fila.jpg",
    precio: 35000,
    descripcion: "Camioneta 4x4 todo terreno, lista para la aventura y el trabajo duro.",
    categoria: "Camionetas"
  },
  "camioneta-2": {
    id: "camioneta-2",
    nombre: "Camioneta de Lujo",
    imagen: "/images/camionetas/camionetas_fila1.jpg",
    precio: 55000,
    descripcion: "Lujo y potencia en una camioneta, con todas las comodidades y un diseño imponente.",
    categoria: "Camionetas"
  },
  "camioneta-3": {
    id: "camioneta-3",
    nombre: "SUV Familiar",
    imagen: "/images/camionetas/suv_fila.jpg",
    precio: 45000,
    descripcion: "SUV familiar con gran espacio interior y la última tecnología en seguridad.",
    categoria: "Camionetas"
  },
  "camioneta-4": {
    id: "camioneta-4",
    nombre: "SUV de Lujo",
    imagen: "/images/camionetas/suv_fila1.jpg",
    precio: 65000,
    descripcion: "El máximo lujo y confort en una SUV, con un diseño elegante y un rendimiento excepcional.",
    categoria: "Camionetas"
  },

  // Camiones
  "camion-1": {
    id: "camion-1",
    nombre: "Camión de Carga",
    imagen: "/images/camiones/camiones.jpg",
    precio: 75000,
    descripcion: "Camión de carga pesada, ideal para transportar grandes volúmenes de mercancía.",
    categoria: "Camiones"
  },
  "camion-2": {
    id: "camion-2",
    nombre: "Camión Mediano",
    imagen: "/images/camiones/camiones2.jpg",
    precio: 60000,
    descripcion: "Camión de carga mediana, versátil y eficiente para todo tipo de trabajo.",
    categoria: "Camiones"
  },
  "camion-3": {
    id: "camion-3",
    nombre: "Camión Ligero",
    imagen: "/images/camiones/camiones3.jpg",
    precio: 45000,
    descripcion: "Camión de carga ligera, perfecto para reparto en la ciudad y distancias cortas.",
    categoria: "Camiones"
  },
  "camion-4": {
    id: "camion-4",
    nombre: "Camión Pesado",
    imagen: "/images/camiones/camiones4.jpg",
    precio: 90000,
    descripcion: "La máxima potencia y capacidad de carga en un camión, diseñado para los trabajos más exigentes.",
    categoria: "Camiones"
  },

  // Maquinaria Pesada
  "maquinaria-1": {
    id: "maquinaria-1",
    nombre: "Tractor Agrícola",
    imagen: "/images/maquinaria pesada/maquinaria_pesada_tractor.jpg",
    precio: 120000,
    descripcion: "Tractor agrícola de alta potencia, ideal para todo tipo de trabajos en el campo.",
    categoria: "Maquinaria"
  },
  "maquinaria-2": {
    id: "maquinaria-2",
    nombre: "Excavadora",
    imagen: "/images/maquinaria pesada/maquinaria_pesada.jpg",
    precio: 250000,
    descripcion: "Excavadora de gran capacidad, perfecta para construcción y movimiento de tierras.",
    categoria: "Maquinaria"
  },
  "maquinaria-3": {
    id: "maquinaria-3",
    nombre: "Cargadora Frontal",
    imagen: "/images/maquinaria pesada/maquinaria_pesada1.jpg",
    precio: 180000,
    descripcion: "Cargadora frontal de gran capacidad, ideal para cargar y transportar materiales.",
    categoria: "Maquinaria"
  },
  "maquinaria-4": {
    id: "maquinaria-4",
    nombre: "Retroexcavadora",
    imagen: "/images/maquinaria pesada/maquinaria_pesada2.jpg",
    precio: 150000,
    descripcion: "Retroexcavadora versátil y eficiente, perfecta para todo tipo de trabajos de excavación.",
    categoria: "Maquinaria"
  },

  // Otros
  "otros-1": {
    id: "otros-1",
    nombre: "Plataforma Elevadora",
    imagen: "/images/maquinaria pesada/maquinaria_pesada3.jpg",
    precio: 80000,
    descripcion: "Plataforma elevadora para trabajos en altura, segura y fácil de operar.",
    categoria: "Otros"
  }
};

export const getAllProducts = (): Producto[] => {
  return Object.values(productos);
};

export const getProductBySlug = (slug: string): Producto | undefined => {
  return productos[slug];
};

export const getProductsByCategory = (category: string): Producto[] => {
  return Object.values(productos).filter(producto => producto.categoria === category);
};
