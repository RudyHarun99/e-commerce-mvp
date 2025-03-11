import React from 'react';
import styles from './Logo.module.scss';
import LogoImage from '@/assets/Logo.png';

export const Logo: React.FC = () => {
  return (
    <img
      src={LogoImage}
      alt="logo e-commerce"
      className={styles.logo}
    />
  );
};
