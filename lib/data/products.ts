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
  // Motos de Paseo
  "moto-paseo-1": {
    id: "moto-paseo-1",
    nombre: "Moto Paseo 150cc",
    imagen: "/images/Moto_Paseo_150cc.jpg",
    precio: 2800,
    descripcion: "Moto de paseo 150cc, perfecta para la ciudad. Bajo consumo, fácil maniobrabilidad y diseño moderno.",
    categoria: "Paseo"
  },
  "moto-paseo-2": {
    id: "moto-paseo-2",
    nombre: "Moto Paseo 180cc",
    imagen: "/images/Moto_Paseo_180cc.jpg",
    precio: 3500,
    descripcion: "Moto de paseo deportiva 180cc, diseño aerodinámico y gran potencia. Ideal para viajes urbanos y carretera.",
    categoria: "Paseo"
  },
  "moto-paseo-3": {
    id: "moto-paseo-3",
    nombre: "Moto Paseo 200cc",
    imagen: "/images/Moto_Paseo_180cc.jpg", // Usando la misma imagen por ahora
    precio: 3800,
    descripcion: "Moto de paseo 200cc con inyección electrónica. Mayor potencia y eficiencia en combustible.",
    categoria: "Paseo"
  },
  "moto-paseo-4": {
    id: "moto-paseo-4",
    nombre: "Moto Paseo 125cc",
    imagen: "/images/Moto_Paseo_150cc.JPG",
    precio: 2800,
    descripcion: "Práctica moto de paseo 125cc, económica y fácil de maniobrar. Perfecta para desplazamientos diarios.",
    categoria: "Paseo"
  },

  // Motos de Trabajo
  "moto-trabajo-1": {
    id: "moto-trabajo-1",
    nombre: "Moto Trabajo 125cc",
    imagen: "/images/Moto_Trabajo_125cc.jpg",
    precio: 2200,
    descripcion: "Moto de trabajo 125cc, resistente y económica. Ideal para reparto y transporte ligero.",
    categoria: "Trabajo"
  },
  "moto-trabajo-2": {
    id: "moto-trabajo-2",
    nombre: "Moto Taxi 150cc",
    imagen: "/images/motodetrabajotaxi1.jpg",
    precio: 3200,
    descripcion: "Moto taxi 150cc con estructura reforzada y mayor capacidad de carga. Perfecta para transporte público.",
    categoria: "Trabajo"
  },
  "moto-trabajo-3": {
    id: "moto-trabajo-3",
    nombre: "Moto Cargo 200cc",
    imagen: "/images/motodetrabajotaxi2.jpg",
    precio: 3400,
    descripcion: "Moto de carga 200cc con parrilla trasera reforzada. Ideal para reparto de mercancías.",
    categoria: "Trabajo"
  },
  "moto-trabajo-4": {
    id: "moto-trabajo-4",
    nombre: "Moto Trabajo 110cc",
    imagen: "/images/motodetrabajo3.jpg",
    precio: 2000,
    descripcion: "Moto de trabajo 110cc, económica y de bajo mantenimiento. Perfecta para uso comercial.",
    categoria: "Trabajo"
  },

  // EQUIPAMIENTO PILOTO
  "equipamiento-1": {
    id: "equipamiento-1",
    nombre: "Kit Equipamiento Completo",
    imagen: "/images/Kit_Equipamiento_Completo.PNG",
    precio: 250,
    descripcion: "Kit completo de equipamiento para motociclista que incluye casco, guantes y chaqueta con protecciones.",
    categoria: "Equipamiento"
  },
  "equipamiento-2": {
    id: "equipamiento-2",
    nombre: "Chaqueta Motociclista con Protección",
    imagen: "/images/Chaqueta_Motociclista.jpg",
    precio: 120,
    descripcion: "Chaqueta protectora con protecciones en hombros, codos y espalda. Material resistente al agua y al viento.",
    categoria: "Equipamiento"
  },
  "equipamiento-3": {
    id: "equipamiento-3",
    nombre: "Casco Integral Deportivo",
    imagen: "/images/Casco.jpg",
    precio: 150,
    descripcion: "Casco integral deportivo con certificación de seguridad. Excelente aerodinámica y ventilación ajustable.",
    categoria: "Equipamiento"
  },
  "equipamiento-4": {
    id: "equipamiento-4",
    nombre: "Guantes Profesionales",
    imagen: "/images/Guantes-Profesionales.jpg",
    precio: 45,
    descripcion: "Guantes profesionales para motociclista con protección en nudillos y palma. Excelente agarre y comodidad.",
    categoria: "Equipamiento"
  },

  // ACCESORIOS PARA MOTO
  "maleta-1": {
    id: "maleta-1",
    nombre: "Maleta Trasera 40L",
    imagen: "/images/Maleta_Trasera_40L.jpg",
    precio: 65,
    descripcion: "Maleta impermeable para moto con capacidad de 40 litros. Fácil de instalar y muy resistente.",
    categoria: "Accesorios"
  },
  "soporte-1": {
    id: "soporte-1",
    nombre: "Soporte para Celular",
    imagen: "/images/Soporte_para_Celular.jpg",
    precio: 25,
    descripcion: "Soporte universal para celular con agarre resistente. Fácil instalación en el manubrio.",
    categoria: "Accesorios"
  },
  "alarma-1": {
    id: "alarma-1",
    nombre: "Alarma con Inmovilizador",
    imagen: "/images/Alarma.jpg",
    precio: 85,
    descripcion: "Sistema de alarma con control remoto e inmovilizador eléctrico. Protección total para tu moto.",
    categoria: "Accesorios"
  },

  // OUTLET / OFERTAS
  "outlet-1": {
    id: "outlet-1",
    nombre: "Moto Paseo 150cc (Outlet)",
    imagen: "/images/Moto_Paseo_150cc_Outlet.jpg",
    precio: 2700,
    descripcion: "Moto de paseo 150cc en oferta. Ligeros detalles estéticos, completamente funcional. ¡Oferta por tiempo limitado!",
    categoria: "Outlet"
  },
  "outlet-2": {
    id: "outlet-2",
    nombre: "Kit Equipamiento Completo",
    imagen: "/images/Kit_Equipamiento_Completo.jpg",
    precio: 250,
    descripcion: "Kit completo con casco, chaqueta y guantes. ¡Precio especial por lote! Ahorra 20%.",
    categoria: "Outlet"
  },
  "outlet-3": {
    id: "outlet-3",
    nombre: "Moto Trabajo 125cc (Exhibición)",
    imagen: "/images/Moto_Trabajo_125cc_Exhibicion.jpg",
    precio: 2300,
    descripcion: "Moto de trabajo 125cc de exposición. Kilometraje mínimo. ¡Gran oportunidad!",
    categoria: "Outlet"
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
