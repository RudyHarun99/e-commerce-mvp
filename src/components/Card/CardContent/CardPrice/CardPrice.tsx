import styles from './CardPrice.module.scss';

type CardPriceProps = {
  price: number;
}

export const CardPrice = ({ price }: CardPriceProps) => {
  return <p className={styles.cardPrice}>{`$ ${price}`}</p>;
};