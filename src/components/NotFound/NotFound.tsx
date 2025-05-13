import React from 'react';
import styles from './NotFound.module.scss';
import { SectionRelated } from '@/components';
import NotFoundProduct from '@/assets/NotFoundProduct.png';

type NotFoundProps = {
  searchQuery: string;
};

export const NotFound: React.FC<NotFoundProps> = ({
  searchQuery,
}) => {
  return (
    <>
      <p className={styles.textProduct}>No results found for "{searchQuery}"</p>
      <div className={styles.productNotFound}>
        <div className={styles.notFound}>
          <img
            src={NotFoundProduct} // or your actual path
            alt="Product Not Found"
            className={styles.notFoundImage}
          />
          <p className={styles.notFoundText}>
            Product Not Found
          </p>
          <p className={styles.notFoundSub}>
            Change Your Keywords
          </p>
        </div>
      </div>
      <hr className={styles.divider} />
      <SectionRelated />
    </>
  );
};
