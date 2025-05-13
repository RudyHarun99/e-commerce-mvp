import React, { useState } from 'react';
// import styles from './SectionProduct.module.scss';
import { useAppSelector } from '@/services/redux';
import {
  productSelector,
  isFetchingSelector,
} from '@/services/redux/product.selectors';
import { ProductList } from './ProductList';
import { ProductNotFound } from './ProductNotFound';

type SectionProductProps = {
  searchQuery: string;
};

export const SectionProduct: React.FC<SectionProductProps> = ({
  searchQuery,
}) => {
  const products = useAppSelector(productSelector);
  const isFetching = useAppSelector(isFetchingSelector);
  const [ visibleItemCount, setVisibleItemCount ] = useState(15);
  const lower = searchQuery.toLowerCase();
  const filtered = searchQuery ?
    products.filter((product) =>
        product.title.toLowerCase().includes(lower)
    ) :
    products;
  const visibleProducts = filtered.slice(0, visibleItemCount);

  const buttonLoadMore = () => {
    setVisibleItemCount(prevCount => prevCount + 15);
  };

  return (
    <>
      {
        isFetching ?
        <h1>Fetching data...</h1> :
        <>
          {
            visibleProducts.length > 0 ? (
              <ProductList
                searchQuery={searchQuery}
                filtered={filtered}
                visibleItemCount={visibleItemCount}
                visibleProducts={visibleProducts}
                viewAll={ searchQuery ? false : true }
                buttonLoadMore={buttonLoadMore}
              />
            ) : (
              <ProductNotFound searchQuery={searchQuery} />
            )
          }
        </>
      }
    </>
  );
};
