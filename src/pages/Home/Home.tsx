import React from 'react';
import styles from './Home.module.scss';
import { SectionProduct } from '@/components';

type HomeProps = {
  searchQueryByTitle: string;
  searchQueryByCategory: string;
};

export const Home: React.FC<HomeProps> = ({
  searchQueryByTitle,
  searchQueryByCategory,
}) => {
  return (
    <div className={styles.content}>
      <SectionProduct
        searchQueryByTitle={searchQueryByTitle}
        searchQueryByCategory={searchQueryByCategory}
      />
    </div>
  );
};
