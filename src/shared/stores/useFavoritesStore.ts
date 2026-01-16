import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Property } from '@/features/properties/types/property';

interface FavoritesStore {
  favorites: Property[];
  addFavorite: (property: Property) => void;
  removeFavorite: (propertyId: number) => void;
  isFavorite: (propertyId: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      addFavorite: (property: Property) =>
        set((state) => {
          if (!state.favorites.find((p) => p.id === property.id)) {
            return { favorites: [...state.favorites, property] };
          }
          return state;
        }),

      removeFavorite: (propertyId: number) =>
        set((state) => ({
          favorites: state.favorites.filter((p) => p.id !== propertyId),
        })),

      isFavorite: (propertyId: number) => {
        const state = get();
        return state.favorites.some((p) => p.id === propertyId);
      },

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'favorites-store',
    }
  )
);
