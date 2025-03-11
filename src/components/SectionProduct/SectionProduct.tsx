import React from 'react';
import styles from './SectionProduct.module.scss';
import { useGetProducts } from '@/hooks/useGetProducts';

export const SectionProduct: React.FC = () => {
  const { results, isFetching } = useGetProducts();

  return (
    <div className={styles.sectionProduct}>
      <p className={styles.textProduct}>Featured Product</p>
      {
        isFetching ?
        <h1>Fetching data...</h1> :
        <pre>{JSON.stringify(results, null, 4)}</pre>
      }
    </div>
  );
};
