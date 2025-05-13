import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetProducts } from './hooks';
import { Navbar, Footer } from './components';
import { Home, Detail } from './pages';

export const App: React.FC = () => {
  useGetProducts();
  const [searchQueryByTitle, setSearchQueryByTitle] = useState('');
  const [searchQueryByCategory, setSearchQueryByCategory] = useState('');

  const handleClick = () => {
    setSearchQueryByTitle('');
    setSearchQueryByCategory('');
  };

  return (
    <>
      <Navbar
        searchQueryByTitle={searchQueryByTitle}
        setSearchQueryByTitle={setSearchQueryByTitle}
        setSearchQueryByCategory={setSearchQueryByCategory}
        handleClick={handleClick}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              searchQueryByTitle={searchQueryByTitle}
              searchQueryByCategory={searchQueryByCategory}
            />
          }
        />
        <Route
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
      <Footer handleClick={handleClick} />
    </>
  );
};
