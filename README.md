# Ecommerce de Motos - Documentación Técnica

## Estructura del Proyecto

### Archivos Clave
- `/lib/data/products.ts` - Base de datos centralizada de productos
- `/app/productos/page.tsx` - Página principal de productos con filtros
- `/app/productos/[slug]/page.tsx` - Plantilla dinámica de producto
- `/app/blog/page.tsx` - Blog con artículos sobre motos
- `/components/` - Componentes reutilizables de la UI

## Sistema de Productos

### Estructura de Datos
Cada producto en `products.ts` sigue esta estructura:

```typescript
{
  id: string;            // Identificador único (ej: "moto-paseo-1")
  nombre: string;        // Nombre para mostrar
  imagen: string;        // Ruta a la imagen (desde /public)
  precio: number;        // Precio en USD
  descripcion: string;   // Descripción detallada
  categoria: string;     // Categoría principal
  // Campos opcionales
  formato?: string;      // Para productos con variantes
  espesor?: string;      // Si aplica
  acabado?: string;      // Si aplica
  href?: string;         // Enlace personalizado (opcional)
}
```

### Categorías Principales
1. **Paseo**: Motocicletas para uso urbano
2. **Trabajo**: Motos para carga y transporte
3. **Equipamiento**: Protección para el conductor
4. **Accesorios**: Componentes adicionales
5. **Outlet**: Ofertas especiales

### Funciones Disponibles
```typescript
// Obtener todos los productos
const productos = getAllProducts();

// Buscar por ID
const producto = getProductBySlug('moto-paseo-1');

// Filtrar por categoría
const productosCategoria = getProductsByCategory('Paseo');
```

## Convenciones

### Imágenes
- Ubicación: `/public/images/`
- Formato: `Nombre_Descriptivo.ext` (ej: `Moto_Paseo_150cc.jpg`)
- Tamaño recomendado: 800x600px

### IDs de Productos
- Formato: `tipo-numero` (ej: `moto-paseo-1`)
- Debe ser único para cada producto

## Blog
- 4 artículos sobre motos
- Diseño con fondo blanco y textos en negro
- Hero con título "Blog"
- Categorías: Consejos, Mantenimiento, Accesorios

## Componentes Principales
- **ProductCard**: Muestra la vista previa de cada producto
- **ProductGrid**: Muestra la cuadrícula de productos con filtros
- **HeroSection**: Banner principal con imagen de fondo
- **MobileCarousel**: Carrusel para dispositivos móviles

## Estilos
- **Framework**: Tailwind CSS
- **Colores Principales**:
  - Tomate: `#fa6807`
  - Gris oscuro: `#1a1a1a`
  - Fondo: `#ffffff`

## Próximas Mejoras
1. Implementar chatbot de atención al cliente
2. Añadir sistema de reseñas
3. Implementar búsqueda por texto
4. Sistema de inventario
5. Carrito de compras

## Notas de Desarrollo
- Las páginas de producto se generan automáticamente
- Las imágenes deben existir en `/public/images/`
- Los precios están en USD
- El sistema está optimizado para móviles primero

---

Esta estructura y componentes pueden ser fácilmente adaptados y reciclados en otras páginas del sitio para mantener coherencia visual y funcional. 