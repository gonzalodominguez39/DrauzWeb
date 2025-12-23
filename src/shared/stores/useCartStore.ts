import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Property } from "@/features/properties/types/property.types";

interface CartState {
  items: Property[];
  addItem: (property: Property) => void;
  removeItem: (propertyId: number) => void;
  clearCart: () => void;
  isInCart: (propertyId: number) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (property) => {
        const { items } = get();
        if (!items.find((item) => item.id === property.id)) {
          set({ items: [...items, property] });
        }
      },
      removeItem: (propertyId) => {
        const { items } = get();
        set({ items: items.filter((item) => item.id !== propertyId) });
      },
      clearCart: () => set({ items: [] }),
      isInCart: (propertyId) => {
        const { items } = get();
        return !!items.find((item) => item.id === propertyId);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
