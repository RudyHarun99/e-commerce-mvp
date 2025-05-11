import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
  variant: 'small' | 'large';
  type: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  type,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(styles.btn, styles[type], styles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
