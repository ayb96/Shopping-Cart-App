import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../hooks/useAppContext';

export const useProducts = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [loading, setLoading] = useState(false);

  const { products } = useAppContext();

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number, size?: number) => {
    setLoading(true);
    setCurrentPage(page);
    if (size) {
      setPageSize(size);
    }
    // Using setTimeout is To Simulate loading delay for better UX
    setTimeout(() => setLoading(false), 300);
  };

  const navigateToProduct = (productId: string) => {
    navigate(`/products/${productId}`);
  };
  return {
    products,
    displayedProducts,
    loading,
    currentPage,
    pageSize,
    handlePageChange,
    navigateToProduct,
    setCurrentPage,
    setPageSize,
  };
};
