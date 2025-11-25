import { Property } from '../types/property.types';

export const featuredProperties: Property[] = [
  // Propiedades destacadas de lujo
  {
    id: 1,
    price: 1250000,
    title: "Villa de Lujo en La Moraleja",
    location: "La Moraleja, Madrid",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    bedrooms: 4,
    bathrooms: 5,
    area: 450,
    badge: "NUEVA",
    description: "Espectacular villa de lujo en la exclusiva urbanización de La Moraleja. Esta impresionante propiedad combina elegancia y modernidad en un entorno privilegiado. Con acabados de primera calidad, amplios espacios y un diseño arquitectónico excepcional, esta villa ofrece el máximo confort para familias exigentes. El jardín privado y la piscina crean un oasis de tranquilidad en el corazón de Madrid.",
    yearBuilt: 2022,
    parking: 3,
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop"
    ],
    features: [
      "Cocina de diseño completamente equipada",
      "Suite principal con vestidor y baño en suite",
      "Domótica integral en toda la vivienda",
      "Sistema de climatización por zonas",
      "Ventanas de doble acristalamiento",
      "Suelos de mármol en zonas nobles"
    ],
    amenities: [
      "Piscina privada",
      "Jardín privado 300m²",
      "Gimnasio",
      "Bodega climatizada",
      "Garaje para 3 vehículos",
      "Zona de barbacoa",
      "Sistema de seguridad 24h",
      "Trastero"
    ]
  },
  {
    id: 2,
    price: 780000,
    title: "Ático con Vistas Panorámicas",
    location: "Distrito de Salamanca, Madrid",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    badge: "OPORTUNIDAD",
    description: "Magnífico ático en el corazón del Distrito de Salamanca, una de las zonas más prestigiosas de Madrid. Esta propiedad destaca por sus impresionantes vistas panorámicas de la ciudad y su terraza privada de 60m². Interiores luminosos y elegantes, con una distribución funcional que maximiza el espacio. Recientemente renovado con materiales de alta calidad. Ideal para quienes buscan exclusividad en una ubicación privilegiada.",
    yearBuilt: 2018,
    parking: 2,
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600563438938-a650a5f2f4ea?w=1200&h=800&fit=crop"
    ],
    features: [
      "Terraza privada de 60m²",
      "Cocina americana totalmente equipada",
      "Baños con hidromasaje",
      "Aire acondicionado centralizado",
      "Calefacción por suelo radiante",
      "Armarios empotrados en todas las habitaciones"
    ],
    amenities: [
      "Vistas panorámicas 360°",
      "Portero físico 24h",
      "Ascensor directo a vivienda",
      "Plaza de garaje doble",
      "Trastero incluido",
      "Edificio con gimnasio",
      "Piscina comunitaria",
      "Zona ajardinada"
    ]
  },
  {
    id: 3,
    price: 2500,
    title: "Chalet Adosado en Zona Residencial",
    location: "Pozuelo de Alarcón, Madrid",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    isRental: true,
    description: "Encantador chalet adosado en una tranquila zona residencial de Pozuelo de Alarcón. Perfecta para familias que buscan calidad de vida en un entorno seguro y verde. La propiedad cuenta con jardín privado, garaje y amplios espacios interiores distribuidos en dos plantas más sótano. Cocina completamente equipada y salón con chimenea. A pocos minutos de colegios internacionales, centros comerciales y excelentes conexiones de transporte.",
    yearBuilt: 2015,
    parking: 2,
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&h=800&fit=crop"
    ],
    features: [
      "Chimenea en salón principal",
      "Cocina office con acceso a jardín",
      "Dormitorio principal en suite",
      "Sótano diáfano multiusos",
      "Preinstalación de aire acondicionado",
      "Ventanas con aislamiento térmico"
    ],
    amenities: [
      "Jardín privado 80m²",
      "Garaje para 2 coches",
      "Piscina comunitaria",
      "Zona infantil",
      "Pista de pádel",
      "Zona verde comunitaria",
      "Seguridad 24h",
      "Cerca de colegios"
    ]
  },
  {
    id: 4,
    price: 950000,
    title: "Piso Reformado en Chamberí",
    location: "Chamberí, Madrid",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    badge: "EXCLUSIVA"
  },
  {
    id: 5,
    price: 3200,
    title: "Apartamento Moderno en Malasaña",
    location: "Malasaña, Madrid",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    isRental: true
  },
  {
    id: 6,
    price: 1850000,
    title: "Mansión con Piscina y Jardín",
    location: "Somosaguas, Madrid",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    bedrooms: 5,
    bathrooms: 6,
    area: 650,
    badge: "NUEVA"
  },
  {
    id: 7,
    price: 1500,
    title: "Estudio Luminoso con Terraza",
    location: "Lavapiés, Madrid",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    isRental: true
  },
  {
    id: 8,
    price: 625000,
    title: "Piso en Retiro con Balcón",
    location: "Retiro, Madrid",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    badge: "OPORTUNIDAD"
  },
  {
    id: 9,
    price: 4500,
    title: "Ático Dúplex con Solarium",
    location: "Chamartín, Madrid",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    isRental: true,
    badge: "EXCLUSIVA"
  },
  {
    id: 10,
    price: 890000,
    title: "Casa Unifamiliar con Garaje",
    location: "Las Rozas, Madrid",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
  },
  {
    id: 11,
    price: 2100,
    title: "Piso Moderno en Arganzuela",
    location: "Arganzuela, Madrid",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    isRental: true
  },
  {
    id: 12,
    price: 1350000,
    title: "Chalet Independiente con Piscina",
    location: "Boadilla del Monte, Madrid",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    bedrooms: 5,
    bathrooms: 4,
    area: 380,
    badge: "NUEVA"
  }
];

// Todas las propiedades disponibles (puedes agregar más para otras páginas/filtros)
export const allProperties: Property[] = [...featuredProperties];
