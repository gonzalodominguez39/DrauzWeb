export interface Property {
  id: number;
  price: number;
  title: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  badge?: PropertyBadge;
  isRental?: boolean;
  // Campos extendidos para página de detalles
  description?: string;
  features?: string[];
  amenities?: string[];
  gallery?: string[];
  yearBuilt?: number;
  parking?: number;
}

export type PropertyBadge = "NUEVA" | "OPORTUNIDAD" | "EXCLUSIVA" | "VENDIDA";

export interface PropertyStats {
  bedrooms: number;
  bathrooms: number;
  area: number;
}
