import React from 'react';
import styles from './Home.module.scss';
import { Banner, SectionProduct } from '@/components';

export const Home: React.FC = () => {
  return (
    <div className={styles.content}>
      <Banner />
      <SectionProduct />
    </div>
  );
};
