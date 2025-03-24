import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
  type: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(styles.btn, styles[type])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
