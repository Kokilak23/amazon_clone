import { create } from 'zustand';
import { supabase } from './supabase';

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: {
    name: string;
    price: number;
    image_urls: string[];
  };
}

interface CartStore {
  items: CartItem[];
  loading: boolean;
  error: string | null;
  fetchCart: () => Promise<void>;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  loading: false,
  error: null,

  fetchCart: async () => {
    set({ loading: true, error: null });
    try {
      const { data: cartItems, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          product_id,
          quantity,
          product:products (
            name,
            price,
            image_urls
          )
        `)
        .order('created_at', { ascending: true });

      if (error) throw error;
      set({ items: cartItems as CartItem[] });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  addToCart: async (productId: string, quantity: number) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('cart_items')
        .upsert(
          { product_id: productId, quantity },
          { onConflict: 'user_id, product_id' }
        );

      if (error) throw error;
      await get().fetchCart();
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  updateQuantity: async (productId: string, quantity: number) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('product_id', productId);

      if (error) throw error;
      await get().fetchCart();
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  removeFromCart: async (productId: string) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('product_id', productId);

      if (error) throw error;
      await get().fetchCart();
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  clearCart: async () => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .neq('id', '');

      if (error) throw error;
      set({ items: [] });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));