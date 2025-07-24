import { Routes, Route } from 'react-router-dom';
import CartPage from '../pages/Cart/Cart';
import ProductDetail from '../pages/Products/Detail/Detail';
import Products from '../pages/Products/CardsList/CardsList';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
