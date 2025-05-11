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
  const products = useAppSelector(productSelector);
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
              const { id, image, title, price, rating } = product;

              return (
                <Link
                  key={id}
                  to={`/detail/${id}`}
                >
                  <Card>
                    <Card.Image
                      src={`${image}`}
                      alt='product image'
                    />
                    <Card.Content>
                      <Card.Title title={title} />
                      <Card.Price price={price} />
                      <Card.Rating rating={rating.rate} />
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
            variant='large'
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
