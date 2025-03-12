import React from 'react';
import styles from './Card.module.scss';
import { CardImage } from './CardImage';
import { CardContent } from './CardContent';
import { CardTitle } from './CardContent/CardTitle';
import { CardPrice } from './CardContent/CardPrice';
import { CardRating } from './CardContent/CardRating';

type CardProps = {
  children: React.ReactNode;
}

type SubComponents = {
  Image: typeof CardImage;
  Content: typeof CardContent;
  Title: typeof CardTitle;
  Price: typeof CardPrice;
  Rating: typeof CardRating;
}

export const Card: React.FC<CardProps> & SubComponents = ({
  children
}) => {
  return <div className={styles.card}>{children}</div>;
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Price = CardPrice;
Card.Rating = CardRating;