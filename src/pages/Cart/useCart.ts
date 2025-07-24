import { useState } from 'react';
import { message } from 'antd';
import { useAppContext } from '../../hooks/useAppContext';

export const useCart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice,
    getProductById,
  } = useAppContext();

  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const subtotal = totalPrice;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleQuantityChange = (id: string, value: number | null) => {
    if (value === null || value < 1) return;
    updateQuantity(id, value);
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    messageApi.success('Item removed from cart');
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      messageApi.success('Order placed successfully!');
      clearCart();
    } finally {
      setLoading(false);
    }
  };

  const cartItemsWithDetails = cartItems
    .map((item) => {
      const product = getProductById(item.productId);
      return {
        ...item,
        product,
        price: product?.price || 0,
        name: product?.name || 'Unknown Product',
        image: product?.image || '',
      };
    })
    .filter((item) => item.product);

  return {
    cartItems: cartItemsWithDetails,
    loading,
    subtotal,
    tax,
    total,
    itemCount,
    contextHolder,
    handleQuantityChange,
    handleRemoveItem,
    handleCheckout,
  };
};
