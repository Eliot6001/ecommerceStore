import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";
import { toast } from "react-hot-toast";

export interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

// JSONStrong + Persist in order to keep it
// in Local Storage
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);
        if (existingItems) {
          return toast("Item Already in cart!");
        }
        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast("Item removed from cart");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
     storage: typeof window !== "undefined"
    ? createJSONStorage(() => localStorage)
    : undefined,// (optional) by default, 'localStorage' is used
    }
  )
);

export default useCart;
