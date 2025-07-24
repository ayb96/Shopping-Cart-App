import { createContext } from 'react';
import type { Product } from '../models/Product';
import type { CartItem } from '../models/CartItem';

interface AppContextType {
  products: Product[];
  getProductById: (id: string) => Product | undefined;
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
