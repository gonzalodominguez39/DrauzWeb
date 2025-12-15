import { create } from "zustand";
import { featuredProperties } from "@/properties/data/mockProperties";
import { SearchType } from "../types/search.types";
import { Property } from "@/properties/types/property.types";

interface FilterPropertiesState {
  properties: Property[];
  filteredProperties: Property[];
  currentType: SearchType;
  searchQuery: string;
  setSearchType: (type: SearchType) => void;
  setSearchQuery: (query: string) => void;
  reset: () => void;
}

export const useFilterPropertiesStore = create<FilterPropertiesState>(
  (set) => ({
    properties: featuredProperties,
    filteredProperties: featuredProperties.filter((p) => p.forSale),
    currentType: "venta",
    searchQuery: "",

    setSearchType: (type) =>
      set((state) => {
        const filtered = state.properties.filter((p) => {
          const matchesType = type === "venta" ? p.forSale : !p.forSale;
          const matchesQuery =
            !state.searchQuery ||
            p.location
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            p.title.toLowerCase().includes(state.searchQuery.toLowerCase());
          return matchesType && matchesQuery;
        });
        return { currentType: type, filteredProperties: filtered };
      }),

    setSearchQuery: (query) =>
      set((state) => {
        const filtered = state.properties.filter((p) => {
          const matchesType =
            state.currentType === "venta" ? p.forSale : !p.forSale;
          const matchesQuery =
            !query ||
            p.location.toLowerCase().includes(query.toLowerCase()) ||
            p.title.toLowerCase().includes(query.toLowerCase());
          return matchesType && matchesQuery;
        });
        return { searchQuery: query, filteredProperties: filtered };
      }),

    reset: () =>
      set((state) => ({
        currentType: "venta",
        searchQuery: "",
        filteredProperties: state.properties.filter((p) => p.forSale),
      })),
  })
);
