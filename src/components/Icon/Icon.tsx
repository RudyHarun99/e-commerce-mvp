import React from 'react';
import styles from './Icon.module.scss';

type IconProps = {
  src: string;
  alt: string;
}

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.icon}
    />
  );
};
