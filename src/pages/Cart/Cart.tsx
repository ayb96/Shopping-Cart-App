import { Card, Button, Typography, Badge, Grid } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from './useCart';
import { CartTable } from '../../components/Cart/CartTable';
import { OrderSummary } from '../../components/Cart/OrderSummary';

const { useBreakpoint } = Grid;

const CartPage = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const {
    cartItems,
    loading,
    subtotal,
    tax,
    total,
    itemCount,
    contextHolder,
    handleQuantityChange,
    handleRemoveItem,
    handleCheckout,
  } = useCart();

  return (
    <>
      {contextHolder}
      <div
        style={{
          padding: screens.xs ? '12px' : '24px',
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Button
          icon={<ArrowLeftOutlined />}
          style={{ marginBottom: 16 }}
          type='text'
          onClick={() => navigate('/products')}
        >
          {screens.xs ? 'Back' : 'Continue Shopping'}
        </Button>

        <Typography.Title
          level={2}
          style={{
            marginBottom: 24,
            fontSize: screens.xs ? '20px' : '24px',
          }}
        >
          <Badge count={itemCount} offset={[10, 0]} size='small'>
            <ShoppingCartOutlined style={{ marginRight: 8 }} />
            {screens.xs ? 'Cart' : 'Your Shopping Cart'}
          </Badge>
        </Typography.Title>

        {cartItems.length === 0 ? (
          <Card>
            <Typography.Text>Your cart is empty!</Typography.Text>
            <Button
              style={{ marginTop: 16, marginLeft: 16 }}
              type='primary'
              onClick={() => navigate('/products')}
            >
              Browse Products
            </Button>
          </Card>
        ) : (
          <div style={{ display: 'flex', flexDirection: screens.xs ? 'column' : 'row', gap: 24 }}>
            <Card style={{ flex: 1 }}>
              <CartTable
                cartItems={cartItems}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            </Card>

            <OrderSummary
              itemCount={itemCount}
              subtotal={subtotal}
              tax={tax}
              total={total}
              loading={loading}
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
