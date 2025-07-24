import { Divider, Row, Col } from 'antd';
import type { Product } from '../../models/Product';

interface ProductDetailSectionProps {
  product: Product;
}

export const ProductDetailSection = ({ product }: ProductDetailSectionProps) => (
  <>
    <Divider orientation='left' style={{ fontSize: '18px', marginTop: '32px' }}>
      Product Information
    </Divider>

    <div
      style={{
        background: '#fff',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#1890ff', marginBottom: '12px' }}>About This Product</h3>
        <p
          style={{
            lineHeight: '1.6',
            fontSize: '15px',
            color: '#333',
          }}
        >
          {product.description}
        </p>
      </div>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24} sm={12} md={8}>
          <DetailCard title='Category' value={product.category} />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <DetailCard title='Brand' value={product.brand} />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <DetailCard
            title='SKU'
            value={product.sku}
            valueStyle={{ fontFamily: 'monospace', color: '#1890ff' }}
          />
        </Col>
      </Row>
    </div>
  </>
);

interface DetailCardProps {
  title: string;
  value: string;
  valueStyle?: React.CSSProperties;
}

const DetailCard = ({ title, value, valueStyle = {} }: DetailCardProps) => (
  <div
    style={{
      padding: '12px',
      borderLeft: '3px solid #1890ff',
      background: '#f9f9f9',
    }}
  >
    <div style={{ fontWeight: 600, color: '#666' }}>{title}</div>
    <div style={{ fontSize: '16px', ...valueStyle }}>{value}</div>
  </div>
);
