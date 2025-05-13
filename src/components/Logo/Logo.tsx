import React from 'react';
import styles from './Logo.module.scss';
import LogoImage from '@/assets/Logo.png';
import { Link } from 'react-router-dom';

type LogoProps = {
  handleClick: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  handleClick,
}) => {
  return (
    <Link to='/' onClick={handleClick}>
      <img
        src={LogoImage}
        alt="logo e-commerce"
        className={styles.logo}
      />
    </Link>
  );
};
