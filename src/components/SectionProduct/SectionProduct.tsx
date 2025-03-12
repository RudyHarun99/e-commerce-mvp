import React from 'react';
import styles from './SectionProduct.module.scss';
import { useGetProducts } from '@/hooks/useGetProducts';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Link } from 'react-router-dom';

export const SectionProduct: React.FC = () => {
  const { results, isFetching } = useGetProducts();
  const showData = results.slice(0, 15);

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
      <div className={styles.footerProduct}>
        <Button />
      </div>
    </div>
  );
};
