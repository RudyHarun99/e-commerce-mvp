import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetProducts } from './hooks';
import { Navbar, Footer } from './components';
import { Home, Detail } from './pages';

export const App: React.FC = () => {
  useGetProducts();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route
          path='/'
          element={<Home searchQuery={searchQuery} />}
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
