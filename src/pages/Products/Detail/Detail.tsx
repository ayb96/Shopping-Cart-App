import { Card, Row, Col } from 'antd';

import { useProductDetail } from './useDetail';
import { ProductImage } from '../../../components/Detail/ProductImage';
import { ProductInfoCard } from '../../../components/Detail/ProductInfoCard';
import { ProductDetailSection } from '../../../components/Detail/ProductDetailSection';

const ProductDetail = () => {
  const { handleAddToCart, setQuantity, product, contextHolder, quantity } = useProductDetail();

  if (!product) {
    return (
      <div style={{ margin: '100px auto', textAlign: 'center', fontSize: '24px', color: '#555' }}>
        <div>Product not found</div>
      </div>
    );
  }

  return (
    <>
      {contextHolder}
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Card>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={10} xl={8}>
              <ProductImage product={product} />
            </Col>

            <Col xs={24} sm={24} md={12} lg={14} xl={16}>
              <ProductInfoCard
                product={product}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onAddToCart={handleAddToCart}
              />
            </Col>

            <Col span={24}>
              <ProductDetailSection product={product} />
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;
