# UsadosLoja.com - Adaptación del E-commerce

## Resumen de Cambios Realizados

Este repositorio ha sido adaptado desde un e-commerce de granito y cuarzo para convertirse en un sitio web para **UsadosLoja.com**, un concesionario de motocicletas en Loja, Ecuador.

## Cambios Principales

### 1. Navegación y Estructura
- **Header actualizado**: Cambio del nombre de la empresa a "UsadosLoja.com"
- **Menú de navegación modificado**:
  - "Productos" → "Patio de Motos"
  - Servicios actualizados: Mantenimiento, Financiamiento, Trámites
- **Colores del tema**: Actualización de la paleta de colores para UsadosLoja.com

### 2. Páginas de Servicios Creadas
Se crearon tres nuevas páginas de servicios específicas para el negocio de motocicletas:

#### `/app/servicios/mantenimiento/page.tsx`
- Página dedicada al servicio de mantenimiento de motocicletas
- Información sobre servicios técnicos especializados
- Promociones y paquetes de mantenimiento

#### `/app/servicios/financiamiento/page.tsx`
- Página con información sobre opciones de financiamiento
- Planes de crédito y condiciones
- Formularios de solicitud

#### `/app/servicios/tramites/page.tsx`
- Página para gestión de trámites vehiculares
- Información sobre matriculación y transferencias
- Documentación requerida

### 3. Contenido Actualizado

#### Página Principal (`/app/page.tsx`)
- **Título principal**: "Las Mejores Motocicletas en Loja"
- **Subtítulo**: "Tu concesionario de confianza en UsadosLoja.com"
- **Sección "Quiénes Somos"**: Adaptada para UsadosLoja.com con información sobre:
  - 15 años de experiencia en el sector motociclístico
  - Especialización en venta de motocicletas nuevas y usadas
  - Servicios de mantenimiento, financiamiento y trámites
  - Distribuidores autorizados de las mejores marcas

#### Promociones Actualizadas
- **Motos Deportivas en Oferta**: 15% de descuento
- **Financiamiento 0% Interés**: Por 12 meses
- **Mantenimiento Gratuito**: Primer mantenimiento gratis
- **Motos de Trabajo**: Ideales para trabajo y transporte
- **Trámites Incluidos**: Sin costo adicional
- **Motos Usadas Certificadas**: Con garantía y revisión técnica

#### Servicios con Tabs Actualizados
- **Mantenimiento**: Servicio técnico especializado
- **Financiamiento**: Planes flexibles de crédito
- **Trámites**: Gestión completa de documentación

#### Información de Sucursales
- **Sucursal Centro**: Av. Universitaria y Lourdes, Loja
- **Sucursal Norte**: Av. Emiliano Ortega y 8 de Diciembre, Loja
- **Taller de Servicio**: Sector La Tebaida, Loja

### 4. Artículos de Blog Transaccionales

Se crearon tres artículos optimizados para SEO con palabras clave transaccionales:

#### `donde-comprar-vehiculo-garantia-loja.mdx`
- **Título**: "¿Dónde comprar un vehículo con garantía en Loja?"
- **Enfoque**: Posicionamiento de UsadosLoja.com como la mejor opción
- **Contenido**: Garantía integral, servicio postventa, financiamiento, etc.

#### `mejores-vehículos-trabajo-ecuador-2024.mdx`
- **Título**: "Mejores Vehículos para Trabajo en Ecuador 2024"
- **Enfoque**: Motocicletas ideales para trabajo y delivery
- **Contenido**: Análisis de modelos, características, recomendaciones

#### `financiamiento-motocicletas-guia-completa.mdx`
- **Título**: "Financiamiento de Motocicletas: Guía Completa 2024"
- **Enfoque**: Opciones de crédito y financiamiento
- **Contenido**: Tipos de financiamiento, requisitos, tasas, consejos

### 5. Imágenes y Assets Visuales

#### Imágenes Principales Actualizadas
- **Hero Slider**: 6 imágenes de motocicletas y servicios
- **Imagen Parallax**: Motocicleta deportiva de fondo fijo
- **Servicios**: Imágenes específicas para cada servicio
- **Promociones**: Imágenes de motocicletas y servicios

#### Nuevas Imágenes Agregadas
- `logo-racing-vehículos.jpg`: Logo de la empresa
- `moto-deportiva.jpg`: Motocicleta deportiva principal
- `vehículos-trabajo.jpg`: Motocicletas para trabajo
- `mantenimiento-hero.jpg`: Imagen de servicios de mantenimiento
- `financiamiento-hero.jpg`: Imagen de financiamiento
- `tramites-hero.jpg`: Imagen de trámites
- `garantia-vehículos.jpg`: Imagen de garantías
- Y más imágenes específicas para cada sección

### 6. Configuración de Colores (Tailwind)

#### Nuevos Colores de Marca
```javascript
'racing-blue': '#1e40af',    // Azul principal
'racing-yellow': '#fbbf24',  // Amarillo de acento
'racing-red': '#dc2626',     // Rojo para destacados
'racing-gray': '#6b7280',    // Gris para textos secundarios
```

## Estructura de Archivos Modificados

```
ecommerce_Granito/
├── app/
│   ├── page.tsx                           # Página principal actualizada
│   ├── servicios/
│   │   ├── page.tsx                       # Página de servicios actualizada
│   │   ├── mantenimiento/page.tsx         # Nueva página
│   │   ├── financiamiento/page.tsx        # Nueva página
│   │   └── tramites/page.tsx              # Nueva página
├── blog-marmolinas/pages/
│   ├── donde-comprar-vehiculo-garantia-loja.mdx    # Nuevo artículo
│   ├── mejores-vehículos-trabajo-ecuador-2024.mdx      # Nuevo artículo
│   └── financiamiento-motocicletas-guia-completa.mdx # Nuevo artículo
├── components/
│   └── header.tsx                         # Navegación actualizada
├── public/images/                         # Nuevas imágenes de motocicletas
├── tailwind.config.ts                     # Colores actualizados
└── RACING_MOTOS_README.md                 # Esta documentación
```

## Instalación y Ejecución

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
cd ecommerce_Granito
npm install --legacy-peer-deps
```

### Desarrollo
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Construcción para Producción
```bash
npm run build
npm start
```

## Características del Sitio

### Responsive Design
- Totalmente responsive para móviles y desktop
- Navegación adaptativa
- Imágenes optimizadas

### SEO Optimizado
- Meta tags actualizados
- Artículos de blog con palabras clave transaccionales
- Estructura semántica HTML

### Funcionalidades
- Slider automático en hero
- Tabs interactivos para servicios
- Carrusel de promociones
- Galería de imágenes con modal
- Formularios de contacto

### Performance
- Imágenes optimizadas con Next.js Image
- Lazy loading automático
- CSS optimizado con Tailwind

## Próximos Pasos Recomendados

1. **Contenido Adicional**:
   - Agregar más modelos de motocicletas
   - Crear página de inventario completo
   - Añadir testimonios de clientes

2. **Funcionalidades**:
   - Sistema de cotización en línea
   - Chat en vivo
   - Sistema de citas para mantenimiento

3. **SEO**:
   - Optimizar más páginas para palabras clave locales
   - Implementar schema markup
   - Crear más contenido de blog

4. **Integración**:
   - Sistema de gestión de inventario
   - Integración con CRM
   - Pasarela de pagos

## Contacto y Soporte

Para cualquier consulta sobre la implementación o modificaciones adicionales, contactar al desarrollador.

---

**UsadosLoja.com** - Tu concesionario de confianza en Loja, Ecuador.

