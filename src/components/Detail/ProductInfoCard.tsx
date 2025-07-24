import { Card, Space, Tag, Divider, Button, InputNumber, Rate } from 'antd';
import type { Product } from '../../models/Product';

interface ProductInfoCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (value: number) => void;
  onAddToCart: () => void;
}

export const ProductInfoCard = ({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
}: ProductInfoCardProps) => (
  <Card>
    <Space direction='vertical' size='middle' style={{ width: '100%' }}>
      <h1 style={{ marginBottom: 0 }}>{product.name}</h1>

      <Space>
        <Rate disabled defaultValue={product.rating} />
        <span>({product.reviewCount} reviews)</span>
      </Space>

      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>${product.price.toFixed(2)}</div>

      <Tag color={product.inStock ? 'green' : 'red'}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </Tag>

      <Divider style={{ margin: '16px 0' }} />

      <Space align='center' size='middle'>
        <span>Quantity:</span>
        <InputNumber
          max={product.inStock ? 10 : 0}
          min={1}
          value={quantity}
          onChange={(value) => onQuantityChange(value || 1)}
          style={{ width: '80px' }}
        />
      </Space>

      <Button disabled={!product.inStock} size='large' type='primary' onClick={onAddToCart} block>
        Add to Cart
      </Button>
    </Space>
  </Card>
);
