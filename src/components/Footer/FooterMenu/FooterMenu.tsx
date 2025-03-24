import React from 'react';
import styles from './FooterMenu.module.scss';

type FooterMenuProps = {
  title: string;
  menu: string[];
}

export const FooterMenu: React.FC<FooterMenuProps> = ({
  title,
  menu,
}) => {
  return (
    <div className={styles.footerMenu}>
      <div className={styles.title}>{title}</div>
      {
        menu.map((item, index) => (
          <div
            key={index}
            className={styles.menuItem}
          >
            {item}
          </div>
        ))
      }
    </div>
  );
};
