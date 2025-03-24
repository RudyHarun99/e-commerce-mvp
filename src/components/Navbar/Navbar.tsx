import React from 'react';
import styles from './Navbar.module.scss';
import { Logo } from '@/components/Logo';
import { CategoryList } from '@/components/CategoryList';
import { Searchbar } from '@/components/Searchbar';
import { Button } from '@/components/Button';
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
        type='secondary'
        onClick={buttonLogin}
      >
        Login
      </Button>
      <Button
        type='primary'
        onClick={buttonRegister}
      >
        Register
      </Button>
    </div>
  );
};
