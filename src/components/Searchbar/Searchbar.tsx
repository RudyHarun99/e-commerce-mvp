import React from 'react';
import styles from './Searchbar.module.scss';
import SearchImage from '@/assets/Search.png';

type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChange: (query: string) => void;
};

export const Searchbar: React.FC<SearchInputProps> = ({
  value,
  placeholder = "Search",
  onChange
}) => {
  return (
    <div className={styles.searchbar}>
      <img
        src={SearchImage}
        alt="search image"
        className={styles.searchImage}
      />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
        onChange={(e) => onChange(e.target.value)}
        name='product'
        value={value}
      />
    </div>
  );
};
