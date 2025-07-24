import { Card, Col, Pagination, Row, Image, Spin } from 'antd';
import { useProducts } from './useCardsList';

const { Meta: AntMeta } = Card;

const Products = () => {
  const {
    displayedProducts,
    products,
    loading,
    currentPage,
    pageSize,
    handlePageChange,
    navigateToProduct,
  } = useProducts();

  return (
    <>
      <div style={{ padding: '24px' }}>
        <Spin spinning={loading}>
          <Row gutter={[16, 16]}>
            {displayedProducts.map((product) => (
              <Col
                key={product.id}
                lg={6}
                md={8}
                sm={12}
                xl={4}
                xs={24}
                onClick={() => navigateToProduct(product.id)}
              >
                <Card
                  hoverable
                  cover={
                    <Image
                      alt={product.name}
                      height={160}
                      preview={false}
                      src={product.image}
                      style={{ objectFit: 'cover' }}
                    />
                  }
                >
                  <AntMeta
                    description={
                      <>
                        <div>${product.price.toFixed(2)}</div>
                        <div>
                          {product?.rating} ★ ({product?.reviewCount} reviews)
                        </div>
                      </>
                    }
                    title={product.name}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <Pagination
              responsive
              showSizeChanger
              current={currentPage}
              pageSize={pageSize}
              pageSizeOptions={['12', '24', '48']}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              total={products.length}
              onChange={handlePageChange}
              onShowSizeChange={handlePageChange}
            />
          </div>
        </Spin>
      </div>
    </>
  );
};

export default Products;
