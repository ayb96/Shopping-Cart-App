import MainLayout from './layouts/MainLayout';
import AppRoutes from './router';

const App = () => {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
};

export default App;
