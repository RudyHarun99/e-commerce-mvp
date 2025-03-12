import styles from './CardTitle.module.scss';

type CardTitleProps = {
  title: string;
}

export const CardTitle = ({ title }: CardTitleProps) => {
  return <p className={styles.cardTitle}>{title}</p>;
};