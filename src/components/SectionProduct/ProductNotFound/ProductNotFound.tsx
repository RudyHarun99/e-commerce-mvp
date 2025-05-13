import React from 'react';
import styles from './ProductNotFound.module.scss';
import { SectionRelated } from '@/components';
import NotFoundImage from '@/assets/NotFoundProduct.png';

type ProductNotFoundProps = {
  searchQuery: string;
};

export const ProductNotFound: React.FC<ProductNotFoundProps> = ({
  searchQuery,
}) => {
  return (
    <div className={styles.sectionProduct}>
      <p className={styles.textProduct}>No results found for "{searchQuery}"</p>
      <div className={styles.productNotFound}>
        <div className={styles.notFound}>
          <img
            src={NotFoundImage} // or your actual path
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
      <SectionRelated viewDetail={false} />
    </div>
  );
};
