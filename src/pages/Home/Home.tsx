import React from 'react';
import styles from './Home.module.scss';
// import { useGetProducts } from '@/hooks/useGetProducts';
import { Banner } from '@/components/Banner';
import { SectionProduct } from '@/components/SectionProduct';

export const Home: React.FC = () => {
  // const { results, isFetching } = useGetProducts();

  return (
    <>
      <div className={styles.content}>
        <Banner />
        <SectionProduct />
      </div>
      {/* {
        isFetching ?
        <h1>Fetching data...</h1> :
        <pre>{JSON.stringify(results, null, 4)}</pre>
      } */}
    </>
  );
};
