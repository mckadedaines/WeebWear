import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          const updatedItems = items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set((state) => ({
            items: updatedItems,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...product, quantity: 1 }],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },

      removeItem: (productId) => {
        const items = get().items;
        const item = items.find((item) => item.id === productId);

        if (!item) return;

        const updatedItems = items.filter((item) => item.id !== productId);
        set((state) => ({
          items: updatedItems,
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price * item.quantity,
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return;

        const items = get().items;
        const item = items.find((item) => item.id === productId);

        if (!item) return;

        const quantityDiff = quantity - item.quantity;
        const updatedItems = items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        );

        set((state) => ({
          items: updatedItems,
          totalItems: state.totalItems + quantityDiff,
          totalPrice: state.totalPrice + item.price * quantityDiff,
        }));
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
