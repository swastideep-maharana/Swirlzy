import { create } from 'zustand'

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  removeItemOne: (productId: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleCart: () => void;
  setOpen: (open: boolean) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  addItem: (product) => set((state) => {
    const existing = state.items.find((item) => item.id === product.id);
    if (existing) {
      return {
        items: state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isOpen: true // Auto-open cart for feedback
      };
    }
    return { 
      items: [...state.items, { ...product, quantity: 1 }],
      isOpen: true
    };
  }),
  removeItemOne: (id) => set((state) => {
    const existing = state.items.find((item) => item.id === id);
    if (existing && existing.quantity > 1) {
       return {
         items: state.items.map((item) => 
           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
         )
       };
    }
    return {
      items: state.items.filter((item) => item.id !== id)
    };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  clearCart: () => set({ items: [] }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (open) => set({ isOpen: open }),
}))
