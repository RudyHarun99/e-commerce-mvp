import styles from './CardRating.module.scss';
import Star from '@/assets/Star.png';

type CardRatingProps = {
  rating: number;
}

export const CardRating = ({
  rating
}: CardRatingProps) => {
  return (
    <div className={styles.cardRating}>
      <span className={styles.cardRatingStar}>
        <img
          src={Star}
          alt="star icon"
          className={styles.starIcon}
        />
      </span>
      <span className={styles.cardRatingNumber}>
        {rating}
      </span>
    </div>
  );
};