import styles from './Image.module.scss';
import clsx from 'clsx';

type ImageProps = {
  src: string;
  alt: string;
  type: string;
  onCLick?: () => void;
}

export const Image = ({
  src,
  alt,
  type,
}: ImageProps) => {
  return (
    <div
      className={clsx(styles.container, styles[type])}
    >
      <img
        src={src}
        alt={alt}
        className={styles.image}
      />
    </div>
  );
};