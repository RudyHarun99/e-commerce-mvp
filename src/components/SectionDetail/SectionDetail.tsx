import React, { useState } from 'react';
import styles from './SectionDetail.module.scss';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/services/redux';
import { productSelector } from '@/services/redux/product.selectors';
import { Button } from '@/components';

export const SectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useAppSelector(productSelector);
  const product = products.find((product) => product.id === Number(id));
  const { title, image, category, price, rating, description } = product || {};
  const [ quantity, setQuantity ] = useState(0);

  const buttonAddCart = () => {
    console.log('Add to Cart');
  };

  const buttonBuyNow = () => {
    console.log('Buy Now');
  };

  return (
    <div className={styles.detailContainer}>
      <pre>{JSON.stringify(product, null, 4)}</pre>
      <div className={styles.detailPath}>
        <span className={styles.home}>Home</span>
        {' > '}
        <span className={styles.detail}>Detail</span>
        {' > '}
        {title}
      </div>
      <div className={styles.detailInfo}>
        <div className={styles.detailImageContainer}>
          <img
            src={image}
            alt="product image"
            className={styles.detailImage}
          />
        </div>
        <div className={styles.detailContent}>
          <div className={styles.detailHeader}>
            <div>{category}</div>
            <div>{title}</div>
            <div>${price}</div>
            <div>{`${rating?.rate} (${rating?.count})`}</div>
          </div>
          <div className={styles.description}>
            <p>Description</p>
            <p>{description}</p>
          </div>
          <div className={styles.detailFooter}>
            <p>Quantity</p>
            <div>
              <div
                onClick={() => setQuantity(prevQuantity => prevQuantity - 1)}
              >
                -
              </div>
              <span>{quantity}</span>
              <div
                onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
              >
                +
              </div>
            </div>
            <div>
              <Button
                type='secondary'
                onClick={buttonAddCart}
              >
                Add to Cart
              </Button>
              <Button
                type='primary'
                onClick={buttonBuyNow}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
