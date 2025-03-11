import React from 'react';
import styles from './Banner.module.scss';
import BannerImage from '@/assets/Banner.png';

export const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <img src={BannerImage} alt="banner image" />
    </div>
  );
};
