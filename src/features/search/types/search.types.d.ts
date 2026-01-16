export type SearchType = 'venta' | 'alquiler';

export interface SearchFilters {
  type: SearchType;
  query: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minArea?: number;
  maxArea?: number;
}
