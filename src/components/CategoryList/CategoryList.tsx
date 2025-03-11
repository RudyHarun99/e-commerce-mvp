import React from 'react';
import styles from './CategoryList.module.scss';
import GridImage from '@/assets/Grid.png';

export const CategoryList: React.FC = () => {
  return (
    <div className={styles.categoryList}>
      <div className={styles.grid}>
        <img
          src={GridImage}
          alt="grid category"
          className={styles.gridImage}
        />
      </div>
      <p className={styles.categoryText}>Category</p>
    </div>
  );
};
