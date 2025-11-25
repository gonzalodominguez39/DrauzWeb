# 🏡 Drauz - Inmobiliaria Demo

Demo moderna de sitio web inmobiliario construido con Next.js 15, React 19 y TypeScript, siguiendo principios de **Screaming Architecture**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Características

- 🏠 **Catálogo de Propiedades** - 12 propiedades demo con datos completos
- 🔍 **Búsqueda Avanzada** - Filtros por tipo (venta/alquiler), ubicación y características
- 📸 **Galería Interactiva** - Visualización de imágenes con thumbnails navegables
- 📋 **Páginas de Detalles** - Información completa de cada propiedad
- 📞 **Formulario de Contacto** - Sistema de consultas para propiedades
- 📱 **Responsive Design** - Optimizado para desktop, tablet y mobile
- 🎨 **UI Moderna** - Diseño dark mode con animaciones suaves

## 🏗️ Arquitectura

Este proyecto sigue **Screaming Architecture**, donde la estructura de carpetas "grita" que es una aplicación inmobiliaria:

```
src/
├── features/              # Features organizadas por dominio
│   ├── properties/        # 🏠 Dominio de Propiedades
│   ├── search/           # 🔍 Dominio de Búsqueda
│   └── landing/          # 🎯 Página Principal
├── shared/               # Componentes y utilidades compartidas
│   ├── components/       # UI reutilizables
│   └── utils/           # Funciones helper
├── config/              # Configuración de la app
└── app/                # Next.js App Router
```

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📱 Rutas Principales

- `/` - Página principal con listado de propiedades
- `/properties/[id]` - Página de detalles de propiedad
  - `/properties/1` - Villa de Lujo en La Moraleja
  - `/properties/2` - Ático con Vistas Panorámicas
  - `/properties/3` - Chalet Adosado (y más...)

## 🎯 Features por Dominio

### Properties (Propiedades)

- **PropertyCard** - Tarjeta de propiedad clickeable
- **PropertyGrid** - Grid responsive de propiedades
- **PropertyGallery** - Galería de imágenes interactiva
- **PropertyInfo** - Información completa (precio, stats, descripción)
- **PropertyFeatures** - Características y amenidades
- **PropertyBadge** - Badges de estado (NUEVA, OPORTUNIDAD, EXCLUSIVA)

### Search (Búsqueda)

- **SearchBar** - Barra de búsqueda completa
- **SearchTypeToggle** - Toggle Venta/Alquiler
- **SearchFilters** - Filtros avanzados

### Landing

- **HeroSection** - Sección hero con búsqueda integrada
- **CTASection** - Llamadas a la acción
- **LandingPage** - Orquestador principal

### Shared Components

- **Header** - Navegación sticky
- **Footer** - Pie de página con información
- **Icons** - Biblioteca de iconos SVG

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **Image Optimization**: Next.js Image
- **Routing**: Next.js Dynamic Routes

## 📦 Estructura de Datos

Las propiedades incluyen:

```typescript
interface Property {
  id: number;
  price: number;
  title: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  badge?: "NUEVA" | "OPORTUNIDAD" | "EXCLUSIVA";
  isRental?: boolean;
  // Detalles extendidos
  description?: string;
  features?: string[];
  amenities?: string[];
  gallery?: string[];
  yearBuilt?: number;
  parking?: number;
}
```

## 🎨 Personalización

### Colores

Los colores principales están en `src/config/constants.ts`:

```typescript
export const THEME_COLORS = {
  primary: '#009B77',
  primaryHover: '#00b388',
  background: '#121212',
  // ...
};
```

### Agregar Propiedades

Edita `src/features/properties/data/mockProperties.ts`:

```typescript
export const featuredProperties: Property[] = [
  {
    id: 13,
    title: "Tu Nueva Propiedad",
    // ... más campos
  }
];
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Lint
pnpm lint

# Type check
pnpm exec tsc --noEmit
```

## 🔮 Próximas Features

- [ ] Backend con base de datos real
- [ ] Sistema de autenticación
- [ ] Favoritos persistentes
- [ ] Comparador de propiedades
- [ ] Mapa interactivo con Google Maps
- [ ] Tours virtuales 360°
- [ ] Calculadora de hipoteca
- [ ] Panel de administración
- [ ] Sistema de mensajería
- [ ] Notificaciones por email

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 License

Este es un proyecto de demostración.

## 👨‍💻 Autor

Desarrollado con ❤️ como demo de arquitectura moderna con Next.js

---

**Nota**: Este es un proyecto demo con datos ficticios. Las imágenes provienen de Unsplash.
