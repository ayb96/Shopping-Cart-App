import { useState, type ReactNode } from 'react';
import type { Product } from '../models/Product';
import type { CartItem } from '../models/CartItem';
import { generateFakeProducts } from '../utils/fakeData';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(() => generateFakeProducts());

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getProductById = (id: string) => {
    return products.find((p) => p.id === id);
  };

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.productId === item.productId);

      if (existingItem) {
        return prevItems.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i,
        );
      }

      return [
        ...prevItems,
        {
          ...item,
          id: Math.random().toString(36).substring(2, 9),
          quantity: item.quantity || 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const clearCart = () => setCartItems([]);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <AppContext.Provider
      value={{
        products,
        getProductById,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
