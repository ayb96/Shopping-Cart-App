import { Table, InputNumber, Typography, Space, Button, Grid } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import type { CartItem } from '../../models/CartItem';

const { useBreakpoint } = Grid;

interface CartTableProps {
  cartItems: CartItem[];
  onQuantityChange: (id: string, value: number | null) => void;
  onRemoveItem: (id: string) => void;
}

export const CartTable = ({ cartItems, onQuantityChange, onRemoveItem }: CartTableProps) => {
  const screens = useBreakpoint();

  const getColumns = () => {
    if (screens.xs) {
      return [
        {
          title: 'Product',
          dataIndex: 'name',
          key: 'name',
          render: (text: string, record: CartItem) => (
            <Space direction='vertical' size={8}>
              <img
                alt={text}
                src={record.image}
                style={{ width: 80, height: 80, objectFit: 'cover' }}
              />
              <Typography.Text strong>{text}</Typography.Text>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography.Text>${record.price.toFixed(2)}</Typography.Text>
                <InputNumber
                  max={10}
                  min={1}
                  size='small'
                  value={record.quantity}
                  onChange={(value) => onQuantityChange(record.id, value)}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography.Text strong>
                  Total: ${(record.price * record.quantity).toFixed(2)}
                </Typography.Text>
                <Button
                  danger
                  icon={<DeleteOutlined />}
                  size='small'
                  onClick={() => onRemoveItem(record.id)}
                />
              </div>
            </Space>
          ),
        },
      ];
    }

    return [
      {
        title: 'Product',
        dataIndex: 'name',
        key: 'name',
        render: (text: string, record: CartItem) => (
          <Space>
            <img
              alt={text}
              src={record.image}
              style={{ width: 60, height: 60, objectFit: 'cover' }}
            />
            <Typography.Text strong>{text}</Typography.Text>
          </Space>
        ),
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (price: number) => `$${price.toFixed(2)}`,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (quantity: number, record: CartItem) => (
          <InputNumber
            max={10}
            min={1}
            value={quantity}
            onChange={(value) => onQuantityChange(record.id, value)}
          />
        ),
      },
      {
        title: 'Total',
        key: 'total',
        render: (_: string, record: CartItem) => (
          <Typography.Text strong>${(record.price * record.quantity).toFixed(2)}</Typography.Text>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (_: string, record: CartItem) => (
          <Button danger icon={<DeleteOutlined />} onClick={() => onRemoveItem(record.id)} />
        ),
      },
    ];
  };

  return (
    <Table
      bordered={false}
      columns={getColumns()}
      dataSource={cartItems}
      pagination={false}
      rowKey='id'
      showHeader={!screens.xs}
      style={{ marginBottom: screens.xs ? 16 : 0 }}
    />
  );
};
