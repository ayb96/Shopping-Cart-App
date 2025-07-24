import { Card, Button, Typography, Grid } from 'antd';
import { useNavigate } from 'react-router-dom';

const { useBreakpoint } = Grid;

const Home = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: screens.xs ? '12px' : '24px',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 24,
      }}
    >
      <Typography.Title level={2} style={{ fontSize: screens.xs ? '20px' : '24px' }}>
        Welcome to Our Store
      </Typography.Title>

      <Card style={{ width: '100%', maxWidth: '500px' }}>
        <Typography.Text>Explore our amazing collection of products</Typography.Text>

        <Button
          type='primary'
          style={{ marginTop: 16, marginLeft: 16 }}
          onClick={() => navigate('/products')}
        >
          Browse Products
        </Button>
      </Card>
    </div>
  );
};

export default Home;
