import styles from './CardImage.module.scss';

type CardImageProps = {
  src: string;
  alt: string;
}

export const CardImage = ({
  src,
  alt
}: CardImageProps) => {
  return (
    <div
      className={styles.cardImageContainer}
    >
      <img
        src={src}
        alt={alt}
        className={styles.cardImage}
      />
    </div>
  );
};