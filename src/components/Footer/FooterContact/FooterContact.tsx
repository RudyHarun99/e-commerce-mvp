import React from 'react';
import styles from './FooterContact.module.scss';
import { Logo, Icon } from '@/components';
import FacebookIcon from '@/assets/Facebook.png';
import InstagramIcon from '@/assets/Instagram.png';
import LinkedinIcon from '@/assets/Linkedin.png';
import TikTokIcon from '@/assets/TikTok.png';

type FooterContactProps = {
  handleClick: () => void;
};

export const FooterContact: React.FC<FooterContactProps> = ({
  handleClick,
}) => {
  return (
    <div className={styles.container}>
      <Logo handleClick={handleClick} />
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Fusce cursus metus libero posuere sapien. Nulla cras nullam sed interdum orci ac et gravida.
      </div>
      <div className={styles.contact}>
        <div className={styles.title}>
          Follow on Social Media
        </div>
        <div className={styles.listIcon}>
          <Icon
            src={FacebookIcon}
            alt='facebook icon'
            type='facebook'
          />
          <Icon
            src={InstagramIcon}
            alt='instagram icon'
            type='instagram'
          />
          <Icon
            src={LinkedinIcon}
            alt='linkedin icon'
            type='linkedin'
          />
          <Icon
            src={TikTokIcon}
            alt='tiktok icon'
            type='tiktok'
          />
        </div>
      </div>
    </div>
  );
};
