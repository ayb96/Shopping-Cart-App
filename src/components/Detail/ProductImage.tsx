import { Image } from 'antd';
import type { Product } from '../../models/Product';

interface ProductImageProps {
  product: Product;
}

export const ProductImage = ({ product }: ProductImageProps) => (
  <Image
    alt={product.name}
    src={product.image}
    style={{
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px',
    }}
    preview={false}
  />
);
