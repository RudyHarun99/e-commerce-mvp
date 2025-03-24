import React from 'react';
import styles from './Searchbar.module.scss';
import SearchImage from '@/assets/Search.png';

export const Searchbar: React.FC = () => {
  return (
    <div className={styles.searchbar}>
      <img
        src={SearchImage}
        alt="search image"
        className={styles.searchImage}
      />
      <input
        type="text"
        placeholder='Search'
        className={styles.searchInput}
      />
    </div>
  );
};
