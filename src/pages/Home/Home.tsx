import React from 'react';
import { useGetProducts } from '@/hooks/useGetProducts';

export const Home: React.FC = () => {
  const { results, isFetching } = useGetProducts();

  return (
    <>
      <div>Home Page</div>
      {
        isFetching ?
        <h1>Fetching data...</h1> :
        <pre>{JSON.stringify(results, null, 4)}</pre>
      }
    </>
  );
};
