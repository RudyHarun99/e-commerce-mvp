import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

export const App: React.FC = () => {
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
