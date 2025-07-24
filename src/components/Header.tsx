import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Typography, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

export const AppHeader: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleTabClick: MenuProps['onClick'] = (e) => {
    setCurrentTab(e.key);
    navigate(`/${e.key}`);
  };

  const navItems: MenuItem[] = [
    { label: 'Products', key: 'products' },
    { label: 'Cart', key: 'cart' },
  ].map((item) => ({
    ...item,
    style: { minWidth: 'auto' },
  }));

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if (path === 'products' || path === 'cart') {
      setCurrentTab(path);
    }
  }, [location.pathname]);

  return (
    <AntHeader
      style={{
        padding: 0,
        background: colorBgContainer,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
      }}
    >
      <Space align='center' size='middle' style={{ paddingLeft: 16 }}>
        <ShoppingCartOutlined
          style={{
            fontSize: '30px',
            color: '#1890ff',
            marginTop: '20px',
          }}
        />

        <Title
          level={4}
          style={{ margin: 0, userSelect: 'none', cursor: 'pointer' }}
          onClick={() => navigate('/products')}
        >
          Shopping Cart App
        </Title>
      </Space>

      <Menu
        items={navItems}
        mode='horizontal'
        selectedKeys={[currentTab]}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: 'flex-start',
          borderBottom: 'none',
          marginLeft: 16,
        }}
        theme='light'
        onClick={handleTabClick}
      />
    </AntHeader>
  );
};
