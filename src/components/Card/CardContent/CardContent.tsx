import React from 'react';
import styles from './CardContent.module.scss';
import { CardTitle } from './CardTitle';
import { CardPrice } from './CardPrice';
import { CardRating } from './CardRating';

type CardContentProps = {
  children: React.ReactNode;
}

type SubComponents = {
  Title: typeof CardTitle;
  Price: typeof CardPrice;
  Rating: typeof CardRating;
}

export const CardContent: React.FC<CardContentProps> &
SubComponents = ({
  children
}) => {
  return <div className={styles.cardContent}>{children}</div>;
};

CardContent.Title = CardTitle;
CardContent.Price = CardPrice;
CardContent.Rating = CardRating;