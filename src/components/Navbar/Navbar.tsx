import React from 'react';
import styles from './Navbar.module.scss';
import {
  Logo,
  CategoryList,
  Searchbar,
  Button,
} from '@/components';
import CartImage from '@/assets/shopping-cart.png';

type NavbarProps = {
  searchQueryByTitle: string;
  handleClick: () => void;
  setSearchQueryByTitle: (query: string) => void;
  setSearchQueryByCategory: (query: string) => void;
};

export const Navbar: React.FC<NavbarProps> = ({
  searchQueryByTitle,
  handleClick,
  setSearchQueryByTitle,
  setSearchQueryByCategory,
}) => {
  const buttonLogin = () => {
    console.log('Login');
  };

  const buttonRegister = () => {
    console.log('Register');
  };

  return (
    <div className={styles.navbarContainer}>
      <Logo
        handleClick={handleClick}
      />
      <CategoryList
        setSearchQueryByCategory={setSearchQueryByCategory}
      />
      <Searchbar
        value={searchQueryByTitle}
        placeholder='Search'
        onChange={setSearchQueryByTitle}
      />
      <img
        src={CartImage}
        alt="cart image"
        className={styles.imageCart}
      />
      <Button
        variant='large'
        type='secondary'
        onClick={buttonLogin}
      >
        Login
      </Button>
      <Button
        variant='large'
        type='primary'
        onClick={buttonRegister}
      >
        Register
      </Button>
    </div>
  );
};
