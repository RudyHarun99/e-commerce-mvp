import React from 'react';
import styles from './Icon.module.scss';

type IconProps = {
  src: string;
  alt: string;
  type: 'facebook' | 'instagram' | 'linkedin' | 'tiktok';
}

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  type,
}) => {
  return (
    <div className={styles.iconContainer}>
      <img
        src={src}
        alt={alt}
        className={styles[type]}
      />
    </div>
  );
};
