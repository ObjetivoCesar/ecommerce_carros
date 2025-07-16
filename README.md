# Documentación de la Página Principal - Marmolinas Granillos

## Estructura General

La página principal está construida con Next.js y Tailwind CSS, usando componentes reutilizables y estilos personalizados para la identidad de Marmolinas Granillos.

### Secciones principales:
- **Hero principal:** Banner con imagen de fondo, título, subtítulo y botón de llamada a la acción.
- **Quiénes Somos:** Texto descriptivo, video de YouTube y recuadro decorativo.
- **Promociones:** Carrusel responsivo de ofertas, mostrando 4 a la vez en escritorio y slide automático en móvil.
- **Nuestros Servicios:** Sección con fondo personalizado, tabs con efecto glassmorphism y galería de imágenes con lightbox.
- **Blog:** Slide/carrusel en móvil y grilla en escritorio, con tarjetas enlazadas a artículos individuales.
- **Showrooms:** Slide/carrusel en móvil y grilla en escritorio, con cards interactivas y halo azul al hacer hover.
- **Footer:** Información de contacto, enlaces rápidos (incluyendo Blog), servicios y redes sociales.

## Componentes Clave
- **HeroSection:** Banner principal reutilizable.
- **Carousel:** Carrusel responsivo para promociones, blog y showrooms.
- **Tabs, TabsList, TabsTrigger, TabsContent:** Para la sección de servicios con tabs y galería.
- **Dialog:** Para lightbox de imágenes en la galería de servicios.
- **Card:** Para tarjetas de productos, blog y showrooms.
- **Footer/Header:** Navegación y enlaces globales.

## Estilos y Responsividad
- **Tailwind CSS:** Utiliza utilidades para espaciado, colores, fuentes y responsividad.
- **Glassmorphism:** Barra de tabs con fondo semitransparente y desenfoque.
- **Colores corporativos:** Azul y amarillo de Marmolinas.
- **Responsividad:**
  - Carruseles y slides en móvil para evitar scroll vertical excesivo.
  - Grillas en escritorio para mejor aprovechamiento del espacio.
  - Imágenes y textos adaptados con clases como `h-32 sm:h-40 md:h-48`, `text-base md:text-lg`, `px-4 md:px-6`.
  - Barra de tabs scrollable solo en móvil.
  - Fix global de `overflow-x-hidden` para evitar márgenes blancos.

## Recomendaciones para Reciclar Secciones
- **HeroSection:** Puede usarse en cualquier página cambiando props de imagen, título y botón.
- **Carrusel/Carousel:** Útil para mostrar productos, testimonios, galerías, etc. Solo cambia el array de datos.
- **Tabs + Galería:** Ideal para mostrar categorías, servicios o productos agrupados.
- **Cards:** Reutilizables para cualquier listado (productos, artículos, sucursales).
- **Footer/Header:** Mantener consistencia en navegación y enlaces globales.
- **Lightbox/Dialog:** Útil para ampliar imágenes en cualquier galería.

## Buenas Prácticas
- Mantener los contenedores con `w-full` y `max-w-...` para responsividad.
- Usar `overflow-x-auto` solo en móvil donde sea necesario.
- Revisar siempre el contraste de textos sobre fondos con opacidad o imágenes.
- Probar en varios dispositivos y navegadores.

---

Esta estructura y componentes pueden ser fácilmente adaptados y reciclados en otras páginas del sitio para mantener coherencia visual y funcional. 