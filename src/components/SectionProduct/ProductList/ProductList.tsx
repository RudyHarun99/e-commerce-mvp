import React from 'react';
import styles from './ProductList.module.scss';
import { z } from 'zod';
import { productSchema } from '@/models/product';
import { Banner, Button, Card } from '@/components';
import { Link } from 'react-router-dom';

type Product = z.infer<typeof productSchema>;

type ProductListProps = {
  searchQuery: string;
  filtered: Product[];
  visibleItemCount: number;
  visibleProducts: Product[];
  viewAll: boolean;
  buttonLoadMore: () => void;
};

export const ProductList: React.FC<ProductListProps> = ({
  searchQuery,
  filtered,
  visibleItemCount,
  visibleProducts,
  viewAll,
  buttonLoadMore,
}) => {
  return (
    <div className={styles.sectionProduct}>
      {viewAll && <Banner />}
      {
        searchQuery
        ?
        <p className={styles.textProductSearch}>
          Search Results for "{searchQuery}"
        </p>
        :
        <p className={styles.textProduct}>Featured Product</p>
      }
      <div className={styles.listProduct}>
        {
          visibleProducts.map(({
            id,
            image,
            title,
            price,
            rating,
          }) => (
            <Link key={id} to={`/detail/${id}`}>
              <Card>
                <Card.Image src={image} alt="product image" />
                <Card.Content>
                  <Card.Title title={title} />
                  <Card.Price price={price} />
                  <Card.Rating rating={rating.rate} />
                </Card.Content>
              </Card>
            </Link>
          ))
        }
      </div>
      {
        visibleItemCount < filtered.length &&
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
