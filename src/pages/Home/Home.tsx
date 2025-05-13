import React from 'react';
import styles from './Home.module.scss';
// import { Banner, SectionProduct } from '@/components';
import { SectionProduct } from '@/components';

type HomeProps = {
  searchQuery: string;
};

export const Home: React.FC<HomeProps> = ({
  searchQuery,
}) => {
  return (
    <div className={styles.content}>
      {/* <Banner /> */}
      <SectionProduct searchQuery={searchQuery} />
    </div>
  );
};
