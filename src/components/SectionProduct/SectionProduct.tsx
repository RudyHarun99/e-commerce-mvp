import React, { useState } from 'react';
import { useAppSelector } from '@/services/redux';
import {
  productSelector,
  isFetchingSelector,
} from '@/services/redux/product.selectors';
import { ProductList } from './ProductList';
import { ProductNotFound } from './ProductNotFound';

type SectionProductProps = {
  searchQueryByTitle: string;
  searchQueryByCategory: string;
};

export const SectionProduct: React.FC<SectionProductProps> = ({
  searchQueryByTitle,
  searchQueryByCategory,
}) => {
  const products = useAppSelector(productSelector);
  const isFetching = useAppSelector(isFetchingSelector);
  const [ visibleItemCount, setVisibleItemCount ] = useState(15);
  
  const filterProducts = () => {
    if (searchQueryByTitle) {
      const lower = searchQueryByTitle.toLowerCase();
      return products.filter((product) =>
        product.title.toLowerCase().includes(lower)
      );
    };

    if (searchQueryByCategory) {
      return products.filter((product) =>
        product.category === searchQueryByCategory
      );
    };

    return products;
  }

  const filtered = filterProducts();
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
                searchQuery={ searchQueryByTitle || searchQueryByCategory }
                filtered={filtered}
                visibleItemCount={visibleItemCount}
                visibleProducts={visibleProducts}
                viewAll={
                  searchQueryByTitle || searchQueryByCategory ?
                  false :
                  true
                }
                buttonLoadMore={buttonLoadMore}
              />
            ) : (
              <ProductNotFound searchQuery={searchQueryByTitle} />
            )
          }
        </>
      }
    </>
  );
};
