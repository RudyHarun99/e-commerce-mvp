import React, { useState } from 'react';
import styles from './CategoryList.module.scss';
import GridImage from '@/assets/Grid.png';
import { useAppSelector } from '@/services/redux';
import { categoriesSelector } from '@/services/redux/product.selectors';

type CategoryListProps = {
  setSearchQueryByCategory: (query: string) => void;
};

export const CategoryList: React.FC<CategoryListProps> = ({
  setSearchQueryByCategory,
}) => {
  const [ open, setOpen ] = useState(false);
  const categories = useAppSelector(categoriesSelector);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickItem = (item: string) => {
    setSearchQueryByCategory(item);
    setOpen(false);
  };

  return (
    <>
      <div
        className={styles.categoryList}
        onClick={handleClick}
      >
        <div className={styles.grid}>
          <img
            src={GridImage}
            alt="grid category"
            className={styles.gridImage}
          />
        </div>
        <p className={styles.categoryText}>Category</p>
      </div>
      <div className={styles.dropdownContainer}>
        {
          open && (
            <ul className={styles.dropdownList}>
              {
                categories.map((item, idx) => (
                  <li
                    key={idx}
                    className={styles.itemList}
                    onClick={() => handleClickItem(item)}
                  >
                    {item}
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </>
  );
};
