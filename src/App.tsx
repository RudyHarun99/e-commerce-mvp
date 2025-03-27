import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetProducts } from './hooks/useGetProducts';
import { Navbar, Footer } from './components';
import { Home, Detail } from './pages';

export const App: React.FC = () => {
  useGetProducts();

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
      <Footer />
    </>
  );
};
