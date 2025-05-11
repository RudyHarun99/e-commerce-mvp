import React from 'react';
import styles from './Navbar.module.scss';
import {
  Logo,
  CategoryList,
  Searchbar,
  Button,
} from '@/components';
import CartImage from '@/assets/shopping-cart.png';

export const Navbar: React.FC = () => {
  const buttonLogin = () => {
    console.log('Login');
  };

  const buttonRegister = () => {
    console.log('Register');
  };

  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <CategoryList />
      <Searchbar />
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
