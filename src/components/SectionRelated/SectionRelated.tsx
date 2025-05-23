import React from 'react';
import styles from './SectionRelated.module.scss';
import { useAppSelector } from '@/services/redux';
import { productSelector } from '@/services/redux/product.selectors';
import { Link } from 'react-router-dom';
import { Card } from '@/components';

type SectionRelatedProps = {
  viewDetail: boolean;
};

export const SectionRelated: React.FC<SectionRelatedProps> = ({
  viewDetail = true,
}) => {
  const products = useAppSelector(productSelector);
  const showData = products.slice(0, 5);
  
  return (
    <div className={styles.sectionRelated}>
      {
        viewDetail
        ?
        <p className={styles.textRelated}>Related Product</p>
        :
        <p className={styles.textRelated}>Recommended Product</p>
      }
      <div className={styles.listRelated}>
        {
          showData.map((product, idx) => {
            return (
              <Link
                key={idx}
                to={`/detail/${product.id}`}
              >
                <Card>
                  <Card.Image
                    src={`${product.image}`}
                    alt='product image'
                  />
                  <Card.Content>
                    <Card.Title title={product.title} />
                    <Card.Price price={product.price} />
                    <Card.Rating rating={product.rating.rate} />
                  </Card.Content>
                </Card>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};
