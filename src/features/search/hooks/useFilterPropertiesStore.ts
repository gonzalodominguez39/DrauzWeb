import { create } from "zustand";
import { featuredProperties } from "@/properties/data/mockProperties";
import { SearchType } from "../types/search.types";
import { Property } from "@/features/properties/types/property";

export type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "area-asc"
  | "area-desc"
  | "bedrooms";

export interface QuickFilter {
  id: string;
  label: string;
  active: boolean;
}

interface FilterPropertiesState {
  properties: Property[];
  filteredProperties: Property[];
  currentType: SearchType;
  searchQuery: string;
  sortBy: SortOption;
  quickFilters: QuickFilter[];
  priceRange: { min: number; max: number } | null;
  onFilterActive: boolean;

  // Actions
  setSearchType: (type: SearchType) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: SortOption) => void;
  toggleQuickFilter: (filterId: string) => void;
  setPriceRange: (range: { min: number; max: number } | null) => void;
  reset: () => void;

  // Computed
  getStats: () => {
    total: number;
    forSale: number;
    forRent: number;
    avgPrice: number;
  };
}

const defaultQuickFilters: QuickFilter[] = [
  { id: "1-bed", label: "1 habitación", active: false },
  { id: "2-bed", label: "2+ habitaciones", active: false },
  { id: "3-bed", label: "3+ habitaciones", active: false },
  { id: "parking", label: "Con cochera", active: false },
  { id: "new", label: "Nuevas", active: false },
  { id: "opportunity", label: "Oportunidad", active: false },
];

const isFilterActive = (
  query: string,
  quickFilters: QuickFilter[],
  priceRange: { min: number; max: number } | null,
  sortBy: SortOption
) =>
  !!query ||
  !!priceRange ||
  sortBy !== "default" ||
  quickFilters.some((f) => f.active);

const applyFilters = (
  properties: Property[],
  type: SearchType,
  query: string,
  quickFilters: QuickFilter[],
  priceRange: { min: number; max: number } | null,
  sortBy: SortOption
): Property[] => {
  let filtered = properties.filter((p) => {
    const matchesType = type === "venta" ? p.forSale : !p.forSale;

    const matchesQuery =
      !query ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.title.toLowerCase().includes(query.toLowerCase());

    if (!matchesType || !matchesQuery) return false;

    for (const filter of quickFilters.filter((f) => f.active)) {
      switch (filter.id) {
        case "1-bed":
          if (p.bedrooms !== 1) return false;
          break;
        case "2-bed":
          if (p.bedrooms < 2) return false;
          break;
        case "3-bed":
          if (p.bedrooms < 3) return false;
          break;
        case "parking":
          if (!p.parking || p.parking < 1) return false;
          break;
        case "new":
          if (p.badge !== "NUEVA") return false;
          break;
        case "opportunity":
          if (p.badge !== "OPORTUNIDAD") return false;
          break;
      }
    }

    if (priceRange) {
      if (p.price < priceRange.min || p.price > priceRange.max) return false;
    }

    return true;
  });

  switch (sortBy) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "area-asc":
      filtered.sort((a, b) => a.area - b.area);
      break;
    case "area-desc":
      filtered.sort((a, b) => b.area - a.area);
      break;
    case "bedrooms":
      filtered.sort((a, b) => b.bedrooms - a.bedrooms);
      break;
  }

  return filtered;
};

export const useFilterPropertiesStore = create<FilterPropertiesState>(
  (set, get) => ({
    properties: featuredProperties,
    filteredProperties: featuredProperties.filter((p) => p.forSale),
    currentType: "venta",
    searchQuery: "",
    sortBy: "default",
    quickFilters: defaultQuickFilters.map((f) => ({ ...f })),
    priceRange: null,
    onFilterActive: false,

    setSearchType: (type) =>
      set((state) => {
        const filtered = applyFilters(
          state.properties,
          type,
          state.searchQuery,
          state.quickFilters,
          state.priceRange,
          state.sortBy
        );

        return {
          currentType: type,
          filteredProperties: filtered,
          onFilterActive: isFilterActive(
            state.searchQuery,
            state.quickFilters,
            state.priceRange,
            state.sortBy
          ),
        };
      }),

    setSearchQuery: (query) =>
      set((state) => {
        const filtered = applyFilters(
          state.properties,
          state.currentType,
          query,
          state.quickFilters,
          state.priceRange,
          state.sortBy
        );

        return {
          searchQuery: query,
          filteredProperties: filtered,
          onFilterActive: isFilterActive(
            query,
            state.quickFilters,
            state.priceRange,
            state.sortBy
          ),
        };
      }),

    setSortBy: (sort) =>
      set((state) => {
        const filtered = applyFilters(
          state.properties,
          state.currentType,
          state.searchQuery,
          state.quickFilters,
          state.priceRange,
          sort
        );

        return {
          sortBy: sort,
          filteredProperties: filtered,
          onFilterActive: isFilterActive(
            state.searchQuery,
            state.quickFilters,
            state.priceRange,
            sort
          ),
        };
      }),

    toggleQuickFilter: (filterId) =>
      set((state) => {
        const newFilters = state.quickFilters.map((f) =>
          f.id === filterId ? { ...f, active: !f.active } : f
        );

        return {
          quickFilters: newFilters,
          filteredProperties: applyFilters(
            state.properties,
            state.currentType,
            state.searchQuery,
            newFilters,
            state.priceRange,
            state.sortBy
          ),
          onFilterActive: isFilterActive(
            state.searchQuery,
            newFilters,
            state.priceRange,
            state.sortBy
          ),
        };
      }),

    setPriceRange: (range) =>
      set((state) => {
        const filtered = applyFilters(
          state.properties,
          state.currentType,
          state.searchQuery,
          state.quickFilters,
          range,
          state.sortBy
        );

        return {
          priceRange: range,
          filteredProperties: filtered,
          onFilterActive: isFilterActive(
            state.searchQuery,
            state.quickFilters,
            range,
            state.sortBy
          ),
        };
      }),

    reset: () =>
      set((state) => ({
        currentType: "venta",
        searchQuery: "",
        sortBy: "default",
        quickFilters: defaultQuickFilters.map((f) => ({
          ...f,
          active: false,
        })),
        priceRange: null,
        filteredProperties: state.properties.filter((p) => p.forSale),
        onFilterActive: false,
      })),

    getStats: () => {
      const state = get();
      const forSale = state.properties.filter((p) => p.forSale).length;
      const forRent = state.properties.filter((p) => !p.forSale).length;
      const avgPrice =
        state.filteredProperties.length > 0
          ? state.filteredProperties.reduce((acc, p) => acc + p.price, 0) /
            state.filteredProperties.length
          : 0;

      return {
        total: state.properties.length,
        forSale,
        forRent,
        avgPrice,
      };
    },
  })
);
