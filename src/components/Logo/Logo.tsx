import React from 'react';
import styles from './Logo.module.scss';
import LogoImage from '@/assets/Logo.png';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <img
        src={LogoImage}
        alt="logo e-commerce"
        className={styles.logo}
      />
    </Link>
  );
};
