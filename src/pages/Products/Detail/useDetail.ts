import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { Product } from '../../../models/Product';
import { useAppContext } from '../../../hooks/useAppContext';

export const useProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, getProductById } = useAppContext();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const foundProduct = getProductById(id || '');

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [getProductById, id]);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      inStock: product.inStock,
      quantity: quantity,
    });

    messageApi.success(`${quantity} ${product.name}(s) added to cart!`);
  };
  return { product, quantity, setQuantity, handleAddToCart, contextHolder };
};
