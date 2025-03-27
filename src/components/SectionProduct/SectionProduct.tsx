import React, { useState } from 'react';
import styles from './SectionProduct.module.scss';
import { useAppSelector } from '@/services/redux';
import {
  productSelector,
  isFetchingSelector,
} from '@/services/redux/product.selectors';
import { Card, Button } from '@/components';
import { Link } from 'react-router-dom';

export const SectionProduct: React.FC = () => {
  const { products } = useAppSelector(productSelector);
  const isFetching = useAppSelector(isFetchingSelector);
  const [ visibleItemCount, setVisibleItemCount ] = useState(15);
  const showData = products.slice(0, visibleItemCount);

  const buttonLoadMore = () => {
    setVisibleItemCount(prevCount => prevCount + 15);
  };

  return (
    <div className={styles.sectionProduct}>
      <p className={styles.textProduct}>Featured Product</p>
      {
        isFetching ?
        <h1>Fetching data...</h1> :
        <div className={styles.listProduct}>
          {
            showData.map(product => {
              return (
                <Link
                  key={product.id}
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
      }
      {
        showData.length < products.length &&
        <div className={styles.footerProduct}>
          <Button
            type='secondary'
            onClick={buttonLoadMore}
          >
            Load More
          </Button>
        </div>
      }
    </div>
  );
};
