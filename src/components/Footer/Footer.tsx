import React from 'react';
import styles from './Footer.module.scss';
import { FooterContact } from './FooterContact';
import { FooterMenu } from './FooterMenu';

type FooterProps = {
  handleClick: () => void;
};

export const Footer: React.FC<FooterProps> = ({
  handleClick,
}) => {
  const aboutMenu = [
    'About Us',
    'Terms and Condition',
    'Privacy Policy',
    'Blog',
  ];

  const helpMenu = [
    'How to Transact',
    'Payment Method',
    'How to Register',
  ];

  return (
    <div className={styles.footerContainer}>
      <FooterContact handleClick={handleClick} />
      <FooterMenu
        title="E-Commerce"
        menu={aboutMenu}
      />
      <FooterMenu
        title="Help"
        menu={helpMenu}
      />
    </div>
  );
};
