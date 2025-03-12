import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productSelector } from '@/services/redux/product.selectors';

export const Detail: React.FC = () => {
  const { id } = useParams();
  const { products } = useSelector(productSelector);
  const [ product ] = products.filter(el => el.id === Number(id));

  return (
    <div>
      Detail Product {id} Page
      <pre>{JSON.stringify(product, null, 4)}</pre>
    </div>
  );
};
