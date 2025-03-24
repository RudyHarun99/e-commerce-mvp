import React from 'react';
import styles from './FooterContact.module.scss';
import { Logo } from '@/components/Logo';
import { Icon } from '@/components/Icon';
import FacebookIcon from '@/assets/Facebook.png';
import InstagramIcon from '@/assets/Instagram.png';
import LinkedinIcon from '@/assets/Linkedin.png';
import TikTokIcon from '@/assets/TikTok.png';

export const FooterContact: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Fusce cursus metus libero posuere sapien. Nulla cras nullam sed interdum orci ac et gravida.
      </div>
      <div className={styles.contact}>
        <div className={styles.title}>
          Follow on Social Media
        </div>
        <div className={styles.listIcon}>
          <Icon src={FacebookIcon} alt='facebook icon' />
          <Icon src={InstagramIcon} alt='instagram icon' />
          <Icon src={LinkedinIcon} alt='linkedin icon' />
          <Icon src={TikTokIcon} alt='tiktok icon' />
        </div>
      </div>
    </div>
  );
};
