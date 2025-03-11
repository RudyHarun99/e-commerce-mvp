import React from 'react';
import styles from './Navbar.module.scss';
import { Logo } from '@/components/Logo';
import { CategoryList } from '@/components/CategoryList';
import { Searchbar } from '@/components/Searchbar';
import { Button } from '@/components/Button';
import CartImage from '@/assets/shopping-cart.png';

export const Navbar: React.FC = () => {
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
      <Button />
      <Button />
    </div>
  );
};
