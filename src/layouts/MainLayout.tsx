import type { ReactNode } from 'react';
import { AppHeader } from '../components/Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <AppHeader />
      <main className='p-4'>{children}</main>
    </div>
  );
};

export default MainLayout;
