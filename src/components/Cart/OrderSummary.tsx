import { Card, Typography, Space, Divider, Button, Grid } from 'antd';
import { useNavigate } from 'react-router-dom';

const { useBreakpoint } = Grid;

interface OrderSummaryProps {
  itemCount: number;
  subtotal: number;
  tax: number;
  total: number;
  loading: boolean;
  onCheckout: () => void;
}

export const OrderSummary = ({
  itemCount,
  subtotal,
  tax,
  total,
  loading,
  onCheckout,
}: OrderSummaryProps) => {
  const screens = useBreakpoint();
  const navigate = useNavigate();

  return (
    <Card style={{ width: screens.xs ? '100%' : 350 }}>
      <Typography.Title level={5} style={{ marginBottom: 16 }}>
        Order Summary
      </Typography.Title>
      <Space direction='vertical' style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography.Text>Subtotal ({itemCount} items)</Typography.Text>
          <Typography.Text>${subtotal.toFixed(2)}</Typography.Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography.Text>Tax (10%)</Typography.Text>
          <Typography.Text>${tax.toFixed(2)}</Typography.Text>
        </div>
        <Divider style={{ margin: '12px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography.Text strong>Total</Typography.Text>
          <Typography.Text strong>${total.toFixed(2)}</Typography.Text>
        </div>
      </Space>

      <Button
        block
        loading={loading}
        size='large'
        style={{ marginTop: 24 }}
        type='primary'
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>

      {screens.xs && (
        <Button
          block
          size='large'
          style={{ marginTop: 16 }}
          type='default'
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </Button>
      )}
    </Card>
  );
};
