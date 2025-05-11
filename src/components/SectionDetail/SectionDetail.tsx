import React, { useState } from 'react';
import styles from './SectionDetail.module.scss';
import { useGetProductDetail } from '@/hooks';
import { useAppSelector } from '@/services/redux';
import {
  productDetailSelector,
  isFetchingSelector,
} from '@/services/redux/product.selectors';
import DefaultImage from '@/assets/DefaultImage.png';
import { Button } from '@/components';

export const SectionDetail: React.FC = () => {
  useGetProductDetail();
  const product = useAppSelector(productDetailSelector);
  const isFetching = useAppSelector(isFetchingSelector);
  const {
    title,
    image,
    category,
    price,
    rating,
    description
  } = product || {};
  const [ quantity, setQuantity ] = useState(0);

  const buttonAddCart = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const buttonBuyNow = () => {
    console.log('Buy Now');
  };

  return (
    <div className={styles.detailContainer}>
      {/* <pre>{JSON.stringify(product, null, 4)}</pre> */}
      {
        isFetching ?
        <h1>Fetching data...</h1> :
        <>
          <div className={styles.detailPath}>
            <span className={styles.home}>Home</span>
            <span className={styles.arrow}>{' > '}</span>
            <span className={styles.detail}>Detail</span>
            <span className={styles.arrow}>{' > '}</span>
            <span className={styles.title}>{title}</span>
          </div>
          <div className={styles.detailInfo}>
            <div className={styles.detailImageContainer}>
              <img
                src={image || DefaultImage}
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
                    variant='large'
                    type='secondary'
                    onClick={buttonAddCart}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant='large'
                    type='primary'
                    onClick={buttonBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
};
