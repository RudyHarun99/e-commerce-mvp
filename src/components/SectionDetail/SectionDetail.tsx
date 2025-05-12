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
import Star from '@/assets/Star.png';

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
  const MIN_VALUE = 0;
  const [ quantity, setQuantity ] = useState(MIN_VALUE);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(
    prev => (prev > MIN_VALUE ? prev - 1 : MIN_VALUE)
  );

  const buttonAddCart = () => {
    console.log('buttonAddCart'); 
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
                <div className={styles.detailCat}>
                  {category}
                </div>
                <div className={styles.detailTitle}>
                  {title}
                </div>
                <div className={styles.detailPrice}>
                  ${price}
                </div>
                <div className={styles.detailRate}>
                  <span className={styles.ratingStar}>
                    <img
                      src={Star}
                      alt="star icon"
                      className={styles.starIcon}
                    />
                  </span>
                  <span className={styles.rate}>
                    {rating?.rate}
                  </span>
                  <span className={styles.count}>
                    ({rating?.count})
                  </span>
                </div>
              </div>
              <div className={styles.description}>
                <p className={styles.descTitle}>
                  Description
                </p>
                <p className={styles.descContent}>
                  {description}
                </p>
              </div>
              <div className={styles.detailFooter}>
                <div className={styles.detailQuantity}>
                  <p>Quantity</p>
                  <div className={styles.quantityButton}>
                    <div
                      onClick={decrement}
                      className={styles.quantButton}
                    >
                      -
                    </div>
                    <span className={styles.quantNum}>
                      {quantity}
                    </span>
                    <div
                      onClick={increment}
                      className={styles.quantButton}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className={styles.detailButton}>
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
